import { Level } from "@/types";

export const l1Level: Level = {
  id: "junior",
  title: "Core Node.js",
  description: "Junior Dev",
  color: "#6ee7b7",
  modules: [
    // ── Node.js ──────────────────────────────────────────
    {
      id: "nodejs",
      title: "Node.js",
      icon: "route",
      color: "#68a063",
      description: "Core Node.js features.",
      topics: [
        {
          id: "es-modules-nodejs",
          title: "ES Modules in Node.js",
          description: "Using import/export in Node.js.",
          subtopics: [
            { id: "type-module", title: "package.json type: 'module'" },
            {
              id: "import-export-node",
              title: "import & export syntax in Node.js",
            },
            {
              id: "import-meta",
              title: "import.meta.url & import.meta.dirname",
            },
            { id: "dynamic-import", title: "Dynamic import() — lazy loading" },
            {
              id: "cjs-vs-esm-node",
              title: "CJS vs ESM — interoperability rules",
            },
            { id: "mjs-cjs-extensions", title: ".mjs & .cjs file extensions" },
            { id: "esm-named-default", title: "Named vs Default exports" },
            { id: "top-level-await-esm", title: "Top-Level await in ESM" },
          ],
        },
        {
          id: "process-object",
          title: "process Object",
          description: "Node.js process information and control.",
          subtopics: [
            { id: "process-env", title: "process.env — environment variables" },
            { id: "process-argv", title: "process.argv — CLI arguments" },
            {
              id: "process-cwd",
              title: "process.cwd() — current working directory",
            },
            {
              id: "process-exit",
              title: "process.exit(code) — terminate process",
            },
            {
              id: "process-stdout-stderr",
              title: "process.stdout & process.stderr streams",
            },
            {
              id: "process-stdin",
              title: "process.stdin — reading piped input",
            },
            { id: "process-pid", title: "process.pid & process.ppid" },
            {
              id: "process-platform",
              title: "process.platform — OS identifier",
            },
            {
              id: "process-memoryUsage",
              title: "process.memoryUsage() — heap stats",
            },
            {
              id: "process-hrtime",
              title: "process.hrtime.bigint() — high-res timer",
            },
            {
              id: "process-nextTick",
              title: "process.nextTick() — microtask queue",
            },
          ],
        },
        {
          id: "event-emitter",
          title: "EventEmitter",
          description: "Node.js event-driven programming pattern.",
          subtopics: [
            {
              id: "eventemitter-class",
              title: "EventEmitter class — require('events')",
            },
            { id: "emit-on", title: "emit() & on() — fire and listen" },
            { id: "once", title: "once() — single-use listener" },
            {
              id: "removeListener-off",
              title: "removeListener() & off() — unsubscribe",
            },
            { id: "removeAllListeners", title: "removeAllListeners()" },
            {
              id: "setMaxListeners",
              title: "setMaxListeners() — avoiding memory leak warning",
            },
            {
              id: "eventNames-rawListeners",
              title: "eventNames() & rawListeners()",
            },
            {
              id: "extending-eventemitter",
              title:
                "Extending EventEmitter (class MyEmitter extends EventEmitter)",
            },
            {
              id: "error-event",
              title: "Error events — always handle 'error' event",
            },
            {
              id: "typed-eventemitter",
              title: "EventEmitter with TypeScript (typed events)",
            },
          ],
        },
        {
          id: "buffer",
          title: "Buffer",
          description: "Binary data handling in Node.js.",
          subtopics: [
            {
              id: "what-is-buffer",
              title: "What is Buffer? (binary data in JS)",
            },
            { id: "buffer-alloc", title: "Buffer.alloc(size) — zeroed buffer" },
            {
              id: "buffer-from-string",
              title: "Buffer.from(string, encoding)",
            },
            {
              id: "buffer-from-array",
              title: "Buffer.from(array) — from byte array",
            },
            {
              id: "buffer-encodings",
              title: "Encodings: utf8, ascii, hex, base64, binary",
            },
            {
              id: "buffer-toString",
              title: "buf.toString(encoding) — decode buffer",
            },
            {
              id: "buffer-concat",
              title: "Buffer.concat(list) — merge buffers",
            },
            {
              id: "buffer-copy-slice",
              title: "buf.copy() & buf.slice() / buf.subarray()",
            },
            { id: "buffer-compare", title: "Buffer.compare() & buf.equals()" },
            {
              id: "buffer-readwrite-int",
              title: "buf.readUInt8, writeUInt8 — binary parsing",
            },
            {
              id: "buffer-vs-uint8array",
              title: "Buffer vs Uint8Array (Buffer extends Uint8Array)",
            },
          ],
        },
        {
          id: "streams",
          title: "Streams",
          description: "Node.js stream API for data processing.",
          subtopics: [
            {
              id: "what-are-streams",
              title: "What are Streams? (chunks vs buffering)",
            },
            {
              id: "readable-streams",
              title: "Readable Streams — createReadStream, on('data')",
            },
            {
              id: "writable-streams",
              title: "Writable Streams — createWriteStream, write(), end()",
            },
            {
              id: "stream-pipe",
              title: "pipe() — connecting readable to writable",
            },
            {
              id: "stream-pipeline",
              title: "stream.pipeline() — error-safe piping",
            },
            {
              id: "transform-streams",
              title: "Transform Streams — read + write (e.g., zlib.createGzip)",
            },
            {
              id: "duplex-streams",
              title:
                "Duplex Streams (independent read/write, e.g., TCP socket)",
            },
            {
              id: "stream-events",
              title: "Stream Events: 'data', 'end', 'error', 'finish', 'drain'",
            },
            { id: "object-mode", title: "objectMode streams" },
            {
              id: "backpressure",
              title: "Backpressure — write() return value & 'drain' event",
            },
            {
              id: "async-iteration-streams",
              title: "Async iteration over streams (for await...of)",
            },
          ],
        },
        {
          id: "fs-async",
          title: "File System — Asynchronous Operations",
          description: "Async file operations using promises.",
          subtopics: [
            { id: "fs-promises", title: "fs/promises — promise-based fs API" },
            {
              id: "readFile-async",
              title: "readFile() — async read (callback & promise)",
            },
            {
              id: "writeFile-async",
              title: "writeFile() — async write & overwrite",
            },
            {
              id: "appendFile-async",
              title: "appendFile() — append without overwrite",
            },
            { id: "mkdir-async", title: "mkdir() with recursive: true" },
            {
              id: "readdir-async",
              title: "readdir() & readdir with withFileTypes",
            },
            { id: "stat-async", title: "stat() & lstat() — file metadata" },
            { id: "rename-async", title: "rename() — rename or move" },
            { id: "unlink-async", title: "unlink() — delete file" },
            { id: "rmdir-rm-async", title: "rmdir() & rm() with recursive" },
            {
              id: "copyFile-async",
              title: "copyFile() with COPYFILE_EXCL flag",
            },
            {
              id: "watch-async",
              title: "watch() & watchFile() — file system watching",
            },
            {
              id: "createReadStream-file",
              title: "createReadStream() & createWriteStream()",
            },
            {
              id: "filehandle",
              title: "FileHandle — open, read, write, close (low-level)",
            },
          ],
        },
        {
          id: "http-module",
          title: "http Module",
          description: "Building HTTP servers with Node.js.",
          subtopics: [
            { id: "createServer", title: "http.createServer(requestListener)" },
            {
              id: "request-object",
              title: "IncomingMessage — url, method, headers",
            },
            {
              id: "response-object",
              title: "ServerResponse — writeHead, write, end",
            },
            {
              id: "status-codes",
              title: "HTTP Status Codes (200, 201, 400, 401, 403, 404, 500)",
            },
            {
              id: "routing-manual",
              title: "Manual routing (if/else on req.url)",
            },
            {
              id: "parse-request-body",
              title: "Parsing request body (accumulate chunks)",
            },
            {
              id: "http-get-agent",
              title: "http.get() & http.request() — making requests",
            },
            { id: "https-module", title: "https module — TLS HTTP requests" },
            { id: "response-json", title: "Sending JSON responses" },
            {
              id: "server-listen",
              title: "server.listen(port, host) & server.close()",
            },
          ],
        },
        {
          id: "url-querystring",
          title: "URL & querystring",
          description: "Parsing and formatting URLs.",
          subtopics: [
            {
              id: "new-url",
              title: "new URL(input, base) — WHATWG URL parser",
            },
            {
              id: "url-properties",
              title: "url.href, pathname, search, hash, host, protocol",
            },
            {
              id: "urlsearchparams",
              title: "URLSearchParams — get, set, append, delete, has",
            },
            { id: "url-resolve", title: "url.resolve() (legacy)" },
            {
              id: "querystring-parse",
              title: "querystring.parse() — query string to object",
            },
            {
              id: "querystring-stringify",
              title: "querystring.stringify() — object to query string",
            },
            {
              id: "encode-decode-uri",
              title: "encodeURIComponent & decodeURIComponent",
            },
          ],
        },
        {
          id: "child-process",
          title: "child_process Module",
          description: "Spawning and managing child processes.",
          subtopics: [
            {
              id: "exec",
              title: "exec() — run shell command, buffered output",
            },
            { id: "execFile", title: "execFile() — run executable (no shell)" },
            { id: "spawn", title: "spawn() — run command, streaming I/O" },
            {
              id: "fork",
              title: "fork() — spawn Node.js child process with IPC",
            },
            {
              id: "child-stdin-stdout-stderr",
              title: "child.stdin, stdout, stderr streams",
            },
            {
              id: "child-process-events",
              title: "Child process events: 'close', 'exit', 'error'",
            },
            {
              id: "on-exit-wait",
              title: "Waiting for child to finish (close event / await)",
            },
            {
              id: "ipc-channel",
              title: "IPC channel — process.send() & process.on('message')",
            },
            {
              id: "execSync-spawnSync",
              title: "execSync() & spawnSync() — synchronous variants",
            },
          ],
        },
        {
          id: "timers-node",
          title: "Timers in Node.js",
          description: "Node.js timing APIs.",
          subtopics: [
            {
              id: "setTimeout-node",
              title: "setTimeout() — delayed execution",
            },
            {
              id: "setInterval-node",
              title: "setInterval() — repeated execution",
            },
            {
              id: "clearTimeout-clearInterval",
              title: "clearTimeout() & clearInterval()",
            },
            {
              id: "setImmediate",
              title: "setImmediate() — after I/O callbacks",
            },
            { id: "clearImmediate", title: "clearImmediate()" },
            {
              id: "process-nextTick-timer",
              title: "process.nextTick() — before I/O",
            },
            {
              id: "nextTick-vs-setImmediate",
              title: "nextTick vs setImmediate — execution order",
            },
            {
              id: "timer-unref",
              title: "timer.ref() & timer.unref() — keep process alive?",
            },
            {
              id: "perf-hooks",
              title: "perf_hooks — performance.now(), PerformanceObserver",
            },
          ],
        },
        {
          id: "crypto-basics",
          title: "crypto Module — Basics",
          description: "Cryptographic operations in Node.js.",
          subtopics: [
            {
              id: "createHash",
              title: "crypto.createHash() — SHA256, MD5, SHA512",
            },
            {
              id: "hash-update-digest",
              title: "hash.update() & hash.digest('hex')",
            },
            { id: "createHmac", title: "crypto.createHmac() — keyed hash" },
            {
              id: "randomBytes",
              title: "crypto.randomBytes() — secure random bytes",
            },
            {
              id: "randomUUID",
              title: "crypto.randomUUID() — generate UUID v4",
            },
            {
              id: "timingSafeEqual",
              title: "crypto.timingSafeEqual() — constant-time compare",
            },
            {
              id: "scrypt-pbkdf2",
              title: "scrypt() & pbkdf2() — password hashing",
            },
            {
              id: "crypto-constants",
              title: "crypto.constants — TLS & cipher constants",
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
      description: "Event-driven data patterns.",
      topics: [
        {
          id: "event-driven-patterns",
          title: "Event-Driven Data Patterns",
          description: "Algorithms using EventEmitter patterns.",
          subtopics: [
            {
              id: "observer-with-emitter",
              title: "Observer pattern with EventEmitter",
            },
            {
              id: "pipeline-pattern",
              title: "Stream pipeline pattern (chain transforms)",
            },
            { id: "pub-sub-pattern", title: "Pub/Sub pattern implementation" },
            {
              id: "event-queue-impl",
              title: "In-process Event Queue (circular buffer)",
            },
            { id: "backpressure-queue", title: "Backpressure-aware Queue" },
          ],
        },
        {
          id: "stream-algorithms",
          title: "Stream-Based Algorithms",
          description: "Processing data in chunks.",
          subtopics: [
            {
              id: "count-lines-stream",
              title: "Count lines in a large file (stream)",
            },
            {
              id: "csv-parser-stream",
              title: "Parse CSV with Transform stream",
            },
            { id: "top-k-stream", title: "Top-K frequency in streaming data" },
            { id: "merge-sorted-streams", title: "Merge sorted streams" },
            {
              id: "word-count-stream",
              title: "Word count with Transform stream",
            },
          ],
        },
        {
          id: "buffer-manipulation",
          title: "Buffer Manipulation Patterns",
          description: "Binary data structure problems.",
          subtopics: [
            {
              id: "parse-binary-protocol",
              title: "Parse a binary protocol header",
            },
            {
              id: "encode-decode-base64",
              title: "Encode/Decode Base64 with Buffer",
            },
            { id: "buffer-xor", title: "XOR two Buffers (simple cipher)" },
            { id: "split-buffer", title: "Split a Buffer at delimiter" },
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
      description: "Junior Node.js interview prep.",
      topics: [
        {
          id: "modules-esm-qa",
          title: "Modules & ESM Q&A",
          description: "Module system interview questions.",
          subtopics: [
            { id: "cjs-vs-esm-qa", title: "CJS vs ESM — 5 key differences" },
            {
              id: "dynamic-import-qa",
              title: "When do you use dynamic import()?",
            },
            { id: "import-meta-qa", title: "What is import.meta.url?" },
            { id: "top-level-await-qa", title: "What is top-level await?" },
            {
              id: "interop-qa",
              title: "Can you require() an ES module? Why/why not?",
            },
          ],
        },
        {
          id: "streams-buffer-qa",
          title: "Streams & Buffer Q&A",
          description: "Core stream and buffer interview questions.",
          subtopics: [
            {
              id: "streams-vs-buffering-qa",
              title: "Streams vs buffering — when to use each?",
            },
            {
              id: "readable-writable-qa",
              title: "Readable vs Writable vs Transform streams",
            },
            {
              id: "pipe-pipeline-qa",
              title: "pipe() vs pipeline() — difference?",
            },
            {
              id: "backpressure-qa",
              title: "What is backpressure in Node.js streams?",
            },
            {
              id: "buffer-purpose-qa",
              title: "What is a Buffer and why is it needed?",
            },
          ],
        },
        {
          id: "http-server-qa",
          title: "HTTP Server Q&A",
          description: "Node.js http module interview questions.",
          subtopics: [
            {
              id: "how-http-works-qa",
              title: "How does http.createServer work?",
            },
            {
              id: "parse-body-qa",
              title: "How do you parse a request body in raw Node.js?",
            },
            {
              id: "status-codes-qa",
              title: "Common HTTP status codes explained",
            },
            { id: "https-vs-http-qa", title: "https module vs http module" },
            {
              id: "cors-raw-qa",
              title: "How do you handle CORS in raw Node.js?",
            },
          ],
        },
        {
          id: "events-async-qa",
          title: "Events & Async Q&A",
          description: "EventEmitter and async pattern questions.",
          subtopics: [
            { id: "eventemitter-qa", title: "How does EventEmitter work?" },
            { id: "once-vs-on-qa", title: "on() vs once() — difference?" },
            {
              id: "error-event-qa",
              title: "Why must you handle the 'error' event?",
            },
            {
              id: "nexttick-vs-setimmediate-qa",
              title: "process.nextTick vs setImmediate",
            },
            {
              id: "util-promisify-qa",
              title: "What does util.promisify() do?",
            },
          ],
        },
        {
          id: "junior-coding-node",
          title: "Junior Coding Exercises",
          description: "Practical Node.js coding tasks.",
          subtopics: [
            {
              id: "custom-emitter-ex",
              title: "Build a custom EventEmitter subclass",
            },
            {
              id: "http-json-server-ex",
              title: "Create an HTTP server that returns JSON",
            },
            { id: "stream-copy-ex", title: "Copy a large file using streams" },
            {
              id: "cli-arg-parser-ex",
              title: "Parse CLI arguments from process.argv",
            },
            {
              id: "sha256-file-ex",
              title: "Hash a file's contents with SHA-256",
            },
          ],
        },
      ],
    },
  ],
};
