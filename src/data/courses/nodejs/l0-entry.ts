import { Level } from "@/types";

export const l0Level: Level = {
  id: "entry",
  title: "Node.js Foundations",
  description: "Beginner",
  color: "#4ade80",
  modules: [
    // ── Node.js ──────────────────────────────────────────
    {
      id: "nodejs",
      title: "Node.js",
      icon: "route",
      color: "#68a063",
      description: "Node.js absolute basics.",
      topics: [
        {
          id: "what-is-nodejs",
          title: "What is Node.js?",
          description: "Introduction to Node.js and its purpose.",
          subtopics: [
            {
              id: "nodejs-definition",
              title: "Node.js — JavaScript runtime outside browser",
            },
            {
              id: "v8-engine",
              title: "V8 Engine — compiling JS to machine code",
            },
            { id: "libuv-intro", title: "libuv — async I/O library (intro)" },
            {
              id: "single-threaded-model",
              title: "Single-threaded, event-driven model",
            },
            { id: "non-blocking-io", title: "Non-blocking I/O model" },
            {
              id: "node-vs-browser",
              title: "Node.js vs Browser JS (differences)",
            },
            {
              id: "nodejs-use-cases",
              title: "Node.js Use Cases (API, CLI, tools, scripts)",
            },
            {
              id: "nodejs-not-for",
              title: "When NOT to use Node.js (CPU-heavy tasks)",
            },
          ],
        },
        {
          id: "installation-setup",
          title: "Installation & Setup",
          description: "Setting up Node.js development environment.",
          subtopics: [
            {
              id: "install-nodejs",
              title: "Installing Node.js (LTS vs Current)",
            },
            { id: "nvm-nvmrc", title: "nvm / nvm-windows — version manager" },
            { id: "node-cli", title: "node CLI — running JS files" },
            { id: "node-repl", title: "Node.js REPL (interactive shell)" },
            { id: "node-version", title: "node --version & npm --version" },
            {
              id: "nodejs-release-schedule",
              title: "Node.js LTS release schedule",
            },
          ],
        },
        {
          id: "commonjs-modules",
          title: "CommonJS Modules (CJS)",
          description: "Node.js default module system.",
          subtopics: [
            { id: "require-function", title: "require() — loading modules" },
            {
              id: "module-exports",
              title: "module.exports — exporting values",
            },
            {
              id: "exports-shorthand",
              title: "exports shorthand (exports.foo)",
            },
            { id: "module-caching", title: "Module Caching (require cache)" },
            { id: "loading-json", title: "Loading JSON files with require" },
            {
              id: "local-vs-builtin",
              title: "Local modules vs built-in modules",
            },
            {
              id: "module-object",
              title: "The module object (id, filename, loaded, parent)",
            },
            {
              id: "circular-deps",
              title: "Circular Dependencies (behaviour & avoidance)",
            },
          ],
        },
        {
          id: "nodejs-globals",
          title: "Node.js Globals",
          description: "Globally available variables and functions.",
          subtopics: [
            {
              id: "global-object",
              title: "global object (Node.js equivalent of window)",
            },
            { id: "dirname-filename", title: "__dirname & __filename" },
            { id: "process-intro", title: "process object introduction" },
            {
              id: "console-node",
              title: "console.log / warn / error / dir / table / time",
            },
            {
              id: "settimeout-node",
              title: "setTimeout & setInterval in Node.js",
            },
            {
              id: "queueMicrotask",
              title: "queueMicrotask() — schedule microtask",
            },
            {
              id: "structuredClone-node",
              title: "structuredClone() in Node.js",
            },
            {
              id: "globalThis",
              title: "globalThis — unified cross-environment global",
            },
          ],
        },
        {
          id: "path-module",
          title: "path Module",
          description: "Working with file and directory paths.",
          subtopics: [
            { id: "path-join", title: "path.join() — safe path construction" },
            { id: "path-resolve", title: "path.resolve() — absolute path" },
            { id: "path-dirname", title: "path.dirname() — parent directory" },
            {
              id: "path-basename",
              title: "path.basename() — filename & extension",
            },
            { id: "path-extname", title: "path.extname() — file extension" },
            { id: "path-parse-format", title: "path.parse() & path.format()" },
            {
              id: "path-sep",
              title: "path.sep & path.delimiter — platform separators",
            },
            { id: "path-posix-win32", title: "path.posix vs path.win32" },
          ],
        },
        {
          id: "fs-sync",
          title: "File System — Synchronous Operations",
          description: "Synchronous fs operations for scripts.",
          subtopics: [
            {
              id: "readFileSync",
              title: "readFileSync() — read file as string or buffer",
            },
            {
              id: "writeFileSync",
              title: "writeFileSync() — create or overwrite file",
            },
            {
              id: "appendFileSync",
              title: "appendFileSync() — append to file",
            },
            { id: "existsSync", title: "existsSync() — check if path exists" },
            {
              id: "mkdirSync",
              title: "mkdirSync() — create directory (recursive)",
            },
            {
              id: "readdirSync",
              title: "readdirSync() — list directory contents",
            },
            {
              id: "statSync",
              title: "statSync() — file metadata (size, mtime, isFile)",
            },
            { id: "unlinkSync", title: "unlinkSync() — delete a file" },
            { id: "renameSync", title: "renameSync() — rename / move file" },
            { id: "copyFileSync", title: "copyFileSync() — copy a file" },
          ],
        },
        {
          id: "os-module",
          title: "os Module",
          description: "Operating system information and utilities.",
          subtopics: [
            {
              id: "os-platform",
              title: "os.platform() — win32, linux, darwin",
            },
            { id: "os-arch", title: "os.arch() — CPU architecture" },
            { id: "os-cpus", title: "os.cpus() — CPU cores info" },
            {
              id: "os-totalmem-freemem",
              title: "os.totalmem() & os.freemem()",
            },
            { id: "os-homedir-tmpdir", title: "os.homedir() & os.tmpdir()" },
            { id: "os-hostname", title: "os.hostname()" },
            { id: "os-eol", title: "os.EOL — platform line ending" },
            {
              id: "os-networkinterfaces",
              title: "os.networkInterfaces() — IPs & MACs",
            },
          ],
        },
        {
          id: "npm-basics",
          title: "npm & package.json Basics",
          description: "Node Package Manager fundamentals.",
          subtopics: [
            { id: "npm-init", title: "npm init & npm init -y" },
            {
              id: "package-json-fields",
              title: "package.json — name, version, main, scripts",
            },
            {
              id: "npm-install",
              title: "npm install — dependencies & devDependencies",
            },
            {
              id: "npm-install-global",
              title: "npm install -g — global packages",
            },
            {
              id: "npm-scripts",
              title: "npm scripts (start, dev, build, test)",
            },
            {
              id: "package-lock",
              title: "package-lock.json — deterministic installs",
            },
            { id: "node-modules", title: "node_modules directory" },
            { id: "semver-basics", title: "Semantic Versioning (^, ~, exact)" },
            { id: "npm-outdated-update", title: "npm outdated & npm update" },
            { id: "npmrc-basics", title: ".npmrc — registry & auth config" },
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
      description: "Basic data structures in Node.js context.",
      topics: [
        {
          id: "node-arrays-strings",
          title: "Arrays & Strings in Node.js context",
          description: "Fundamental data structure operations.",
          subtopics: [
            { id: "buffer-as-array", title: "Buffer vs Array (uint8 view)" },
            {
              id: "string-operations-node",
              title: "String operations for file paths",
            },
            {
              id: "split-join-node",
              title: "split / join for path & CSV parsing",
            },
            {
              id: "array-from-set-node",
              title: "Array.from(Set) for deduplication",
            },
            {
              id: "map-object-node",
              title: "Map vs plain Object for key-value",
            },
          ],
        },
        {
          id: "basic-file-ops-dsa",
          title: "File & Path Problem Patterns",
          description: "Common file system algorithm patterns.",
          subtopics: [
            {
              id: "list-all-files-recursive",
              title: "List all files recursively (DFS)",
            },
            { id: "find-file-by-ext", title: "Find files by extension" },
            { id: "dir-tree-build", title: "Build a directory tree object" },
            { id: "count-lines-file", title: "Count lines in a file" },
            {
              id: "word-frequency-file",
              title: "Word frequency counter from file",
            },
          ],
        },
        {
          id: "big-o-node",
          title: "Algorithm Complexity in Node.js",
          description: "Understanding complexity in I/O-bound code.",
          subtopics: [
            {
              id: "sync-vs-async-complexity",
              title: "Sync vs Async — latency vs CPU cost",
            },
            {
              id: "io-bound-cpu-bound",
              title: "I/O-bound vs CPU-bound operations",
            },
            { id: "n-plus-one-queries", title: "N+1 Query problem intro" },
            {
              id: "buffering-streaming-perf",
              title: "Buffering vs Streaming performance",
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
      description: "Entry-level Node.js interview questions.",
      topics: [
        {
          id: "nodejs-fundamentals-qa",
          title: "Node.js Fundamentals Q&A",
          description: "Core conceptual questions about Node.js.",
          subtopics: [
            {
              id: "what-is-nodejs-qa",
              title: "What is Node.js? What is it used for?",
            },
            {
              id: "node-vs-browser-qa",
              title: "How is Node.js different from browser JavaScript?",
            },
            { id: "v8-engine-qa", title: "What is the V8 engine?" },
            {
              id: "non-blocking-io-qa",
              title: "What does non-blocking I/O mean?",
            },
            {
              id: "single-threaded-qa",
              title: "Is Node.js single-threaded? Explain.",
            },
            {
              id: "node-use-cases-qa",
              title: "What type of applications is Node.js best for?",
            },
            {
              id: "node-not-for-qa",
              title: "When should you NOT use Node.js?",
            },
          ],
        },
        {
          id: "modules-qa",
          title: "Modules Q&A",
          description: "CommonJS and module loading questions.",
          subtopics: [
            {
              id: "require-vs-import-qa",
              title: "require() vs import — difference?",
            },
            {
              id: "module-exports-qa",
              title: "module.exports vs exports — which to use?",
            },
            {
              id: "module-caching-qa",
              title: "What is module caching in Node.js?",
            },
            {
              id: "circular-deps-qa",
              title: "What happens with circular dependencies?",
            },
            {
              id: "how-require-works-qa",
              title: "How does require() resolve file paths?",
            },
          ],
        },
        {
          id: "npm-qa",
          title: "npm & package.json Q&A",
          description: "npm and package management questions.",
          subtopics: [
            {
              id: "devdep-vs-dep-qa",
              title: "dependencies vs devDependencies?",
            },
            {
              id: "package-lock-qa",
              title: "What is package-lock.json and why commit it?",
            },
            {
              id: "semver-qa",
              title: "Explain semantic versioning (^1.0.0 vs ~1.0.0)",
            },
            { id: "npm-scripts-qa", title: "How do npm scripts work?" },
            {
              id: "npx-qa",
              title: "What is npx? How does it differ from npm?",
            },
          ],
        },
        {
          id: "entry-coding-node",
          title: "Entry-Level Coding Exercises",
          description: "Basic Node.js scripting exercises.",
          subtopics: [
            {
              id: "read-file-sync-ex",
              title: "Read a file and print its contents",
            },
            {
              id: "write-file-ex",
              title: "Create a file with content from CLI args",
            },
            { id: "list-dir-ex", title: "List all files in a directory" },
            {
              id: "path-ops-ex",
              title: "Build absolute path from relative segments",
            },
            {
              id: "env-var-ex",
              title: "Read environment variables with process.env",
            },
          ],
        },
      ],
    },
  ],
};
