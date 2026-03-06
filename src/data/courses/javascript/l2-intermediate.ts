import { Level } from "@/types";

export const l2Level: Level = {
  id: "mid",
  title: "Intermediate JS",
  description: "Mid-level Dev",
  color: "#fb923c",
  modules: [
    // ── JS ───────────────────────────────────────────────
    {
      id: "js",
      title: "JS",
      icon: "braces",
      color: "#4ade80",
      description: "Advanced JavaScript features.",
      topics: [
        {
          id: "async-javascript",
          title: "Async JavaScript — Callbacks, Promises & async/await",
          description: "Asynchronous programming.",
          subtopics: [
            { id: "callbacks", title: "Callbacks (sync vs async)" },
            {
              id: "callback-patterns",
              title: "Callback Patterns & Error-first convention",
            },
            { id: "promises", title: "Promises — creating & consuming" },
            {
              id: "promise-chaining",
              title: "Promise Chaining (.then, .catch, .finally)",
            },
            {
              id: "promise-all",
              title: "Promise.all() — parallel, all-or-fail",
            },
            {
              id: "promise-allsettled",
              title: "Promise.allSettled() — all results",
            },
            { id: "promise-race", title: "Promise.race() & Promise.any()" },
            { id: "async-await", title: "async / await syntax" },
            {
              id: "error-handling-async",
              title: "Error Handling (try/catch in async)",
            },
            { id: "top-level-await", title: "Top-level await in ES modules" },
            {
              id: "async-patterns",
              title: "Sequential vs Parallel async patterns",
            },
          ],
        },
        {
          id: "es6-features",
          title: "ES6+ Modern Features",
          description: "Modern JavaScript syntax.",
          subtopics: [
            {
              id: "destructuring-deep",
              title: "Deep Destructuring (nested objects/arrays)",
            },
            {
              id: "spread-rest",
              title: "Spread & Rest Operators (all contexts)",
            },
            {
              id: "computed-keys",
              title: "Computed Property Names & Shorthand",
            },
            { id: "template-tag", title: "Tagged Template Literals" },
            { id: "iterators", title: "Iterators & Iterable Protocol" },
            { id: "generators", title: "Generators (function*) & yield" },
            { id: "for-await-of", title: "for await...of (async iteration)" },
            { id: "class-fields", title: "Class Fields (public & private)" },
            {
              id: "promise-new-methods",
              title: "New Promise methods (ES2021+)",
            },
            { id: "at-method-es2022", title: "at(), Object.hasOwn() (ES2022)" },
          ],
        },
        {
          id: "prototypes-classes",
          title: "Prototypes & Classes — OOP in JavaScript",
          description: "OOP in JavaScript.",
          subtopics: [
            { id: "prototype-chain", title: "Prototype Chain — how it works" },
            { id: "proto-property", title: "__proto__ vs prototype property" },
            {
              id: "object-create",
              title: "Object.create() — prototypal inheritance",
            },
            { id: "class-syntax", title: "Class Syntax (syntactic sugar)" },
            { id: "constructor-method", title: "constructor Method" },
            { id: "class-inheritance", title: "extends & super" },
            { id: "static-methods", title: "Static Methods & Properties" },
            { id: "private-fields", title: "Private Fields (#) & Methods" },
            { id: "getters-setters", title: "Getters & Setters" },
            { id: "instanceof", title: "instanceof & Symbol.hasInstance" },
            {
              id: "object-methods-advanced",
              title: "Object.getPrototypeOf, setPrototypeOf",
            },
          ],
        },
        {
          id: "modules-system",
          title: "JavaScript Module System",
          description: "JavaScript module patterns.",
          subtopics: [
            { id: "es-modules", title: "ES Modules (import/export)" },
            { id: "named-default", title: "Named vs Default Exports" },
            { id: "re-exports", title: "Re-exports & Barrel files" },
            {
              id: "dynamic-import",
              title: "Dynamic import() — code splitting",
            },
            { id: "commonjs", title: "CommonJS (require/module.exports)" },
            { id: "esm-vs-cjs", title: "ESM vs CJS interop" },
            { id: "module-patterns", title: "Module Pattern (IIFE-based)" },
            {
              id: "tree-shaking",
              title: "Tree Shaking & dead code elimination",
            },
          ],
        },
        {
          id: "regex",
          title: "Regular Expressions — Pattern Matching & Flags",
          description: "Pattern matching with regex.",
          subtopics: [
            { id: "regex-syntax", title: "Regex Syntax (/pattern/flags)" },
            {
              id: "character-classes",
              title: "Character Classes ([a-z], \\d, \\w, \\s)",
            },
            { id: "quantifiers", title: "Quantifiers (+, *, ?, {n}, {n,m})" },
            { id: "anchors-boundaries", title: "Anchors (^, $, \\b)" },
            { id: "groups-capturing", title: "Groups & Capturing ()" },
            {
              id: "lookahead-behind",
              title: "Lookahead & Lookbehind (?=, ?<!)",
            },
            {
              id: "regex-methods",
              title: "test(), match(), matchAll(), replace(), split()",
            },
            { id: "named-groups", title: "Named Capture Groups (?<name>)" },
            { id: "regex-flags", title: "Flags: g, i, m, s, u, d" },
          ],
        },
        {
          id: "web-apis",
          title: "Web APIs — Fetch, Storage, Timers & Observers",
          description: "Browser-provided APIs.",
          subtopics: [
            { id: "fetch-api", title: "Fetch API (GET, POST, headers, body)" },
            {
              id: "fetch-error-handling",
              title: "Fetch error handling patterns",
            },
            { id: "localstorage", title: "localStorage & sessionStorage" },
            { id: "indexeddb-intro", title: "IndexedDB (intro)" },
            { id: "settimeout-interval", title: "setTimeout & setInterval" },
            { id: "request-animation", title: "requestAnimationFrame" },
            { id: "intersection-observer", title: "IntersectionObserver API" },
            { id: "mutation-observer", title: "MutationObserver API" },
            { id: "url-api", title: "URL & URLSearchParams API" },
            { id: "form-data", title: "FormData & multipart uploads" },
          ],
        },
        {
          id: "typed-arrays",
          title: "Typed Arrays & Binary Data",
          description: "Working with binary data in JavaScript.",
          subtopics: [
            {
              id: "arraybuffer",
              title: "ArrayBuffer — fixed-length binary buffer",
            },
            {
              id: "typed-array-views",
              title: "Typed Array Views (Uint8Array, Float32Array)",
            },
            { id: "dataview", title: "DataView — fine-grained buffer access" },
            { id: "blob-api", title: "Blob & File constructors" },
            {
              id: "text-encoder-decoder",
              title: "TextEncoder & TextDecoder (UTF-8)",
            },
            { id: "base64-encoding", title: "Base64 Encoding (btoa/atob)" },
          ],
        },
        {
          id: "intl-api",
          title: "Internationalization (Intl API)",
          description: "Locale-aware formatting and comparison.",
          subtopics: [
            {
              id: "intl-number",
              title: "Intl.NumberFormat (currency, percent)",
            },
            {
              id: "intl-datetime",
              title: "Intl.DateTimeFormat (locale dates)",
            },
            {
              id: "intl-relative-time",
              title: "Intl.RelativeTimeFormat ('3 days ago')",
            },
            {
              id: "intl-collator",
              title: "Intl.Collator (locale-aware sorting)",
            },
            {
              id: "intl-plural-rules",
              title: "Intl.PluralRules (pluralization)",
            },
            {
              id: "intl-list-format",
              title: "Intl.ListFormat ('A, B, and C')",
            },
            {
              id: "intl-segmenter",
              title: "Intl.Segmenter (word/sentence splitting)",
            },
          ],
        },
        {
          id: "abort-cancellation",
          title: "AbortController & Cancellation",
          description: "Cancelling async operations.",
          subtopics: [
            {
              id: "abort-controller",
              title: "AbortController & AbortSignal",
            },
            { id: "abort-fetch", title: "Cancelling Fetch Requests" },
            {
              id: "abort-event-listeners",
              title: "Cancelling Event Listeners (signal)",
            },
            {
              id: "abort-timeout",
              title: "AbortSignal.timeout() — auto-cancel",
            },
            {
              id: "abort-any",
              title: "AbortSignal.any() — multiple signals",
            },
            {
              id: "cancel-patterns",
              title: "Cancellation Patterns for Custom Async",
            },
          ],
        },
        {
          id: "event-advanced",
          title: "Advanced Event Handling — CustomEvent & Composition",
          description: "Beyond basic event listeners.",
          subtopics: [
            {
              id: "custom-event",
              title: "CustomEvent — Creating & Dispatching",
            },
            {
              id: "event-target-class",
              title: "EventTarget as a Class (Pub/Sub)",
            },
            {
              id: "passive-events",
              title: "Passive Event Listeners (scroll perf)",
            },
            { id: "event-composition", title: "Composed Events & Shadow DOM" },
            {
              id: "pointer-events",
              title: "Pointer Events (mouse + touch unified)",
            },
            { id: "keyboard-events", title: "Keyboard Events & Key Codes" },
            { id: "drag-drop-events", title: "Native Drag & Drop API" },
          ],
        },
        {
          id: "collections-advanced",
          title: "WeakMap, WeakSet & WeakRef — Weak References",
          description: "Memory-friendly collections.",
          subtopics: [
            { id: "weakmap-basics", title: "WeakMap — API & Use Cases" },
            { id: "weakset-basics", title: "WeakSet — API & Use Cases" },
            { id: "weakref-api", title: "WeakRef — Weak Object References" },
            {
              id: "finalization-registry",
              title: "FinalizationRegistry — Cleanup Callbacks",
            },
            {
              id: "private-data-weakmap",
              title: "Private Data with WeakMap Pattern",
            },
            {
              id: "dom-metadata-weakmap",
              title: "DOM Metadata Storage with WeakMap",
            },
          ],
        },
        {
          id: "structured-data",
          title: "Structured Clone & Data Serialization",
          description: "Deep copying and data transfer.",
          subtopics: [
            { id: "structured-clone", title: "structuredClone() — Deep Copy" },
            { id: "transferable-objects", title: "Transferable Objects" },
            {
              id: "json-limitations",
              title: "JSON.stringify Limitations (functions, Date, etc.)",
            },
            {
              id: "postmessage-clone",
              title: "postMessage & Structured Clone",
            },
            {
              id: "circular-references",
              title: "Handling Circular References",
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
      description: "Core data structures.",
      topics: [
        {
          id: "linked-lists",
          title: "Linked Lists — Singly, Doubly & Operations",
          description: "Linked list implementations.",
          subtopics: [
            { id: "singly-linked", title: "Singly Linked List — Node class" },
            { id: "doubly-linked", title: "Doubly Linked List" },
            {
              id: "ll-insert-delete",
              title: "Insert & Delete (head, tail, middle)",
            },
            {
              id: "ll-reverse",
              title: "Reverse a Linked List (iterative & recursive)",
            },
            {
              id: "ll-cycle-detection",
              title: "Cycle Detection (Floyd's algorithm)",
            },
            { id: "ll-merge-sorted", title: "Merge Two Sorted Lists" },
            { id: "ll-nth-from-end", title: "Nth Node from End" },
            { id: "ll-middle", title: "Find Middle of Linked List" },
            { id: "ll-intersection", title: "Intersection of Two Lists" },
          ],
        },
        {
          id: "stacks-queues",
          title: "Stacks & Queues — LIFO, FIFO & Monotonic",
          description: "LIFO and FIFO structures.",
          subtopics: [
            { id: "stack-impl", title: "Stack Implementation (array & LL)" },
            { id: "queue-impl", title: "Queue Implementation" },
            { id: "deque", title: "Deque (Double-Ended Queue)" },
            { id: "circular-queue", title: "Circular Queue" },
            { id: "monotonic-stack", title: "Monotonic Stack" },
            { id: "balanced-brackets", title: "Balanced Brackets Problem" },
            { id: "min-stack", title: "Min Stack — O(1) getMin" },
            { id: "queue-using-stacks", title: "Queue using Two Stacks" },
            { id: "next-greater-element", title: "Next Greater Element" },
          ],
        },
        {
          id: "hash-maps",
          title: "Hash Maps & Sets",
          description: "Hash-based data structures.",
          subtopics: [
            { id: "js-map", title: "JavaScript Map — when to use" },
            { id: "js-set", title: "JavaScript Set — uniqueness" },
            { id: "frequency-counter", title: "Frequency Counter Pattern" },
            { id: "two-sum-hashmap", title: "Two Sum (hash map approach)" },
            { id: "anagram-check", title: "Anagram Check" },
            { id: "group-anagrams", title: "Group Anagrams" },
            { id: "first-unique-char", title: "First Unique Character" },
            { id: "subarray-sum-k", title: "Subarray Sum equals K" },
            {
              id: "longest-consecutive",
              title: "Longest Consecutive Sequence",
            },
          ],
        },
        {
          id: "sliding-window",
          title: "Sliding Window Patterns",
          description: "Sliding window technique deep dive.",
          subtopics: [
            {
              id: "fixed-window",
              title: "Fixed Size Window — max sum subarray",
            },
            {
              id: "variable-window",
              title: "Variable Size Window — when to shrink",
            },
            {
              id: "longest-substring",
              title: "Longest Substring Without Repeats",
            },
            { id: "min-window-substring", title: "Minimum Window Substring" },
            { id: "permutation-in-string", title: "Permutation in String" },
            {
              id: "longest-ones",
              title: "Longest Subarray of 1s (with k flips)",
            },
          ],
        },
        {
          id: "binary-search-advanced",
          title: "Binary Search — Advanced Patterns & Variants",
          description: "Advanced binary search techniques.",
          subtopics: [
            { id: "bs-lower-upper-bound", title: "Lower Bound & Upper Bound" },
            { id: "bs-on-answer", title: "Binary Search on Answer" },
            {
              id: "bs-min-max",
              title: "Binary Search for Min/Max (optimization)",
            },
            { id: "bs-matrix", title: "Binary Search in 2D Matrix" },
            {
              id: "bs-rotated-array",
              title: "Search in Rotated Array (with dupes)",
            },
            { id: "bs-peak-element", title: "Find Peak Element" },
            {
              id: "bs-capacity",
              title: "Capacity to Ship Packages (BS on answer)",
            },
            {
              id: "bs-koko-bananas",
              title: "Koko Eating Bananas (BS on answer)",
            },
          ],
        },
        {
          id: "recursion-patterns",
          title: "Recursion Patterns",
          description: "Common recursive problem-solving patterns.",
          subtopics: [
            {
              id: "generate-subsets",
              title: "Generate All Subsets (power set)",
            },
            { id: "generate-permutations", title: "Generate Permutations" },
            { id: "string-permutations", title: "String Permutations" },
            { id: "tower-of-hanoi", title: "Tower of Hanoi" },
            { id: "print-subsequences", title: "Print All Subsequences" },
            {
              id: "maze-paths",
              title: "Count Paths in a Grid (recursion)",
            },
            {
              id: "combination-sum-rec",
              title: "Combination Sum (recursive)",
            },
          ],
        },
        {
          id: "divide-conquer",
          title: "Divide & Conquer Strategy",
          description: "Breaking problems into subproblems.",
          subtopics: [
            { id: "dc-intro", title: "Divide & Conquer Paradigm" },
            {
              id: "merge-sort-analysis",
              title: "Merge Sort — Analysis & Invariants",
            },
            {
              id: "quick-select",
              title: "Quickselect — Kth Smallest (O(n) avg)",
            },
            {
              id: "count-inversions",
              title: "Count Inversions (merge sort variant)",
            },
            { id: "closest-pair", title: "Closest Pair of Points" },
            {
              id: "dc-matrix-multiply",
              title: "Matrix Multiply — Strassen Idea",
            },
          ],
        },
        {
          id: "interval-problems",
          title: "Interval & Range Problems",
          description: "Working with intervals and ranges.",
          subtopics: [
            { id: "merge-intervals", title: "Merge Overlapping Intervals" },
            {
              id: "insert-interval",
              title: "Insert Interval into Sorted List",
            },
            { id: "meeting-rooms", title: "Meeting Rooms (can attend all?)" },
            {
              id: "meeting-rooms-ii",
              title: "Meeting Rooms II (min rooms needed)",
            },
            {
              id: "non-overlapping",
              title: "Non-Overlapping Intervals (min removals)",
            },
            {
              id: "interval-intersection",
              title: "Interval List Intersection",
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
      description: "Mid-level interview prep.",
      topics: [
        {
          id: "runtime-concepts-qa",
          title: "JS Runtime Concepts Q&A",
          description: "How JavaScript works under the hood.",
          subtopics: [
            { id: "event-loop", title: "Explain the Event Loop in detail" },
            { id: "call-stack", title: "Call Stack explained (LIFO)" },
            { id: "micro-macro", title: "Microtasks vs Macrotasks" },
            { id: "task-queue", title: "Task Queue vs Microtask Queue order" },
            {
              id: "settimeout-0",
              title: "Why setTimeout(fn, 0) isn't instant",
            },
            {
              id: "promise-execution-order",
              title: "Promise execution order quiz",
            },
          ],
        },
        {
          id: "async-qa",
          title: "Async & Promises Q&A",
          description: "Async-related interview questions.",
          subtopics: [
            {
              id: "promise-vs-callback",
              title: "Promise vs Callback (advantages)",
            },
            {
              id: "promise-states",
              title: "Promise States (pending/fulfilled/rejected)",
            },
            {
              id: "async-error-handling",
              title: "Async Error Handling patterns",
            },
            {
              id: "parallel-vs-sequential",
              title: "Parallel vs Sequential async — when to use",
            },
            {
              id: "async-iterator-qa",
              title: "Async Iterators & for await...of",
            },
            {
              id: "promise-all-vs-race",
              title: "Promise.all vs race vs any vs allSettled",
            },
          ],
        },
        {
          id: "oop-qa",
          title: "OOP & Prototypes Q&A",
          description: "Object-oriented programming questions.",
          subtopics: [
            { id: "prototype-chain-qa", title: "Explain the Prototype Chain" },
            {
              id: "class-vs-prototype",
              title: "Class syntax vs prototype approach",
            },
            {
              id: "new-keyword-qa",
              title: "What does 'new' keyword do? (4 steps)",
            },
            {
              id: "object-create-qa",
              title: "Object.create() vs new vs Object.assign",
            },
            {
              id: "composition-vs-inheritance",
              title: "Composition vs Inheritance",
            },
          ],
        },
        {
          id: "coding-challenges-qa",
          title: "Coding Challenges",
          description: "Live coding interview questions.",
          subtopics: [
            { id: "flatten-array", title: "Flatten a nested array (3 ways)" },
            { id: "deep-clone", title: "Implement deep clone" },
            { id: "implement-debounce", title: "Implement debounce function" },
            { id: "implement-throttle", title: "Implement throttle function" },
            { id: "curry-function", title: "Implement curry function" },
            {
              id: "promise-polyfill",
              title: "Write a simple Promise polyfill",
            },
            { id: "pipe-compose", title: "Implement pipe() & compose()" },
          ],
        },
        {
          id: "module-pattern-qa",
          title: "Modules & Patterns Q&A",
          description: "Module system interview questions.",
          subtopics: [
            {
              id: "esm-vs-cjs-qa",
              title: "ESM vs CJS — differences & interop",
            },
            {
              id: "tree-shaking-qa",
              title: "What is tree shaking? How does it work?",
            },
            {
              id: "dynamic-import-qa",
              title: "When to use dynamic import()?",
            },
            {
              id: "circular-deps-qa",
              title: "What happens with circular dependencies?",
            },
            {
              id: "module-vs-script-qa",
              title: "script vs module — differences",
            },
            {
              id: "barrel-file-qa",
              title: "Barrel files — pros and cons",
            },
          ],
        },
        {
          id: "regex-qa",
          title: "Regular Expressions Q&A",
          description: "Regex interview questions.",
          subtopics: [
            {
              id: "regex-basics-qa",
              title: "What is a regex? How does it work?",
            },
            {
              id: "regex-email-qa",
              title: "Write a regex for email validation",
            },
            {
              id: "regex-lookahead-qa",
              title: "Explain lookahead & lookbehind",
            },
            {
              id: "regex-groups-qa",
              title: "Capturing vs Non-Capturing Groups",
            },
            {
              id: "regex-performance-qa",
              title: "Regex performance pitfalls (catastrophic backtracking)",
            },
            {
              id: "regex-replace-qa",
              title: "String.replace with regex — patterns",
            },
          ],
        },
        {
          id: "web-apis-qa",
          title: "Web APIs & Browser Q&A",
          description: "Browser API interview questions.",
          subtopics: [
            { id: "fetch-vs-xhr-qa", title: "fetch() vs XMLHttpRequest" },
            { id: "cors-basic-qa", title: "What is CORS? Simple vs Preflight" },
            {
              id: "localstorage-vs-session-qa",
              title: "localStorage vs sessionStorage vs cookies",
            },
            {
              id: "indexeddb-qa",
              title: "When to use IndexedDB over localStorage?",
            },
            {
              id: "observer-apis-qa",
              title: "IntersectionObserver vs MutationObserver",
            },
            {
              id: "abort-controller-qa",
              title: "How does AbortController cancel requests?",
            },
          ],
        },
        {
          id: "data-structures-qa",
          title: "Data Structures Interview Q&A",
          description: "Linked list, stack, queue interview questions.",
          subtopics: [
            {
              id: "ll-vs-array-qa",
              title: "Linked List vs Array — trade-offs",
            },
            {
              id: "stack-usage-qa",
              title: "Stack real-world use cases (undo, call stack)",
            },
            {
              id: "queue-usage-qa",
              title: "Queue patterns (BFS, task scheduling)",
            },
            {
              id: "hashmap-internals-qa",
              title: "How does a HashMap work internally?",
            },
            {
              id: "collision-handling-qa",
              title: "Hash Collision strategies explained",
            },
            {
              id: "sliding-window-qa",
              title: "Explain Sliding Window technique",
            },
            {
              id: "binary-search-qa",
              title: "When to apply Binary Search? (sorted + monotonic)",
            },
          ],
        },
      ],
    },
  ],
};
