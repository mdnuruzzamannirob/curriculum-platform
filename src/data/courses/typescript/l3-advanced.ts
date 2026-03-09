import { Level } from "@/types";

export const l3Level: Level = {
  id: "senior",
  title: "Advanced TypeScript",
  description: "Senior Dev",
  color: "#c084fc",
  modules: [
    // ── TS ───────────────────────────────────────────────
    {
      id: "ts",
      title: "TS",
      icon: "binary",
      color: "#3178c6",
      description: "Deep TypeScript type system mastery.",
      topics: [
        {
          id: "advanced-generics",
          title: "Advanced Generics — Constraints, Variance & Inference",
          description: "Expert-level generic type programming.",
          subtopics: [
            {
              id: "higher-order-generics",
              title: "Higher-Order Generic Functions",
            },
            {
              id: "generic-class-constraints",
              title: "Generic Class Constraints",
            },
            { id: "covariance-intro", title: "Covariance of Generic Types" },
            {
              id: "contravariance-intro",
              title: "Contravariance of Function Parameters",
            },
            {
              id: "in-out-annotations",
              title: "in/out Variance Annotations (TS 4.7+)",
            },
            {
              id: "strict-function-types",
              title: "strictFunctionTypes & method vs function variance",
            },
            {
              id: "generic-spread-tuples",
              title: "Generics with Variadic Tuples",
            },
            {
              id: "instantiation-expressions",
              title: "Generic Instantiation Expressions (TS 4.7)",
            },
            {
              id: "const-type-params",
              title: "const Type Parameters (TS 5.0)",
            },
          ],
        },
        {
          id: "recursive-types-advanced",
          title: "Recursive Types — Advanced Patterns",
          description: "Complex self-referential types.",
          subtopics: [
            { id: "deep-readonly", title: "DeepReadonly<T> implementation" },
            { id: "deep-partial", title: "DeepPartial<T> implementation" },
            { id: "deep-required", title: "DeepRequired<T> implementation" },
            {
              id: "json-type-recursive",
              title: "JSON Value type (recursive union)",
            },
            { id: "path-of-type", title: "Nested Object Path type (Paths<T>)" },
            { id: "deep-pick", title: "DeepPick<T, Path> implementation" },
            {
              id: "recursive-breadth-limit",
              title: "TypeScript Recursive Depth Limits",
            },
            {
              id: "tail-recursion-tco-types",
              title: "Tail Recursion Optimization in Types",
            },
          ],
        },
        {
          id: "variadic-tuple-types",
          title: "Variadic Tuple Types",
          description: "TypeScript 4.0+ tuple spread and variadic types.",
          subtopics: [
            { id: "spreading-tuples", title: "Spreading Tuple Types" },
            {
              id: "variadic-generics",
              title: "Variadic Generic Tuples (...T)",
            },
            { id: "concat-tuple-type", title: "Concat<T, U> tuple type" },
            {
              id: "prepend-append-tuple",
              title: "Prepend & Append to Tuples at type level",
            },
            { id: "tuple-to-union", title: "Tuple to Union type" },
            {
              id: "union-to-tuple",
              title: "Union to Tuple (advanced, ordering caveat)",
            },
            { id: "labeled-tuple-spreading", title: "Labeled Tuple Spreading" },
          ],
        },
        {
          id: "type-level-programming",
          title: "Type-Level Programming",
          description: "Computation at the TypeScript type level.",
          subtopics: [
            {
              id: "type-level-arithmetic",
              title: "Type-Level Arithmetic (increment/decrement)",
            },
            {
              id: "string-type-manipulation",
              title: "String Manipulation at Type Level",
            },
            {
              id: "type-level-conditionals",
              title: "Complex Conditional Type Chains",
            },
            { id: "equal-types", title: "IsEqual<A, B> type implementation" },
            {
              id: "function-composition-types",
              title: "Function Composition Types",
            },
            {
              id: "type-level-state-machine",
              title: "Type-Level State Machine",
            },
            {
              id: "hkt-simulation",
              title: "HKT Simulation (Higher-Kinded Types)",
            },
          ],
        },
        {
          id: "nominal-branded-types",
          title: "Nominal Types & Branded Types",
          description: "Structural vs nominal type system patterns.",
          subtopics: [
            {
              id: "structural-vs-nominal",
              title: "Structural vs Nominal Typing",
            },
            { id: "branded-types-pattern", title: "Branded Types Pattern" },
            {
              id: "opaque-types",
              title: "Opaque Types — as unknown as T pattern",
            },
            { id: "unique-symbol-branding", title: "unique symbol as Brand" },
            { id: "brand-type-helpers", title: "Brand<T, Brand> helper type" },
            {
              id: "validated-ids",
              title: "Type-Safe IDs (UserId, OrderId) pattern",
            },
            {
              id: "currency-amount-brand",
              title: "Safe Currency/Amount types with branding",
            },
          ],
        },
        {
          id: "satisfies-operator",
          title: "satisfies Operator",
          description: "TypeScript 4.9 satisfies keyword.",
          subtopics: [
            { id: "satisfies-syntax", title: "satisfies Syntax & Usage" },
            { id: "satisfies-vs-as", title: "satisfies vs as assertion" },
            {
              id: "satisfies-vs-colon",
              title: "satisfies vs : type annotation",
            },
            {
              id: "satisfies-with-objects",
              title: "satisfies with Object Literals",
            },
            {
              id: "satisfies-use-cases",
              title: "Real-World satisfies Use Cases",
            },
          ],
        },
        {
          id: "user-defined-type-guards",
          title: "User-Defined Type Guards & Assertion Functions",
          description: "Custom type predicates and asserts.",
          subtopics: [
            { id: "is-predicate", title: "Type Predicates (param is Type)" },
            {
              id: "assertion-functions",
              title: "Assertion Functions (asserts param is Type)",
            },
            {
              id: "asserts-void",
              title: "asserts condition (assert function)",
            },
            { id: "combining-guards", title: "Combining Type Guards" },
            { id: "guard-with-generics", title: "Generic Type Guards" },
            {
              id: "runtime-validation-guards",
              title: "Type Guards for Runtime Validation",
            },
          ],
        },
        {
          id: "performance-optimization-ts",
          title: "TypeScript Performance & Optimization",
          description: "Optimizing TypeScript compilation.",
          subtopics: [
            {
              id: "type-instantiation-limits",
              title: "Type Instantiation Limits & errors",
            },
            {
              id: "lazy-types",
              title: "Lazy Types to avoid deep instantiation",
            },
            {
              id: "skip-lib-check-perf",
              title: "skipLibCheck for build speed",
            },
            {
              id: "project-refs-perf",
              title: "Project References for large codebases",
            },
            {
              id: "incremental-builds",
              title: "Incremental Builds (.tsbuildinfo)",
            },
            {
              id: "isolated-declarations",
              title: "isolatedDeclarations (TS 5.5)",
            },
            {
              id: "type-checking-profiling",
              title: "Profiling tsc with --diagnostics & --extendedDiagnostics",
            },
          ],
        },
        {
          id: "typescript-compiler-api",
          title: "TypeScript Compiler API — Basics",
          description: "Using the TS compiler programmatically.",
          subtopics: [
            { id: "ts-program", title: "ts.createProgram basics" },
            { id: "ast-nodes", title: "AST Nodes — ts.Node, ts.SourceFile" },
            {
              id: "ast-traversal",
              title: "AST Traversal (ts.forEachChild, ts.visitEachChild)",
            },
            {
              id: "type-checker",
              title: "TypeChecker API (getTypeAtLocation)",
            },
            {
              id: "code-generation",
              title: "Code Generation (ts.createPrinter)",
            },
            {
              id: "ts-morph-intro",
              title: "ts-morph — higher-level Compiler API wrapper",
            },
          ],
        },
        {
          id: "advanced-patterns",
          title: "Advanced TypeScript Patterns",
          description: "Expert design and architecture patterns.",
          subtopics: [
            {
              id: "builder-pattern-ts",
              title: "Builder Pattern with full type inference",
            },
            {
              id: "fluent-api-ts",
              title: "Fluent API pattern (method chaining types)",
            },
            {
              id: "readonly-pattern",
              title: "Immutability Patterns (as const, Readonly hierarchy)",
            },
            {
              id: "discriminated-union-pattern",
              title: "Discriminated Union as State Machine",
            },
            {
              id: "functor-monad-ts",
              title: "Functor & Monad patterns in TypeScript",
            },
            {
              id: "type-safe-router",
              title: "Type-Safe Router pattern (params extraction)",
            },
            {
              id: "type-safe-event-emitter",
              title: "Fully Typed Event Emitter pattern",
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
      description: "Advanced typed algorithms & data structures.",
      topics: [
        {
          id: "typed-trie",
          title: "Type-Safe Trie",
          description: "Generic Trie (prefix tree) implementation.",
          subtopics: [
            { id: "trie-node-type", title: "TrieNode<T> type" },
            { id: "trie-insert-search", title: "INSERT & SEARCH (typed)" },
            { id: "trie-prefix-match", title: "Prefix Match (typed)" },
            {
              id: "autocomplete-typed",
              title: "Autocomplete System (typed Trie)",
            },
            { id: "trie-delete", title: "Delete from Trie (typed)" },
          ],
        },
        {
          id: "typed-priority-queue",
          title: "Generic Priority Queue (Heap)",
          description: "Min/max heap with type parameters.",
          subtopics: [
            { id: "heap-type", title: "Heap<T> with comparator type" },
            { id: "min-heap-typed", title: "MinHeap<T> implementation" },
            { id: "max-heap-typed", title: "MaxHeap<T> implementation" },
            { id: "heap-push-pop", title: "push & pop typed operations" },
            { id: "heapify-typed", title: "heapify algorithm (typed)" },
            {
              id: "priority-queue-use",
              title: "PriorityQueue<T> use cases (Dijkstra)",
            },
          ],
        },
        {
          id: "typed-graph-algorithms",
          title: "Type-Safe Graph Algorithms",
          description: "Advanced graph traversal with full type safety.",
          subtopics: [
            {
              id: "dijkstra-typed",
              title: "Dijkstra's Algorithm (typed weighted graph)",
            },
            {
              id: "topological-sort-typed",
              title: "Topological Sort (typed DAG)",
            },
            {
              id: "union-find-typed",
              title: "Union-Find (Disjoint Set) typed",
            },
            {
              id: "cycle-detection-typed",
              title: "Cycle detection in typed graph",
            },
            { id: "bellman-ford-typed", title: "Bellman-Ford typed" },
          ],
        },
        {
          id: "dp-typed",
          title: "Dynamic Programming with TypeScript",
          description: "Typed memoization and DP solutions.",
          subtopics: [
            {
              id: "memo-cache-type",
              title: "Memoization cache type (Map<string, T>)",
            },
            { id: "dp-table-typed", title: "DP table (number[][] with types)" },
            { id: "knapsack-typed", title: "0/1 Knapsack (typed)" },
            {
              id: "lcs-typed",
              title: "LCS — Longest Common Subsequence (typed)",
            },
            {
              id: "coin-change-typed",
              title: "Coin Change (typed state transition)",
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
      description: "Senior TypeScript interview prep.",
      topics: [
        {
          id: "advanced-generics-qa",
          title: "Advanced Generics & Variance Q&A",
          description: "Senior-level generic type questions.",
          subtopics: [
            {
              id: "variance-explain-qa",
              title: "Explain covariance vs contravariance",
            },
            {
              id: "in-out-annotations-qa",
              title: "What are in/out variance annotations?",
            },
            {
              id: "strictFunctionTypes-qa",
              title: "What does strictFunctionTypes do?",
            },
            {
              id: "hkt-qa",
              title: "What are HKTs and how do you simulate them in TS?",
            },
            {
              id: "instantiation-expression-qa",
              title: "What are generic instantiation expressions?",
            },
          ],
        },
        {
          id: "recursive-complex-types-qa",
          title: "Recursive & Complex Types Q&A",
          description: "Questions about advanced type constructs.",
          subtopics: [
            {
              id: "deep-readonly-explain-qa",
              title: "Implement DeepReadonly<T>",
            },
            {
              id: "paths-type-qa",
              title: "Implement Paths<T> — all nested key paths",
            },
            { id: "deep-pick-qa", title: "Implement DeepPick<T, Path>" },
            {
              id: "hkt-simulation-qa",
              title: "How to simulate HKT in TypeScript?",
            },
            {
              id: "recursive-limits-qa",
              title: "TypeScript recursive depth — what & why?",
            },
          ],
        },
        {
          id: "branded-nominal-qa",
          title: "Branded & Nominal Types Q&A",
          description: "Questions about structural vs nominal patterns.",
          subtopics: [
            {
              id: "branded-type-explain-qa",
              title: "What are branded types? How to implement?",
            },
            { id: "opaque-types-qa", title: "What are opaque types?" },
            {
              id: "unique-symbol-brand-qa",
              title: "Using unique symbol for branding",
            },
            {
              id: "structural-nominal-qa",
              title: "Structural vs Nominal typing — trade-offs",
            },
          ],
        },
        {
          id: "compiler-performance-qa",
          title: "Compiler & Performance Q&A",
          description: "TypeScript compiler and performance questions.",
          subtopics: [
            {
              id: "tsc-api-qa",
              title: "How do you use the TypeScript Compiler API?",
            },
            { id: "ts-morph-qa", title: "What is ts-morph?" },
            {
              id: "project-references-perf-qa",
              title: "How do project references improve build speed?",
            },
            {
              id: "incremental-build-qa",
              title: "What is incremental compilation in TS?",
            },
            {
              id: "deep-nested-slow-qa",
              title: "Why do deeply nested types slow down tsc?",
            },
          ],
        },
        {
          id: "senior-coding-challenges",
          title: "Senior Coding Challenges",
          description: "Advanced TypeScript type-level challenges.",
          subtopics: [
            {
              id: "union-to-intersection-challenge",
              title: "Union to Intersection type (hard)",
            },
            {
              id: "curry-types-challenge",
              title: "Type a curried function (Curry<F>)",
            },
            {
              id: "pipe-types-challenge",
              title: "Type a pipe/compose function",
            },
            {
              id: "permutations-type-challenge",
              title: "Permutations<T> of a union",
            },
            {
              id: "string-split-type-challenge",
              title: "Split<S, D> string type at type level",
            },
            {
              id: "jsonify-challenge",
              title: "Jsonify<T> — serialize to JSON-safe types",
            },
          ],
        },
      ],
    },
  ],
};
