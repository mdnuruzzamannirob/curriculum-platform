"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";

function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/mdnuruzzamannirob/curriculum-platform")
      .then((r) => r.json())
      .then((d) => {
        if (typeof d?.stargazers_count === "number") {
          setStars(d.stargazers_count);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <Link
      href="https://github.com/mdnuruzzamannirob/curriculum-platform"
      target="_blank"
      rel="noopener noreferrer"
      className="h-9 lg:h-10 items-center transition duration-100 gap-2 rounded-xl border border-border bg-card px-2 lg:px-3 text-xs font-medium hover:text-card-foreground text-muted-foreground hover:bg-card-hover inline-flex"
      aria-label="GitHub repository"
    >
      <FaGithub className="size-4 lg:size-4.5 shrink-0" />
      {stars !== null && (
        <span>{stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars}</span>
      )}
    </Link>
  );
}

export default GitHubStars;
