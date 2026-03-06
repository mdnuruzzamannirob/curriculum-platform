import { Level } from "@/types";

export const l3Level: Level = {
  id: "senior",
  title: "Advanced JS",
  description: "Senior Dev",
  color: "#f472b6",
  modules: [
    // ── JS ───────────────────────────────────────────────
    {
      id: "js",
      title: "JS",
      icon: "{ }",
      color: "#4ade80",
      description: "Patterns, metaprogramming & memory.",
      topics: [
        {
          id: "design-patterns",
          title: "Design Patterns",
          description: "Common JavaScript design patterns.",
          subtopics: [
            { id: "singleton", title: "Singleton Pattern" },
            { id: "observer", title: "Observer / Pub-Sub Pattern" },
            {
              id: "factory",
              title: "Factory Pattern (Factory Function & Factory Class)",
            },
            { id: "abstract-factory", title: "Abstract Factory" },
            { id: "builder", title: "Builder Pattern" },
            {
              id: "module-pattern",
              title: "Module Pattern (revealing module)",
            },
            { id: "strategy", title: "Strategy Pattern" },
            { id: "decorator", title: "Decorator Pattern" },
            { id: "command", title: "Command Pattern" },
            { id: "mediator", title: "Mediator / Event Bus Pattern" },
            { id: "proxy-pattern", title: "Proxy Pattern (structural)" },
          ],
        },
        {
          id: "memory-management",
          title: "Memory Management",
          description: "Memory in JavaScript.",
          subtopics: [
            { id: "stack-heap", title: "Stack vs Heap Memory" },
            {
              id: "garbage-collection",
              title: "Garbage Collection (Mark & Sweep)",
            },
            {
              id: "reference-counting",
              title: "Reference Counting & retain cycles",
            },
            {
              id: "memory-leaks",
              title: "Common Memory Leaks (closures, timers, DOM)",
            },
            { id: "weakmap-weakset", title: "WeakMap & WeakSet (GC-friendly)" },
            { id: "weakref", title: "WeakRef & FinalizationRegistry" },
            {
              id: "memory-profiling",
              title: "Memory Profiling in Chrome DevTools",
            },
            { id: "reducing-memory", title: "Memory Optimization Strategies" },
          ],
        },
        {
          id: "proxy-reflect",
          title: "Proxy & Reflect API",
          description: "Metaprogramming with Proxy and Reflect.",
          subtopics: [
            { id: "proxy-basics", title: "Proxy — syntax & purpose" },
            {
              id: "proxy-traps",
              title: "Handler Traps (get, set, has, deleteProperty, apply)",
            },
            { id: "reflect-api", title: "Reflect API — forwarding operations" },
            {
              id: "reactive-objects",
              title: "Building Reactive Objects (like Vue 3)",
            },
            { id: "validation-proxy", title: "Validation with Proxy" },
            { id: "proxy-revocable", title: "Proxy.revocable()" },
            {
              id: "proxy-vs-defineProperty",
              title: "Proxy vs Object.defineProperty",
            },
          ],
        },
        {
          id: "advanced-functions",
          title: "Advanced Function Concepts",
          description: "Deep dive into functions.",
          subtopics: [
            { id: "currying", title: "Currying & partial application" },
            {
              id: "memoization-fn",
              title: "Memoization (generic, with Map cache)",
            },
            { id: "compose-pipe", title: "Function Composition & Pipe" },
            {
              id: "trampolining",
              title: "Trampolining (eliminate stack overflow)",
            },
            { id: "thunks", title: "Thunks (lazy evaluation)" },
            { id: "partial-application", title: "Partial Application" },
            { id: "co-routines", title: "Coroutines (generator-based)" },
          ],
        },
        {
          id: "symbols-iterators",
          title: "Symbols & Well-Known Symbols",
          description: "Deep dive into symbols.",
          subtopics: [
            {
              id: "symbol-iterator",
              title: "Symbol.iterator — make objects iterable",
            },
            {
              id: "symbol-toprimitive",
              title: "Symbol.toPrimitive — coercion hook",
            },
            {
              id: "symbol-hasinstance",
              title: "Symbol.hasInstance — instanceof hook",
            },
            { id: "symbol-species", title: "Symbol.species" },
            { id: "symbol-asynciterator", title: "Symbol.asyncIterator" },
            {
              id: "global-symbol-registry",
              title: "Symbol.for & Symbol.keyFor",
            },
          ],
        },
        {
          id: "error-handling-advanced",
          title: "Advanced Error Handling",
          description: "Production-level error handling.",
          subtopics: [
            { id: "error-boundaries", title: "Error Boundaries Pattern" },
            {
              id: "global-error-handler",
              title: "window.onerror & unhandledrejection",
            },
            {
              id: "unhandled-rejection",
              title: "Unhandled Promise Rejection strategies",
            },
            {
              id: "structured-errors",
              title: "Structured Error Messages (error codes)",
            },
            {
              id: "error-monitoring",
              title: "Error Monitoring (Sentry integration)",
            },
            {
              id: "retry-pattern",
              title: "Retry Pattern with exponential backoff",
            },
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
      description: "Trees, graphs & heaps.",
      topics: [
        {
          id: "trees",
          title: "Trees",
          description: "Tree data structures.",
          subtopics: [
            {
              id: "binary-tree",
              title: "Binary Tree — Node class & properties",
            },
            { id: "bst", title: "Binary Search Tree (BST)" },
            { id: "bst-operations", title: "BST Insert / Delete / Search" },
            { id: "inorder", title: "Inorder Traversal (DFS)" },
            { id: "preorder", title: "Preorder Traversal (DFS)" },
            { id: "postorder", title: "Postorder Traversal (DFS)" },
            { id: "level-order", title: "Level Order Traversal (BFS)" },
            { id: "tree-height", title: "Height & Depth of a Tree" },
            { id: "balanced-tree", title: "Check Balanced Tree" },
            {
              id: "lowest-common-ancestor",
              title: "Lowest Common Ancestor (LCA)",
            },
            {
              id: "serialize-deserialize",
              title: "Serialize & Deserialize a Tree",
            },
          ],
        },
        {
          id: "heaps",
          title: "Heaps & Priority Queues",
          description: "Heap data structure.",
          subtopics: [
            { id: "min-heap", title: "Min Heap — complete binary tree" },
            { id: "max-heap", title: "Max Heap" },
            {
              id: "heap-insert-extract",
              title: "Insert (sift up) & Extract (sift down)",
            },
            { id: "heapify", title: "Heapify — build heap in O(n)" },
            { id: "heap-sort", title: "Heap Sort — O(n log n)" },
            { id: "kth-largest", title: "Kth Largest Element using heap" },
            { id: "top-k-frequent", title: "Top K Frequent Elements" },
            { id: "merge-k-sorted", title: "Merge K Sorted Lists (heap)" },
          ],
        },
        {
          id: "graphs",
          title: "Graphs",
          description: "Graph data structures and algorithms.",
          subtopics: [
            { id: "graph-representation", title: "Adjacency List & Matrix" },
            {
              id: "directed-undirected",
              title: "Directed vs Undirected Graphs",
            },
            { id: "weighted-graphs", title: "Weighted Graphs" },
            { id: "bfs-graph", title: "BFS — level-by-level traversal" },
            { id: "dfs-graph", title: "DFS — depth-first traversal" },
            {
              id: "connected-components",
              title: "Connected Components (BFS/DFS)",
            },
            {
              id: "topological-sort",
              title: "Topological Sort (Kahn's / DFS)",
            },
            {
              id: "cycle-detection-graph",
              title: "Cycle Detection in directed & undirected",
            },
            { id: "bipartite-graph", title: "Bipartite Graph Check" },
          ],
        },
        {
          id: "hash-tables-deep",
          title: "Hash Tables Internals",
          description: "Understanding hash tables internally.",
          subtopics: [
            {
              id: "hash-functions",
              title: "Hash Functions — properties of good hash",
            },
            {
              id: "collision-chaining",
              title: "Collision Handling (Separate Chaining)",
            },
            {
              id: "open-addressing",
              title: "Open Addressing (Linear/Quadratic Probing)",
            },
            { id: "load-factor", title: "Load Factor & Resizing" },
            {
              id: "map-vs-object",
              title: "Map vs Object — internal differences",
            },
          ],
        },
        {
          id: "trie",
          title: "Trie (Prefix Tree)",
          description: "Trie data structure.",
          subtopics: [
            { id: "trie-build", title: "Building a Trie (TrieNode class)" },
            { id: "trie-insert-search", title: "Insert & Search Operations" },
            { id: "trie-delete", title: "Delete from Trie" },
            { id: "autocomplete", title: "Autocomplete with Trie" },
            { id: "word-search", title: "Word Search / Boggle Board" },
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
      description: "Senior-level interview prep.",
      topics: [
        {
          id: "architecture-qa",
          title: "Architecture & Patterns Q&A",
          description: "System design and tooling questions.",
          subtopics: [
            {
              id: "module-systems-qa",
              title: "Compare module systems (ESM/CJS/AMD/UMD)",
            },
            {
              id: "build-tools-qa",
              title: "Webpack vs Vite vs Rollup differences",
            },
            {
              id: "performance-budgets",
              title: "Performance Budgets & monitoring",
            },
            { id: "monorepo-qa", title: "Monorepo vs Polyrepo trade-offs" },
            { id: "micro-frontends", title: "Micro-frontends explained" },
            {
              id: "design-patterns-qa",
              title: "Which design patterns do you use daily?",
            },
          ],
        },
        {
          id: "advanced-coding-qa",
          title: "Senior Coding Challenges",
          description: "Senior-level coding problems.",
          subtopics: [
            {
              id: "implement-bind",
              title: "Implement Function.prototype.bind()",
            },
            {
              id: "event-emitter",
              title: "Build a full Event Emitter (on/off/emit/once)",
            },
            { id: "promise-all-impl", title: "Implement Promise.all()" },
            { id: "deep-equal", title: "Implement deepEqual(obj1, obj2)" },
            { id: "observable-impl", title: "Build a simple Observable" },
            {
              id: "virtual-dom-impl",
              title: "Implement minimal Virtual DOM + diff",
            },
            { id: "reactive-system", title: "Build a reactive state system" },
          ],
        },
        {
          id: "memory-perf-qa",
          title: "Memory & Performance Q&A",
          description: "Memory and performance interview questions.",
          subtopics: [
            {
              id: "memory-leak-detection",
              title: "How to identify & fix memory leaks",
            },
            { id: "gc-explained", title: "How does garbage collection work?" },
            {
              id: "reflow-repaint",
              title: "Reflow vs Repaint (causes & solutions)",
            },
            {
              id: "critical-render-path",
              title: "Critical Rendering Path optimization",
            },
            { id: "web-vitals-qa", title: "Core Web Vitals (LCP, FID, CLS)" },
            {
              id: "performance-profiling-qa",
              title: "Walk through profiling a slow page",
            },
          ],
        },
      ],
    },
  ],
};

