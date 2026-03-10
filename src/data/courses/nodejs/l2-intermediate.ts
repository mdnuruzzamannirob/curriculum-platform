import { Level } from "@/types";

export const l2Level: Level = {
  id: "mid",
  title: "Intermediate Node.js",
  description: "Mid-level Dev",
  color: "#fb923c",
  modules: [
    // ── Node.js ──────────────────────────────────────────
    {
      id: "nodejs",
      title: "Node.js",
      icon: "route",
      color: "#68a063",
      description: "Intermediate Node.js features.",
      topics: [
        {
          id: "event-loop-deep",
          title: "Event Loop — Deep Dive",
          description: "How Node.js event loop phases work.",
          subtopics: [
            {
              id: "event-loop-phases",
              title: "Event Loop Phases (timers → pending → idle/prepare → poll → check → close)",
            },
            {
              id: "timers-phase",
              title: "Phase 1 — Timers (setTimeout, setInterval)",
            },
            {
              id: "pending-callbacks-phase",
              title: "Phase 2 — Pending I/O Callbacks",
            },
            {
              id: "idle-prepare-phase",
              title: "Phase 3 & 4 — Idle & Prepare (internal)",
            },
            {
              id: "poll-phase",
              title: "Phase 5 — Poll (blocking for I/O events)",
            },
            { id: "check-phase", title: "Phase 6 — Check (setImmediate)" },
            { id: "close-callbacks-phase", title: "Phase 7 — Close Callbacks" },
            {
              id: "microtasks-queue",
              title: "Microtask Queues (nextTick queue + Promise queue)",
            },
            {
              id: "microtask-order",
              title: "Microtask execution order between phases",
            },
            {
              id: "event-loop-visualization",
              title: "Event Loop Visualization step-by-step",
            },
            {
              id: "starvation-livelock",
              title: "Starvation & Livelock with nextTick",
            },
          ],
        },
        {
          id: "async-patterns",
          title: "Async Patterns — Callbacks, Promises, async/await",
          description: "All async programming patterns in Node.js.",
          subtopics: [
            {
              id: "error-first-callbacks",
              title: "Error-First Callbacks (Node.js convention)",
            },
            { id: "callback-hell", title: "Callback Hell & pyramid of doom" },
            {
              id: "util-promisify",
              title: "util.promisify() — convert callback to promise",
            },
            { id: "promise-based-fs", title: "Promise-based fs (fs/promises)" },
            { id: "async-await-node", title: "async/await in Node.js" },
            {
              id: "sequential-parallel-async",
              title: "Sequential vs Parallel async patterns",
            },
            {
              id: "promise-all-allsettled",
              title: "Promise.all() & Promise.allSettled()",
            },
            {
              id: "async-error-handling",
              title: "Error handling in async functions",
            },
            {
              id: "async-generators",
              title: "async generators & for await...of",
            },
            {
              id: "async-context",
              title: "AsyncLocalStorage — async context propagation",
            },
            {
              id: "async-hooks",
              title: "async_hooks — lifecycle of async resources",
            },
          ],
        },
        {
          id: "error-handling-node",
          title: "Error Handling in Node.js",
          description: "Robust error handling patterns.",
          subtopics: [
            {
              id: "operational-vs-programmer-errors",
              title: "Operational vs Programmer Errors",
            },
            {
              id: "try-catch-async-node",
              title: "try/catch in async functions",
            },
            {
              id: "unhandledRejection",
              title: "process 'unhandledRejection' event",
            },
            {
              id: "uncaughtException",
              title: "process 'uncaughtException' event",
            },
            {
              id: "exit-gracefully",
              title: "Graceful shutdown on signals (SIGTERM, SIGINT)",
            },
            {
              id: "custom-error-classes",
              title: "Custom Error Classes for Node.js",
            },
            {
              id: "err-codes",
              title: "Node.js error codes (ENOENT, EACCES, ECONNREFUSED)",
            },
            {
              id: "domain-module-legacy",
              title: "domain module (legacy — avoid)",
            },
            {
              id: "error-serialization",
              title: "Error serialization for logging",
            },
          ],
        },
        {
          id: "cluster-module",
          title: "Cluster Module",
          description: "Multi-process Node.js for multi-core CPUs.",
          subtopics: [
            {
              id: "cluster-why",
              title: "Why cluster? (single thread vs multi-core)",
            },
            {
              id: "cluster-fork",
              title: "cluster.fork() — create worker processes",
            },
            {
              id: "is-primary-is-worker",
              title: "cluster.isPrimary & cluster.isWorker",
            },
            {
              id: "cluster-workers-map",
              title: "cluster.workers — map of all workers",
            },
            {
              id: "cluster-events",
              title: "Cluster events: 'fork', 'online', 'exit', 'disconnect'",
            },
            { id: "ipc-in-cluster", title: "IPC between primary and workers" },
            {
              id: "zero-downtime-reload",
              title: "Zero-downtime reload strategy",
            },
            {
              id: "pm2-as-cluster",
              title: "PM2 as cluster manager (cluster mode)",
            },
          ],
        },
        {
          id: "worker-threads",
          title: "Worker Threads",
          description: "True multi-threading in Node.js.",
          subtopics: [
            {
              id: "worker-thread-intro",
              title: "Worker Threads intro — true parallelism for CPU",
            },
            { id: "new-worker", title: "new Worker(filename, options)" },
            { id: "workerData", title: "workerData — passing data to worker" },
            {
              id: "parentPort",
              title: "parentPort.postMessage() & on('message')",
            },
            {
              id: "workerData-transfer",
              title: "Transferable objects (transfer list)",
            },
            {
              id: "SharedArrayBuffer",
              title: "SharedArrayBuffer — shared memory between threads",
            },
            { id: "atomics", title: "Atomics — synchronization primitives" },
            {
              id: "message-channel",
              title: "MessageChannel — bidirectional worker comms",
            },
            { id: "worker-thread-pool", title: "Worker Thread Pool pattern" },
            {
              id: "cluster-vs-workers",
              title: "Cluster vs Worker Threads — when to use",
            },
          ],
        },
        {
          id: "net-tls-module",
          title: "net & tls Modules",
          description: "TCP networking in Node.js.",
          subtopics: [
            {
              id: "net-createServer",
              title: "net.createServer() — TCP server",
            },
            { id: "net-socket", title: "net.Socket — connected TCP socket" },
            {
              id: "socket-events",
              title: "Socket events: 'data', 'end', 'error', 'close'",
            },
            { id: "socket-write-end", title: "socket.write() & socket.end()" },
            { id: "net-connect", title: "net.connect() — TCP client" },
            { id: "ipc-unix-socket", title: "IPC via Unix domain sockets" },
            {
              id: "tls-createServer",
              title: "tls.createServer() — TLS TCP server",
            },
            {
              id: "tls-certificates",
              title: "TLS Certificates (key, cert, ca)",
            },
            { id: "tls-connect", title: "tls.connect() — TLS client" },
          ],
        },
        {
          id: "crypto-advanced",
          title: "crypto Module — Advanced",
          description: "Encryption, decryption, and signing.",
          subtopics: [
            {
              id: "createCipher",
              title: "createCipheriv() & createDecipheriv()",
            },
            {
              id: "cipher-modes",
              title: "Cipher modes: AES-256-CBC, AES-256-GCM",
            },
            {
              id: "iv-generation",
              title: "Initialization Vector (IV) generation",
            },
            { id: "auth-tag-gcm", title: "Authentication tag in AES-GCM" },
            {
              id: "createSign-verify",
              title: "createSign() & createVerify() — DSA/RSA",
            },
            {
              id: "generateKeyPair",
              title: "generateKeyPair() — RSA, EC key generation",
            },
            { id: "diffie-hellman", title: "DiffieHellman key exchange" },
            { id: "x509-certificate", title: "X509Certificate class" },
            {
              id: "web-crypto-node",
              title: "Web Crypto API in Node.js (globalThis.crypto)",
            },
          ],
        },
        {
          id: "http2-module",
          title: "HTTP/2",
          description: "HTTP/2 server and client in Node.js.",
          subtopics: [
            {
              id: "http2-benefits",
              title: "HTTP/2 benefits: multiplexing, header compression",
            },
            {
              id: "http2-createServer",
              title: "http2.createServer() — plaintext HTTP/2",
            },
            {
              id: "http2-createSecureServer",
              title: "http2.createSecureServer() — TLS HTTP/2",
            },
            {
              id: "http2-streams",
              title: "HTTP/2 Streams vs HTTP/1.1 requests",
            },
            {
              id: "server-push",
              title: "Server Push in HTTP/2 (limited real-world usage)",
            },
            {
              id: "http2-client",
              title: "http2.connect() — HTTP/2 client session",
            },
            { id: "h2-vs-h1", title: "HTTP/2 vs HTTP/1.1 benchmark" },
          ],
        },
        {
          id: "compression-zlib",
          title: "Compression — zlib",
          description: "Data compression in Node.js.",
          subtopics: [
            {
              id: "zlib-gzip-ungzip",
              title: "zlib.createGzip() & createGunzip()",
            },
            {
              id: "zlib-deflate-inflate",
              title: "createDeflate() & createInflate()",
            },
            {
              id: "zlib-brotli",
              title: "createBrotliCompress() & createBrotliDecompress()",
            },
            {
              id: "zlib-pipeline",
              title: "Compression pipeline with stream.pipeline()",
            },
            {
              id: "zlib-sync",
              title: "zlib.gzipSync() & gunzipSync() — sync versions",
            },
            {
              id: "content-encoding-server",
              title: "Content-Encoding in HTTP response",
            },
          ],
        },
        {
          id: "readline-module",
          title: "readline Module",
          description: "Reading line-by-line input.",
          subtopics: [
            {
              id: "readline-createInterface",
              title: "readline.createInterface()",
            },
            {
              id: "readline-line-event",
              title: "'line' event — process each line",
            },
            { id: "readline-question", title: "rl.question() — CLI prompts" },
            { id: "readline-close", title: "rl.close() — cleanup" },
            {
              id: "readline-file-stream",
              title: "Read a file line-by-line with readline",
            },
          ],
        },
        {
          id: "vm-module",
          title: "vm Module",
          description: "Running code in a sandboxed context.",
          subtopics: [
            {
              id: "vm-runInNewContext",
              title: "vm.runInNewContext() — isolated sandbox",
            },
            {
              id: "vm-runInContext",
              title: "vm.runInContext() — existing context",
            },
            {
              id: "vm-Script",
              title: "vm.Script — compile once, run many times",
            },
            {
              id: "vm-use-cases",
              title: "Use cases: plugins, REPL, user scripts",
            },
            { id: "vm-security-limits", title: "Security limits of vm module" },
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
      description: "Async and concurrent data patterns.",
      topics: [
        {
          id: "async-queue",
          title: "Async Queue & Concurrency Control",
          description: "Managing concurrent async operations.",
          subtopics: [
            {
              id: "async-queue-impl",
              title: "Async Queue implementation (concurrency limit)",
            },
            {
              id: "promise-pool",
              title: "Promise Pool / batching (p-limit style)",
            },
            {
              id: "retry-with-backoff",
              title: "Retry with exponential backoff",
            },
            { id: "rate-limiter-impl", title: "Token Bucket Rate Limiter" },
            {
              id: "semaphore-impl",
              title: "Semaphore implementation (async mutex)",
            },
          ],
        },
        {
          id: "concurrent-patterns-dsa",
          title: "Concurrent Processing Patterns",
          description: "Patterns for parallel data processing.",
          subtopics: [
            {
              id: "map-reduce-streams",
              title: "MapReduce with Node.js Streams",
            },
            {
              id: "worker-thread-pool-dsa",
              title: "Worker Thread Pool for CPU tasks",
            },
            {
              id: "fork-join-pattern",
              title: "Fork-Join pattern with child_process",
            },
            {
              id: "pipeline-concurrency",
              title: "Stream Pipeline with concurrency stages",
            },
          ],
        },
        {
          id: "tcp-server-patterns",
          title: "TCP Server Data Patterns",
          description: "Algorithms for networked data.",
          subtopics: [
            {
              id: "chat-server",
              title: "TCP Chat Server (multi-client broadcast)",
            },
            {
              id: "load-balancer-sim",
              title: "Round-Robin load balancer simulation",
            },
            {
              id: "protocol-framing",
              title: "Length-prefixed protocol framing",
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
      description: "Intermediate Node.js interview prep.",
      topics: [
        {
          id: "event-loop-qa",
          title: "Event Loop Q&A",
          description: "Deep-dive event loop interview questions.",
          subtopics: [
            {
              id: "event-loop-phases-qa",
              title: "Describe the 6 phases of the event loop",
            },
            { id: "poll-phase-qa", title: "What happens in the poll phase?" },
            {
              id: "nexttick-vs-promise-qa",
              title: "process.nextTick vs Promise.then — which runs first?",
            },
            {
              id: "setimmediate-vs-settimeout-qa",
              title: "setImmediate vs setTimeout(fn, 0) — order?",
            },
            {
              id: "microtask-macrotask-qa",
              title: "Microtask queue vs Macrotask queue",
            },
            {
              id: "io-starvation-qa",
              title: "Can nextTick cause I/O starvation?",
            },
          ],
        },
        {
          id: "async-patterns-qa",
          title: "Async Patterns Q&A",
          description: "Questions about Node.js async programming.",
          subtopics: [
            {
              id: "callback-vs-promise-qa",
              title: "Callback vs Promise vs async/await — trade-offs",
            },
            {
              id: "util-promisify-qa",
              title: "What does util.promisify() do internally?",
            },
            {
              id: "async-local-storage-qa",
              title: "What is AsyncLocalStorage for?",
            },
            {
              id: "unhandled-rejection-qa",
              title: "How to handle unhandledRejection globally?",
            },
            {
              id: "parallel-limit-qa",
              title: "How do you limit concurrency of async tasks?",
            },
          ],
        },
        {
          id: "cluster-workers-qa",
          title: "Cluster & Worker Threads Q&A",
          description: "Multi-process and multi-thread interview questions.",
          subtopics: [
            {
              id: "cluster-vs-worker-qa",
              title: "Cluster vs Worker Threads — when to use each?",
            },
            {
              id: "cluster-benefit-qa",
              title: "How does cluster improve throughput?",
            },
            {
              id: "sharedarraybuffer-qa",
              title: "What is SharedArrayBuffer? Safety concerns?",
            },
            {
              id: "atomics-qa",
              title: "Why do you need Atomics with SharedArrayBuffer?",
            },
            {
              id: "zero-downtime-qa",
              title: "How to do zero-downtime restarts with cluster?",
            },
          ],
        },
        {
          id: "error-handling-mid-qa",
          title: "Error Handling Q&A",
          description: "Node.js error handling questions.",
          subtopics: [
            {
              id: "operational-programmer-qa",
              title: "Operational errors vs programmer errors",
            },
            {
              id: "uncaughtexception-qa",
              title: "When to use uncaughtException? Side effects?",
            },
            {
              id: "graceful-shutdown-qa",
              title: "How do you implement graceful shutdown?",
            },
            {
              id: "error-codes-qa",
              title: "Common Node.js error codes and their meaning",
            },
            {
              id: "async-error-propagation-qa",
              title: "How do errors propagate in async code?",
            },
          ],
        },
        {
          id: "mid-coding-node",
          title: "Mid-Level Coding Exercises",
          description: "Intermediate Node.js coding problems.",
          subtopics: [
            {
              id: "promise-pool-ex",
              title: "Implement a Promise pool with concurrency limit",
            },
            {
              id: "event-loop-order-ex",
              title: "Predict output of nextTick/setImmediate/Promise chain",
            },
            {
              id: "tcp-echo-ex",
              title: "Build a TCP echo server with net module",
            },
            {
              id: "worker-fibonacci-ex",
              title: "Compute Fibonacci in Worker Thread",
            },
            {
              id: "resilient-fs-ex",
              title: "Retry file read 3 times with delay",
            },
          ],
        },
      ],
    },
  ],
};
