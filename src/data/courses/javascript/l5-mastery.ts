import { Level } from "@/types";

export const l5Level: Level = {
  id: "principal",
  title: "Mastery & Ecosystem",
  description: "Principal / Lead",
  color: "#34d399",
  modules: [
    // ── JS ───────────────────────────────────────────────
    {
      id: "js",
      title: "JS",
      icon: "{ }",
      color: "#4ade80",
      description: "Engine internals, standards & ecosystem.",
      topics: [
        {
          id: "language-internals",
          title: "JS Engine Internals",
          description: "How JavaScript engines work.",
          subtopics: [
            {
              id: "v8-engine",
              title: "V8 Engine Architecture (Ignition + TurboFan)",
            },
            { id: "jit-compilation", title: "JIT Compilation pipeline" },
            {
              id: "hidden-classes",
              title: "Hidden Classes & Inline Caches (ICs)",
            },
            {
              id: "parsing-ast",
              title: "Parsing & AST Generation (pre-parse)",
            },
            { id: "bytecode", title: "Bytecode & Bytecode Handlers" },
            {
              id: "gc-generations",
              title: "Generational GC (Scavenger + Major GC)",
            },
            {
              id: "deoptimization",
              title: "Deoptimization & speculative optimization",
            },
            {
              id: "execution-pipeline",
              title: "Full Execution Pipeline walkthrough",
            },
          ],
        },
        {
          id: "tc39-process",
          title: "TC39 & ECMAScript Standards",
          description: "JavaScript standardization.",
          subtopics: [
            { id: "proposal-stages", title: "Proposal Stages 0→4 explained" },
            {
              id: "active-proposals",
              title: "Notable Active Proposals (Temporal, Records)",
            },
            {
              id: "polyfills",
              title: "Polyfills vs Ponyfills vs Transpilation",
            },
            {
              id: "transpilation",
              title: "Transpilation (Babel Stage presets, SWC)",
            },
            {
              id: "spec-reading",
              title: "Reading the ECMAScript Specification",
            },
            { id: "test262", title: "Test262 — conformance test suite" },
          ],
        },
        {
          id: "ast-tooling",
          title: "AST & Code Tooling",
          description: "Working with Abstract Syntax Trees.",
          subtopics: [
            { id: "ast-basics", title: "AST Basics (ESTree spec)" },
            {
              id: "ast-parser",
              title: "Parsers (Acorn, Babel Parser, Meriyah)",
            },
            { id: "ast-transforms", title: "AST Transforms & visitor pattern" },
            { id: "babel-plugins", title: "Writing Babel Plugins" },
            { id: "eslint-rules", title: "Custom ESLint Rules" },
            { id: "codemods", title: "Codemods (jscodeshift)" },
            {
              id: "source-maps",
              title: "Source Maps generation & consumption",
            },
          ],
        },
        {
          id: "wasm-integration",
          title: "WebAssembly & JS Interop",
          description: "Using WASM with JavaScript.",
          subtopics: [
            { id: "wasm-intro", title: "WebAssembly Concepts (WAT, .wasm)" },
            {
              id: "wasm-compile",
              title: "Compiling C/C++/Rust to WASM (Emscripten)",
            },
            {
              id: "wasm-js-interop",
              title: "WASM ↔ JS Interop (Memory, imports/exports)",
            },
            {
              id: "wasm-use-cases",
              title: "Use Cases (video encode, physics, crypto)",
            },
            { id: "wasm-threads", title: "WASM Threads (SharedArrayBuffer)" },
            {
              id: "wasm-component-model",
              title: "WASM Component Model (future)",
            },
          ],
        },
        {
          id: "build-systems",
          title: "Build Systems & Bundlers",
          description: "Understanding modern build tools.",
          subtopics: [
            {
              id: "webpack-deep",
              title: "Webpack internals (tapable, loaders, plugins)",
            },
            {
              id: "vite-internals",
              title: "Vite internals (esbuild dev, Rollup prod)",
            },
            { id: "rollup-plugins", title: "Rollup Plugin API" },
            { id: "esbuild-swc", title: "esbuild & SWC — speed trade-offs" },
            { id: "turbopack", title: "Turbopack & Turborepo" },
            { id: "module-federation", title: "Module Federation (Webpack 5)" },
            { id: "rspack", title: "Rspack & Rsbuild" },
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
      description: "Advanced algorithm design & theory.",
      topics: [
        {
          id: "algorithm-design",
          title: "Algorithm Design Theory",
          description: "Theoretical foundations.",
          subtopics: [
            {
              id: "complexity-analysis",
              title: "Time Complexity Analysis (tight bounds)",
            },
            {
              id: "amortized-analysis",
              title: "Amortized Analysis (aggregate, banker, potential)",
            },
            { id: "space-time", title: "Space-Time Trade-offs" },
            { id: "divide-conquer", title: "Divide & Conquer paradigm" },
            { id: "master-theorem", title: "Master Theorem for recurrences" },
            {
              id: "randomized-algorithms",
              title: "Randomized Algorithms (QuickSelect)",
            },
          ],
        },
        {
          id: "advanced-trees",
          title: "Advanced Tree Structures",
          description: "Self-balancing trees and advanced variants.",
          subtopics: [
            { id: "avl-tree", title: "AVL Tree rotations & balance factor" },
            {
              id: "red-black-tree",
              title: "Red-Black Tree (concepts & properties)",
            },
            { id: "b-tree", title: "B-Tree / B+ Tree (disk-based indexing)" },
            { id: "segment-tree", title: "Segment Tree (range queries)" },
            { id: "fenwick-tree", title: "Fenwick Tree / BIT (prefix sums)" },
            {
              id: "persistent-data-structures",
              title: "Persistent Data Structures",
            },
          ],
        },
        {
          id: "string-algorithms",
          title: "Advanced String Algorithms",
          description: "Advanced string problem solving.",
          subtopics: [
            { id: "kmp-algorithm", title: "KMP Pattern Matching — O(n+m)" },
            { id: "rabin-karp", title: "Rabin-Karp (rolling hash)" },
            { id: "z-algorithm", title: "Z-Algorithm" },
            { id: "suffix-array", title: "Suffix Array construction" },
            {
              id: "aho-corasick",
              title: "Aho-Corasick multi-pattern matching",
            },
            {
              id: "longest-palindrome",
              title: "Manacher's Algorithm (longest palindrome)",
            },
          ],
        },
        {
          id: "np-problems",
          title: "Complexity Classes & Theory",
          description: "Theoretical computer science.",
          subtopics: [
            { id: "p-vs-np", title: "P vs NP — the million dollar question" },
            { id: "np-complete", title: "NP-Complete Problems (SAT, 3-SAT)" },
            { id: "np-hard", title: "NP-Hard distinction" },
            { id: "reductions", title: "Polynomial Reductions" },
            { id: "approximation-algo", title: "Approximation Algorithms" },
            {
              id: "parameterized-complexity",
              title: "Parameterized Complexity",
            },
          ],
        },
        {
          id: "network-flow",
          title: "Network Flow & Matching",
          description: "Flow networks and matching algorithms.",
          subtopics: [
            {
              id: "max-flow",
              title: "Max Flow (Ford-Fulkerson method)",
            },
            {
              id: "edmonds-karp",
              title: "Edmonds-Karp (BFS-based max flow)",
            },
            {
              id: "min-cut",
              title: "Min Cut (Max-Flow Min-Cut theorem)",
            },
            {
              id: "bipartite-matching",
              title: "Bipartite Matching (Hungarian)",
            },
            { id: "hopcroft-karp", title: "Hopcroft-Karp Algorithm" },
            {
              id: "flow-applications",
              title: "Flow Applications (assignment, routing)",
            },
          ],
        },
        {
          id: "advanced-dp",
          title: "Advanced DP Techniques",
          description: "Expert-level dynamic programming.",
          subtopics: [
            { id: "digit-dp", title: "Digit DP" },
            { id: "dp-on-trees", title: "DP on Trees" },
            {
              id: "profile-dp",
              title: "Profile DP (Broken Profile)",
            },
            {
              id: "sos-dp",
              title: "Sum over Subsets (SOS) DP",
            },
            {
              id: "convex-hull-trick",
              title: "Convex Hull Trick (DP optimization)",
            },
            {
              id: "divide-conquer-dp",
              title: "Divide & Conquer DP Optimization",
            },
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
      description: "Principal-level interview prep.",
      topics: [
        {
          id: "engineering-strategy-qa",
          title: "Engineering Strategy Q&A",
          description: "High-level engineering decisions.",
          subtopics: [
            {
              id: "architecture-decisions",
              title: "Architecture Decision Records (ADRs)",
            },
            {
              id: "tech-debt",
              title: "Technical Debt — identification & prioritization",
            },
            {
              id: "ecosystem-eval",
              title: "Evaluating new tech (frameworks, libraries)",
            },
            {
              id: "migration-strategies",
              title: "Large-scale migration strategies",
            },
            {
              id: "build-vs-buy",
              title: "Build vs Buy vs Open Source decision",
            },
            { id: "platform-eng", title: "Platform Engineering (DX, tooling)" },
          ],
        },
        {
          id: "scale-qa",
          title: "Scale & Infrastructure Q&A",
          description: "Building at scale.",
          subtopics: [
            { id: "cdn-strategy", title: "CDN Strategy & edge computing" },
            {
              id: "caching-layers",
              title: "Caching Layers (browser, CDN, server)",
            },
            {
              id: "monitoring-observability",
              title: "Monitoring & Observability (metrics, traces, logs)",
            },
            { id: "ci-cd-pipelines", title: "CI/CD Pipeline Design" },
            {
              id: "feature-flags",
              title: "Feature Flags at Scale (LaunchDarkly)",
            },
            { id: "a-b-testing", title: "A/B Testing Architecture" },
            {
              id: "reliability",
              title: "Frontend Reliability (error budgets, SLOs)",
            },
          ],
        },
        {
          id: "leadership-qa",
          title: "Engineering Leadership Q&A",
          description: "Leadership & culture questions.",
          subtopics: [
            { id: "team-structure", title: "Team Structure & Conway's Law" },
            {
              id: "hiring-interviews",
              title: "Designing Effective Interview Loops",
            },
            { id: "rfc-process", title: "RFC & Design Review Process" },
            {
              id: "cross-team-collab",
              title: "Cross-team Collaboration & alignment",
            },
            {
              id: "engineering-culture",
              title: "Building Engineering Culture",
            },
            { id: "staff-plus-career", title: "Staff+ Career Path & impact" },
          ],
        },
        {
          id: "competitive-problems-qa",
          title: "Hard Competitive Problems Q&A",
          description: "Competition-level problem solving.",
          subtopics: [
            {
              id: "range-query-problems",
              title: "Range Query Problems (Segment Tree/BIT)",
            },
            {
              id: "string-matching-hard",
              title: "Hard String Matching Problems",
            },
            {
              id: "graph-flow-problems",
              title: "Graph + Flow Combined Problems",
            },
            {
              id: "interactive-problems",
              title: "Interactive Problem Solving",
            },
            {
              id: "constructive-algorithms",
              title: "Constructive Algorithm Problems",
            },
            {
              id: "game-theory",
              title: "Game Theory (Sprague-Grundy theorem)",
            },
          ],
        },
      ],
    },
  ],
};
