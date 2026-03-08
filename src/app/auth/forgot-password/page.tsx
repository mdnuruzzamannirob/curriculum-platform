"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import BrandLogo from "@/components/BrandLogo";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { forgotPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [demoOtp, setDemoOtp] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setDemoOtp("");
    setLoading(true);
    const result = await forgotPassword(email);
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else if (result.otp) {
      setDemoOtp(result.otp);
    }
  }

  function handleContinue() {
    router.push(
      `/auth/verify-otp?email=${encodeURIComponent(email.toLowerCase().trim())}`,
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <BrandLogo />
          <h1 className="mt-6 text-2xl font-black text-foreground">
            Forgot password?
          </h1>
          <p className="mt-1 text-sm text-subtle">
            We&apos;ll send a one-time code to your email
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          {error && (
            <div className="mb-4 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {demoOtp ? (
            <div className="space-y-4">
              <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                  Demo mode
                </p>
                <p className="mt-1 text-sm text-foreground">
                  Your one-time code is:{" "}
                  <span className="font-black tracking-[0.2em] text-amber-500">
                    {demoOtp}
                  </span>
                </p>
                <p className="mt-1 text-xs text-subtle">
                  In production this would be sent to your email. Valid for 10
                  minutes.
                </p>
              </div>

              <button
                type="button"
                onClick={handleContinue}
                className="h-11 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Continue to verification →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-foreground">
                  Email address
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground outline-none placeholder:text-faint focus:border-border-strong"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="h-11 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send code"}
              </button>
            </form>
          )}
        </div>

        <div className="mt-5 flex items-center justify-center gap-1.5">
          <ArrowLeft className="h-3.5 w-3.5 text-subtle" />
          <Link
            href="/auth/login"
            className="text-sm text-subtle hover:text-foreground"
          >
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
