import { Level } from "@/types";

export const l1Level: Level = {
  id: "junior",
  title: "Core TypeScript",
  description: "Junior Dev",
  color: "#818cf8",
  modules: [
    // ── TS ───────────────────────────────────────────────
    {
      id: "ts",
      title: "TS",
      icon: "binary",
      color: "#3178c6",
      description: "Core TypeScript features.",
      topics: [
        {
          id: "interfaces-in-depth",
          title: "Interfaces — In Depth",
          description: "Advanced interface features and patterns.",
          subtopics: [
            { id: "optional-props", title: "Optional Properties (?)" },
            { id: "readonly-props", title: "Readonly Properties" },
            { id: "method-signatures", title: "Method Signatures" },
            {
              id: "extending-interfaces",
              title: "Extending Interfaces (extends)",
            },
            { id: "multiple-extends", title: "Multiple Interface Extension" },
            {
              id: "declaration-merging",
              title: "Declaration Merging (open interfaces)",
            },
            {
              id: "interface-for-class",
              title: "Interfaces for Classes (implements)",
            },
            {
              id: "hybrid-types",
              title: "Hybrid Types (callable + properties)",
            },
            {
              id: "interface-vs-abstract",
              title: "interface vs abstract class",
            },
          ],
        },
        {
          id: "type-aliases-in-depth",
          title: "Type Aliases — In Depth",
          description: "Advanced type alias patterns.",
          subtopics: [
            { id: "intersection-types", title: "Intersection Types (A & B)" },
            {
              id: "type-alias-union",
              title: "Union & Intersection Type Aliases",
            },
            {
              id: "mapped-type-preview",
              title: "Mapped Types preview (intro)",
            },
            {
              id: "conditional-type-preview",
              title: "Conditional Types preview (intro)",
            },
            { id: "type-alias-recursive", title: "Recursive Type Aliases" },
            {
              id: "type-alias-utility",
              title: "Type Alias with Utility Types",
            },
            {
              id: "type-vs-interface-detail",
              title: "type vs interface — detailed comparison",
            },
          ],
        },
        {
          id: "generics-fundamentals",
          title: "Generics — Fundamentals",
          description: "Reusable code with type parameters.",
          subtopics: [
            { id: "generic-functions", title: "Generic Functions <T>" },
            {
              id: "multiple-type-params",
              title: "Multiple Type Parameters <T, U>",
            },
            { id: "generic-interfaces", title: "Generic Interfaces" },
            { id: "generic-type-aliases", title: "Generic Type Aliases" },
            { id: "generic-classes", title: "Generic Classes" },
            {
              id: "generic-constraints",
              title: "Generic Constraints (extends)",
            },
            { id: "default-type-params", title: "Default Type Parameters" },
            { id: "generic-inference", title: "Type Argument Inference" },
            { id: "keyof-in-generics", title: "keyof with Generics" },
            {
              id: "generic-best-practices",
              title: "Generic Naming Conventions & Best Practices",
            },
          ],
        },
        {
          id: "union-intersection-advanced",
          title: "Union & Intersection Types — Advanced",
          description: "Advanced union and intersection usage.",
          subtopics: [
            { id: "union-exhaustiveness", title: "Exhaustive Union Handling" },
            { id: "tagged-union", title: "Tagged (Discriminated) Unions" },
            { id: "intersection-merging", title: "Intersection Type Merging" },
            { id: "keyof-operator", title: "keyof operator" },
            {
              id: "typeof-operator-ts",
              title: "typeof operator in type position",
            },
            {
              id: "indexed-access-types",
              title: "Indexed Access Types (T[K])",
            },
            { id: "union-distribution", title: "Union Distribution in types" },
          ],
        },
        {
          id: "literal-types",
          title: "Literal Types & const Assertions",
          description: "Exact value types and const assertions.",
          subtopics: [
            { id: "string-literals", title: "String Literal Types" },
            { id: "number-literals", title: "Number Literal Types" },
            {
              id: "boolean-literals",
              title: "Boolean Literal Types (true / false)",
            },
            {
              id: "literal-union",
              title: "Literal Union Types ('left' | 'right' | 'center')",
            },
            {
              id: "const-assertion",
              title: "as const assertion — widening prevention",
            },
            {
              id: "const-object-assertion",
              title: "as const on objects & arrays",
            },
            { id: "satisfies-intro", title: "satisfies operator introduction" },
          ],
        },
        {
          id: "type-narrowing",
          title: "Type Narrowing — Guards & Patterns",
          description: "Narrowing union types to specific members.",
          subtopics: [
            { id: "typeof-narrowing", title: "typeof type guard" },
            { id: "instanceof-narrowing", title: "instanceof type guard" },
            { id: "in-narrowing", title: "in operator narrowing" },
            {
              id: "equality-narrowing",
              title: "Equality Narrowing (=== / !==)",
            },
            { id: "truthiness-narrowing", title: "Truthiness Narrowing" },
            { id: "assignment-narrowing", title: "Assignment Narrowing" },
            {
              id: "discriminated-unions",
              title: "Discriminated Unions pattern",
            },
            { id: "never-exhaustive", title: "never in Exhaustiveness Checks" },
            {
              id: "user-defined-guards",
              title: "User-Defined Type Guards (is keyword)",
            },
          ],
        },
        {
          id: "classes-ts",
          title: "Classes with TypeScript",
          description: "OOP with TypeScript class features.",
          subtopics: [
            { id: "class-fields-ts", title: "Class Fields with Types" },
            {
              id: "public-private-protected",
              title: "Access Modifiers (public, private, protected)",
            },
            { id: "readonly-class-fields", title: "Readonly Class Fields" },
            {
              id: "parameter-properties",
              title: "Parameter Properties (constructor shorthand)",
            },
            { id: "abstract-classes", title: "Abstract Classes & Methods" },
            {
              id: "implements-interface",
              title: "implements — Class vs Interface",
            },
            { id: "class-static-ts", title: "Static Members in TypeScript" },
            {
              id: "private-fields-ts",
              title: "Private Fields (#) vs private modifier",
            },
            { id: "override-keyword", title: "override keyword" },
            { id: "this-type-classes", title: "this type in Classes" },
          ],
        },
        {
          id: "enums-in-depth",
          title: "Enums — In Depth",
          description: "Advanced enum usage and patterns.",
          subtopics: [
            {
              id: "numeric-enum-adv",
              title: "Numeric Enum (initializers & auto-increment)",
            },
            {
              id: "string-enum-adv",
              title: "String Enum (all explicit values)",
            },
            { id: "const-enum", title: "const enum (compile-time inlining)" },
            { id: "computed-enum-members", title: "Computed Enum Members" },
            { id: "enum-as-type", title: "Enum as a Type" },
            { id: "enum-ambient", title: "Ambient Enums (declare enum)" },
            { id: "enum-pitfalls", title: "Enum Pitfalls & Alternatives" },
            {
              id: "enum-object-pattern",
              title: "Enum Pattern with const object (alternative)",
            },
          ],
        },
        {
          id: "functions-advanced-types",
          title: "Functions — Advanced Types",
          description: "Function overloads, this, and callback types.",
          subtopics: [
            { id: "function-overloads", title: "Function Overloads" },
            {
              id: "overload-signatures",
              title: "Overload Signatures & Implementation",
            },
            { id: "this-param", title: "this Parameter in Functions" },
            { id: "callback-types", title: "Typed Callback Functions" },
            { id: "generic-callbacks", title: "Generic Callback Types" },
            {
              id: "void-vs-undefined",
              title: "void vs undefined in return types",
            },
            {
              id: "construct-signatures",
              title: "Construct Signatures (new() => T)",
            },
            {
              id: "parameter-destructuring-ts",
              title: "Parameter Destructuring with Types",
            },
          ],
        },
        {
          id: "utility-types-basics",
          title: "Utility Types — Core Set",
          description: "Built-in TypeScript utility types.",
          subtopics: [
            { id: "partial-type", title: "Partial<T> — all optional" },
            { id: "required-type", title: "Required<T> — all required" },
            { id: "readonly-type", title: "Readonly<T> — all readonly" },
            { id: "record-type", title: "Record<K, V> — key-value map" },
            { id: "pick-type", title: "Pick<T, K> — select keys" },
            { id: "omit-type", title: "Omit<T, K> — exclude keys" },
            {
              id: "exclude-type",
              title: "Exclude<T, U> — subtract union members",
            },
            { id: "extract-type", title: "Extract<T, U> — keep union members" },
            {
              id: "nonnullable-type",
              title: "NonNullable<T> — remove null/undefined",
            },
            {
              id: "returntype-type",
              title: "ReturnType<T> — function return type",
            },
            {
              id: "parameters-type",
              title: "Parameters<T> — function params as tuple",
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
      description: "Generic data structures in TypeScript.",
      topics: [
        {
          id: "generic-stack-queue",
          title: "Generic Stack & Queue",
          description: "Type-safe stack and queue implementations.",
          subtopics: [
            { id: "generic-stack", title: "Stack<T> implementation" },
            {
              id: "stack-push-pop-peek",
              title: "push, pop, peek with type safety",
            },
            { id: "generic-queue", title: "Queue<T> implementation" },
            { id: "deque-generic", title: "Deque<T> (double-ended queue)" },
            {
              id: "stack-use-cases",
              title: "Stack Use Cases (balanced parens typed)",
            },
            { id: "queue-use-cases", title: "Queue Use Cases (BFS typed)" },
          ],
        },
        {
          id: "generic-linked-list",
          title: "Generic Linked List",
          description: "Building a fully typed linked list.",
          subtopics: [
            { id: "node-type", title: "Node<T> type definition" },
            {
              id: "singly-linked",
              title: "SinglyLinkedList<T> — insert, delete, search",
            },
            { id: "doubly-linked", title: "DoublyLinkedList<T>" },
            { id: "linked-list-reverse", title: "Reverse a Typed Linked List" },
            { id: "linked-list-cycle", title: "Cycle Detection (typed)" },
          ],
        },
        {
          id: "typed-searching-sorting",
          title: "Typed Searching & Sorting",
          description: "Algorithms with TypeScript generics.",
          subtopics: [
            {
              id: "binary-search-generic",
              title: "Binary Search <T extends Comparable>",
            },
            {
              id: "typed-bubble-sort",
              title: "Bubble Sort with typed comparator",
            },
            { id: "typed-merge-sort", title: "Merge Sort<T> with comparator" },
            { id: "typed-quick-sort", title: "Quick Sort<T>" },
            { id: "comparator-type", title: "Defining Comparator<T> type" },
          ],
        },
        {
          id: "recursion-ts",
          title: "Recursion with TypeScript",
          description: "Recursive algorithms with proper TS types.",
          subtopics: [
            { id: "factorial-ts", title: "Factorial (typed return)" },
            { id: "fibonacci-ts", title: "Fibonacci (typed memoization)" },
            { id: "flatten-typed", title: "Flatten Nested Array (typed)" },
            { id: "tree-traversal-ts", title: "Tree Traversal (typed nodes)" },
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
      description: "Junior TypeScript interview prep.",
      topics: [
        {
          id: "generics-qa",
          title: "Generics Q&A",
          description: "Interview questions about TypeScript generics.",
          subtopics: [
            {
              id: "what-are-generics-qa",
              title: "What are Generics and why use them?",
            },
            {
              id: "generic-constraint-qa",
              title: "What is a generic constraint (extends)?",
            },
            {
              id: "generic-inference-qa",
              title: "When does TypeScript infer type arguments?",
            },
            { id: "generic-vs-any-qa", title: "Generics vs any — difference?" },
            {
              id: "multiple-params-qa",
              title: "Explain <T, K extends keyof T> pattern",
            },
            { id: "generic-class-qa", title: "How do generic classes work?" },
          ],
        },
        {
          id: "interface-type-qa",
          title: "Interface vs Type Q&A",
          description: "Deep-dive interview questions on type vs interface.",
          subtopics: [
            {
              id: "decl-merging-qa",
              title: "Declaration merging — what and why?",
            },
            {
              id: "interface-extend-qa",
              title: "Can interfaces extend types and vice versa?",
            },
            {
              id: "union-in-interface-qa",
              title: "Can interfaces represent union types?",
            },
            {
              id: "type-alias-recursive-qa",
              title: "Can type aliases be recursive?",
            },
            {
              id: "intersection-vs-extend-qa",
              title: "Intersection (&) vs extends — difference?",
            },
          ],
        },
        {
          id: "narrowing-guards-qa",
          title: "Narrowing & Type Guards Q&A",
          description: "Questions about type narrowing techniques.",
          subtopics: [
            {
              id: "typeof-instanceof-qa",
              title: "typeof vs instanceof narrowing",
            },
            {
              id: "discriminated-union-qa",
              title: "Explain discriminated unions",
            },
            {
              id: "user-defined-guard-qa",
              title: "Write a user-defined type guard",
            },
            {
              id: "exhaustive-check-qa",
              title: "What is exhaustiveness checking?",
            },
            {
              id: "in-operator-narrowing-qa",
              title: "How does the in operator narrow types?",
            },
          ],
        },
        {
          id: "classes-oop-qa",
          title: "Classes & OOP Q&A",
          description: "Interview questions about classes in TypeScript.",
          subtopics: [
            {
              id: "access-modifiers-qa",
              title: "public vs private vs protected",
            },
            {
              id: "abstract-class-qa",
              title: "abstract class vs interface — difference?",
            },
            {
              id: "parameter-properties-qa",
              title: "What are parameter properties?",
            },
            { id: "override-qa", title: "Why use the override keyword?" },
            {
              id: "private-vs-hash-qa",
              title: "private keyword vs # — difference?",
            },
          ],
        },
        {
          id: "utility-types-qa",
          title: "Utility Types Q&A",
          description: "Questions about built-in TypeScript utility types.",
          subtopics: [
            { id: "partial-required-qa", title: "Partial<T> vs Required<T>" },
            { id: "pick-omit-qa", title: "Pick<T,K> vs Omit<T,K>" },
            { id: "record-qa", title: "Record<K,V> — when to use?" },
            { id: "exclude-extract-qa", title: "Exclude<T,U> vs Extract<T,U>" },
            {
              id: "returntype-params-qa",
              title: "ReturnType<T> & Parameters<T> use cases",
            },
            {
              id: "implement-partial-qa",
              title: "Implement Partial<T> from scratch",
            },
          ],
        },
        {
          id: "junior-coding-challenges",
          title: "Junior Coding Challenges",
          description: "Junior-level TypeScript coding exercises.",
          subtopics: [
            {
              id: "generic-identity-qa",
              title: "Write a generic identity function",
            },
            {
              id: "typed-filter-qa",
              title: "Implement a typed filter<T> function",
            },
            {
              id: "keyof-usage-qa",
              title: "Access object property safely with keyof",
            },
            {
              id: "discriminated-impl-qa",
              title: "Implement a discriminated union for shapes",
            },
            {
              id: "class-generic-qa",
              title: "Build a generic Container<T> class",
            },
            {
              id: "typed-event-qa",
              title: "Type a simple event handler system",
            },
          ],
        },
      ],
    },
  ],
};
