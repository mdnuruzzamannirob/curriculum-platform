"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogOut, Save, ShieldCheck, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import { cn } from "@/lib/utils";

const USERS_KEY = "lp-users";
const AUTH_KEY = "lp-auth-user";

interface StoredUser {
  id: string;
  email: string;
  name: string;
  password: string;
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

export default function AccountPage() {
  const { user, logout, isLoaded } = useAuth();
  const router = useRouter();

  const [tab, setTab] = useState<"profile" | "security">("profile");

  // Profile form
  const [name, setName] = useState("");
  const [profileSuccess, setProfileSuccess] = useState("");
  const [profileError, setProfileError] = useState("");
  const [profileLoading, setProfileLoading] = useState(false);

  // Password form
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);

  useEffect(() => {
    if (isLoaded && !user) {
      router.replace("/auth/login");
    }
  }, [isLoaded, user, router]);

  useEffect(() => {
    if (user) setName(user.name);
  }, [user]);

  if (!isLoaded || !user) return null;

  const isLocal = !user.provider || user.provider === "local";

  function handleSaveName(e: React.FormEvent) {
    e.preventDefault();
    setProfileError("");
    setProfileSuccess("");
    const trimmed = name.trim();
    if (!trimmed) {
      setProfileError("Name cannot be empty.");
      return;
    }
    setProfileLoading(true);

    const users = readUsers();
    const idx = users.findIndex((u) => u.id === user!.id);
    if (idx !== -1) {
      users[idx].name = trimmed;
      writeUsers(users);
    }
    // Update cached auth user
    const authRaw = localStorage.getItem(AUTH_KEY);
    if (authRaw) {
      const authUser = JSON.parse(authRaw);
      authUser.name = trimmed;
      localStorage.setItem(AUTH_KEY, JSON.stringify(authUser));
      window.dispatchEvent(new Event("lp-auth-change"));
    }

    setProfileLoading(false);
    setProfileSuccess("Name updated successfully.");
    setTimeout(() => setProfileSuccess(""), 3000);
  }

  function handleChangePassword(e: React.FormEvent) {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");

    const users = readUsers();
    const storedUser = users.find((u) => u.id === user!.id);
    if (!storedUser) {
      setPasswordError("Account not found.");
      return;
    }
    if (storedUser.password !== currentPassword) {
      setPasswordError("Current password is incorrect.");
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    setPasswordLoading(true);
    const idx = users.findIndex((u) => u.id === user!.id);
    users[idx].password = newPassword;
    writeUsers(users);
    setPasswordLoading(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordSuccess("Password updated successfully.");
    setTimeout(() => setPasswordSuccess(""), 3000);
  }

  function handleLogout() {
    logout();
    router.push("/");
  }

  const initials = user.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const PROVIDER_LABEL: Record<string, string> = {
    local: "Email & Password",
    google: "Google",
    github: "GitHub",
  };

  return (
    <div className="app-container space-y-6 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Dashboard", href: "/dashboard" },
          { label: "Account" },
        ]}
      />

      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-xl font-black text-primary-foreground">
          {initials}
        </span>
        <div>
          <h1 className="text-2xl font-black text-foreground">{user.name}</h1>
          <p className="text-sm text-subtle">{user.email}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-xl border border-border bg-card p-1 w-fit">
        {(["profile", "security"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium capitalize",
              tab === t
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t === "profile" ? (
              <User className="h-3.5 w-3.5" />
            ) : (
              <ShieldCheck className="h-3.5 w-3.5" />
            )}
            {t === "profile" ? "Profile" : "Security"}
          </button>
        ))}
      </div>

      {/* Profile tab */}
      {tab === "profile" && (
        <div className="space-y-5 max-w-lg">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold text-foreground mb-4">
              Profile information
            </h2>

            <form onSubmit={handleSaveName} className="space-y-4">
              {profileError && (
                <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-sm text-destructive">
                  {profileError}
                </p>
              )}
              {profileSuccess && (
                <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm text-emerald-600 dark:text-emerald-400">
                  {profileSuccess}
                </p>
              )}

              <div>
                <label className="mb-1.5 block text-xs font-medium text-foreground">
                  Full name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground outline-none placeholder:text-faint focus:border-border-strong"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-foreground">
                  Email address
                </label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="h-11 w-full rounded-xl border border-input bg-muted px-3 text-sm text-muted-foreground outline-none cursor-not-allowed"
                />
                <p className="mt-1 text-xs text-faint">
                  Email cannot be changed.
                </p>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-foreground">
                  Sign-in method
                </label>
                <div className="h-11 flex items-center rounded-xl border border-input bg-muted px-3 text-sm text-muted-foreground">
                  {PROVIDER_LABEL[user.provider ?? "local"]}
                </div>
              </div>

              <button
                type="submit"
                disabled={profileLoading}
                className="flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
              >
                <Save className="h-3.5 w-3.5" />
                {profileLoading ? "Saving…" : "Save changes"}
              </button>
            </form>
          </div>

          {/* Danger zone */}
          <div className="rounded-2xl border border-destructive/30 bg-card p-6">
            <h2 className="text-sm font-semibold text-foreground mb-1">
              Sign out
            </h2>
            <p className="text-xs text-subtle mb-4">
              You can sign back in at any time. Your progress is saved locally.
            </p>
            <button
              type="button"
              onClick={handleLogout}
              className="flex h-10 items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-5 text-sm font-medium text-destructive hover:bg-destructive/20"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign out
            </button>
          </div>
        </div>
      )}

      {/* Security tab */}
      {tab === "security" && (
        <div className="max-w-lg">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold text-foreground mb-4">
              Change password
            </h2>

            {!isLocal ? (
              <p className="text-sm text-subtle">
                You signed in with{" "}
                <span className="font-medium text-foreground capitalize">
                  {user.provider}
                </span>
                . Password management is handled by your provider.
              </p>
            ) : (
              <form onSubmit={handleChangePassword} className="space-y-4">
                {passwordError && (
                  <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-sm text-destructive">
                    {passwordError}
                  </p>
                )}
                {passwordSuccess && (
                  <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm text-emerald-600 dark:text-emerald-400">
                    {passwordSuccess}
                  </p>
                )}

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">
                    Current password
                  </label>
                  <div className="relative">
                    <input
                      type={showCurrent ? "text" : "password"}
                      required
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="••••••••"
                      className="h-11 w-full rounded-xl border border-input bg-background px-3 pr-10 text-sm text-foreground outline-none placeholder:text-faint focus:border-border-strong"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrent(!showCurrent)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-faint hover:text-foreground"
                    >
                      {showCurrent ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">
                    New password
                  </label>
                  <div className="relative">
                    <input
                      type={showNew ? "text" : "password"}
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Min. 8 characters"
                      className="h-11 w-full rounded-xl border border-input bg-background px-3 pr-10 text-sm text-foreground outline-none placeholder:text-faint focus:border-border-strong"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNew(!showNew)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-faint hover:text-foreground"
                    >
                      {showNew ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">
                    Confirm new password
                  </label>
                  <input
                    type={showNew ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground outline-none placeholder:text-faint focus:border-border-strong"
                  />
                </div>

                <button
                  type="submit"
                  disabled={passwordLoading}
                  className="flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {passwordLoading ? "Saving…" : "Update password"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
