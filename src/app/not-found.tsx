import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 text-center">
      <p className="text-[7rem] font-black leading-none tracking-tighter text-border sm:text-[10rem]">
        404
      </p>

      <h1 className="mt-2 text-2xl font-black text-foreground sm:text-3xl">
        Page not found
      </h1>

      <p className="mt-3 max-w-sm text-sm text-subtle">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Check the URL or head back home.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
        <Link
          href="/course"
          className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-card-foreground hover:bg-card-hover"
        >
          <Search className="h-4 w-4" />
          Browse courses
        </Link>
      </div>
    </div>
  );
}
