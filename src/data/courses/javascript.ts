import { Course } from "@/types";

export const javascriptCourse: Course = {
  id: "javascript",
  title: "JavaScript",
  description: "Master JavaScript from fundamentals to advanced internals.",
  icon: "{ }",
  color: "#f7df1e",
  levels: [
    // ═══════════════════════════════════════════════════════
    // L0 — Absolute Basics
    // ═══════════════════════════════════════════════════════
    {
      id: "entry",
      title: "Absolute Basics",
      description: "Beginner",
      color: "#4ade80",
      modules: [
        {
          id: "js",
          title: "JS",
          icon: "{ }",
          color: "#4ade80",
          description: "Core JavaScript fundamentals.",
          topics: [
            {
              id: "variables",
              title: "Variables & Declarations",
              description: "How to declare and use variables.",
              subtopics: [
                { id: "let", title: "let keyword" },
                { id: "const", title: "const keyword" },
                { id: "var", title: "var keyword" },
                { id: "naming-conventions", title: "Naming Conventions" },
                { id: "hoisting-intro", title: "Hoisting Introduction" },
              ],
            },
            {
              id: "data-types",
              title: "Data Types",
              description: "Primitive and reference types.",
              subtopics: [
                { id: "string", title: "String" },
                { id: "number", title: "Number" },
                { id: "boolean", title: "Boolean" },
                { id: "null-undefined", title: "null & undefined" },
                { id: "bigint", title: "BigInt" },
                { id: "symbol-intro", title: "Symbol (intro)" },
                { id: "typeof", title: "typeof operator" },
              ],
            },
            {
              id: "operators",
              title: "Operators",
              description: "JavaScript operators.",
              subtopics: [
                { id: "arithmetic", title: "Arithmetic (+, -, *, /, %)" },
                { id: "assignment", title: "Assignment (=, +=, -=)" },
                { id: "comparison", title: "Comparison (==, ===, !=, !==)" },
                { id: "logical", title: "Logical (&&, ||, !)" },
                { id: "ternary", title: "Ternary Operator (?:)" },
                { id: "nullish-coalescing", title: "Nullish Coalescing (??)" },
                { id: "optional-chaining", title: "Optional Chaining (?.)" },
              ],
            },
            {
              id: "control-flow",
              title: "Control Flow",
              description: "Conditional statements and loops.",
              subtopics: [
                { id: "if-else", title: "if / else / else if" },
                { id: "switch", title: "switch statement" },
                { id: "for-loop", title: "for loop" },
                { id: "while-loop", title: "while & do...while" },
                { id: "break-continue", title: "break & continue" },
                { id: "for-of", title: "for...of loop" },
                { id: "for-in", title: "for...in loop" },
              ],
            },
            {
              id: "type-coercion",
              title: "Type Coercion",
              description: "Implicit and explicit type conversions.",
              subtopics: [
                { id: "implicit-coercion", title: "Implicit Coercion" },
                { id: "explicit-conversion", title: "Explicit Conversion" },
                { id: "truthy-falsy", title: "Truthy & Falsy Values" },
                { id: "equality-quirks", title: "== vs === Quirks" },
              ],
            },
            {
              id: "console-debugging",
              title: "Console & Debugging",
              description: "Using browser developer tools.",
              subtopics: [
                { id: "console-log", title: "console.log / warn / error" },
                { id: "console-table", title: "console.table & console.dir" },
                { id: "debugger-stmt", title: "debugger statement" },
                { id: "devtools-basics", title: "DevTools Basics" },
              ],
            },
            {
              id: "comments-structure",
              title: "Comments & Code Structure",
              description: "Writing clean, documented code.",
              subtopics: [
                {
                  id: "single-multi-comments",
                  title: "Single & Multi-line Comments",
                },
                { id: "use-strict", title: "'use strict' mode" },
                { id: "semicolons-asi", title: "Semicolons & ASI" },
              ],
            },
          ],
        },
        {
          id: "dsa",
          title: "DSA",
          icon: "~",
          color: "#22d3ee",
          description: "Basic data structures & algorithms.",
          topics: [
            {
              id: "arrays-basics",
              title: "Arrays Basics",
              description: "Working with arrays.",
              subtopics: [
                { id: "creating-arrays", title: "Creating Arrays" },
                {
                  id: "accessing-elements",
                  title: "Accessing Elements (index)",
                },
                { id: "length-property", title: "length Property" },
                { id: "push-pop", title: "push() & pop()" },
                { id: "shift-unshift", title: "shift() & unshift()" },
                { id: "splice-slice", title: "splice() & slice()" },
                { id: "concat-join", title: "concat() & join()" },
                { id: "indexOf-includes", title: "indexOf() & includes()" },
              ],
            },
            {
              id: "string-basics",
              title: "String Operations",
              description: "Working with strings.",
              subtopics: [
                { id: "string-methods", title: "charAt, substring, slice" },
                { id: "template-literals", title: "Template Literals" },
                { id: "string-search", title: "indexOf, search, match" },
                {
                  id: "string-transform",
                  title: "toUpperCase, toLowerCase, trim",
                },
                { id: "string-split", title: "split() & join()" },
                { id: "string-repeat-pad", title: "repeat() & padStart/End" },
              ],
            },
            {
              id: "basic-math",
              title: "Basic Math & Number Problems",
              description: "Fundamental math-based coding problems.",
              subtopics: [
                { id: "even-odd", title: "Even or Odd" },
                { id: "sum-of-digits", title: "Sum of Digits" },
                { id: "reverse-number", title: "Reverse a Number" },
                { id: "palindrome-number", title: "Palindrome Number" },
                { id: "factorial", title: "Factorial Calculation" },
                { id: "fibonacci-basic", title: "Fibonacci (iterative)" },
                { id: "prime-check", title: "Prime Number Check" },
              ],
            },
            {
              id: "intro-complexity",
              title: "Introduction to Complexity",
              description: "Understanding Big O basics.",
              subtopics: [
                { id: "what-is-bigo", title: "What is Big O Notation?" },
                { id: "constant-time", title: "O(1) — Constant Time" },
                { id: "linear-time", title: "O(n) — Linear Time" },
                { id: "quadratic-time", title: "O(n²) — Quadratic Time" },
                {
                  id: "space-complexity-intro",
                  title: "Space Complexity Intro",
                },
              ],
            },
          ],
        },
        {
          id: "iq",
          title: "Interview Q",
          icon: "?",
          color: "#f472b6",
          description: "Entry-level interview questions.",
          topics: [
            {
              id: "js-fundamentals-qa",
              title: "JS Fundamentals",
              description: "Foundational questions about JavaScript.",
              subtopics: [
                { id: "what-is-js", title: "What is JavaScript?" },
                { id: "how-js-runs", title: "How does JS run in a browser?" },
                { id: "js-vs-others", title: "JS vs other languages" },
                {
                  id: "compiled-interpreted",
                  title: "Is JS compiled or interpreted?",
                },
                { id: "ecmascript-vs-js", title: "ECMAScript vs JavaScript" },
              ],
            },
            {
              id: "variables-qa",
              title: "Variables & Types",
              description: "Questions about variables and data types.",
              subtopics: [
                {
                  id: "let-const-var-diff",
                  title: "Difference: let vs const vs var",
                },
                {
                  id: "primitive-vs-ref",
                  title: "Primitive vs Reference types",
                },
                { id: "typeof-null", title: "Why is typeof null 'object'?" },
                { id: "nan-quirks", title: "NaN === NaN is false — why?" },
                { id: "undefined-vs-null", title: "undefined vs null" },
              ],
            },
            {
              id: "operators-flow-qa",
              title: "Operators & Control Flow",
              description: "Questions about operators and control flow.",
              subtopics: [
                { id: "double-vs-triple-eq", title: "== vs === explained" },
                { id: "short-circuit", title: "Short-circuit evaluation" },
                { id: "switch-vs-if", title: "When to use switch vs if" },
                { id: "truthy-falsy-qa", title: "List all falsy values in JS" },
              ],
            },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // L1 — Core JavaScript
    // ═══════════════════════════════════════════════════════
    {
      id: "junior",
      title: "Core JavaScript",
      description: "Junior Dev",
      color: "#facc15",
      modules: [
        {
          id: "js",
          title: "JS",
          icon: "{ }",
          color: "#4ade80",
          description: "Intermediate JavaScript.",
          topics: [
            {
              id: "functions",
              title: "Functions",
              description: "All about functions.",
              subtopics: [
                { id: "function-declarations", title: "Function Declarations" },
                { id: "function-expressions", title: "Function Expressions" },
                { id: "arrow-functions", title: "Arrow Functions" },
                { id: "parameters-defaults", title: "Parameters & Defaults" },
                { id: "rest-parameters", title: "Rest Parameters (...args)" },
                { id: "return-values", title: "Return Values" },
                { id: "iife", title: "IIFE (Immediately Invoked)" },
                { id: "callback-functions", title: "Callback Functions" },
                {
                  id: "higher-order-functions",
                  title: "Higher-Order Functions",
                },
              ],
            },
            {
              id: "objects",
              title: "Objects",
              description: "Working with objects.",
              subtopics: [
                { id: "object-literals", title: "Object Literals" },
                { id: "properties-methods", title: "Properties & Methods" },
                { id: "computed-properties", title: "Computed Property Names" },
                { id: "object-destructuring", title: "Destructuring" },
                { id: "object-spread", title: "Spread Operator for Objects" },
                {
                  id: "object-keys-values",
                  title: "Object.keys / values / entries",
                },
                {
                  id: "object-freeze-seal",
                  title: "Object.freeze & Object.seal",
                },
                { id: "property-descriptors", title: "Property Descriptors" },
              ],
            },
            {
              id: "array-methods",
              title: "Array Methods",
              description: "Functional array methods.",
              subtopics: [
                { id: "map", title: "map()" },
                { id: "filter", title: "filter()" },
                { id: "reduce", title: "reduce()" },
                { id: "foreach", title: "forEach()" },
                { id: "find-findindex", title: "find() & findIndex()" },
                { id: "some-every", title: "some() & every()" },
                { id: "flat-flatmap", title: "flat() & flatMap()" },
                { id: "sort-method", title: "sort() (custom comparator)" },
                { id: "array-from", title: "Array.from() & Array.of()" },
              ],
            },
            {
              id: "scope-closures",
              title: "Scope & Closures",
              description: "Understanding scope chains and closures.",
              subtopics: [
                { id: "global-scope", title: "Global Scope" },
                { id: "function-scope", title: "Function Scope" },
                { id: "block-scope", title: "Block Scope (let/const)" },
                { id: "lexical-scope", title: "Lexical Scoping" },
                { id: "closures", title: "Closures" },
                { id: "closure-use-cases", title: "Closure Use Cases" },
                { id: "scope-chain", title: "Scope Chain" },
              ],
            },
            {
              id: "error-handling",
              title: "Error Handling",
              description: "Handling errors gracefully.",
              subtopics: [
                { id: "try-catch", title: "try / catch / finally" },
                { id: "throw-keyword", title: "throw Keyword" },
                {
                  id: "error-types",
                  title: "Error Types (TypeError, ReferenceError)",
                },
                { id: "custom-errors", title: "Custom Error Classes" },
              ],
            },
            {
              id: "dom-basics",
              title: "DOM Basics",
              description: "Document Object Model fundamentals.",
              subtopics: [
                {
                  id: "selecting-elements",
                  title: "querySelector / getElementById",
                },
                {
                  id: "modifying-dom",
                  title: "innerText, innerHTML, textContent",
                },
                {
                  id: "creating-elements",
                  title: "createElement & appendChild",
                },
                { id: "event-listeners", title: "addEventListener" },
                { id: "event-object", title: "Event Object & Types" },
                { id: "event-bubbling", title: "Event Bubbling & Capturing" },
                { id: "event-delegation", title: "Event Delegation" },
              ],
            },
          ],
        },
        {
          id: "dsa",
          title: "DSA",
          icon: "~",
          color: "#22d3ee",
          description: "Searching, sorting & recursion.",
          topics: [
            {
              id: "searching",
              title: "Searching Algorithms",
              description: "Search algorithms.",
              subtopics: [
                { id: "linear-search", title: "Linear Search" },
                { id: "binary-search", title: "Binary Search" },
                {
                  id: "binary-search-variants",
                  title: "Binary Search Variants",
                },
                { id: "search-in-rotated", title: "Search in Rotated Array" },
              ],
            },
            {
              id: "sorting-basics",
              title: "Sorting Algorithms",
              description: "Basic sorting algorithms.",
              subtopics: [
                { id: "bubble-sort", title: "Bubble Sort" },
                { id: "selection-sort", title: "Selection Sort" },
                { id: "insertion-sort", title: "Insertion Sort" },
                { id: "merge-sort", title: "Merge Sort" },
                { id: "quick-sort", title: "Quick Sort" },
                { id: "sort-stability", title: "Sort Stability" },
                { id: "counting-sort", title: "Counting Sort" },
              ],
            },
            {
              id: "recursion",
              title: "Recursion",
              description: "Recursive problem solving.",
              subtopics: [
                { id: "recursion-basics", title: "Recursion Basics" },
                { id: "base-case", title: "Base Case & Recursive Case" },
                {
                  id: "call-stack-recursion",
                  title: "Call Stack in Recursion",
                },
                { id: "factorial-recursive", title: "Factorial (recursive)" },
                { id: "fibonacci-recursive", title: "Fibonacci (recursive)" },
                { id: "power-of-n", title: "Power of N" },
                {
                  id: "recursion-vs-iteration",
                  title: "Recursion vs Iteration",
                },
              ],
            },
            {
              id: "two-pointers",
              title: "Two Pointers Pattern",
              description: "Solving problems with two pointers.",
              subtopics: [
                { id: "two-sum-sorted", title: "Two Sum (sorted array)" },
                { id: "reverse-array", title: "Reverse an Array" },
                { id: "palindrome-check", title: "Palindrome Check" },
                {
                  id: "remove-duplicates",
                  title: "Remove Duplicates (sorted)",
                },
                { id: "container-water", title: "Container With Most Water" },
              ],
            },
          ],
        },
        {
          id: "iq",
          title: "Interview Q",
          icon: "?",
          color: "#f472b6",
          description: "Junior interview prep.",
          topics: [
            {
              id: "core-concepts-qa",
              title: "Core Concepts",
              description: "Common interview topics.",
              subtopics: [
                { id: "hoisting", title: "Explain hoisting" },
                {
                  id: "scope-closures-qa",
                  title: "Scope & Closures explained",
                },
                { id: "this-keyword", title: "The 'this' keyword in depth" },
                { id: "call-apply-bind", title: "call(), apply(), bind()" },
                { id: "strict-mode-qa", title: "What does 'use strict' do?" },
              ],
            },
            {
              id: "functions-qa",
              title: "Functions & Callbacks",
              description: "Questions about functions.",
              subtopics: [
                { id: "arrow-vs-regular", title: "Arrow vs regular functions" },
                { id: "pure-functions", title: "What is a pure function?" },
                { id: "first-class-functions", title: "First-class functions" },
                { id: "callback-hell", title: "What is callback hell?" },
                { id: "debounce-throttle", title: "Debounce vs Throttle" },
              ],
            },
            {
              id: "dom-qa",
              title: "DOM & Events",
              description: "DOM-related interview questions.",
              subtopics: [
                { id: "bubbling-vs-capturing", title: "Bubbling vs Capturing" },
                {
                  id: "event-delegation-qa",
                  title: "Event Delegation explained",
                },
                {
                  id: "prevent-default",
                  title: "preventDefault vs stopPropagation",
                },
                { id: "dom-vs-virtual-dom", title: "DOM vs Virtual DOM" },
              ],
            },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // L2 — Intermediate JS
    // ═══════════════════════════════════════════════════════
    {
      id: "mid",
      title: "Intermediate JS",
      description: "Mid-level Dev",
      color: "#fb923c",
      modules: [
        {
          id: "js",
          title: "JS",
          icon: "{ }",
          color: "#4ade80",
          description: "Advanced JavaScript features.",
          topics: [
            {
              id: "async-javascript",
              title: "Async JavaScript",
              description: "Asynchronous programming.",
              subtopics: [
                { id: "callbacks", title: "Callbacks" },
                {
                  id: "callback-patterns",
                  title: "Callback Patterns & Error-first",
                },
                { id: "promises", title: "Promises" },
                { id: "promise-chaining", title: "Promise Chaining" },
                { id: "promise-all", title: "Promise.all()" },
                { id: "promise-allsettled", title: "Promise.allSettled()" },
                { id: "promise-race", title: "Promise.race() & Promise.any()" },
                { id: "async-await", title: "async / await" },
                {
                  id: "error-handling-async",
                  title: "Error Handling in Async",
                },
                { id: "top-level-await", title: "Top-level await" },
              ],
            },
            {
              id: "es6-features",
              title: "ES6+ Features",
              description: "Modern JavaScript syntax.",
              subtopics: [
                { id: "destructuring-deep", title: "Deep Destructuring" },
                { id: "spread-rest", title: "Spread & Rest Operators" },
                { id: "default-params", title: "Default Parameters" },
                { id: "template-tag", title: "Tagged Template Literals" },
                { id: "symbols", title: "Symbols" },
                { id: "iterators", title: "Iterators & Iterable Protocol" },
                { id: "generators", title: "Generators (function*)" },
                { id: "for-await-of", title: "for await...of" },
              ],
            },
            {
              id: "prototypes-classes",
              title: "Prototypes & Classes",
              description: "OOP in JavaScript.",
              subtopics: [
                { id: "prototype-chain", title: "Prototype Chain" },
                { id: "proto-property", title: "__proto__ vs prototype" },
                { id: "object-create", title: "Object.create()" },
                { id: "class-syntax", title: "Class Syntax" },
                { id: "constructor-method", title: "constructor Method" },
                { id: "inheritance", title: "extends & super" },
                { id: "static-methods", title: "Static Methods & Properties" },
                { id: "private-fields", title: "Private Fields (#)" },
                { id: "getters-setters", title: "Getters & Setters" },
                { id: "instanceof", title: "instanceof Operator" },
              ],
            },
            {
              id: "modules-system",
              title: "Module System",
              description: "JavaScript module patterns.",
              subtopics: [
                { id: "es-modules", title: "ES Modules (import/export)" },
                { id: "named-default", title: "Named vs Default Exports" },
                { id: "dynamic-import", title: "Dynamic import()" },
                { id: "commonjs", title: "CommonJS (require/module.exports)" },
                { id: "module-patterns", title: "Module Pattern (IIFE)" },
                { id: "tree-shaking", title: "Tree Shaking" },
              ],
            },
            {
              id: "regex",
              title: "Regular Expressions",
              description: "Pattern matching with regex.",
              subtopics: [
                { id: "regex-syntax", title: "Regex Syntax Basics" },
                {
                  id: "character-classes",
                  title: "Character Classes ([a-z], \\d, \\w)",
                },
                { id: "quantifiers", title: "Quantifiers (+, *, ?, {n})" },
                { id: "groups-capturing", title: "Groups & Capturing" },
                { id: "lookahead-behind", title: "Lookahead & Lookbehind" },
                { id: "regex-methods", title: "test(), match(), replace()" },
                { id: "named-groups", title: "Named Capture Groups" },
              ],
            },
            {
              id: "web-apis",
              title: "Web APIs",
              description: "Browser-provided APIs.",
              subtopics: [
                { id: "fetch-api", title: "Fetch API" },
                { id: "localstorage", title: "localStorage & sessionStorage" },
                {
                  id: "settimeout-interval",
                  title: "setTimeout & setInterval",
                },
                { id: "request-animation", title: "requestAnimationFrame" },
                { id: "intersection-observer", title: "IntersectionObserver" },
                { id: "mutation-observer", title: "MutationObserver" },
                { id: "url-api", title: "URL & URLSearchParams" },
                { id: "form-data", title: "FormData API" },
              ],
            },
          ],
        },
        {
          id: "dsa",
          title: "DSA",
          icon: "~",
          color: "#22d3ee",
          description: "Core data structures.",
          topics: [
            {
              id: "linked-lists",
              title: "Linked Lists",
              description: "Linked list implementations.",
              subtopics: [
                { id: "singly-linked", title: "Singly Linked List" },
                { id: "doubly-linked", title: "Doubly Linked List" },
                { id: "ll-insert-delete", title: "Insert & Delete Operations" },
                { id: "ll-reverse", title: "Reverse a Linked List" },
                {
                  id: "ll-cycle-detection",
                  title: "Cycle Detection (Floyd's)",
                },
                { id: "ll-merge-sorted", title: "Merge Two Sorted Lists" },
                { id: "ll-nth-from-end", title: "Nth Node from End" },
              ],
            },
            {
              id: "stacks-queues",
              title: "Stacks & Queues",
              description: "LIFO and FIFO structures.",
              subtopics: [
                { id: "stack-impl", title: "Stack Implementation" },
                {
                  id: "stack-array-ll",
                  title: "Stack using Array & Linked List",
                },
                { id: "queue-impl", title: "Queue Implementation" },
                { id: "circular-queue", title: "Circular Queue" },
                { id: "priority-queue", title: "Priority Queue (intro)" },
                { id: "balanced-brackets", title: "Balanced Brackets Problem" },
                { id: "min-stack", title: "Min Stack" },
                { id: "queue-using-stacks", title: "Queue using Two Stacks" },
              ],
            },
            {
              id: "hash-maps",
              title: "Hash Maps & Sets",
              description: "Hash-based data structures.",
              subtopics: [
                { id: "js-map", title: "JavaScript Map" },
                { id: "js-set", title: "JavaScript Set" },
                { id: "object-as-map", title: "Object as Hash Map" },
                { id: "frequency-counter", title: "Frequency Counter Pattern" },
                { id: "two-sum-hashmap", title: "Two Sum (hash map approach)" },
                { id: "anagram-check", title: "Anagram Check" },
                { id: "group-anagrams", title: "Group Anagrams" },
                { id: "first-unique-char", title: "First Unique Character" },
              ],
            },
            {
              id: "sliding-window",
              title: "Sliding Window",
              description: "Sliding window technique.",
              subtopics: [
                { id: "fixed-window", title: "Fixed Size Window" },
                { id: "variable-window", title: "Variable Size Window" },
                { id: "max-sum-subarray", title: "Max Sum Subarray of Size K" },
                {
                  id: "longest-substring",
                  title: "Longest Substring Without Repeat",
                },
                {
                  id: "min-window-substring",
                  title: "Minimum Window Substring",
                },
              ],
            },
          ],
        },
        {
          id: "iq",
          title: "Interview Q",
          icon: "?",
          color: "#f472b6",
          description: "Mid-level interview prep.",
          topics: [
            {
              id: "runtime-concepts-qa",
              title: "Runtime Concepts",
              description: "How JavaScript works under the hood.",
              subtopics: [
                { id: "event-loop", title: "Explain the Event Loop" },
                { id: "call-stack", title: "Call Stack explained" },
                { id: "micro-macro", title: "Microtasks vs Macrotasks" },
                { id: "task-queue", title: "Task Queue vs Microtask Queue" },
                {
                  id: "settimeout-0",
                  title: "Why setTimeout(fn, 0) isn't instant",
                },
              ],
            },
            {
              id: "async-qa",
              title: "Async & Promises",
              description: "Async-related interview questions.",
              subtopics: [
                { id: "promise-vs-callback", title: "Promise vs Callback" },
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
                  title: "Parallel vs Sequential async",
                },
                { id: "async-iterator-qa", title: "What are Async Iterators?" },
              ],
            },
            {
              id: "oop-qa",
              title: "OOP & Prototypes",
              description: "Object-oriented programming questions.",
              subtopics: [
                {
                  id: "prototype-chain-qa",
                  title: "Explain the Prototype Chain",
                },
                {
                  id: "class-vs-prototype",
                  title: "Class syntax vs prototype",
                },
                { id: "new-keyword-qa", title: "What does 'new' keyword do?" },
                { id: "object-create-qa", title: "Object.create() use cases" },
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
                { id: "flatten-array", title: "Flatten a nested array" },
                { id: "deep-clone", title: "Implement deep clone" },
                { id: "implement-debounce", title: "Implement debounce" },
                { id: "implement-throttle", title: "Implement throttle" },
                { id: "curry-function", title: "Implement curry function" },
                {
                  id: "promise-polyfill",
                  title: "Write a simple Promise polyfill",
                },
              ],
            },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // L3 — Advanced JS
    // ═══════════════════════════════════════════════════════
    {
      id: "senior",
      title: "Advanced JS",
      description: "Senior Dev",
      color: "#f472b6",
      modules: [
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
                { id: "factory", title: "Factory Pattern" },
                { id: "module-pattern", title: "Module Pattern" },
                { id: "strategy", title: "Strategy Pattern" },
                { id: "decorator", title: "Decorator Pattern" },
                { id: "command", title: "Command Pattern" },
                { id: "mediator", title: "Mediator Pattern" },
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
                { id: "reference-counting", title: "Reference Counting" },
                { id: "memory-leaks", title: "Common Memory Leaks" },
                { id: "weakmap-weakset", title: "WeakMap & WeakSet" },
                { id: "weakref", title: "WeakRef & FinalizationRegistry" },
                {
                  id: "memory-profiling",
                  title: "Memory Profiling in DevTools",
                },
              ],
            },
            {
              id: "proxy-reflect",
              title: "Proxy & Reflect",
              description: "Metaprogramming with Proxy and Reflect.",
              subtopics: [
                { id: "proxy-basics", title: "Proxy Basics" },
                {
                  id: "proxy-traps",
                  title: "Handler Traps (get, set, has, etc)",
                },
                { id: "reflect-api", title: "Reflect API" },
                { id: "reactive-objects", title: "Building Reactive Objects" },
                { id: "validation-proxy", title: "Validation with Proxy" },
                { id: "proxy-revocable", title: "Proxy.revocable()" },
              ],
            },
            {
              id: "advanced-functions",
              title: "Advanced Function Concepts",
              description: "Deep dive into functions.",
              subtopics: [
                { id: "currying", title: "Currying" },
                { id: "partial-application", title: "Partial Application" },
                { id: "memoization-fn", title: "Memoization" },
                { id: "compose-pipe", title: "Function Composition & Pipe" },
                { id: "trampolining", title: "Trampolining (tail-call opt)" },
                { id: "thunks", title: "Thunks" },
              ],
            },
            {
              id: "symbols-advanced",
              title: "Symbols & Well-Known Symbols",
              description: "Deep dive into symbols.",
              subtopics: [
                { id: "symbol-iterator", title: "Symbol.iterator" },
                { id: "symbol-toprimitive", title: "Symbol.toPrimitive" },
                { id: "symbol-hasinstance", title: "Symbol.hasInstance" },
                { id: "symbol-species", title: "Symbol.species" },
                {
                  id: "global-symbol-registry",
                  title: "Symbol.for & Global Registry",
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
                  title: "Global Error Handlers (window.onerror)",
                },
                {
                  id: "unhandled-rejection",
                  title: "Unhandled Promise Rejections",
                },
                { id: "structured-errors", title: "Structured Error Messages" },
                {
                  id: "error-monitoring",
                  title: "Error Monitoring (Sentry, etc.)",
                },
              ],
            },
          ],
        },
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
                { id: "binary-tree", title: "Binary Tree" },
                { id: "bst", title: "Binary Search Tree (BST)" },
                { id: "bst-operations", title: "BST Insert / Delete / Search" },
                { id: "inorder", title: "Inorder Traversal" },
                { id: "preorder", title: "Preorder Traversal" },
                { id: "postorder", title: "Postorder Traversal" },
                { id: "level-order", title: "Level Order (BFS) Traversal" },
                { id: "tree-height", title: "Height of a Tree" },
                { id: "balanced-tree", title: "Check Balanced Tree" },
                {
                  id: "lowest-common-ancestor",
                  title: "Lowest Common Ancestor",
                },
              ],
            },
            {
              id: "heaps",
              title: "Heaps & Priority Queues",
              description: "Heap data structure.",
              subtopics: [
                { id: "min-heap", title: "Min Heap" },
                { id: "max-heap", title: "Max Heap" },
                {
                  id: "heap-insert-extract",
                  title: "Insert & Extract Operations",
                },
                { id: "heapify", title: "Heapify Process" },
                { id: "heap-sort", title: "Heap Sort" },
                { id: "kth-largest", title: "Kth Largest Element" },
                { id: "top-k-frequent", title: "Top K Frequent Elements" },
              ],
            },
            {
              id: "graphs",
              title: "Graphs",
              description: "Graph data structures and algorithms.",
              subtopics: [
                {
                  id: "graph-representation",
                  title: "Adjacency List & Matrix",
                },
                { id: "bfs-graph", title: "BFS (Breadth-First Search)" },
                { id: "dfs-graph", title: "DFS (Depth-First Search)" },
                { id: "connected-components", title: "Connected Components" },
                { id: "topological-sort", title: "Topological Sort" },
                {
                  id: "cycle-detection-graph",
                  title: "Cycle Detection in Graph",
                },
                { id: "shortest-path-intro", title: "Shortest Path (intro)" },
              ],
            },
            {
              id: "hash-tables",
              title: "Hash Tables Deep Dive",
              description: "Understanding hash tables internally.",
              subtopics: [
                { id: "hash-functions", title: "Hash Functions" },
                {
                  id: "collision-chaining",
                  title: "Collision Handling (Chaining)",
                },
                { id: "open-addressing", title: "Open Addressing" },
                { id: "load-factor", title: "Load Factor & Resizing" },
                { id: "map-vs-object", title: "Map vs Object Internals" },
              ],
            },
            {
              id: "trie",
              title: "Trie (Prefix Tree)",
              description: "Trie data structure.",
              subtopics: [
                { id: "trie-build", title: "Building a Trie" },
                {
                  id: "trie-insert-search",
                  title: "Insert & Search Operations",
                },
                { id: "autocomplete", title: "Autocomplete with Trie" },
                { id: "word-search", title: "Word Search Problems" },
              ],
            },
          ],
        },
        {
          id: "iq",
          title: "Interview Q",
          icon: "?",
          color: "#f472b6",
          description: "Senior-level interview prep.",
          topics: [
            {
              id: "architecture-qa",
              title: "Architecture & Patterns",
              description: "System design and tooling questions.",
              subtopics: [
                {
                  id: "module-systems-qa",
                  title: "Compare module systems (ESM/CJS/AMD)",
                },
                { id: "build-tools-qa", title: "Webpack vs Vite vs Rollup" },
                { id: "performance-budgets", title: "Performance Budgets" },
                { id: "monorepo-qa", title: "Monorepo vs Polyrepo" },
                { id: "micro-frontends", title: "Micro-frontends explained" },
              ],
            },
            {
              id: "advanced-coding-qa",
              title: "Advanced Coding Challenges",
              description: "Senior-level coding problems.",
              subtopics: [
                { id: "implement-bind", title: "Implement Function.bind()" },
                { id: "event-emitter", title: "Build an Event Emitter" },
                { id: "promise-all-impl", title: "Implement Promise.all()" },
                { id: "deep-equal", title: "Implement deepEqual()" },
                { id: "observable-impl", title: "Build an Observable" },
                { id: "virtual-dom-impl", title: "Simple Virtual DOM" },
              ],
            },
            {
              id: "memory-perf-qa",
              title: "Memory & Performance",
              description: "Memory and performance interview questions.",
              subtopics: [
                { id: "memory-leak-detection", title: "Identify memory leaks" },
                {
                  id: "gc-explained",
                  title: "How does garbage collection work?",
                },
                { id: "reflow-repaint", title: "Reflow vs Repaint" },
                {
                  id: "critical-render-path",
                  title: "Critical Rendering Path",
                },
                { id: "web-vitals-qa", title: "Core Web Vitals explained" },
              ],
            },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // L4 — Runtime & Engine
    // ═══════════════════════════════════════════════════════
    {
      id: "staff",
      title: "Runtime & Engine",
      description: "Staff Engineer",
      color: "#38bdf8",
      modules: [
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
                { id: "profiling", title: "Performance Profiling" },
                {
                  id: "chrome-devtools-perf",
                  title: "Chrome DevTools Performance Tab",
                },
                { id: "lazy-loading", title: "Lazy Loading Strategies" },
                { id: "code-splitting", title: "Code Splitting" },
                { id: "bundle-analysis", title: "Bundle Analysis" },
                { id: "render-optimization", title: "Render Optimization" },
                { id: "virtual-scrolling", title: "Virtual Scrolling" },
              ],
            },
            {
              id: "web-workers",
              title: "Web Workers & Concurrency",
              description: "Multi-threaded JavaScript.",
              subtopics: [
                { id: "web-worker-basics", title: "Web Worker Basics" },
                { id: "shared-workers", title: "Shared Workers" },
                { id: "service-workers", title: "Service Workers" },
                {
                  id: "worker-communication",
                  title: "postMessage & MessageChannel",
                },
                { id: "shared-array-buffer", title: "SharedArrayBuffer" },
                { id: "atomics", title: "Atomics API" },
                { id: "worklets", title: "Worklets (Audio, Paint)" },
              ],
            },
            {
              id: "security",
              title: "Security",
              description: "Frontend security practices.",
              subtopics: [
                { id: "xss-prevention", title: "XSS Prevention" },
                { id: "xss-types", title: "Stored / Reflected / DOM XSS" },
                { id: "csp", title: "Content Security Policy" },
                { id: "cors", title: "CORS (Cross-Origin Resource Sharing)" },
                { id: "csrf-protection", title: "CSRF Protection" },
                { id: "input-sanitization", title: "Input Sanitization" },
                { id: "subresource-integrity", title: "Subresource Integrity" },
                { id: "secure-cookies", title: "Secure Cookies & HttpOnly" },
              ],
            },
            {
              id: "advanced-web-apis",
              title: "Advanced Web APIs",
              description: "Modern browser APIs.",
              subtopics: [
                { id: "websockets", title: "WebSockets" },
                { id: "server-sent-events", title: "Server-Sent Events" },
                { id: "webrtc-basics", title: "WebRTC Basics" },
                { id: "streams-api", title: "Streams API" },
                { id: "file-api", title: "File & FileReader API" },
                { id: "clipboard-api", title: "Clipboard API" },
                { id: "broadcast-channel", title: "BroadcastChannel API" },
                { id: "performance-api", title: "Performance API & Timing" },
              ],
            },
            {
              id: "testing",
              title: "Testing Strategies",
              description: "Testing JavaScript code.",
              subtopics: [
                { id: "unit-testing", title: "Unit Testing Principles" },
                { id: "jest-basics", title: "Jest / Vitest Basics" },
                { id: "mocking", title: "Mocking & Stubbing" },
                { id: "integration-testing", title: "Integration Testing" },
                {
                  id: "e2e-testing",
                  title: "E2E Testing (Playwright/Cypress)",
                },
                { id: "tdd-bdd", title: "TDD vs BDD" },
                { id: "test-coverage", title: "Code Coverage" },
              ],
            },
          ],
        },
        {
          id: "dsa",
          title: "DSA",
          icon: "~",
          color: "#22d3ee",
          description: "Dynamic programming & advanced algorithms.",
          topics: [
            {
              id: "dynamic-programming",
              title: "Dynamic Programming",
              description: "DP techniques and patterns.",
              subtopics: [
                { id: "memoization", title: "Top-Down (Memoization)" },
                { id: "tabulation", title: "Bottom-Up (Tabulation)" },
                { id: "fibonacci-dp", title: "Fibonacci (DP)" },
                { id: "climbing-stairs", title: "Climbing Stairs" },
                { id: "coin-change", title: "Coin Change Problem" },
                {
                  id: "longest-common-subseq",
                  title: "Longest Common Subsequence",
                },
                { id: "knapsack", title: "0/1 Knapsack Problem" },
                { id: "edit-distance", title: "Edit Distance" },
                {
                  id: "longest-increasing-subseq",
                  title: "Longest Increasing Subsequence",
                },
              ],
            },
            {
              id: "greedy-algorithms",
              title: "Greedy Algorithms",
              description: "Greedy approach to problem solving.",
              subtopics: [
                { id: "greedy-intro", title: "Greedy vs DP" },
                {
                  id: "activity-selection",
                  title: "Activity Selection Problem",
                },
                { id: "fractional-knapsack", title: "Fractional Knapsack" },
                { id: "huffman-coding", title: "Huffman Coding" },
                { id: "interval-scheduling", title: "Interval Scheduling" },
                { id: "jump-game", title: "Jump Game" },
              ],
            },
            {
              id: "backtracking",
              title: "Backtracking",
              description: "Backtracking algorithms.",
              subtopics: [
                { id: "backtracking-intro", title: "Backtracking Concept" },
                { id: "permutations", title: "Permutations" },
                { id: "combinations", title: "Combinations" },
                { id: "subsets", title: "Subsets / Power Set" },
                { id: "n-queens", title: "N-Queens Problem" },
                { id: "sudoku-solver", title: "Sudoku Solver" },
                { id: "word-search-bt", title: "Word Search (grid)" },
              ],
            },
            {
              id: "advanced-graph",
              title: "Advanced Graph Algorithms",
              description: "Advanced graph techniques.",
              subtopics: [
                { id: "dijkstra", title: "Dijkstra's Algorithm" },
                { id: "bellman-ford", title: "Bellman-Ford Algorithm" },
                { id: "floyd-warshall", title: "Floyd-Warshall" },
                { id: "union-find", title: "Union-Find (Disjoint Sets)" },
                { id: "kruskal-mst", title: "Kruskal's MST" },
                { id: "prim-mst", title: "Prim's MST" },
              ],
            },
          ],
        },
        {
          id: "iq",
          title: "Interview Q",
          icon: "?",
          color: "#f472b6",
          description: "Staff-level interview prep.",
          topics: [
            {
              id: "system-design-qa",
              title: "System Design (Frontend)",
              description: "Frontend system design questions.",
              subtopics: [
                {
                  id: "design-autocomplete",
                  title: "Design: Autocomplete Component",
                },
                {
                  id: "design-infinite-scroll",
                  title: "Design: Infinite Scroll",
                },
                { id: "design-chat-app", title: "Design: Real-time Chat App" },
                {
                  id: "design-image-gallery",
                  title: "Design: Image Gallery / Carousel",
                },
                { id: "design-file-uploader", title: "Design: File Uploader" },
                {
                  id: "state-management-qa",
                  title: "State Management at Scale",
                },
              ],
            },
            {
              id: "tech-leadership-qa",
              title: "Technical Leadership",
              description: "Leading engineering teams.",
              subtopics: [
                { id: "code-review", title: "Code Review Best Practices" },
                { id: "documentation", title: "Documentation Standards" },
                { id: "mentoring", title: "Mentoring Junior Engineers" },
                { id: "tech-debt-qa", title: "Managing Technical Debt" },
                { id: "incident-response", title: "Incident Response" },
              ],
            },
            {
              id: "security-qa",
              title: "Security Questions",
              description: "Security-focused interview topics.",
              subtopics: [
                { id: "explain-xss", title: "Explain XSS and prevention" },
                { id: "explain-csrf", title: "Explain CSRF" },
                { id: "explain-cors-qa", title: "Explain CORS in detail" },
                { id: "jwt-security", title: "JWT Security Best Practices" },
                { id: "oauth-flow", title: "OAuth 2.0 Flow" },
              ],
            },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // L5 — Mastery & Ecosystem
    // ═══════════════════════════════════════════════════════
    {
      id: "principal",
      title: "Mastery & Ecosystem",
      description: "Principal / Lead",
      color: "#34d399",
      modules: [
        {
          id: "js",
          title: "JS",
          icon: "{ }",
          color: "#4ade80",
          description: "Engine internals, standards & ecosystem.",
          topics: [
            {
              id: "language-internals",
              title: "Language Internals",
              description: "How JavaScript engines work.",
              subtopics: [
                { id: "v8-engine", title: "V8 Engine Architecture" },
                {
                  id: "jit-compilation",
                  title: "JIT Compilation (Ignition + TurboFan)",
                },
                {
                  id: "hidden-classes",
                  title: "Hidden Classes & Inline Caches",
                },
                { id: "parsing-ast", title: "Parsing & AST Generation" },
                { id: "bytecode", title: "Bytecode Execution" },
                {
                  id: "gc-generations",
                  title: "Generational Garbage Collection",
                },
                { id: "deoptimization", title: "Deoptimization" },
              ],
            },
            {
              id: "tc39-process",
              title: "TC39 & ECMAScript",
              description: "JavaScript standardization.",
              subtopics: [
                { id: "proposal-stages", title: "Proposal Stages (0-4)" },
                { id: "active-proposals", title: "Notable Active Proposals" },
                { id: "polyfills", title: "Polyfills & Ponyfills" },
                { id: "transpilation", title: "Transpilation (Babel, SWC)" },
                { id: "spec-reading", title: "Reading the ECMAScript Spec" },
              ],
            },
            {
              id: "ast-tooling",
              title: "AST & Tooling",
              description: "Working with Abstract Syntax Trees.",
              subtopics: [
                { id: "ast-basics", title: "AST Basics (ESTree)" },
                { id: "ast-parser", title: "Parsers (Acorn, Babel Parser)" },
                { id: "ast-transforms", title: "AST Transforms" },
                { id: "babel-plugins", title: "Writing Babel Plugins" },
                { id: "eslint-rules", title: "Custom ESLint Rules" },
                { id: "codemods", title: "Codemods (jscodeshift)" },
              ],
            },
            {
              id: "wasm-integration",
              title: "WebAssembly Integration",
              description: "Using WASM with JavaScript.",
              subtopics: [
                { id: "wasm-intro", title: "WebAssembly Concepts" },
                { id: "wasm-compile", title: "Compiling to WASM" },
                { id: "wasm-js-interop", title: "WASM ↔ JS Interop" },
                { id: "wasm-use-cases", title: "Use Cases & Performance" },
                { id: "wasm-threads", title: "WASM Threads" },
              ],
            },
            {
              id: "build-systems",
              title: "Build Systems & Bundlers",
              description: "Understanding modern build tools.",
              subtopics: [
                { id: "webpack-deep", title: "Webpack Deep Dive" },
                { id: "vite-internals", title: "Vite Internals" },
                { id: "rollup-plugins", title: "Rollup & Plugin System" },
                { id: "esbuild-swc", title: "esbuild & SWC" },
                { id: "turbopack", title: "Turbopack" },
                { id: "module-federation", title: "Module Federation" },
              ],
            },
          ],
        },
        {
          id: "dsa",
          title: "DSA",
          icon: "~",
          color: "#22d3ee",
          description: "Algorithm design theory & advanced topics.",
          topics: [
            {
              id: "algorithm-design",
              title: "Algorithm Design",
              description: "Theoretical foundations.",
              subtopics: [
                {
                  id: "complexity-analysis",
                  title: "Time Complexity Analysis",
                },
                { id: "amortized-analysis", title: "Amortized Analysis" },
                { id: "space-time", title: "Space-Time Tradeoffs" },
                { id: "divide-conquer", title: "Divide & Conquer" },
                { id: "master-theorem", title: "Master Theorem" },
              ],
            },
            {
              id: "advanced-trees",
              title: "Advanced Tree Structures",
              description: "Self-balancing trees and advanced variants.",
              subtopics: [
                { id: "avl-tree", title: "AVL Tree" },
                { id: "red-black-tree", title: "Red-Black Tree (concepts)" },
                { id: "b-tree", title: "B-Tree / B+ Tree (concepts)" },
                { id: "segment-tree", title: "Segment Tree" },
                { id: "fenwick-tree", title: "Fenwick Tree (BIT)" },
              ],
            },
            {
              id: "string-algorithms",
              title: "String Algorithms",
              description: "Advanced string problem solving.",
              subtopics: [
                { id: "kmp-algorithm", title: "KMP Algorithm" },
                { id: "rabin-karp", title: "Rabin-Karp Algorithm" },
                { id: "z-algorithm", title: "Z-Algorithm" },
                { id: "suffix-array", title: "Suffix Array (intro)" },
                {
                  id: "longest-palindrome",
                  title: "Longest Palindromic Substring",
                },
              ],
            },
            {
              id: "np-problems",
              title: "Complexity Classes",
              description: "Theoretical computer science.",
              subtopics: [
                { id: "p-vs-np", title: "P vs NP" },
                { id: "np-complete", title: "NP-Complete Problems" },
                { id: "np-hard", title: "NP-Hard" },
                { id: "reductions", title: "Problem Reductions" },
                { id: "approximation-algo", title: "Approximation Algorithms" },
              ],
            },
          ],
        },
        {
          id: "iq",
          title: "Interview Q",
          icon: "?",
          color: "#f472b6",
          description: "Principal-level interview prep.",
          topics: [
            {
              id: "engineering-strategy-qa",
              title: "Engineering Strategy",
              description: "High-level engineering decisions.",
              subtopics: [
                {
                  id: "architecture-decisions",
                  title: "Architecture Decision Records",
                },
                { id: "tech-debt", title: "Technical Debt Strategies" },
                { id: "ecosystem-eval", title: "Ecosystem Evaluation" },
                { id: "migration-strategies", title: "Large-scale Migration" },
                { id: "build-vs-buy", title: "Build vs Buy Decisions" },
              ],
            },
            {
              id: "scale-qa",
              title: "Scale & Infrastructure",
              description: "Building at scale.",
              subtopics: [
                { id: "cdn-strategy", title: "CDN Strategy" },
                { id: "caching-layers", title: "Caching Layers" },
                {
                  id: "monitoring-observability",
                  title: "Monitoring & Observability",
                },
                { id: "ci-cd-pipelines", title: "CI/CD Pipeline Design" },
                { id: "feature-flags", title: "Feature Flags at Scale" },
                { id: "a-b-testing", title: "A/B Testing Architecture" },
              ],
            },
            {
              id: "leadership-qa",
              title: "Engineering Leadership",
              description: "Leadership & culture questions.",
              subtopics: [
                { id: "team-structure", title: "Team Structure & Org Design" },
                {
                  id: "hiring-interviews",
                  title: "Designing Effective Interviews",
                },
                { id: "rfc-process", title: "RFC & Design Review Process" },
                { id: "cross-team-collab", title: "Cross-team Collaboration" },
                {
                  id: "engineering-culture",
                  title: "Building Engineering Culture",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
