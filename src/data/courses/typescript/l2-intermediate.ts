import { Level } from "@/types";

export const l2Level: Level = {
  id: "mid",
  title: "Intermediate TypeScript",
  description: "Mid-level Dev",
  color: "#fb923c",
  modules: [
    // ── TS ───────────────────────────────────────────────
    {
      id: "ts",
      title: "TS",
      icon: "binary",
      color: "#3178c6",
      description: "Intermediate TypeScript features.",
      topics: [
        {
          id: "mapped-types",
          title: "Mapped Types",
          description: "Transforming existing types with mapped types.",
          subtopics: [
            {
              id: "mapped-type-syntax",
              title: "Mapped Type Syntax { [K in keyof T]: ... }",
            },
            { id: "keyof-in-mapped", title: "keyof in Mapped Types" },
            {
              id: "mapped-modifiers",
              title: "Mapped Type Modifiers (+?, -?, +readonly, -readonly)",
            },
            {
              id: "partial-implementation",
              title: "Implementing Partial<T> manually",
            },
            {
              id: "required-implementation",
              title: "Implementing Required<T> manually",
            },
            {
              id: "readonly-implementation",
              title: "Implementing Readonly<T> manually",
            },
            {
              id: "record-implementation",
              title: "Implementing Record<K,V> manually",
            },
            {
              id: "pick-implementation",
              title: "Implementing Pick<T,K> manually",
            },
            {
              id: "omit-implementation",
              title: "Implementing Omit<T,K> manually",
            },
            {
              id: "remapping-keys",
              title: "Key Remapping (as clause in mapped types)",
            },
            {
              id: "filtering-keys",
              title: "Filtering Keys with never in mapped types",
            },
          ],
        },
        {
          id: "conditional-types",
          title: "Conditional Types",
          description: "Types that depend on conditions.",
          subtopics: [
            { id: "conditional-syntax", title: "T extends U ? X : Y syntax" },
            {
              id: "distributive-conditional",
              title: "Distributive Conditional Types",
            },
            {
              id: "non-distributive",
              title: "Non-distributive (wrapping in tuple)",
            },
            { id: "nested-conditional", title: "Nested Conditional Types" },
            {
              id: "conditional-with-union",
              title: "Conditional Types & Union distribution",
            },
            {
              id: "nonnullable-impl",
              title: "Implementing NonNullable<T> manually",
            },
            { id: "flatten-type", title: "Flatten<T> type implementation" },
            { id: "exclude-impl", title: "Implementing Exclude<T,U> manually" },
          ],
        },
        {
          id: "infer-keyword",
          title: "infer Keyword",
          description: "Type inference inside conditional types.",
          subtopics: [
            { id: "infer-syntax", title: "infer syntax in conditional types" },
            {
              id: "returntype-impl",
              title: "Implementing ReturnType<T> with infer",
            },
            {
              id: "parameters-impl",
              title: "Implementing Parameters<T> with infer",
            },
            { id: "awaited-impl", title: "Implementing Awaited<T> with infer" },
            {
              id: "instance-type-impl",
              title: "Implementing InstanceType<T> with infer",
            },
            { id: "infer-tuple", title: "Inferring Tuple Element Types" },
            {
              id: "infer-string-parts",
              title: "Inferring String Parts (template literals + infer)",
            },
            { id: "deep-infer", title: "Deeply Inferring Nested Types" },
          ],
        },
        {
          id: "template-literal-types",
          title: "Template Literal Types",
          description: "String manipulation at the type level.",
          subtopics: [
            {
              id: "template-literal-syntax",
              title: "Template Literal Type Syntax (`${string}`)",
            },
            {
              id: "combining-literals",
              title: "Combining String Literal Unions",
            },
            { id: "uppercase-lowercase", title: "Uppercase<S>, Lowercase<S>" },
            {
              id: "capitalize-uncapitalize",
              title: "Capitalize<S>, Uncapitalize<S>",
            },
            {
              id: "property-event-types",
              title: "Creating Event Name Types from Properties",
            },
            {
              id: "template-literal-infer",
              title: "Template Literal + infer (string parsing)",
            },
            {
              id: "css-property-types",
              title: "CSS Property Type Safety example",
            },
            {
              id: "orm-types-preview",
              title: "ORM-style Type Safety (findBy* pattern)",
            },
          ],
        },
        {
          id: "advanced-utility-types",
          title: "Advanced Utility Types",
          description: "Lesser-known but powerful built-in utility types.",
          subtopics: [
            { id: "awaited-type", title: "Awaited<T> — unwrap Promise type" },
            {
              id: "instance-type",
              title: "InstanceType<T> — class instance type",
            },
            { id: "constructor-params", title: "ConstructorParameters<T>" },
            { id: "this-type", title: "ThisType<T> — contextual this" },
            { id: "this-parameter-type", title: "ThisParameterType<T>" },
            { id: "omit-this-param", title: "OmitThisParameter<T>" },
            {
              id: "uppercase-lower-utils",
              title: "String Manipulation Utilities",
            },
            {
              id: "intrinsic-string-types",
              title: "Intrinsic String Types under the hood",
            },
          ],
        },
        {
          id: "declaration-files",
          title: "Declaration Files (.d.ts)",
          description: "Writing and using TypeScript declarations.",
          subtopics: [
            { id: "what-are-d-ts", title: "What are .d.ts files?" },
            {
              id: "at-types-packages",
              title: "@types packages (DefinitelyTyped)",
            },
            {
              id: "ambient-declarations",
              title: "Ambient Declarations (declare)",
            },
            { id: "ambient-modules", title: "Ambient Module Declarations" },
            {
              id: "global-augmentation",
              title: "Global Augmentation (declare global)",
            },
            {
              id: "module-augmentation",
              title: "Module Augmentation (extend 3rd party types)",
            },
            {
              id: "triple-slash-directives",
              title: "Triple-Slash Directives (/// <reference>)",
            },
            {
              id: "writing-lib-types",
              title: "Writing Library Type Declarations",
            },
          ],
        },
        {
          id: "module-system-ts",
          title: "Module System in TypeScript",
          description: "ES modules, CommonJS, and TypeScript resolution.",
          subtopics: [
            {
              id: "es-modules-ts",
              title: "ES Modules import/export in TypeScript",
            },
            {
              id: "type-only-imports",
              title: "Type-Only Imports (import type)",
            },
            { id: "export-type", title: "export type — type-only exports" },
            {
              id: "namespace-intro",
              title: "Namespaces (legacy module system)",
            },
            {
              id: "module-resolution",
              title: "Module Resolution (node, bundler, classic)",
            },
            { id: "paths-baseurl", title: "paths & baseUrl in tsconfig" },
            { id: "isolatedModules", title: "isolatedModules flag" },
            { id: "esm-cjs-interop", title: "ESM & CJS Interoperability" },
          ],
        },
        {
          id: "tsconfig-in-depth",
          title: "tsconfig.json — In Depth",
          description: "Compiler options deep dive.",
          subtopics: [
            {
              id: "strict-flags",
              title: "strict & related flags (noImplicitAny, strictNullChecks)",
            },
            {
              id: "target-option",
              title: "target — output JS version (ES5, ES2022)",
            },
            {
              id: "lib-option",
              title: "lib — TypeScript built-in type libraries",
            },
            { id: "module-option", title: "module — output module format" },
            { id: "out-dir-root-dir", title: "outDir & rootDir" },
            { id: "source-maps", title: "sourceMap & declaration options" },
            {
              id: "skip-lib-check",
              title: "skipLibCheck & skipDefaultLibCheck",
            },
            { id: "resolve-json-module", title: "resolveJsonModule" },
            {
              id: "composite-incremental",
              title: "composite & incremental build",
            },
            { id: "extends-tsconfig", title: "Extending tsconfig (extends)" },
            {
              id: "project-references",
              title: "Project References (references)",
            },
          ],
        },
        {
          id: "decorators-ts",
          title: "Decorators",
          description: "TypeScript decorator API.",
          subtopics: [
            {
              id: "decorator-intro",
              title: "What are Decorators? (experimentalDecorators vs Stage 3)",
            },
            { id: "class-decorators", title: "Class Decorators" },
            { id: "method-decorators", title: "Method Decorators" },
            { id: "property-decorators", title: "Property Decorators" },
            { id: "parameter-decorators", title: "Parameter Decorators" },
            { id: "accessor-decorators", title: "Accessor Decorators" },
            {
              id: "decorator-factories",
              title: "Decorator Factories (parameterized decorators)",
            },
            {
              id: "reflect-metadata",
              title: "reflect-metadata (metadata annotations)",
            },
            {
              id: "decorator-composition",
              title: "Decorator Composition & Execution Order",
            },
            {
              id: "stage3-decorators",
              title: "TC39 Stage 3 Decorators (new spec)",
            },
          ],
        },
        {
          id: "symbols-unique",
          title: "Symbol & unique symbol",
          description: "Symbol types in TypeScript.",
          subtopics: [
            { id: "symbol-type", title: "symbol type annotation" },
            {
              id: "unique-symbol",
              title: "unique symbol — nominal-like typing",
            },
            { id: "symbol-as-keys", title: "Symbol as Object Keys" },
            {
              id: "well-known-symbols",
              title: "Well-Known Symbols (Symbol.iterator, Symbol.hasInstance)",
            },
            { id: "symbol-brand", title: "Branded Types via unique symbol" },
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
      description: "Intermediate typed data structures.",
      topics: [
        {
          id: "generic-tree",
          title: "Generic Binary Tree & BST",
          description: "Typed tree data structures.",
          subtopics: [
            { id: "tree-node-type", title: "TreeNode<T> type definition" },
            { id: "bst-generic", title: "BST<T> — insert, search, delete" },
            {
              id: "inorder-typed",
              title: "In-order, Pre-order, Post-order traversal (typed)",
            },
            { id: "bst-min-max", title: "Min/Max in BST (typed)" },
            { id: "height-typed", title: "Tree Height calculation (typed)" },
            { id: "lca-typed", title: "Lowest Common Ancestor (typed)" },
          ],
        },
        {
          id: "generic-hash-map",
          title: "Generic Hash Map Implementation",
          description: "Type-safe custom hash map.",
          subtopics: [
            {
              id: "hashmap-generic",
              title: "HashMap<K, V> interface & implementation",
            },
            {
              id: "separate-chaining",
              title: "Separate Chaining (typed buckets)",
            },
            { id: "open-addressing", title: "Open Addressing (typed)" },
            {
              id: "hashmap-operations",
              title: "get, set, delete, has (all typed)",
            },
          ],
        },
        {
          id: "typed-graph",
          title: "Generic Graph Implementation",
          description: "Typed graph with adjacency list.",
          subtopics: [
            { id: "graph-node-type", title: "GraphNode<T> type" },
            {
              id: "adjacency-list-typed",
              title: "Adjacency List (Map<T, T[]>)",
            },
            { id: "bfs-typed", title: "BFS<T> with typed visited set" },
            { id: "dfs-typed", title: "DFS<T> with typed stack/recursion" },
            {
              id: "directed-undirected",
              title: "Directed vs Undirected typed",
            },
          ],
        },
        {
          id: "recursive-types-dsa",
          title: "Recursive Types in DSA",
          description: "Using recursive type definitions.",
          subtopics: [
            { id: "json-type", title: "JSON type (recursive)" },
            {
              id: "nested-array-type",
              title: "Nested Array Type (NestedArray<T>)",
            },
            {
              id: "tree-type-recursive",
              title: "Tree<T> as recursive type alias",
            },
            { id: "deep-partial-dsa", title: "DeepPartial<T> implementation" },
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
      description: "Intermediate TypeScript interview prep.",
      topics: [
        {
          id: "mapped-conditional-qa",
          title: "Mapped & Conditional Types Q&A",
          description: "Interview questions on mapped & conditional types.",
          subtopics: [
            {
              id: "mapped-type-explain-qa",
              title: "What is a mapped type? Give example.",
            },
            { id: "modifier-qa", title: "Explain -? and -readonly modifiers" },
            { id: "conditional-type-qa", title: "What is a conditional type?" },
            {
              id: "distributive-qa",
              title: "What is a distributive conditional type?",
            },
            {
              id: "implement-deep-partial-qa",
              title: "Implement DeepPartial<T>",
            },
            {
              id: "filter-keys-qa",
              title: "Filter keys of a type by value type",
            },
          ],
        },
        {
          id: "infer-template-qa",
          title: "infer & Template Literal Types Q&A",
          description: "Questions on infer and template literal types.",
          subtopics: [
            { id: "infer-explain-qa", title: "Explain the infer keyword" },
            {
              id: "implement-returntype-qa",
              title: "Implement ReturnType<T> using infer",
            },
            {
              id: "template-literal-explain-qa",
              title: "What are template literal types?",
            },
            {
              id: "string-manipulation-qa",
              title: "Explain Uppercase / Lowercase utility types",
            },
            {
              id: "event-type-template-qa",
              title: "Create OnClick / OnChange types using template literals",
            },
          ],
        },
        {
          id: "declaration-files-qa",
          title: "Declaration Files Q&A",
          description: "Questions about .d.ts and @types.",
          subtopics: [
            {
              id: "d-ts-purpose-qa",
              title: "What is a .d.ts file? When do you need one?",
            },
            { id: "at-types-qa", title: "What are @types packages?" },
            {
              id: "module-augmentation-qa",
              title: "How do you augment a third-party module's types?",
            },
            { id: "global-augment-qa", title: "How do you add a global type?" },
            {
              id: "ambient-declare-qa",
              title: "What does declare do in TypeScript?",
            },
          ],
        },
        {
          id: "tsconfig-qa",
          title: "tsconfig & Build Q&A",
          description: "Questions about TypeScript configuration.",
          subtopics: [
            { id: "strict-flags-qa", title: "What does strict: true enable?" },
            {
              id: "target-lib-qa",
              title: "Difference between target and lib in tsconfig?",
            },
            {
              id: "isolatedmodules-qa",
              title: "What is isolatedModules and why is it needed?",
            },
            {
              id: "paths-baseurl-qa",
              title: "How do paths & baseUrl work for imports?",
            },
            {
              id: "project-references-qa",
              title: "What are TypeScript project references?",
            },
          ],
        },
        {
          id: "mid-coding-challenges",
          title: "Mid-Level Coding Challenges",
          description: "Intermediate TypeScript interview coding problems.",
          subtopics: [
            {
              id: "implement-pick-qa",
              title: "Implement Pick<T, K> from scratch",
            },
            { id: "deep-readonly-qa", title: "Implement DeepReadonly<T>" },
            { id: "tuple-to-union-qa", title: "Tuple to Union type" },
            {
              id: "union-to-intersection-qa",
              title: "Union to Intersection type",
            },
            {
              id: "last-of-tuple-qa",
              title: "Last<T> — last element of tuple",
            },
            {
              id: "awaited-impl-qa",
              title: "Implement Awaited<T> from scratch",
            },
          ],
        },
      ],
    },
  ],
};
