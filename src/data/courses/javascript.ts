import { Course } from "@/types";

export const javascriptCourse: Course = {
  id: "javascript",
  title: "JavaScript",
  description: "Master JavaScript from fundamentals to advanced internals.",
  icon: "📜",
  color: "#f7df1e",
  levels: [
    // ── Entry ──────────────────────────────────────────────
    {
      id: "entry",
      title: "Entry",
      description: "Absolute basics of JavaScript.",
      modules: [
        {
          id: "js",
          title: "JS",
          description: "Core JavaScript fundamentals.",
          topics: [
            {
              id: "variables",
              title: "Variables",
              description: "How to declare and use variables.",
              subtopics: [
                { id: "let", title: "let" },
                { id: "const", title: "const" },
                { id: "var", title: "var" },
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
              ],
            },
            {
              id: "operators",
              title: "Operators",
              description: "JavaScript operators.",
              subtopics: [
                { id: "arithmetic", title: "Arithmetic Operators" },
                { id: "comparison", title: "Comparison Operators" },
                { id: "logical", title: "Logical Operators" },
              ],
            },
          ],
        },
        {
          id: "dsa",
          title: "DSA",
          description: "Basic data structures.",
          topics: [
            {
              id: "arrays-basics",
              title: "Arrays Basics",
              description: "Working with arrays.",
              subtopics: [
                { id: "creating-arrays", title: "Creating Arrays" },
                { id: "accessing-elements", title: "Accessing Elements" },
                { id: "basic-array-methods", title: "Basic Array Methods" },
              ],
            },
            {
              id: "string-basics",
              title: "String Basics",
              description: "Working with strings.",
              subtopics: [
                { id: "string-methods", title: "String Methods" },
                { id: "template-literals", title: "Template Literals" },
              ],
            },
          ],
        },
        {
          id: "qa",
          title: "Q&A",
          description: "Common entry-level questions.",
          topics: [
            {
              id: "js-fundamentals-qa",
              title: "JavaScript Fundamentals",
              description: "Foundational questions about JavaScript.",
              subtopics: [
                { id: "what-is-js", title: "What is JavaScript?" },
                { id: "how-js-runs", title: "How JS Runs in a Browser" },
                { id: "js-vs-others", title: "JS vs Other Languages" },
              ],
            },
          ],
        },
      ],
    },

    // ── Junior ─────────────────────────────────────────────
    {
      id: "junior",
      title: "Junior",
      description: "Building practical JavaScript skills.",
      modules: [
        {
          id: "js",
          title: "JS",
          description: "Intermediate JavaScript.",
          topics: [
            {
              id: "functions",
              title: "Functions",
              description: "All about functions.",
              subtopics: [
                { id: "function-declarations", title: "Function Declarations" },
                { id: "arrow-functions", title: "Arrow Functions" },
                { id: "parameters-defaults", title: "Parameters & Defaults" },
                { id: "return-values", title: "Return Values" },
              ],
            },
            {
              id: "objects",
              title: "Objects",
              description: "Working with objects.",
              subtopics: [
                { id: "object-literals", title: "Object Literals" },
                { id: "properties-methods", title: "Properties & Methods" },
                { id: "object-destructuring", title: "Destructuring" },
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
              ],
            },
          ],
        },
        {
          id: "dsa",
          title: "DSA",
          description: "Searching and sorting.",
          topics: [
            {
              id: "searching",
              title: "Searching",
              description: "Search algorithms.",
              subtopics: [
                { id: "linear-search", title: "Linear Search" },
                { id: "binary-search", title: "Binary Search" },
              ],
            },
            {
              id: "sorting-basics",
              title: "Sorting Basics",
              description: "Basic sorting algorithms.",
              subtopics: [
                { id: "bubble-sort", title: "Bubble Sort" },
                { id: "selection-sort", title: "Selection Sort" },
                { id: "insertion-sort", title: "Insertion Sort" },
              ],
            },
          ],
        },
        {
          id: "qa",
          title: "Q&A",
          description: "Junior interview prep.",
          topics: [
            {
              id: "core-concepts-qa",
              title: "Core Concepts",
              description: "Common interview topics.",
              subtopics: [
                { id: "hoisting", title: "Hoisting" },
                { id: "scope-closures", title: "Scope & Closures" },
                { id: "this-keyword", title: "The this Keyword" },
              ],
            },
          ],
        },
      ],
    },

    // ── Mid ────────────────────────────────────────────────
    {
      id: "mid",
      title: "Mid",
      description: "Intermediate to advanced concepts.",
      modules: [
        {
          id: "js",
          title: "JS",
          description: "Advanced JavaScript features.",
          topics: [
            {
              id: "async-javascript",
              title: "Async JavaScript",
              description: "Asynchronous programming.",
              subtopics: [
                { id: "callbacks", title: "Callbacks" },
                { id: "promises", title: "Promises" },
                { id: "async-await", title: "async / await" },
              ],
            },
            {
              id: "es6-features",
              title: "ES6+ Features",
              description: "Modern JavaScript syntax.",
              subtopics: [
                { id: "destructuring", title: "Destructuring" },
                { id: "spread-rest", title: "Spread & Rest" },
                { id: "modules", title: "ES Modules" },
              ],
            },
            {
              id: "prototypes-classes",
              title: "Prototypes & Classes",
              description: "OOP in JavaScript.",
              subtopics: [
                { id: "prototype-chain", title: "Prototype Chain" },
                { id: "class-syntax", title: "Class Syntax" },
                { id: "inheritance", title: "Inheritance" },
              ],
            },
          ],
        },
        {
          id: "dsa",
          title: "DSA",
          description: "Core data structures.",
          topics: [
            {
              id: "linked-lists",
              title: "Linked Lists",
              description: "Linked list implementations.",
              subtopics: [
                { id: "singly-linked", title: "Singly Linked List" },
                { id: "doubly-linked", title: "Doubly Linked List" },
                { id: "ll-operations", title: "Common Operations" },
              ],
            },
            {
              id: "stacks-queues",
              title: "Stacks & Queues",
              description: "LIFO and FIFO structures.",
              subtopics: [
                { id: "stack-impl", title: "Stack Implementation" },
                { id: "queue-impl", title: "Queue Implementation" },
                { id: "sq-use-cases", title: "Use Cases" },
              ],
            },
          ],
        },
        {
          id: "qa",
          title: "Q&A",
          description: "Mid-level interview prep.",
          topics: [
            {
              id: "runtime-concepts-qa",
              title: "Runtime Concepts",
              description: "How JavaScript works under the hood.",
              subtopics: [
                { id: "event-loop", title: "Event Loop" },
                { id: "call-stack", title: "Call Stack" },
                { id: "micro-macro", title: "Microtasks vs Macrotasks" },
              ],
            },
          ],
        },
      ],
    },

    // ── Senior ─────────────────────────────────────────────
    {
      id: "senior",
      title: "Senior",
      description: "Advanced patterns and architecture.",
      modules: [
        {
          id: "js",
          title: "JS",
          description: "Patterns and memory.",
          topics: [
            {
              id: "design-patterns",
              title: "Design Patterns",
              description: "Common JavaScript design patterns.",
              subtopics: [
                { id: "singleton", title: "Singleton" },
                { id: "observer", title: "Observer" },
                { id: "factory", title: "Factory" },
              ],
            },
            {
              id: "memory-management",
              title: "Memory Management",
              description: "Memory in JavaScript.",
              subtopics: [
                { id: "garbage-collection", title: "Garbage Collection" },
                { id: "memory-leaks", title: "Memory Leaks" },
                { id: "weakmap-weakset", title: "WeakMap & WeakSet" },
              ],
            },
          ],
        },
        {
          id: "dsa",
          title: "DSA",
          description: "Trees and hash tables.",
          topics: [
            {
              id: "trees",
              title: "Trees",
              description: "Tree data structures.",
              subtopics: [
                { id: "binary-tree", title: "Binary Tree" },
                { id: "bst", title: "Binary Search Tree" },
                { id: "tree-traversal", title: "Tree Traversal" },
              ],
            },
            {
              id: "hash-tables",
              title: "Hash Tables",
              description: "Hash-based structures.",
              subtopics: [
                { id: "hash-functions", title: "Hash Functions" },
                { id: "collision-handling", title: "Collision Handling" },
                { id: "map-vs-object", title: "Map vs Object" },
              ],
            },
          ],
        },
        {
          id: "qa",
          title: "Q&A",
          description: "Senior architecture questions.",
          topics: [
            {
              id: "architecture-qa",
              title: "Architecture",
              description: "System design and tooling questions.",
              subtopics: [
                { id: "module-systems", title: "Module Systems" },
                { id: "build-tools", title: "Build Tools" },
                { id: "performance-budgets", title: "Performance Budgets" },
              ],
            },
          ],
        },
      ],
    },

    // ── Staff ──────────────────────────────────────────────
    {
      id: "staff",
      title: "Staff",
      description: "Performance, security, and leadership.",
      modules: [
        {
          id: "js",
          title: "JS",
          description: "Performance and security.",
          topics: [
            {
              id: "performance",
              title: "Performance Optimization",
              description: "Making JavaScript fast.",
              subtopics: [
                { id: "profiling", title: "Profiling" },
                { id: "lazy-loading", title: "Lazy Loading" },
                { id: "web-workers", title: "Web Workers" },
              ],
            },
            {
              id: "security",
              title: "Security",
              description: "Frontend security practices.",
              subtopics: [
                { id: "xss-prevention", title: "XSS Prevention" },
                { id: "csp", title: "Content Security Policy" },
                { id: "input-sanitization", title: "Input Sanitization" },
              ],
            },
          ],
        },
        {
          id: "dsa",
          title: "DSA",
          description: "Dynamic programming.",
          topics: [
            {
              id: "dynamic-programming",
              title: "Dynamic Programming",
              description: "DP techniques and patterns.",
              subtopics: [
                { id: "memoization", title: "Memoization" },
                { id: "tabulation", title: "Tabulation" },
                { id: "common-dp", title: "Common DP Problems" },
              ],
            },
          ],
        },
        {
          id: "qa",
          title: "Q&A",
          description: "Leadership topics.",
          topics: [
            {
              id: "tech-leadership-qa",
              title: "Technical Leadership",
              description: "Leading engineering teams.",
              subtopics: [
                { id: "code-review", title: "Code Review Best Practices" },
                { id: "documentation", title: "Documentation Standards" },
                { id: "mentoring", title: "Mentoring" },
              ],
            },
          ],
        },
      ],
    },

    // ── Principal ──────────────────────────────────────────
    {
      id: "principal",
      title: "Principal",
      description: "Language internals and strategic thinking.",
      modules: [
        {
          id: "js",
          title: "JS",
          description: "Engine internals and standards.",
          topics: [
            {
              id: "language-internals",
              title: "Language Internals",
              description: "How JavaScript engines work.",
              subtopics: [
                { id: "v8-engine", title: "V8 Engine" },
                { id: "jit-compilation", title: "JIT Compilation" },
                { id: "hidden-classes", title: "Hidden Classes" },
              ],
            },
            {
              id: "tc39-process",
              title: "TC39 Process",
              description: "JavaScript standardization.",
              subtopics: [
                { id: "proposal-stages", title: "Proposal Stages" },
                { id: "polyfills", title: "Polyfills" },
                { id: "transpilation", title: "Transpilation Strategies" },
              ],
            },
          ],
        },
        {
          id: "dsa",
          title: "DSA",
          description: "Algorithm design theory.",
          topics: [
            {
              id: "algorithm-design",
              title: "Algorithm Design",
              description: "Theoretical foundations.",
              subtopics: [
                { id: "complexity-analysis", title: "Complexity Analysis" },
                { id: "amortized-analysis", title: "Amortized Analysis" },
                { id: "space-time", title: "Space-Time Tradeoffs" },
              ],
            },
          ],
        },
        {
          id: "qa",
          title: "Q&A",
          description: "Strategic engineering questions.",
          topics: [
            {
              id: "engineering-strategy-qa",
              title: "Engineering Strategy",
              description: "High-level engineering decisions.",
              subtopics: [
                {
                  id: "architecture-decisions",
                  title: "Architecture Decisions",
                },
                { id: "tech-debt", title: "Technical Debt Management" },
                { id: "ecosystem-eval", title: "Ecosystem Evaluation" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
