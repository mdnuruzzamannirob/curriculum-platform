import { Level } from "@/types";

export const l0Level: Level = {
  id: "entry",
  title: "TypeScript Foundations",
  description: "Beginner",
  color: "#4ade80",
  modules: [
    // ── TS ───────────────────────────────────────────────
    {
      id: "ts",
      title: "TS",
      icon: "binary",
      color: "#3178c6",
      description: "TypeScript absolute basics.",
      topics: [
        {
          id: "what-is-typescript",
          title: "What is TypeScript & Setup",
          description: "Intro to TypeScript and environment setup.",
          subtopics: [
            { id: "ts-vs-js", title: "TypeScript vs JavaScript" },
            { id: "why-typescript", title: "Why TypeScript? (benefits)" },
            {
              id: "install-typescript",
              title: "Installing TypeScript (npm install -g typescript)",
            },
            { id: "tsc-compiler", title: "tsc — TypeScript Compiler" },
            { id: "ts-node", title: "ts-node & tsx for running TS files" },
            { id: "tsconfig-basics", title: "tsconfig.json — basic setup" },
            { id: "ts-extension", title: ".ts & .tsx file extensions" },
            { id: "transpilation", title: "Transpilation to JavaScript" },
            { id: "strict-mode-intro", title: "strict mode introduction" },
          ],
        },
        {
          id: "type-annotations",
          title: "Type Annotations — Primitives & Special Types",
          description: "Explicit type annotations for variables.",
          subtopics: [
            { id: "string-annotation", title: "string annotation" },
            { id: "number-annotation", title: "number annotation" },
            { id: "boolean-annotation", title: "boolean annotation" },
            { id: "null-undefined-ann", title: "null & undefined annotations" },
            { id: "void-type", title: "void — functions returning nothing" },
            { id: "never-type", title: "never — unreachable code / throws" },
            { id: "any-type", title: "any type — escape hatch" },
            { id: "unknown-type", title: "unknown type — type-safe any" },
            {
              id: "object-annotation",
              title: "object annotation (non-primitive)",
            },
            { id: "symbol-annotation", title: "symbol & unique symbol" },
          ],
        },
        {
          id: "type-inference",
          title: "Type Inference",
          description: "How TypeScript infers types automatically.",
          subtopics: [
            {
              id: "variable-inference",
              title: "Variable Inference from value",
            },
            { id: "best-common-type", title: "Best Common Type algorithm" },
            { id: "contextual-typing", title: "Contextual Typing" },
            { id: "return-type-infer", title: "Return Type Inference" },
            {
              id: "inference-limits",
              title: "When inference fails (use annotation)",
            },
            {
              id: "widening-narrowing-intro",
              title: "Widening & Narrowing intro",
            },
          ],
        },
        {
          id: "arrays-tuples",
          title: "Array & Tuple Types",
          description: "Typed arrays and fixed-length tuples.",
          subtopics: [
            { id: "typed-arrays", title: "Typed Arrays (string[], number[])" },
            { id: "array-generic", title: "Array<T> generic syntax" },
            { id: "readonly-array", title: "ReadonlyArray<T> & readonly T[]" },
            { id: "tuple-types", title: "Tuple Types [string, number]" },
            { id: "named-tuples", title: "Named Tuple Elements" },
            { id: "optional-tuple-elems", title: "Optional Tuple Elements" },
            { id: "rest-in-tuples", title: "Rest Elements in Tuples" },
            { id: "readonly-tuple", title: "Readonly Tuples" },
          ],
        },
        {
          id: "object-types",
          title: "Object Types",
          description: "Typing objects inline and with aliases.",
          subtopics: [
            {
              id: "inline-object-types",
              title: "Inline Object Type Annotations",
            },
            { id: "optional-properties", title: "Optional Properties (?)" },
            { id: "readonly-properties", title: "Readonly Properties" },
            { id: "nested-object-types", title: "Nested Object Types" },
            {
              id: "index-signatures",
              title: "Index Signatures { [key: string]: T }",
            },
            { id: "excess-property-check", title: "Excess Property Checking" },
            {
              id: "structural-typing",
              title: "Structural Typing (duck typing)",
            },
          ],
        },
        {
          id: "type-aliases",
          title: "Type Aliases",
          description: "Creating reusable type names.",
          subtopics: [
            { id: "type-keyword", title: "type keyword syntax" },
            { id: "aliasing-primitives", title: "Aliasing Primitive Types" },
            { id: "aliasing-objects", title: "Aliasing Object Types" },
            { id: "aliasing-unions", title: "Aliasing Union Types" },
            { id: "aliasing-functions", title: "Aliasing Function Types" },
            {
              id: "recursive-type-alias",
              title: "Recursive Type Aliases (intro)",
            },
            {
              id: "type-alias-vs-inline",
              title: "Type Alias vs Inline annotation",
            },
          ],
        },
        {
          id: "interfaces-intro",
          title: "Interfaces — Introduction",
          description: "Basic interface declarations.",
          subtopics: [
            { id: "interface-keyword", title: "interface keyword" },
            {
              id: "interface-properties",
              title: "Interface Properties & Types",
            },
            {
              id: "optional-interface-props",
              title: "Optional Properties in Interface",
            },
            {
              id: "readonly-interface",
              title: "Readonly Interface Properties",
            },
            {
              id: "interface-methods",
              title: "Method Signatures in Interface",
            },
            {
              id: "implementing-interface",
              title: "Implementing an Interface (class)",
            },
            {
              id: "type-vs-interface-basic",
              title: "type vs interface — basic difference",
            },
          ],
        },
        {
          id: "union-types-intro",
          title: "Union Types — Introduction",
          description: "Types that can be one of multiple values.",
          subtopics: [
            { id: "union-syntax", title: "Union Syntax (string | number)" },
            { id: "union-with-literals", title: "Union with Literal Types" },
            {
              id: "nullable-union",
              title: "Nullable Types (T | null | undefined)",
            },
            {
              id: "union-in-functions",
              title: "Union Types in Function Parameters",
            },
            { id: "discriminated-intro", title: "Discriminated Union (intro)" },
            { id: "narrowing-basic", title: "Basic Narrowing (typeof check)" },
          ],
        },
        {
          id: "type-assertions",
          title: "Type Assertions",
          description: "Overriding TypeScript's inferred types.",
          subtopics: [
            { id: "as-keyword", title: "as keyword syntax" },
            {
              id: "angle-bracket-assertion",
              title: "Angle-bracket Syntax (legacy)",
            },
            { id: "const-assertion", title: "as const — Const Assertion" },
            {
              id: "non-null-assertion",
              title: "Non-null Assertion Operator (!)",
            },
            {
              id: "double-assertion",
              title: "Double Assertion (as unknown as T)",
            },
            { id: "when-to-avoid", title: "When to Avoid Type Assertions" },
          ],
        },
        {
          id: "enums-intro",
          title: "Enums — Introduction",
          description: "Named constant sets.",
          subtopics: [
            { id: "numeric-enum", title: "Numeric Enum (auto-increment)" },
            { id: "string-enum", title: "String Enum (explicit values)" },
            { id: "heterogeneous-enum", title: "Heterogeneous Enum" },
            { id: "enum-access", title: "Accessing Enum Values" },
            {
              id: "enum-reverse-mapping",
              title: "Reverse Mapping in Numeric Enums",
            },
            {
              id: "const-enum-intro",
              title: "const enum (inline, no runtime object)",
            },
            {
              id: "enum-vs-union",
              title: "Enum vs Union Literal (when to use)",
            },
          ],
        },
        {
          id: "functions-typed",
          title: "Functions — Typed Parameters & Return Types",
          description: "Adding types to functions.",
          subtopics: [
            { id: "param-types", title: "Parameter Type Annotations" },
            { id: "return-type-ann", title: "Return Type Annotations" },
            {
              id: "optional-params-ts",
              title: "Optional Parameters (param?: type)",
            },
            { id: "default-params-ts", title: "Default Parameters with Types" },
            {
              id: "rest-params-ts",
              title: "Rest Parameters (...args: string[])",
            },
            {
              id: "function-type-expressions",
              title: "Function Type Expressions",
            },
            { id: "call-signatures", title: "Call Signatures in Object Types" },
            { id: "void-return", title: "void Return Type" },
            {
              id: "never-return",
              title: "never Return Type (throws / infinite loop)",
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
      description: "Type-safe basic data structures.",
      topics: [
        {
          id: "typed-arrays-dsa",
          title: "Typed Arrays & Basic Operations",
          description: "Working with strongly-typed arrays.",
          subtopics: [
            { id: "create-typed-array", title: "Creating Typed Arrays" },
            {
              id: "typed-push-pop",
              title: "push, pop, shift, unshift (typed)",
            },
            {
              id: "typed-map-filter",
              title: "map() & filter() with explicit types",
            },
            { id: "typed-sort", title: "sort() with typed comparator" },
            { id: "typed-reduce", title: "reduce() with accumulator type" },
            { id: "tuple-swap", title: "Tuple Swap in-place" },
            { id: "typed-find", title: "find() & findIndex() typed" },
          ],
        },
        {
          id: "type-safe-objects",
          title: "Type-safe Record & Map Operations",
          description: "Using Record<K,V> and Map with generics.",
          subtopics: [
            { id: "record-type", title: "Record<string, number> usage" },
            { id: "typed-map", title: "Map<K,V> in TypeScript" },
            { id: "typed-set", title: "Set<T> in TypeScript" },
            {
              id: "frequency-counter-ts",
              title: "Frequency Counter (Record<string, number>)",
            },
            {
              id: "object-entries-typed",
              title: "Object.entries() with typed generics",
            },
          ],
        },
        {
          id: "big-o-ts",
          title: "Big O Notation with TypeScript",
          description: "Algorithm complexity analysis using TS examples.",
          subtopics: [
            { id: "constant-ts", title: "O(1) — Typed constant-time lookup" },
            { id: "linear-ts", title: "O(n) — Typed linear scan" },
            { id: "quadratic-ts", title: "O(n²) — Typed nested loops" },
            { id: "log-ts", title: "O(log n) — Binary search typed" },
            { id: "space-ts", title: "Space Complexity in TS context" },
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
      description: "Entry-level TypeScript interview questions.",
      topics: [
        {
          id: "ts-fundamentals-qa",
          title: "TypeScript Fundamentals Q&A",
          description: "Core conceptual questions about TypeScript.",
          subtopics: [
            { id: "what-is-ts-qa", title: "What is TypeScript?" },
            {
              id: "ts-vs-js-qa",
              title: "TypeScript vs JavaScript — key differences",
            },
            { id: "why-use-ts-qa", title: "Why use TypeScript? Benefits?" },
            { id: "static-dynamic-qa", title: "Static vs Dynamic typing" },
            {
              id: "transpilation-qa",
              title: "How does TypeScript transpile to JS?",
            },
            {
              id: "ts-in-browser-qa",
              title: "Does TypeScript run in the browser?",
            },
            {
              id: "ts-compilation-qa",
              title: "What is tsc and what does it do?",
            },
          ],
        },
        {
          id: "type-system-basics-qa",
          title: "Type System Basics Q&A",
          description: "Questions about TypeScript's type system.",
          subtopics: [
            {
              id: "any-vs-unknown-qa",
              title: "any vs unknown — difference & when to use",
            },
            { id: "void-vs-never-qa", title: "void vs never — difference?" },
            { id: "type-inference-qa", title: "What is type inference?" },
            {
              id: "type-annotation-qa",
              title: "When should you annotate types explicitly?",
            },
            { id: "structural-typing-qa", title: "What is structural typing?" },
            { id: "strict-mode-qa", title: "What does strict: true do?" },
            { id: "null-undefined-ts-qa", title: "strictNullChecks explained" },
          ],
        },
        {
          id: "type-alias-interface-qa",
          title: "Type Alias vs Interface Q&A",
          description: "Common interview questions on type vs interface.",
          subtopics: [
            {
              id: "type-vs-interface-qa",
              title: "type vs interface — main differences",
            },
            {
              id: "declaration-merging-qa",
              title: "What is declaration merging?",
            },
            {
              id: "extend-implement-qa",
              title: "Can type aliases be extended?",
            },
            {
              id: "when-type-when-iface-qa",
              title: "When to use type vs interface?",
            },
            { id: "index-signature-qa", title: "What is an index signature?" },
          ],
        },
        {
          id: "entry-coding-challenges-qa",
          title: "Entry-Level Coding Challenges",
          description: "Basic TypeScript coding exercises.",
          subtopics: [
            {
              id: "add-types-fn-qa",
              title: "Add types to a JavaScript function",
            },
            {
              id: "typed-array-fn-qa",
              title: "Write a typed array filtering function",
            },
            {
              id: "union-param-qa",
              title: "Function that accepts string | number",
            },
            {
              id: "tuple-return-qa",
              title: "Function returning a typed tuple",
            },
            {
              id: "interface-object-qa",
              title: "Define an interface for a user object",
            },
            { id: "enum-usage-qa", title: "Use an enum for direction keys" },
          ],
        },
      ],
    },
  ],
};
