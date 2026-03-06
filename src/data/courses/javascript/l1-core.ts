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
          title: "Functions In Depth",
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
          title: "Objects In Depth",
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
          title: "Functional Array Methods",
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
          title: "Scope & Closures",
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
          title: "Error Handling",
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
          title: "DOM Manipulation",
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
          title: "Recursion",
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
      ],
    },
  ],
};
