import { Level } from "@/types";

export const l5Level: Level = {
  id: "mastery",
  title: "TypeScript Mastery",
  description: "Expert / Principal",
  color: "#f0abfc",
  modules: [
    // ── TS ───────────────────────────────────────────────
    {
      id: "ts",
      title: "TS",
      icon: "binary",
      color: "#3178c6",
      description: "Expert-level TypeScript mastery.",
      topics: [
        {
          id: "type-level-mastery",
          title: "Type-Level Programming Mastery",
          description: "Advanced computation at the type level.",
          subtopics: [
            {
              id: "church-encoding-ts",
              title: "Church Encoding at the type level",
            },
            {
              id: "peano-arithmetic-types",
              title: "Peano Arithmetic in types (Add, Subtract)",
            },
            { id: "type-level-parser", title: "Type-Level String Parser" },
            {
              id: "type-level-calculator",
              title: "Type-Level Expression Calculator",
            },
            {
              id: "compile-time-assertions",
              title: "Compile-Time Assertions (assertNever, etc.)",
            },
            {
              id: "type-challenge-extreme",
              title: "extreme type-challenges (TwoSum, Hanoi at type level)",
            },
          ],
        },
        {
          id: "advanced-design-patterns",
          title: "Advanced Design Patterns with TypeScript",
          description: "Full type-safe implementation of classic patterns.",
          subtopics: [
            {
              id: "builder-ts-full",
              title: "Builder Pattern — type-safe step chaining",
            },
            {
              id: "factory-ts-full",
              title: "Factory Pattern with discriminated union return",
            },
            {
              id: "observer-ts-full",
              title: "Observer Pattern — typed subject/observer",
            },
            {
              id: "strategy-ts-full",
              title: "Strategy Pattern — typed algorithm family",
            },
            {
              id: "decorator-pattern-ts",
              title: "Decorator Pattern — typed wrapping",
            },
            {
              id: "proxy-ts-full",
              title: "Proxy Pattern — TypeScript Proxy<T>",
            },
            {
              id: "command-ts-full",
              title: "Command Pattern — type-safe execute/undo",
            },
            {
              id: "state-machine-ts",
              title: "State Machine Pattern — typed transitions",
            },
            {
              id: "dependency-injection-ts",
              title: "Dependency Injection with generics & interfaces",
            },
          ],
        },
        {
          id: "typescript-ecosystem-mastery",
          title: "TypeScript Ecosystem Mastery",
          description: "Leading libraries and tools in the TS ecosystem.",
          subtopics: [
            {
              id: "type-fest",
              title: "type-fest — community utility types library",
            },
            {
              id: "ts-toolbelt",
              title: "ts-toolbelt — advanced type utilities",
            },
            {
              id: "ts-pattern",
              title: "ts-pattern — pattern matching library",
            },
            {
              id: "zod-advanced",
              title: "Zod Advanced (discriminated unions, pipeline)",
            },
            {
              id: "trpc-architecture",
              title: "tRPC — end-to-end type-safe API",
            },
            {
              id: "ts-morph-advanced",
              title: "ts-morph — advanced AST manipulation",
            },
            {
              id: "typedoc",
              title: "TypeDoc — type-aware documentation generation",
            },
            {
              id: "ts-jest-advanced",
              title: "ts-jest & Vitest advanced configuration",
            },
          ],
        },
        {
          id: "writing-ts-libraries",
          title: "Writing TypeScript Libraries",
          description: "Publishing fully-typed NPM libraries.",
          subtopics: [
            {
              id: "library-tsconfig",
              title: "Library tsconfig setup (declaration, declarationMap)",
            },
            {
              id: "exports-field",
              title: "package.json exports field & types entry",
            },
            {
              id: "bundling-library",
              title: "Bundling a library with tsup / rollup",
            },
            { id: "peer-deps-types", title: "peerDependencies vs @types" },
            {
              id: "dual-cjs-esm",
              title: "Dual CJS + ESM package with TypeScript",
            },
            {
              id: "backward-compat-types",
              title: "Backward Compatibility for .d.ts files",
            },
            {
              id: "changelog-types",
              title: "Versioning & Changelog for type changes",
            },
            {
              id: "typescript-strict-api",
              title: "Designing a Strict Public API surface",
            },
          ],
        },
        {
          id: "typescript-compiler-plugins",
          title: "TypeScript Compiler Plugins & Transformers",
          description: "Extending and transforming the TypeScript compiler.",
          subtopics: [
            {
              id: "custom-transformer",
              title: "Writing a Custom TypeScript Transformer",
            },
            { id: "ts-patch", title: "ts-patch — patching the TS compiler" },
            { id: "ttypescript", title: "ttypescript setup" },
            {
              id: "transformer-api",
              title: "Transformer API (visitNode, visitEachChild)",
            },
            { id: "emit-helpers", title: "Emit Helpers (importStar, etc.)" },
            {
              id: "reflection-decorator",
              title: "Reflection + Decorators (reflect-metadata)",
            },
          ],
        },
        {
          id: "typescript-rfcs-proposals",
          title: "TypeScript RFCs, Proposals & Roadmap",
          description: "Keeping up with the TypeScript language evolution.",
          subtopics: [
            {
              id: "typescript-release-notes",
              title: "How to read TypeScript Release Notes",
            },
            {
              id: "tc39-vs-ts",
              title: "TC39 proposals vs TypeScript-only features",
            },
            {
              id: "upcoming-features",
              title:
                "Upcoming TypeScript Features (decorators, isolatedDeclarations)",
            },
            {
              id: "ts-design-goals",
              title: "TypeScript Design Goals & Non-Goals",
            },
            {
              id: "ts-playground-nightly",
              title: "Using TypeScript Playground (nightly builds)",
            },
            { id: "contributing-ts", title: "Contributing to TypeScript OSS" },
          ],
        },
        {
          id: "type-safe-dsl",
          title: "Building Type-Safe DSLs",
          description: "Design type-safe domain-specific languages.",
          subtopics: [
            {
              id: "query-builder-dsl",
              title: "Type-Safe SQL Query Builder DSL",
            },
            { id: "form-builder-dsl", title: "Type-Safe Form Builder" },
            {
              id: "router-dsl",
              title: "Type-Safe Router (like TanStack Router)",
            },
            {
              id: "validation-dsl",
              title: "Validation DSL with chainable methods",
            },
            {
              id: "state-machine-dsl",
              title: "Type-Safe State Machine DSL (like XState)",
            },
            {
              id: "css-in-ts-dsl",
              title: "CSS Utility DSL type safety (Tailwind Merge types)",
            },
          ],
        },
        {
          id: "micro-frontend-types",
          title: "TypeScript in Micro-Frontends",
          description: "Type sharing in distributed frontend architectures.",
          subtopics: [
            {
              id: "module-federation-types",
              title: "Module Federation TypeScript types",
            },
            {
              id: "shared-contract-types",
              title: "Shared Contract Types between MFEs",
            },
            {
              id: "event-bus-mfe-types",
              title: "Typed Event Bus for MFE communication",
            },
            {
              id: "type-safe-iframes",
              title: "Type-Safe postMessage communication",
            },
          ],
        },
        {
          id: "ci-cd-ts",
          title: "TypeScript in CI/CD",
          description: "Automating type safety in pipelines.",
          subtopics: [
            { id: "type-check-ci", title: "Running tsc --noEmit in CI" },
            {
              id: "type-coverage",
              title: "Type Coverage Tools (type-coverage, typescript-coverage)",
            },
            {
              id: "declaration-bundling-ci",
              title: "Bundling .d.ts files in CI (rollup-plugin-dts)",
            },
            {
              id: "breaking-change-types-ci",
              title: "Detecting Breaking Type Changes (api-extractor)",
            },
            {
              id: "automated-type-tests",
              title: "Automated Type Tests (dtslint, tsd)",
            },
          ],
        },
        {
          id: "functional-ts",
          title: "Functional Programming in TypeScript",
          description: "FP patterns and libraries with TypeScript.",
          subtopics: [
            { id: "pure-functions-ts", title: "Pure Functions & Immutability" },
            {
              id: "fp-ts-intro",
              title: "fp-ts library (Option, Either, IO, Task)",
            },
            { id: "functor-ts", title: "Functor pattern in TypeScript" },
            { id: "monad-ts", title: "Monad pattern (chain, flatMap) typed" },
            {
              id: "pipe-flow-ts",
              title: "pipe & flow (fp-ts) with type inference",
            },
            {
              id: "optics-ts",
              title: "Optics in TypeScript (monocle-ts, optics-ts)",
            },
            { id: "immer-ts", title: "Immer with TypeScript (Draft<T>)" },
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
      description: "Expert-level typed algorithms.",
      topics: [
        {
          id: "advanced-typed-algorithms",
          title: "Complex Algorithms with TypeScript",
          description: "Competition-level algorithms with full type safety.",
          subtopics: [
            {
              id: "segment-tree-typed",
              title: "Segment Tree<T> (range queries)",
            },
            { id: "fenwick-tree-typed", title: "Fenwick Tree (BIT) typed" },
            { id: "red-black-tree-typed", title: "Red-Black Tree<T> typed" },
            { id: "avl-tree-typed", title: "AVL Tree<T> typed" },
            {
              id: "kd-tree-typed",
              title: "K-D Tree for nearest neighbor (typed)",
            },
            {
              id: "lru-cache-typed",
              title: "LRU Cache<K,V> with doubly linked list + Map",
            },
          ],
        },
        {
          id: "fp-dsa",
          title: "Functional Data Structures in TypeScript",
          description: "Persistent and immutable data structures.",
          subtopics: [
            {
              id: "persistent-list",
              title: "Persistent Linked List (immutable)",
            },
            {
              id: "persistent-tree",
              title: "Persistent Tree (structural sharing)",
            },
            {
              id: "zipper-pattern",
              title: "Zipper Pattern (navigating immutable structures)",
            },
            {
              id: "lazy-sequence-ts",
              title: "Lazy Sequence / Stream (typed generator)",
            },
          ],
        },
        {
          id: "system-design-ts",
          title: "System Design with TypeScript",
          description: "Typed system design implementations.",
          subtopics: [
            {
              id: "typed-cache",
              title: "Multi-level Cache with TypeScript generics",
            },
            {
              id: "typed-rate-limiter",
              title: "Rate Limiter (typed Token Bucket)",
            },
            {
              id: "typed-circuit-breaker",
              title: "Circuit Breaker pattern (typed state machine)",
            },
            { id: "typed-message-queue", title: "In-memory Message Queue<T>" },
            {
              id: "typed-observable",
              title: "Observable<T> (RxJS-style) implementation",
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
      description: "Expert / Principal TypeScript interview prep.",
      topics: [
        {
          id: "principal-ts-qa",
          title: "Principal / Staff Engineer TS Q&A",
          description: "Expert-level conceptual and design questions.",
          subtopics: [
            {
              id: "ts-design-goals-qa",
              title: "What are TypeScript's design goals?",
            },
            {
              id: "soundness-qa",
              title: "Is TypeScript sound? Explain unsoundness.",
            },
            {
              id: "erased-types-qa",
              title: "TypeScript types are erased — implications?",
            },
            {
              id: "structural-typing-tradeoffs-qa",
              title: "Structural typing trade-offs at scale",
            },
            {
              id: "ts-vs-flow-qa",
              title: "TypeScript vs Flow — architecture differences",
            },
            {
              id: "ts-emit-dts-qa",
              title: "How does tsc decide what to emit in .d.ts?",
            },
          ],
        },
        {
          id: "system-design-ts-qa",
          title: "System Design with TypeScript Q&A",
          description: "Type-safe system design decisions.",
          subtopics: [
            {
              id: "api-contracts-qa",
              title: "How do you enforce API contracts with TypeScript?",
            },
            {
              id: "shared-types-strategy-qa",
              title: "Strategy for sharing types at scale",
            },
            {
              id: "breaking-changes-qa",
              title: "How to manage breaking type changes in libraries?",
            },
            {
              id: "event-driven-typed-qa",
              title: "How to type an event-driven architecture?",
            },
            {
              id: "typed-fsm-qa",
              title: "Implement a type-safe Finite State Machine",
            },
          ],
        },
        {
          id: "oss-library-ts-qa",
          title: "TypeScript OSS & Library Architecture Q&A",
          description: "Questions about building and maintaining TS libraries.",
          subtopics: [
            {
              id: "d-ts-bundle-qa",
              title: "How do you bundle .d.ts files for a library?",
            },
            {
              id: "api-extractor-qa",
              title: "What is API Extractor and why use it?",
            },
            {
              id: "dual-package-qa",
              title: "Dual CJS + ESM TypeScript package setup",
            },
            {
              id: "major-version-types-qa",
              title: "How to version type definitions?",
            },
            { id: "dtslint-tsd-qa", title: "dtslint vs tsd for type testing" },
          ],
        },
        {
          id: "type-theory-qa",
          title: "Type System Theory Q&A",
          description: "Theoretical foundations of TypeScript's type system.",
          subtopics: [
            {
              id: "subtyping-qa",
              title: "What is subtyping? What is assignability?",
            },
            {
              id: "variance-theory-qa",
              title: "Covariance, Contravariance, Invariance explained",
            },
            {
              id: "bottom-top-types-qa",
              title: "Top (unknown) and Bottom (never) types",
            },
            {
              id: "type-widening-qa",
              title: "Type Widening & Narrowing in detail",
            },
            {
              id: "decidability-qa",
              title: "Is TypeScript's type system decidable?",
            },
            {
              id: "turing-complete-types-qa",
              title: "TypeScript type system is Turing complete — explain",
            },
          ],
        },
        {
          id: "expert-coding-challenges",
          title: "Expert Coding Challenges",
          description: "Hard type-level programming challenges.",
          subtopics: [
            {
              id: "achieve-ts-challenge",
              title: "IsNever<T>, IsAny<T>, IsUnion<T> types",
            },
            {
              id: "stringify-type",
              title: "Stringify<T> — TypeScript object to string type",
            },
            {
              id: "camelize-type",
              title: "CamelCase<S> & KebabCase<S> at type level",
            },
            {
              id: "deep-merge-type",
              title: "DeepMerge<A, B> type implementation",
            },
            {
              id: "printf-types",
              title: "Type-Safe printf / format string types",
            },
            {
              id: "trpc-type-impl",
              title: "Implement a minimal tRPC-style type-safe router",
            },
            {
              id: "zod-from-scratch",
              title: "Implement a minimal Zod-like schema builder",
            },
          ],
        },
      ],
    },
  ],
};
