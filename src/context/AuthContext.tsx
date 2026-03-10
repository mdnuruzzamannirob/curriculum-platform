"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

const AUTH_KEY = "lp-auth-user";
const OTP_KEY = "lp-auth-otp";
const USERS_KEY = "lp-users";
const AUTH_CHANGE_EVENT = "lp-auth-change";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  provider?: "local" | "google" | "github";
}

interface StoredUser {
  id: string;
  email: string;
  name: string;
  password: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  isLoaded: boolean;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  register: (
    name: string,
    email: string,
    password: string,
  ) => Promise<{ error?: string }>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<{ otp?: string; error?: string }>;
  verifyOTP: (email: string, otp: string) => Promise<{ error?: string }>;
  resetPassword: (
    email: string,
    newPassword: string,
  ) => Promise<{ error?: string }>;
  socialLogin: (provider: "google" | "github") => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isLoaded: false,
  login: async () => ({}),
  register: async () => ({}),
  logout: () => {},
  forgotPassword: async () => ({}),
  verifyOTP: async () => ({}),
  resetPassword: async () => ({}),
  socialLogin: async () => {},
});

function readUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeUser(u: AuthUser | null) {
  if (u) localStorage.setItem(AUTH_KEY, JSON.stringify(u));
  else localStorage.removeItem(AUTH_KEY);

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
  }
}

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setUser(readUser());
    setIsLoaded(true);

    const sync = () => setUser(readUser());
    const handleStorage = (event: StorageEvent) => {
      if (event.key === AUTH_KEY || event.key === null) {
        sync();
      }
    };

    window.addEventListener(AUTH_CHANGE_EVENT, sync);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener(AUTH_CHANGE_EVENT, sync);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const users = readUsers();
    const found = users.find((u) => u.email === email.toLowerCase().trim());
    if (!found) return { error: "No account found with this email." };
    if (found.password !== password) return { error: "Incorrect password." };
    const authUser: AuthUser = {
      id: found.id,
      name: found.name,
      email: found.email,
      provider: "local",
    };
    writeUser(authUser);
    setUser(authUser);
    return {};
  }, []);

  const register = useCallback(
    async (name: string, email: string, password: string) => {
      const users = readUsers();
      if (users.find((u) => u.email === email.toLowerCase().trim()))
        return { error: "An account with this email already exists." };
      const newUser: StoredUser = {
        id: crypto.randomUUID(),
        email: email.toLowerCase().trim(),
        name: name.trim(),
        password,
      };
      writeUsers([...users, newUser]);
      const authUser: AuthUser = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        provider: "local",
      };
      writeUser(authUser);
      setUser(authUser);
      return {};
    },
    [],
  );

  const logout = useCallback(() => {
    writeUser(null);
    setUser(null);
  }, []);

  const forgotPassword = useCallback(async (email: string) => {
    const users = readUsers();
    if (!users.find((u) => u.email === email.toLowerCase().trim()))
      return { error: "No account found with this email." };
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    localStorage.setItem(
      OTP_KEY,
      JSON.stringify({
        email: email.toLowerCase().trim(),
        otp,
        exp: Date.now() + 10 * 60 * 1000,
      }),
    );
    return { otp };
  }, []);

  const verifyOTP = useCallback(async (email: string, otp: string) => {
    try {
      const raw = localStorage.getItem(OTP_KEY);
      if (!raw) return { error: "No OTP found. Please request again." };
      const stored = JSON.parse(raw);
      if (stored.email !== email.toLowerCase().trim())
        return { error: "Email mismatch." };
      if (stored.otp !== otp.trim()) return { error: "Incorrect OTP." };
      if (Date.now() > stored.exp)
        return { error: "OTP has expired. Please request again." };
      return {};
    } catch {
      return { error: "Invalid OTP session." };
    }
  }, []);

  const resetPassword = useCallback(
    async (email: string, newPassword: string) => {
      const users = readUsers();
      const idx = users.findIndex(
        (u) => u.email === email.toLowerCase().trim(),
      );
      if (idx === -1) return { error: "Account not found." };
      users[idx].password = newPassword;
      writeUsers(users);
      localStorage.removeItem(OTP_KEY);
      return {};
    },
    [],
  );

  const socialLogin = useCallback(async (provider: "google" | "github") => {
    const email =
      provider === "google"
        ? "demo.google@example.com"
        : "demo.github@example.com";
    const name = provider === "google" ? "Google User" : "GitHub User";
    const users = readUsers();
    let found = users.find((u) => u.email === email);
    if (!found) {
      found = { id: crypto.randomUUID(), email, name, password: "" };
      writeUsers([...users, found]);
    }
    const authUser: AuthUser = {
      id: found.id,
      name: found.name,
      email: found.email,
      provider,
    };
    writeUser(authUser);
    setUser(authUser);
  }, []);

  return (
    <AuthContext
      value={{
        user,
        isLoaded,
        login,
        register,
        logout,
        forgotPassword,
        verifyOTP,
        resetPassword,
        socialLogin,
      }}
    >
      {children}
    </AuthContext>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
