"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import BrandLogo from "@/components/BrandLogo";

function VerifyOTPForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const { verifyOTP } = useAuth();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (otp.trim().length !== 6) {
      setError("Please enter the 6-digit code.");
      return;
    }
    setLoading(true);
    const result = await verifyOTP(email, otp);
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      router.push(
        `/auth/reset-password?email=${encodeURIComponent(email)}`,
      );
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <BrandLogo />
          <h1 className="mt-6 text-2xl font-black text-foreground">
            Enter your code
          </h1>
          <p className="mt-1 text-sm text-subtle">
            Enter the 6-digit code sent to{" "}
            <span className="font-medium text-foreground">{email || "your email"}</span>
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          {error && (
            <div className="mb-4 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-foreground">
                One-time code
              </label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                required
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                placeholder="123456"
                className="h-14 w-full rounded-xl border border-input bg-background px-4 text-center text-xl font-black tracking-[0.4em] text-foreground outline-none placeholder:text-faint placeholder:tracking-normal focus:border-border-strong"
              />
            </div>

            <button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="h-11 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Verifying…" : "Verify code"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link
              href={`/auth/forgot-password`}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Didn&apos;t receive a code? Resend
            </Link>
          </div>
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

export default function VerifyOTPPage() {
  return (
    <Suspense>
      <VerifyOTPForm />
    </Suspense>
  );
}
