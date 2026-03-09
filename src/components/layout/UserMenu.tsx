"use client";

import { useAuth } from "@/context/AuthContext";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function UserMenu() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!user) return null;

  const initials = user.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  function handleLogout() {
    logout();
    setOpen(false);
    router.push("/");
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex size-9 lg:size-10 items-center gap-2 rounded-full border border-border bg-card text-muted-foreground hover:text-card-foreground hover:bg-card-hover"
        aria-expanded={open}
        aria-label="User menu"
      >
        <span className="flex size-full shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          {initials}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 min-w-48 rounded-xl border border-border bg-popover p-1 shadow-xl">
          <div className="border-b border-border px-3 py-2.5">
            <p className="text-xs font-semibold text-popover-foreground">
              {user.name}
            </p>
            <p className="truncate text-xs text-faint">{user.email}</p>
          </div>
          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-2.5 rounded px-3 py-2 text-xs font-medium text-popover-foreground hover:bg-card-hover"
          >
            <User className="h-3.5 w-3.5" />
            Dashboard
          </Link>
          <Link
            href="/account"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 rounded px-3 py-2 text-xs font-medium text-popover-foreground hover:bg-card-hover"
          >
            <Settings className="h-3.5 w-3.5" />
            Account settings
          </Link>
          <div className="my-1 border-t border-border" />
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 rounded px-3 py-2 text-xs font-medium text-destructive hover:bg-destructive/10"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
