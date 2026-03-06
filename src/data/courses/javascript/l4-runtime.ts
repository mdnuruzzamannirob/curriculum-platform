import { Level } from "@/types";

export const l4Level: Level = {
  id: "staff",
  title: "Runtime & Engine",
  description: "Staff Engineer",
  color: "#38bdf8",
  modules: [
    // ── JS ───────────────────────────────────────────────
    {
      id: "js",
      title: "JS",
      icon: "{ }",
      color: "#4ade80",
      description: "Performance, security & concurrency.",
      topics: [
        {
          id: "performance",
          title: "Performance Optimization",
          description: "Making JavaScript fast.",
          subtopics: [
            {
              id: "profiling",
              title: "Performance Profiling (CPU profile, flame chart)",
            },
            {
              id: "chrome-devtools-perf",
              title: "Chrome DevTools Performance Tab deep dive",
            },
            {
              id: "lazy-loading",
              title: "Lazy Loading (images, modules, routes)",
            },
            { id: "code-splitting", title: "Code Splitting strategies" },
            {
              id: "bundle-analysis",
              title: "Bundle Analysis (webpack-bundle-analyzer)",
            },
            {
              id: "render-optimization",
              title: "Render Optimization (batching, layers)",
            },
            { id: "virtual-scrolling", title: "Virtual Scrolling / Windowing" },
            {
              id: "long-tasks",
              title: "Long Tasks & Task Scheduling (scheduler API)",
            },
            { id: "preload-prefetch", title: "Preload, Prefetch & Preconnect" },
          ],
        },
        {
          id: "web-workers",
          title: "Web Workers & Concurrency",
          description: "Multi-threaded JavaScript.",
          subtopics: [
            {
              id: "web-worker-basics",
              title: "Web Worker Basics — offloading CPU work",
            },
            {
              id: "shared-workers",
              title: "Shared Workers — shared across tabs",
            },
            {
              id: "service-workers",
              title: "Service Workers — offline & caching",
            },
            {
              id: "worker-communication",
              title: "postMessage & MessageChannel",
            },
            {
              id: "shared-array-buffer",
              title: "SharedArrayBuffer — shared memory",
            },
            { id: "atomics", title: "Atomics API — coordinated access" },
            {
              id: "worklets",
              title: "Paintlet, AudioWorklet, AnimationWorklet",
            },
            { id: "comlink", title: "Comlink — simpler worker bridge" },
          ],
        },
        {
          id: "security",
          title: "Frontend Security",
          description: "Frontend security practices.",
          subtopics: [
            {
              id: "xss-prevention",
              title: "XSS Prevention (escaping, sanitization)",
            },
            { id: "xss-types", title: "Stored / Reflected / DOM XSS types" },
            { id: "csp", title: "Content Security Policy (CSP headers)" },
            { id: "cors", title: "CORS — preflight, headers, credentials" },
            {
              id: "csrf-protection",
              title: "CSRF Prevention (SameSite, tokens)",
            },
            {
              id: "input-sanitization",
              title: "Input Sanitization (DOMPurify)",
            },
            {
              id: "subresource-integrity",
              title: "Subresource Integrity (SRI)",
            },
            {
              id: "secure-cookies",
              title: "Secure Cookies (HttpOnly, SameSite, Secure)",
            },
            { id: "csp-nonce", title: "CSP Nonce for inline scripts" },
          ],
        },
        {
          id: "advanced-web-apis",
          title: "Advanced Web APIs",
          description: "Modern browser APIs.",
          subtopics: [
            {
              id: "websockets",
              title: "WebSockets — full-duplex communication",
            },
            { id: "server-sent-events", title: "Server-Sent Events (SSE)" },
            { id: "webrtc-basics", title: "WebRTC Basics (peer-to-peer)" },
            {
              id: "streams-api",
              title: "Streams API (ReadableStream, WritableStream)",
            },
            { id: "file-api", title: "File, FileReader & Blob API" },
            { id: "clipboard-api", title: "Clipboard API" },
            {
              id: "broadcast-channel",
              title: "BroadcastChannel — cross-tab messaging",
            },
            {
              id: "performance-api",
              title: "Performance API (PerformanceObserver)",
            },
            { id: "navigation-api", title: "Navigation API (modern history)" },
          ],
        },
        {
          id: "testing",
          title: "Testing Strategies",
          description: "Testing JavaScript code.",
          subtopics: [
            { id: "unit-testing", title: "Unit Testing Principles (FIRST)" },
            {
              id: "jest-basics",
              title: "Jest / Vitest — setup, matchers, async",
            },
            { id: "mocking", title: "Mocking & Stubbing (vi.mock, jest.mock)" },
            {
              id: "integration-testing",
              title: "Integration Testing patterns",
            },
            { id: "e2e-testing", title: "E2E Testing (Playwright & Cypress)" },
            { id: "tdd-bdd", title: "TDD vs BDD methodologies" },
            {
              id: "test-coverage",
              title: "Code Coverage analysis (Istanbul/c8)",
            },
            { id: "snapshot-testing", title: "Snapshot Testing" },
            { id: "performance-testing", title: "Performance & load testing" },
          ],
        },
        {
          id: "browser-rendering",
          title: "Browser Rendering Pipeline",
          description: "Understanding how browsers render pages.",
          subtopics: [
            { id: "critical-render-path", title: "Critical Rendering Path" },
            { id: "dom-cssom", title: "DOM + CSSOM Construction" },
            { id: "render-tree", title: "Render Tree & Layout" },
            { id: "paint-composite", title: "Paint & Composite Phases" },
            { id: "raf-deep", title: "requestAnimationFrame — Timing" },
            { id: "will-change", title: "will-change & GPU Layers" },
            {
              id: "layout-thrashing",
              title: "Layout Thrashing & Forced Reflows",
            },
          ],
        },
        {
          id: "module-bundlers",
          title: "Module Bundlers & Build Tools Deep Dive",
          description: "Understanding modern build tools.",
          subtopics: [
            {
              id: "webpack-concepts",
              title: "Webpack — Loaders, Plugins, Chunks",
            },
            { id: "vite-dev-server", title: "Vite — Dev Server & ESM" },
            { id: "tree-shaking-deep", title: "Tree Shaking — How It Works" },
            { id: "code-splitting-deep", title: "Code Splitting Strategies" },
            { id: "source-maps-config", title: "Source Maps Configuration" },
            { id: "bundle-analyzer", title: "Bundle Analyzer & Optimization" },
          ],
        },
        {
          id: "typescript-integration",
          title: "TypeScript Essential Integration",
          description: "TypeScript for JavaScript developers.",
          subtopics: [
            { id: "ts-basics", title: "Type Annotations & Inference" },
            { id: "ts-interfaces-types", title: "Interfaces vs Type Aliases" },
            {
              id: "ts-generics",
              title: "Generics — Functions, Classes, Constraints",
            },
            {
              id: "ts-utility-types",
              title: "Utility Types (Partial, Required, Pick, Omit)",
            },
            { id: "ts-narrowing", title: "Type Narrowing & Type Guards" },
            { id: "ts-enums", title: "Enums — const enum vs String enum" },
            { id: "ts-declaration-files", title: "Declaration Files (.d.ts)" },
          ],
        },
      ],
    },
    // ── DSA ──────────────────────────────────────────────
    {
      id: "dsa",
      title: "DSA",
      icon: "~",
      color: "#22d3ee",
      description: "Dynamic programming & advanced algorithms.",
      topics: [
        {
          id: "dynamic-programming",
          title: "Dynamic Programming — Memoization & Tabulation",
          description: "DP techniques and patterns.",
          subtopics: [
            { id: "memoization", title: "Top-Down DP (Memoization)" },
            { id: "tabulation", title: "Bottom-Up DP (Tabulation)" },
            { id: "fibonacci-dp", title: "Fibonacci — DP approach" },
            { id: "climbing-stairs", title: "Climbing Stairs (1D DP)" },
            { id: "coin-change", title: "Coin Change — minimum coins" },
            {
              id: "longest-common-subseq",
              title: "Longest Common Subsequence (LCS)",
            },
            { id: "knapsack", title: "0/1 Knapsack Problem" },
            { id: "edit-distance", title: "Edit Distance (Levenshtein)" },
            {
              id: "longest-increasing-subseq",
              title: "Longest Increasing Subsequence (LIS)",
            },
            {
              id: "matrix-dp",
              title: "2D Matrix DP (Unique Paths, Grid problems)",
            },
          ],
        },
        {
          id: "greedy-algorithms",
          title: "Greedy Algorithms",
          description: "Greedy approach to problem solving.",
          subtopics: [
            { id: "greedy-intro", title: "Greedy vs DP — when to use which" },
            { id: "activity-selection", title: "Activity Selection Problem" },
            {
              id: "fractional-knapsack",
              title: "Fractional Knapsack (greedy)",
            },
            {
              id: "huffman-coding",
              title: "Huffman Coding (optimal prefix codes)",
            },
            {
              id: "interval-scheduling",
              title: "Interval Scheduling & merging",
            },
            { id: "jump-game", title: "Jump Game I & II" },
            { id: "gas-station", title: "Gas Station Problem" },
          ],
        },
        {
          id: "backtracking",
          title: "Backtracking — Decision Trees & Pruning",
          description: "Backtracking algorithms.",
          subtopics: [
            {
              id: "backtracking-intro",
              title: "Backtracking — decision tree concept",
            },
            {
              id: "permutations",
              title: "Permutations (with & without duplicates)",
            },
            { id: "combinations", title: "Combinations & Combination Sum" },
            { id: "subsets", title: "Subsets / Power Set" },
            { id: "n-queens", title: "N-Queens Problem" },
            { id: "sudoku-solver", title: "Sudoku Solver" },
            { id: "word-search-bt", title: "Word Search on grid" },
            { id: "palindrome-partition", title: "Palindrome Partitioning" },
          ],
        },
        {
          id: "advanced-graph",
          title: "Advanced Graph Algorithms",
          description: "Advanced graph techniques.",
          subtopics: [
            { id: "dijkstra", title: "Dijkstra's Shortest Path (min-heap)" },
            { id: "bellman-ford", title: "Bellman-Ford (negative weights)" },
            { id: "floyd-warshall", title: "Floyd-Warshall (all pairs)" },
            {
              id: "union-find",
              title: "Union-Find / Disjoint Set Union (DSU)",
            },
            { id: "kruskal-mst", title: "Kruskal's MST (DSU + sort)" },
            { id: "prim-mst", title: "Prim's MST (greedy + min-heap)" },
            {
              id: "articulation-bridges",
              title: "Articulation Points & Bridges",
            },
          ],
        },
        {
          id: "monotonic-patterns",
          title: "Monotonic Stack & Queue Patterns",
          description: "Advanced monotonic data structure problems.",
          subtopics: [
            { id: "daily-temperatures", title: "Daily Temperatures" },
            { id: "stock-span", title: "Stock Span Problem" },
            {
              id: "largest-rectangle",
              title: "Largest Rectangle in Histogram",
            },
            { id: "trapping-rain-water", title: "Trapping Rain Water" },
            {
              id: "sliding-window-max",
              title: "Sliding Window Maximum (deque)",
            },
            { id: "next-smaller-element", title: "Next Smaller Element" },
            { id: "online-stock-span", title: "Online Stock Span" },
          ],
        },
        {
          id: "bitmask-dp",
          title: "Bitmask DP",
          description: "Dynamic programming with bitmasks.",
          subtopics: [
            {
              id: "bitmask-dp-intro",
              title: "Bitmask DP Concept & Setup",
            },
            {
              id: "traveling-salesman",
              title: "Traveling Salesman Problem (TSP)",
            },
            {
              id: "assign-problem",
              title: "Assignment Problem (dp + bitmask)",
            },
            {
              id: "min-cost-visits",
              title: "Minimum Cost to Visit All Cities",
            },
            {
              id: "count-subsets-dp",
              title: "Count Subsets with Given Sum",
            },
            {
              id: "partition-equal-subset",
              title: "Partition Equal Subset Sum",
            },
          ],
        },
        {
          id: "segment-tree-intro",
          title: "Segment Tree — Introduction & Range Queries",
          description: "Efficient range query data structure.",
          subtopics: [
            { id: "segment-tree-build", title: "Build Segment Tree" },
            { id: "range-query-st", title: "Range Sum / Min Query" },
            { id: "point-update-st", title: "Point Update Operation" },
            { id: "lazy-propagation-intro", title: "Lazy Propagation (intro)" },
            { id: "range-update-st", title: "Range Update Query" },
          ],
        },
        {
          id: "string-matching",
          title: "String Matching Algorithms",
          description: "Efficient pattern matching in strings.",
          subtopics: [
            {
              id: "naive-string-match",
              title: "Naive String Matching — O(nm)",
            },
            { id: "kmp-intro", title: "KMP Algorithm — Prefix Function" },
            { id: "rabin-karp-intro", title: "Rabin-Karp — Rolling Hash" },
            { id: "z-function", title: "Z-Function — Pattern Matching" },
            { id: "string-hashing", title: "String Hashing Techniques" },
          ],
        },
        {
          id: "trie-advanced",
          title: "Trie — Advanced Applications",
          description: "Advanced trie usage.",
          subtopics: [
            { id: "trie-count-prefix", title: "Count Words with Prefix" },
            { id: "trie-xor-max", title: "Maximum XOR with Trie" },
            { id: "trie-longest-word", title: "Longest Word in Dictionary" },
            { id: "trie-word-break", title: "Word Break with Trie" },
            {
              id: "trie-stream-matching",
              title: "Stream of Characters Matching",
            },
          ],
        },
      ],
    },
    // ── Interview Q ──────────────────────────────────────
    {
      id: "iq",
      title: "Interview Q",
      icon: "?",
      color: "#f472b6",
      description: "Staff-level interview prep.",
      topics: [
        {
          id: "system-design-qa",
          title: "Frontend System Design Q&A",
          description: "Frontend system design questions.",
          subtopics: [
            {
              id: "design-autocomplete",
              title: "Design: Autocomplete Component",
            },
            {
              id: "design-infinite-scroll",
              title: "Design: Infinite Scroll feed",
            },
            { id: "design-chat-app", title: "Design: Real-time Chat App" },
            {
              id: "design-image-gallery",
              title: "Design: Image Gallery with virtualization",
            },
            {
              id: "design-file-uploader",
              title: "Design: Multi-file Uploader with progress",
            },
            { id: "state-management-qa", title: "State Management at Scale" },
            {
              id: "design-search",
              title: "Design: Search with debounce & cache",
            },
          ],
        },
        {
          id: "tech-leadership-qa",
          title: "Technical Leadership Q&A",
          description: "Leading engineering teams.",
          subtopics: [
            { id: "code-review", title: "Code Review Best Practices" },
            {
              id: "documentation",
              title: "Documentation Standards (JSDoc, ADRs)",
            },
            { id: "mentoring", title: "Mentoring Junior Engineers" },
            { id: "tech-debt-qa", title: "Managing Technical Debt" },
            {
              id: "incident-response",
              title: "Incident Response (RCA, runbooks)",
            },
            { id: "estimation-qa", title: "Technical Estimation strategies" },
          ],
        },
        {
          id: "security-qa",
          title: "Security Interview Questions",
          description: "Security-focused interview topics.",
          subtopics: [
            { id: "explain-xss", title: "Explain XSS — types & prevention" },
            { id: "explain-csrf", title: "Explain CSRF attacks & mitigation" },
            {
              id: "explain-cors-qa",
              title: "CORS in detail (simple vs preflight)",
            },
            { id: "jwt-security", title: "JWT Security Best Practices" },
            { id: "oauth-flow", title: "OAuth 2.0 + PKCE Flow" },
            {
              id: "auth-strategies",
              title: "Session vs JWT vs Cookie-based auth",
            },
          ],
        },
        {
          id: "dp-advanced-qa",
          title: "DP & Advanced DSA Q&A",
          description: "Hard interview problems.",
          subtopics: [
            { id: "word-break", title: "Word Break Problem" },
            {
              id: "regular-expression-match",
              title: "Regular Expression Matching",
            },
            { id: "wildcard-matching", title: "Wildcard Matching" },
            {
              id: "burst-balloons",
              title: "Burst Balloons — interval DP",
            },
            {
              id: "palindrome-partition-dp",
              title: "Palindrome Partitioning (DP)",
            },
            {
              id: "max-subarray-variants",
              title: "Maximum Subarray Variants (Kadane+)",
            },
            {
              id: "shortest-path-variants",
              title: "Shortest Path Variants",
            },
          ],
        },
        {
          id: "testing-qa",
          title: "Testing Strategies Q&A",
          description: "Testing interview questions.",
          subtopics: [
            {
              id: "unit-vs-integration-qa",
              title: "Unit vs Integration vs E2E — when each?",
            },
            {
              id: "mocking-vs-stubbing-qa",
              title: "Mocking vs Stubbing vs Spying",
            },
            { id: "tdd-benefits-qa", title: "TDD benefits & drawbacks" },
            {
              id: "test-coverage-qa",
              title: "100% code coverage — good or bad?",
            },
            {
              id: "snapshot-testing-qa",
              title: "When to use snapshot testing?",
            },
            { id: "testing-async-qa", title: "How to test async code?" },
          ],
        },
        {
          id: "web-workers-qa",
          title: "Web Workers & Concurrency Q&A",
          description: "Concurrency interview questions.",
          subtopics: [
            {
              id: "web-worker-types-qa",
              title: "Web Worker vs Service Worker vs Shared Worker",
            },
            {
              id: "worker-communication-qa",
              title: "How to communicate with workers?",
            },
            {
              id: "shared-memory-qa",
              title: "SharedArrayBuffer & Atomics explained",
            },
            {
              id: "offscreen-canvas-qa",
              title: "OffscreenCanvas — rendering in workers",
            },
            {
              id: "thread-safety-qa",
              title: "Is JS thread-safe? Race conditions?",
            },
            {
              id: "worker-limitations-qa",
              title: "Web Worker limitations (no DOM)",
            },
          ],
        },
        {
          id: "performance-coding-qa",
          title: "Performance Optimization Coding Q&A",
          description: "Performance-related coding challenges.",
          subtopics: [
            { id: "virtual-scroll-qa", title: "Implement Virtual Scrolling" },
            { id: "lazy-load-qa", title: "Implement Image Lazy Loading" },
            {
              id: "debounce-deep-qa",
              title: "Implement debounce with leading/trailing",
            },
            {
              id: "request-idle-qa",
              title: "requestIdleCallback — when to use?",
            },
            {
              id: "web-vitals-optimize-qa",
              title: "How to optimize LCP, FID, CLS?",
            },
            {
              id: "memory-leak-patterns-qa",
              title: "Common memory leak patterns & fixes",
            },
          ],
        },
      ],
    },
  ],
};
