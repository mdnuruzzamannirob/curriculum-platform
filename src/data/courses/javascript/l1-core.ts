import { Level } from "@/types";

export const l1Level: Level = {
  id: "junior",
  title: "Core JavaScript",
  description: "Junior Dev",
  color: "#facc15",
  modules: [
    // ── JS ───────────────────────────────────────────────
    {
      id: "js",
      title: "JS",
      icon: "{ }",
      color: "#4ade80",
      description: "Intermediate JavaScript.",
      topics: [
        {
          id: "functions",
          title: "Functions — In Depth (HOF, Callbacks, IIFE)",
          description: "All about functions.",
          subtopics: [
            {
              id: "function-declarations",
              title: "Function Declarations vs Expressions",
            },
            {
              id: "arrow-functions",
              title: "Arrow Functions & implicit return",
            },
            {
              id: "parameters-defaults",
              title: "Parameters, Defaults & Rest (...args)",
            },
            {
              id: "iife",
              title: "IIFE (Immediately Invoked Function Expression)",
            },
            { id: "callback-functions", title: "Callback Functions" },
            { id: "higher-order-functions", title: "Higher-Order Functions" },
            { id: "pure-functions", title: "Pure Functions & Side Effects" },
            {
              id: "function-length",
              title: "function.length & .name properties",
            },
          ],
        },
        {
          id: "objects",
          title: "Objects — In Depth (Destructuring, Spread, Freeze)",
          description: "Working with objects.",
          subtopics: [
            { id: "object-literals", title: "Object Literals & Shorthand" },
            { id: "computed-properties", title: "Computed Property Names" },
            {
              id: "object-destructuring",
              title: "Destructuring (with defaults, rename)",
            },
            { id: "object-spread", title: "Spread & Rest for Objects" },
            {
              id: "object-keys-values",
              title: "Object.keys / values / entries / fromEntries",
            },
            { id: "object-assign", title: "Object.assign (shallow clone)" },
            { id: "object-freeze-seal", title: "Object.freeze & Object.seal" },
            {
              id: "property-descriptors",
              title: "Property Descriptors (configurable, enumerable)",
            },
            {
              id: "getter-setter-obj",
              title: "Getters & Setters on Object Literals",
            },
          ],
        },
        {
          id: "array-methods",
          title: "Array Methods — map, filter, reduce & More",
          description: "Functional array methods.",
          subtopics: [
            { id: "map", title: "map() — transform" },
            { id: "filter", title: "filter() — select" },
            { id: "reduce", title: "reduce() — accumulate" },
            { id: "foreach", title: "forEach() — side effects" },
            { id: "find-findindex", title: "find() & findIndex()" },
            { id: "some-every", title: "some() & every()" },
            { id: "sort-method", title: "sort() with comparator" },
            { id: "flat-flatmap", title: "flat() & flatMap()" },
            { id: "array-from", title: "Array.from() — from iterables & Set" },
            { id: "array-of", title: "Array.of() & Array.isArray()" },
            { id: "at-method", title: "at() — negative indexing" },
          ],
        },
        {
          id: "scope-closures",
          title: "Scope & Closures — Lexical, Block & Chain",
          description: "Understanding scope chains and closures.",
          subtopics: [
            { id: "global-scope", title: "Global Scope (window, global)" },
            { id: "function-scope", title: "Function Scope" },
            { id: "block-scope", title: "Block Scope (let/const in {})" },
            { id: "lexical-scope", title: "Lexical Scoping Rules" },
            { id: "closures", title: "Closures — definition & how they work" },
            {
              id: "closure-use-cases",
              title: "Closure Use Cases (counter, memoization)",
            },
            { id: "scope-chain", title: "Scope Chain lookup" },
            { id: "module-scope", title: "Module Scope" },
          ],
        },
        {
          id: "this-keyword",
          title: "The 'this' Keyword",
          description: "Dynamic context of this.",
          subtopics: [
            { id: "this-global", title: "this in Global Context" },
            { id: "this-method", title: "this in Methods" },
            { id: "this-arrow", title: "Arrow Functions & this (lexical)" },
            { id: "call-apply", title: "call() & apply() — explicit this" },
            { id: "bind-method", title: "bind() — permanent this binding" },
            { id: "this-class", title: "this in Classes" },
            { id: "this-event-handler", title: "this in Event Handlers" },
          ],
        },
        {
          id: "error-handling",
          title: "Error Handling — try/catch & Custom Errors",
          description: "Handling errors gracefully.",
          subtopics: [
            { id: "try-catch", title: "try / catch / finally" },
            { id: "throw-keyword", title: "throw Keyword" },
            {
              id: "error-types",
              title: "Error Types (TypeError, ReferenceError, SyntaxError)",
            },
            { id: "custom-errors", title: "Custom Error Classes" },
            { id: "error-message", title: "Error.message & Error.stack" },
          ],
        },
        {
          id: "dom-basics",
          title: "DOM Manipulation — Elements & Events",
          description: "Document Object Model fundamentals.",
          subtopics: [
            {
              id: "selecting-elements",
              title: "querySelector / querySelectorAll",
            },
            { id: "modifying-dom", title: "textContent, innerHTML, innerText" },
            {
              id: "creating-elements",
              title: "createElement, appendChild, insertBefore",
            },
            { id: "removing-elements", title: "remove(), removeChild()" },
            {
              id: "class-manipulation",
              title: "classList.add/remove/toggle/contains",
            },
            { id: "style-manipulation", title: "element.style vs cssText" },
            {
              id: "event-listeners",
              title: "addEventListener & removeEventListener",
            },
            {
              id: "event-object",
              title: "Event Object (target, currentTarget, type)",
            },
            { id: "event-bubbling", title: "Event Bubbling & Capturing" },
            { id: "event-delegation", title: "Event Delegation pattern" },
          ],
        },
        {
          id: "dates-time",
          title: "Date & Time",
          description: "Working with dates and time in JavaScript.",
          subtopics: [
            { id: "date-constructor", title: "Date Constructor (new Date)" },
            {
              id: "date-methods",
              title: "getFullYear, getMonth, getDate, getDay",
            },
            { id: "date-setters", title: "setFullYear, setMonth, setDate" },
            { id: "date-now", title: "Date.now() & getTime() (timestamps)" },
            {
              id: "date-formatting",
              title: "toLocaleDateString & toISOString",
            },
            { id: "date-comparison", title: "Comparing Dates" },
            {
              id: "date-arithmetic",
              title: "Date Arithmetic (add/subtract days)",
            },
            {
              id: "intl-datetime",
              title: "Intl.DateTimeFormat (locale-aware)",
            },
          ],
        },
        {
          id: "json-methods",
          title: "JSON — parse, stringify & Deep Clone",
          description: "Parsing and serializing JSON data.",
          subtopics: [
            { id: "json-parse", title: "JSON.parse() — string to object" },
            {
              id: "json-stringify",
              title: "JSON.stringify() — object to string",
            },
            { id: "json-reviver", title: "Reviver Function (custom parsing)" },
            {
              id: "json-replacer",
              title: "Replacer Function (custom serialization)",
            },
            { id: "json-space", title: "Pretty Printing (space parameter)" },
            {
              id: "json-deep-clone",
              title: "Deep Clone via JSON (limitations)",
            },
            {
              id: "structured-clone-intro",
              title: "structuredClone() (modern deep copy)",
            },
          ],
        },
        {
          id: "map-set",
          title: "Map & Set",
          description: "Map and Set collections.",
          subtopics: [
            { id: "map-create", title: "Creating a Map (new Map)" },
            { id: "map-methods", title: "Map: set, get, has, delete, size" },
            { id: "map-iteration", title: "Map Iteration (for...of, forEach)" },
            { id: "map-vs-object", title: "Map vs Object (when to use)" },
            { id: "set-create", title: "Creating a Set (unique values)" },
            { id: "set-methods", title: "Set: add, has, delete, size" },
            {
              id: "set-iteration",
              title: "Set Iteration & conversion to Array",
            },
            {
              id: "set-operations",
              title: "Set Operations (union, intersection, difference)",
            },
          ],
        },
        {
          id: "math-number-methods",
          title: "Math & Number Methods",
          description: "Built-in Math and Number utilities.",
          subtopics: [
            {
              id: "math-round-floor-ceil",
              title: "Math.round, floor, ceil, trunc",
            },
            { id: "math-min-max", title: "Math.min, Math.max" },
            {
              id: "math-random",
              title: "Math.random (random numbers, ranges)",
            },
            { id: "math-abs-pow-sqrt", title: "Math.abs, pow, sqrt, cbrt" },
            { id: "math-sign-log", title: "Math.sign, log, log2, log10" },
            { id: "number-isnan", title: "Number.isNaN vs isNaN (global)" },
            {
              id: "number-isfinite",
              title: "Number.isFinite & Number.isInteger",
            },
            {
              id: "number-toFixed",
              title: "toFixed, toPrecision, toLocaleString",
            },
            {
              id: "number-parseint-float",
              title: "Number.parseInt & Number.parseFloat",
            },
          ],
        },
        {
          id: "string-methods-advanced",
          title: "String Methods Advanced",
          description: "Advanced string manipulation methods.",
          subtopics: [
            { id: "string-split", title: "split() — string to array" },
            { id: "string-replace", title: "replace() & replaceAll()" },
            { id: "string-match", title: "match() & search()" },
            { id: "string-repeat", title: "repeat()" },
            { id: "string-pad", title: "padStart() & padEnd()" },
            { id: "string-starts-ends", title: "startsWith() & endsWith()" },
            {
              id: "string-slice-substring",
              title: "slice() vs substring() vs substr()",
            },
            { id: "string-at", title: "at() — negative indexing" },
            { id: "string-raw", title: "String.raw (template literal tag)" },
          ],
        },
        {
          id: "event-loop-intro",
          title: "Event Loop & Asynchronous Preview",
          description:
            "Understanding JS async model before diving into Promises.",
          subtopics: [
            { id: "sync-vs-async", title: "Synchronous vs Asynchronous Code" },
            { id: "call-stack-intro", title: "Call Stack Visualization" },
            { id: "web-apis-role", title: "Web APIs Role (setTimeout, fetch)" },
            { id: "callback-queue", title: "Callback Queue (Task Queue)" },
            { id: "event-loop-visual", title: "Event Loop Step-by-Step" },
            { id: "blocking-code", title: "Blocking vs Non-Blocking Code" },
          ],
        },
        {
          id: "iteration-protocols",
          title: "Iterables & for...of Protocol",
          description: "Understanding iteration protocols.",
          subtopics: [
            {
              id: "iterable-protocol",
              title: "Iterable Protocol (Symbol.iterator)",
            },
            {
              id: "iterator-protocol",
              title: "Iterator Protocol ({ next() })",
            },
            { id: "custom-iterable", title: "Creating Custom Iterables" },
            { id: "string-iterable", title: "Strings as Iterables" },
            {
              id: "array-destructuring-iter",
              title: "Array Destructuring & Iterables",
            },
            { id: "spread-iterables", title: "Spread Operator on Iterables" },
          ],
        },
        {
          id: "storage-basics",
          title: "Web Storage — localStorage & sessionStorage",
          description: "Browser storage mechanisms.",
          subtopics: [
            {
              id: "localstorage-get-set",
              title: "localStorage.getItem / setItem",
            },
            { id: "sessionstorage", title: "sessionStorage vs localStorage" },
            {
              id: "storage-json",
              title: "Storing Objects (JSON.stringify / parse)",
            },
            { id: "storage-limits", title: "Storage Limits & Quota" },
            { id: "storage-events", title: "Storage Events (cross-tab sync)" },
            { id: "clear-remove", title: "clear() & removeItem()" },
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
      description: "Searching, sorting & recursion.",
      topics: [
        {
          id: "searching",
          title: "Searching Algorithms",
          description: "Search algorithms.",
          subtopics: [
            { id: "linear-search", title: "Linear Search — O(n)" },
            { id: "binary-search", title: "Binary Search — O(log n)" },
            {
              id: "binary-search-variants",
              title: "Binary Search Variants (first/last occurrence)",
            },
            {
              id: "search-in-rotated",
              title: "Search in Rotated Sorted Array",
            },
            { id: "exponential-search", title: "Exponential Search" },
          ],
        },
        {
          id: "sorting-basics",
          title: "Sorting Algorithms",
          description: "Basic sorting algorithms.",
          subtopics: [
            { id: "bubble-sort", title: "Bubble Sort — O(n²)" },
            { id: "selection-sort", title: "Selection Sort — O(n²)" },
            {
              id: "insertion-sort",
              title: "Insertion Sort — O(n²) / O(n) best",
            },
            { id: "merge-sort", title: "Merge Sort — O(n log n)" },
            { id: "quick-sort", title: "Quick Sort — O(n log n) avg" },
            { id: "sort-stability", title: "Sort Stability explained" },
            { id: "counting-sort", title: "Counting Sort — O(n + k)" },
            { id: "radix-sort", title: "Radix Sort" },
            { id: "js-sort", title: "JS built-in sort() internals (TimSort)" },
          ],
        },
        {
          id: "recursion",
          title: "Recursion — Fundamentals & Call Stack",
          description: "Recursive problem solving.",
          subtopics: [
            { id: "recursion-basics", title: "Recursion Basics" },
            { id: "base-case", title: "Base Case & Recursive Case" },
            { id: "call-stack-recursion", title: "Call Stack in Recursion" },
            { id: "factorial-recursive", title: "Factorial (recursive)" },
            {
              id: "fibonacci-recursive",
              title: "Fibonacci (recursive with memoization)",
            },
            { id: "power-of-n", title: "Power of N (fast exponentiation)" },
            {
              id: "recursion-vs-iteration",
              title: "Recursion vs Iteration (trade-offs)",
            },
            { id: "tail-call", title: "Tail Call Optimization (TCO)" },
          ],
        },
        {
          id: "two-pointers",
          title: "Two Pointers & Sliding Window",
          description: "Solving problems with two pointers.",
          subtopics: [
            { id: "two-sum-sorted", title: "Two Sum (sorted array)" },
            { id: "reverse-array", title: "Reverse an Array in-place" },
            {
              id: "palindrome-check",
              title: "Palindrome Check (two pointers)",
            },
            { id: "remove-duplicates", title: "Remove Duplicates (sorted)" },
            { id: "container-water", title: "Container With Most Water" },
            { id: "three-sum", title: "3Sum Problem" },
            { id: "fixed-window", title: "Fixed Size Sliding Window" },
            { id: "variable-window", title: "Variable Size Sliding Window" },
          ],
        },
        {
          id: "prefix-sum",
          title: "Prefix Sum Technique",
          description: "Efficient range queries with prefix sum.",
          subtopics: [
            { id: "prefix-sum-1d", title: "1D Prefix Sum Construction" },
            { id: "range-sum-query", title: "Range Sum Query — O(1)" },
            { id: "subarray-sum", title: "Subarray Sum Equals K" },
            { id: "equilibrium-index", title: "Equilibrium Index" },
            {
              id: "product-except-self",
              title: "Product of Array Except Self",
            },
            { id: "prefix-sum-2d", title: "2D Prefix Sum (Matrix)" },
          ],
        },
        {
          id: "matrix-problems",
          title: "Matrix / 2D Array Problems",
          description: "Working with 2D arrays and matrices.",
          subtopics: [
            {
              id: "matrix-traversal",
              title: "Matrix Traversal (row-wise, col-wise)",
            },
            { id: "matrix-rotation", title: "Rotate Matrix 90 degrees" },
            { id: "spiral-matrix", title: "Spiral Matrix Traversal" },
            { id: "transpose-matrix", title: "Transpose a Matrix" },
            { id: "set-zeroes", title: "Set Matrix Zeroes" },
            { id: "diagonal-traversal", title: "Diagonal Traversal" },
            { id: "search-2d-matrix", title: "Search in 2D Sorted Matrix" },
          ],
        },
        {
          id: "bit-manipulation-basics",
          title: "Bit Manipulation Basics",
          description: "Understanding bitwise operations.",
          subtopics: [
            {
              id: "binary-representation",
              title: "Binary Number Representation",
            },
            { id: "bitwise-and-or-xor", title: "AND (&), OR (|), XOR (^)" },
            { id: "bitwise-not", title: "NOT (~) & Two's Complement" },
            {
              id: "left-right-shift",
              title: "Left Shift (<<) & Right Shift (>>)",
            },
            { id: "check-bit", title: "Check if Bit is Set" },
            { id: "set-clear-toggle", title: "Set, Clear & Toggle a Bit" },
            { id: "power-of-two", title: "Check Power of Two (n & n-1)" },
            { id: "count-set-bits", title: "Count Set Bits (Brian Kernighan)" },
          ],
        },
        {
          id: "frequency-counter",
          title: "Frequency Counter Pattern",
          description: "Using hash maps for counting patterns.",
          subtopics: [
            { id: "freq-count-map", title: "Frequency Counter with Map" },
            { id: "anagram-freq", title: "Valid Anagram (frequency approach)" },
            { id: "same-frequency", title: "Are Two Arrays Same Frequency?" },
            { id: "majority-element", title: "Majority Element (Boyer-Moore)" },
            { id: "top-k-frequent-basic", title: "Top K Frequent Elements" },
            { id: "intersection-arrays", title: "Intersection of Two Arrays" },
          ],
        },
        {
          id: "hashing-basics",
          title: "Hashing Concepts — Hash Functions & Collisions",
          description: "Understanding hashing fundamentals.",
          subtopics: [
            { id: "what-is-hashing", title: "What is Hashing?" },
            { id: "hash-function-basics", title: "Hash Function Properties" },
            {
              id: "collision-intro",
              title: "Collision Handling (chaining intro)",
            },
            { id: "map-vs-object-perf", title: "Map vs Object Performance" },
            { id: "set-use-cases", title: "Set for Unique Values" },
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
      description: "Junior interview prep.",
      topics: [
        {
          id: "core-concepts-qa",
          title: "Core Concepts Q&A",
          description: "Common interview topics.",
          subtopics: [
            {
              id: "hoisting",
              title: "Explain hoisting (var, let, const, function)",
            },
            { id: "scope-closures-qa", title: "Scope & Closures explained" },
            {
              id: "this-keyword",
              title: "The 'this' keyword — all 5 binding rules",
            },
            {
              id: "call-apply-bind",
              title: "call(), apply(), bind() differences",
            },
            { id: "strict-mode-qa", title: "What does 'use strict' do?" },
            { id: "execution-context", title: "What is an Execution Context?" },
          ],
        },
        {
          id: "functions-qa",
          title: "Functions & Closures Q&A",
          description: "Questions about functions.",
          subtopics: [
            {
              id: "arrow-vs-regular",
              title: "Arrow vs regular functions (5 differences)",
            },
            {
              id: "first-class-functions",
              title: "First-class & higher-order functions",
            },
            { id: "callback-hell", title: "What is callback hell? Solutions?" },
            {
              id: "debounce-throttle",
              title: "Implement debounce vs throttle",
            },
            {
              id: "memoization-qa",
              title: "What is memoization? Implement it.",
            },
            { id: "closure-qa-examples", title: "Closure practical examples" },
          ],
        },
        {
          id: "dom-qa",
          title: "DOM & Events Q&A",
          description: "DOM-related interview questions.",
          subtopics: [
            {
              id: "bubbling-vs-capturing",
              title: "Event Bubbling vs Capturing",
            },
            {
              id: "event-delegation-qa",
              title: "Event Delegation — when & why",
            },
            {
              id: "prevent-default",
              title: "preventDefault vs stopPropagation",
            },
            { id: "dom-vs-virtual-dom", title: "DOM vs Virtual DOM" },
            {
              id: "repaint-reflow",
              title: "What triggers a reflow vs repaint?",
            },
            { id: "event-loop-basic", title: "Basic Event Loop explanation" },
          ],
        },
        {
          id: "coding-challenges-basic",
          title: "Basic Coding Challenges",
          description: "Entry-level coding interview problems.",
          subtopics: [
            { id: "reverse-string", title: "Reverse a String (3 ways)" },
            {
              id: "palindrome-check",
              title: "Check if a String is Palindrome",
            },
            { id: "fizzbuzz", title: "FizzBuzz Implementation" },
            { id: "max-min-array", title: "Find Max/Min in Array" },
            { id: "count-vowels", title: "Count Vowels in a String" },
            {
              id: "capitalize-words",
              title: "Capitalize First Letter of Each Word",
            },
            {
              id: "remove-duplicates-arr",
              title: "Remove Duplicates from Array",
            },
            { id: "flatten-simple", title: "Flatten a Simple Nested Array" },
          ],
        },
        {
          id: "array-methods-qa",
          title: "Array Methods Interview Q&A",
          description: "Interview questions about array methods.",
          subtopics: [
            {
              id: "map-vs-foreach-qa",
              title: "map() vs forEach() — when to use which?",
            },
            {
              id: "reduce-explain-qa",
              title: "Explain reduce() with examples",
            },
            { id: "filter-find-qa", title: "filter() vs find() — difference?" },
            {
              id: "sort-gotchas-qa",
              title: "Array.sort() gotchas (numeric sort)",
            },
            {
              id: "immutable-methods-qa",
              title: "Which array methods are immutable?",
            },
            { id: "chaining-methods-qa", title: "Method chaining patterns" },
          ],
        },
        {
          id: "error-handling-qa",
          title: "Error Handling Q&A",
          description: "Interview questions about errors.",
          subtopics: [
            { id: "try-catch-qa", title: "How does try/catch/finally work?" },
            { id: "error-types-qa", title: "List JavaScript error types" },
            { id: "custom-error-qa", title: "How to create custom errors?" },
            {
              id: "throw-vs-reject-qa",
              title: "throw vs Promise.reject — difference?",
            },
            {
              id: "global-error-qa",
              title: "window.onerror vs addEventListener('error')",
            },
          ],
        },
        {
          id: "objects-this-qa",
          title: "Objects & 'this' Q&A",
          description: "Interview questions about objects and this.",
          subtopics: [
            { id: "object-copy-qa", title: "Shallow vs Deep Copy explained" },
            {
              id: "destructuring-qa",
              title: "Object Destructuring in interviews",
            },
            {
              id: "freeze-vs-seal-qa",
              title: "freeze() vs seal() vs preventExtensions()",
            },
            {
              id: "this-context-qa",
              title: "'this' in different contexts (5 rules)",
            },
            {
              id: "property-shorthand-qa",
              title: "Property Shorthand & Computed Keys",
            },
            {
              id: "object-comparison-qa",
              title: "Why {} === {} is false (reference comparison)",
            },
          ],
        },
      ],
    },
  ],
};
