import { Level } from "@/types";

export const l5Level: Level = {
  id: "mastery",
  title: "Node.js Mastery",
  description: "Principal / Lead",
  color: "#34d399",
  modules: [
    // ── Node.js ──────────────────────────────────────────
    {
      id: "nodejs",
      title: "Node.js",
      icon: "route",
      color: "#68a063",
      description: "Node.js internals, performance, and ecosystem mastery.",
      topics: [
        {
          id: "v8-internals",
          title: "V8 JavaScript Engine Internals",
          description: "Deep dive into the V8 engine powering Node.js.",
          subtopics: [
            {
              id: "v8-architecture",
              title: "V8 architecture — Ignition interpreter, TurboFan JIT",
            },
            {
              id: "jit-compilation",
              title:
                "JIT compilation — tiers (interpreter → optimizing compiler)",
            },
            {
              id: "hidden-classes",
              title: "Hidden classes (shapes) — object layout optimization",
            },
            {
              id: "inline-caches",
              title: "Inline Caches (IC) — monomorphic vs polymorphic",
            },
            {
              id: "deoptimization",
              title: "Deoptimization — causes and --trace-deopt",
            },
            {
              id: "gc-phases",
              title:
                "Garbage Collection — Scavenger (minor), Mark-Sweep-Compact (major)",
            },
            {
              id: "generational-gc",
              title: "Generational GC — young/old generation",
            },
            {
              id: "gc-orinoco",
              title: "Orinoco — incremental & concurrent GC",
            },
            {
              id: "memory-layout",
              title: "V8 memory layout — heap segments, stack, native heap",
            },
            {
              id: "v8-flags",
              title: "V8 flags — --trace-opt, --trace-deopt, --expose-gc",
            },
          ],
        },
        {
          id: "libuv-internals",
          title: "libuv Internals",
          description: "The async I/O library underneath Node.js.",
          subtopics: [
            {
              id: "libuv-architecture",
              title: "libuv architecture — handles, requests, event loop",
            },
            {
              id: "libuv-event-loop",
              title: "libuv event loop stages (C implementation)",
            },
            {
              id: "thread-pool",
              title: "Thread pool — UV_THREADPOOL_SIZE, default size (4)",
            },
            {
              id: "io-operations-libuv",
              title: "Which operations use the thread pool (fs, dns, crypto)",
            },
            {
              id: "epoll-kqueue-iocp",
              title:
                "I/O backends: epoll (Linux), kqueue (macOS), IOCP (Windows)",
            },
            { id: "handles-requests", title: "Handles vs Requests in libuv" },
            {
              id: "async-io-watcher",
              title: "I/O watchers and poll mechanism",
            },
          ],
        },
        {
          id: "v8-optimization-tips",
          title: "V8 Optimization Tips",
          description: "Writing code V8 can optimize well.",
          subtopics: [
            {
              id: "monomorphic-dispatch",
              title: "Monomorphic function calls — avoid mixed types",
            },
            {
              id: "stable-shapes",
              title:
                "Stable object shapes — initialize all properties in constructor",
            },
            {
              id: "avoid-deletions",
              title: "Avoid delete — invalidates hidden class",
            },
            {
              id: "array-types",
              title: "Typed arrays vs mixed arrays — PACKED vs HOLEY elements",
            },
            {
              id: "function-inlining",
              title: "Function inlining — keep hot functions small",
            },
            {
              id: "escape-analysis",
              title: "Escape analysis — stack vs heap allocation",
            },
            {
              id: "avoid-arguments",
              title: "Avoid arguments object & spread in hot paths",
            },
            {
              id: "perf-hooks-measure",
              title: "perf_hooks PerformanceObserver for micro-benchmarks",
            },
          ],
        },
        {
          id: "native-addons",
          title: "Native Addons with N-API",
          description: "Writing high-performance C++ addons for Node.js.",
          subtopics: [
            {
              id: "n-api-intro",
              title: "N-API vs nan — stable ABI guarantees",
            },
            {
              id: "node-addon-api",
              title: "node-addon-api (C++ wrapper for N-API)",
            },
            { id: "node-gyp", title: "node-gyp — building native addons" },
            {
              id: "napi-module-macro",
              title: "NAPI_MODULE macro & Init function",
            },
            {
              id: "napi-values",
              title: "napi_value — wrapping JS values in C++",
            },
            {
              id: "async-worker",
              title: "Napi::AsyncWorker for thread pool tasks",
            },
            {
              id: "object-wrap",
              title: "Napi::ObjectWrap — wrapping C++ objects as JS objects",
            },
            {
              id: "napi-use-cases",
              title:
                "Use cases: CPU-intensive tasks, system calls, native libs",
            },
          ],
        },
        {
          id: "custom-streams",
          title: "Custom Stream Implementation",
          description: "Building Node.js Transform streams from scratch.",
          subtopics: [
            {
              id: "stream-internals",
              title: "Stream internals — highWaterMark, buffering",
            },
            {
              id: "custom-readable",
              title: "Custom Readable — implementing _read()",
            },
            {
              id: "custom-writable",
              title: "Custom Writable — implementing _write() & _final()",
            },
            {
              id: "custom-transform",
              title: "Custom Transform — implementing _transform() & _flush()",
            },
            {
              id: "object-mode-stream",
              title: "objectMode streams — non-buffer chunks",
            },
            {
              id: "backpressure-impl",
              title: "Backpressure management — pause/resume, drain",
            },
            {
              id: "pipeline-util",
              title: "stream.pipeline vs manual pipe chaining",
            },
            {
              id: "stream-iterate",
              title: "async iteration over Readable (for await...of)",
            },
          ],
        },
        {
          id: "diagnostic-tools",
          title: "Diagnostic Tools",
          description: "Production-grade profiling and debugging tools.",
          subtopics: [
            {
              id: "node-inspect-advanced",
              title: "node --inspect -- remote debugging with DevTools",
            },
            {
              id: "heap-prof-advanced",
              title: "node --heap-prof — allocation profiling",
            },
            {
              id: "cpu-prof-file",
              title: "node --cpu-prof — CPU profiling to file",
            },
            {
              id: "clinicjs-doctor",
              title: "clinic.js doctor — anomaly detection",
            },
            {
              id: "clinicjs-bubbleprof",
              title: "clinic.js bubbleprof — async delay visualization",
            },
            { id: "clinicjs-flame", title: "clinic.js flame — CPU flamegraph" },
            { id: "0x-flamegraphs", title: "0x — interactive flamegraphs" },
            {
              id: "perf-observer",
              title: "PerformanceObserver — timing user-defined marks",
            },
            {
              id: "report-diagnostics",
              title: "node --report — diagnostic report on crash",
            },
          ],
        },
        {
          id: "module-system-internals",
          title: "Module System Internals",
          description: "How Node.js loads and caches modules.",
          subtopics: [
            {
              id: "module-load-algorithm",
              title: "Module._load — require() resolution algorithm",
            },
            {
              id: "require-resolve",
              title: "require.resolve() — resolving module paths",
            },
            {
              id: "module-cache",
              title: "require.cache — module singleton cache",
            },
            {
              id: "module-wrapper",
              title:
                "Module wrapper function (dirname, filename, require, module, exports)",
            },
            { id: "esm-cjs-interop", title: "ESM and CJS interoperability" },
            {
              id: "esm-loader-hooks",
              title: "ESM Loader Hooks — resolve, load, transform",
            },
            {
              id: "loader-flag",
              title: "--loader / --import flag for custom loaders",
            },
            {
              id: "custom-ts-loader",
              title: "Custom TypeScript loader via ESM hooks",
            },
          ],
        },
        {
          id: "high-performance-patterns",
          title: "High-Performance Patterns",
          description: "Production patterns for extreme throughput.",
          subtopics: [
            {
              id: "avoid-sync-in-hot-paths",
              title: "Avoid synchronous code in hot paths",
            },
            {
              id: "worker-thread-pool",
              title: "Worker Thread Pool for CPU-bound tasks",
            },
            {
              id: "streaming-pipeline-perf",
              title: "Streaming large data to avoid OOM",
            },
            {
              id: "keep-alive-connections",
              title: "HTTP keep-alive connections (http.globalAgent)",
            },
            {
              id: "zero-copy-streams",
              title: "Zero-copy file transfer (sendFile, splice)",
            },
            {
              id: "buffer-reuse",
              title: "Buffer reuse with Buffer.allocUnsafe",
            },
            {
              id: "jit-friendly-code",
              title: "Writing JIT-friendly JavaScript",
            },
            {
              id: "native-vs-js",
              title: "When to use native addons vs pure JS",
            },
          ],
        },
        {
          id: "security-at-scale",
          title: "Security at Scale",
          description: "Enterprise-grade Node.js security.",
          subtopics: [
            {
              id: "ssrf-advanced",
              title: "SSRF Prevention — block metadata endpoints (169.254.x.x)",
            },
            {
              id: "dependency-security",
              title: "Dependency auditing (npm audit, Snyk, Socket.dev)",
            },
            {
              id: "sbom-generation",
              title: "SBOM generation (Software Bill of Materials)",
            },
            {
              id: "secret-scanning",
              title: "Secret scanning in git (Gitleaks, TruffleHog)",
            },
            {
              id: "supply-chain-security",
              title: "Supply chain security (npm lockfile, provenance)",
            },
            {
              id: "policy-as-code",
              title: "Policy-as-code (OPA, Kyverno) for K8s",
            },
            {
              id: "node-js-cve",
              title: "Staying current with Node.js CVEs & security releases",
            },
            {
              id: "private-registry",
              title: "Private npm registry (Verdaccio, Nexus, JFrog)",
            },
          ],
        },
        {
          id: "nodejs-governance",
          title: "Node.js Governance & Ecosystem",
          description: "Understanding the Node.js project itself.",
          subtopics: [
            {
              id: "nodejs-release-lifecycle",
              title: "Release lifecycle — Current, LTS, Maintenance",
            },
            {
              id: "nodejs-version-policy",
              title: "Node.js version selection policy (even = LTS)",
            },
            {
              id: "nodejs-governance-model",
              title: "Open Governance model — TSC, Working Groups",
            },
            {
              id: "contributing-to-nodejs",
              title: "Contributing to Node.js — issue triage, PR flow",
            },
            {
              id: "nodejs-roadmap",
              title: "Node.js feature flags & experimental features",
            },
            {
              id: "deno-bun-comparison",
              title: "Deno & Bun — alternatives and ecosystem impact",
            },
          ],
        },
        {
          id: "shared-memory-threads",
          title: "SharedArrayBuffer & Atomics",
          description: "Shared memory multithreading in Node.js.",
          subtopics: [
            {
              id: "sharedarraybuffer-intro",
              title: "SharedArrayBuffer — shared memory between threads",
            },
            {
              id: "atomics-api",
              title: "Atomics API — atomic operations, compare-exchange",
            },
            {
              id: "mutex-with-atomics",
              title: "Implementing a Mutex with Atomics.wait/notify",
            },
            {
              id: "worker-thread-pool-impl",
              title: "Worker Thread Pool implementation (typed)",
            },
            {
              id: "thread-safe-queue",
              title: "Thread-safe queue with SharedArrayBuffer",
            },
            {
              id: "postmessage-transferable",
              title: "Transferable objects in postMessage()",
            },
          ],
        },
      ],
    },
    // ── DSA ──────────────────────────────────────────────
    {
      id: "dsa",
      title: "DSA",
      icon: "workflow",
      color: "#22d3ee",
      description: "Expert-level algorithms and data structures.",
      topics: [
        {
          id: "advanced-trees",
          title: "Advanced Tree Structures",
          description:
            "Complex tree data structures for competitive-level problems.",
          subtopics: [
            {
              id: "segment-tree",
              title: "Segment Tree — range queries with lazy propagation",
            },
            { id: "fenwick-tree", title: "Fenwick Tree (BIT) — prefix sums" },
            { id: "avl-tree", title: "AVL Tree — self-balancing BST" },
            {
              id: "red-black-tree",
              title: "Red-Black Tree — insertion/deletion balancing",
            },
            { id: "b-plus-tree", title: "B+ Tree — database index structure" },
            { id: "suffix-array", title: "Suffix Array & LCP Array" },
          ],
        },
        {
          id: "advanced-algorithms-expert",
          title: "Expert Algorithms",
          description: "Sophisticated algorithms for complex problems.",
          subtopics: [
            {
              id: "persistent-ds",
              title: "Persistent data structures (path copying)",
            },
            {
              id: "flow-max-flow",
              title: "Maximum Flow (Ford-Fulkerson, Dinic's)",
            },
            {
              id: "bipartite-matching",
              title: "Hungarian algorithm & bipartite matching",
            },
            {
              id: "network-simplex",
              title: "Min-Cost Max-Flow (Network Simplex intro)",
            },
            {
              id: "kmp-z-algorithm",
              title: "String matching — KMP & Z-function",
            },
            {
              id: "aho-corasick",
              title: "Aho-Corasick automaton — multi-pattern search",
            },
          ],
        },
        {
          id: "distributed-algorithms",
          title: "Distributed Systems Algorithms",
          description: "Algorithms specific to distributed computing.",
          subtopics: [
            {
              id: "paxos-raft-deep",
              title: "Paxos vs Raft — consensus algorithm deep dive",
            },
            {
              id: "two-phase-commit",
              title: "Two-Phase Commit (2PC) — distributed transactions",
            },
            {
              id: "gossip-protocol",
              title: "Gossip protocol — epidemic information spread",
            },
            { id: "dht-intro", title: "Distributed Hash Table (Kademlia)" },
            {
              id: "merkle-tree",
              title: "Merkle Trees — data integrity verification",
            },
          ],
        },
      ],
    },
    // ── Interview Q ──────────────────────────────────────
    {
      id: "iq",
      title: "Interview Q",
      icon: "circleHelp",
      color: "#f472b6",
      description: "Principal/Expert Node.js interview prep.",
      topics: [
        {
          id: "v8-libuv-qa",
          title: "V8 & libuv Q&A",
          description: "Deep engine internals interview questions.",
          subtopics: [
            {
              id: "event-loop-phases-qa",
              title: "List and describe all 6 event loop phases",
            },
            {
              id: "v8-gc-qa",
              title: "How does V8 garbage collect? (minor/major GC)",
            },
            {
              id: "hidden-class-qa",
              title: "What are hidden classes and why do they exist?",
            },
            { id: "deopt-qa", title: "What causes V8 deoptimization?" },
            {
              id: "thread-pool-qa",
              title: "Which Node.js operations use the libuv thread pool?",
            },
            {
              id: "libuv-platform-qa",
              title: "How does libuv handle I/O on different OSes?",
            },
          ],
        },
        {
          id: "architecture-lead-qa",
          title: "Architecture at Scale Q&A",
          description: "Principal-level architecture questions.",
          subtopics: [
            {
              id: "node-cluster-vs-worker-qa",
              title: "cluster vs worker_threads — when to use each?",
            },
            {
              id: "backpressure-arch-qa",
              title:
                "How do you handle backpressure in a high-throughput system?",
            },
            {
              id: "memory-model-qa",
              title: "SharedArrayBuffer memory model & race conditions?",
            },
            {
              id: "module-system-qa",
              title: "Explain the CommonJS require() resolution algorithm",
            },
            {
              id: "esm-loader-hooks-qa",
              title: "How do ESM Loader Hooks (--loader) work?",
            },
          ],
        },
        {
          id: "performance-security-lead-qa",
          title: "Performance & Security Q&A",
          description: "Expert-level performance and security questions.",
          subtopics: [
            {
              id: "natve-addon-when-qa",
              title: "When would you write a native addon instead of pure JS?",
            },
            {
              id: "zero-copy-qa",
              title: "What is zero-copy I/O and how does Node.js support it?",
            },
            {
              id: "supply-chain-qa",
              title: "How do you defend against supply chain attacks in npm?",
            },
            {
              id: "ssrf-node-qa",
              title: "How do you prevent SSRF in a Node.js HTTP client?",
            },
            {
              id: "prototype-pollution-defense-qa",
              title: "How do you mitigate prototype pollution at scale?",
            },
          ],
        },
        {
          id: "expert-coding-node",
          title: "Expert Coding Exercises",
          description: "Principal-level Node.js implementation challenges.",
          subtopics: [
            {
              id: "transform-stream-ex",
              title: "Implement a CSV-parsing Transform stream",
            },
            {
              id: "worker-pool-ex",
              title: "Build a Worker Thread Pool with typed task queue",
            },
            {
              id: "shared-mutex-ex",
              title: "Implement a Mutex using SharedArrayBuffer & Atomics",
            },
            {
              id: "custom-esm-loader-ex",
              title: "Write a custom ESM Loader Hook for TypeScript",
            },
            {
              id: "distributed-lock-ex",
              title: "Implement distributed locking with Redis (Redlock)",
            },
          ],
        },
      ],
    },
  ],
};
