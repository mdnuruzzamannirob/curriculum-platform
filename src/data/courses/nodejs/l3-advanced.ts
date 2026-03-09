import { Level } from "@/types";

export const l3Level: Level = {
  id: "senior",
  title: "Advanced Node.js",
  description: "Senior Dev",
  color: "#f472b6",
  modules: [
    // ── Node.js ──────────────────────────────────────────
    {
      id: "nodejs",
      title: "Node.js",
      icon: "route",
      color: "#68a063",
      description: "Advanced Node.js backend development.",
      topics: [
        {
          id: "express-deep",
          title: "Express.js — Deep Dive",
          description: "Full Express.js framework mastery.",
          subtopics: [
            {
              id: "express-setup",
              title: "Express.js setup & project structure",
            },
            {
              id: "express-routing",
              title: "Routing — app.get/post/put/delete/patch",
            },
            {
              id: "express-router",
              title: "express.Router() — modular route groups",
            },
            {
              id: "middleware-chain",
              title: "Middleware chain — req → res → next",
            },
            {
              id: "builtin-middleware",
              title: "Built-in middleware: json(), urlencoded(), static()",
            },
            {
              id: "error-middleware",
              title: "Error-handling middleware (4-argument signature)",
            },
            {
              id: "route-params",
              title: "Route params, query strings & body parsing",
            },
            {
              id: "express-validator",
              title: "Input validation with express-validator or zod",
            },
            {
              id: "view-engine",
              title: "Templating engine: EJS, Handlebars, Pug",
            },
            { id: "static-files", title: "Serving static files" },
            {
              id: "express-upload",
              title: "File upload with multer (disk/memory storage)",
            },
          ],
        },
        {
          id: "security-node",
          title: "Security in Node.js",
          description: "Web application security best practices.",
          subtopics: [
            { id: "helmet-js", title: "Helmet.js — secure HTTP headers" },
            {
              id: "cors",
              title: "CORS — cross-origin resource sharing (cors package)",
            },
            {
              id: "rate-limiting",
              title: "Rate Limiting (express-rate-limit, redis-based)",
            },
            {
              id: "input-sanitization",
              title: "Input sanitization (xss-clean, DOMPurify)",
            },
            {
              id: "sql-injection-prevention",
              title: "SQL Injection Prevention (parameterized queries)",
            },
            {
              id: "nosql-injection",
              title: "NoSQL Injection (MongoDB operator injection)",
            },
            {
              id: "prototype-pollution",
              title: "Prototype Pollution Attacks & Prevention",
            },
            {
              id: "csrf-protection",
              title: "CSRF Protection (csrf, csurf, samesite cookies)",
            },
            {
              id: "dependency-audit",
              title: "npm audit & dependency security scanning",
            },
            {
              id: "env-secrets",
              title: "Secrets management (env vars, never commit .env)",
            },
            {
              id: "ssrf-prevention",
              title: "SSRF Prevention (block internal IP ranges)",
            },
            {
              id: "hpp-pollution",
              title: "HTTP Parameter Pollution prevention",
            },
          ],
        },
        {
          id: "authentication",
          title: "Authentication & Authorization",
          description: "Secure authentication strategies.",
          subtopics: [
            {
              id: "jwt-basics",
              title: "JWT — structure (header.payload.signature)",
            },
            {
              id: "jsonwebtoken-sign-verify",
              title: "jsonwebtoken: sign() & verify()",
            },
            {
              id: "jwt-expiry-refresh",
              title: "JWT expiry & refresh token strategy",
            },
            {
              id: "bcrypt-hashing",
              title: "bcrypt / bcryptjs — password hashing & comparison",
            },
            {
              id: "express-session",
              title: "express-session — session-based auth",
            },
            {
              id: "cookie-parser",
              title: "cookie-parser — signed & httpOnly cookies",
            },
            { id: "passport-local", title: "Passport.js — local strategy" },
            { id: "passport-jwt", title: "Passport.js — JWT strategy" },
            {
              id: "oauth2-intro",
              title: "OAuth2 / OIDC — Authorization Code flow",
            },
            { id: "passport-oauth", title: "Passport OAuth2 (Google, GitHub)" },
            {
              id: "rbac-abac",
              title: "RBAC & ABAC — role/attribute-based access control",
            },
            {
              id: "two-factor-auth",
              title: "2FA with TOTP (speakeasy / otplib)",
            },
          ],
        },
        {
          id: "databases-node",
          title: "Databases with Node.js",
          description: "Database integration patterns.",
          subtopics: [
            {
              id: "mongoose-connect",
              title: "Mongoose — connect, models, schema",
            },
            { id: "mongoose-crud", title: "Mongoose CRUD operations" },
            { id: "mongoose-validation", title: "Mongoose schema validation" },
            {
              id: "mongoose-populate",
              title: "Mongoose populate (references)",
            },
            {
              id: "mongoose-aggregation",
              title: "Mongoose aggregation pipeline",
            },
            {
              id: "pg-node-postgres",
              title: "pg (node-postgres) — queries & parameterized",
            },
            { id: "pg-pool", title: "Pool management with pg.Pool" },
            {
              id: "prisma-node",
              title: "Prisma ORM — schema, migrations, client",
            },
            {
              id: "prisma-relations",
              title: "Prisma relations & nested writes",
            },
            {
              id: "redis-ioredis",
              title: "Redis with ioredis (get, set, expire, hashes)",
            },
            {
              id: "transactions-node",
              title: "Transactions — SQL (pg) & Mongoose sessions",
            },
          ],
        },
        {
          id: "rest-api-design",
          title: "REST API Design",
          description: "Building well-designed REST APIs.",
          subtopics: [
            {
              id: "resource-naming",
              title: "REST resource naming conventions",
            },
            {
              id: "http-methods-rest",
              title: "HTTP methods: GET, POST, PUT, PATCH, DELETE",
            },
            {
              id: "api-versioning",
              title: "API versioning strategies (/v1, Accept header)",
            },
            {
              id: "pagination",
              title: "Pagination (offset/limit, cursor-based)",
            },
            {
              id: "filtering-sorting",
              title: "Filtering & Sorting via query params",
            },
            {
              id: "error-responses",
              title: "Consistent error response format (RFC 7807)",
            },
            { id: "hateoas", title: "HATEOAS — hypermedia links in responses" },
            { id: "openapi-swagger", title: "OpenAPI / Swagger documentation" },
            { id: "rate-limiting-rest", title: "Rate Limiting for REST APIs" },
            { id: "etag-caching", title: "ETag & Cache-Control headers" },
          ],
        },
        {
          id: "graphql-node",
          title: "GraphQL with Node.js",
          description: "Building GraphQL APIs in Node.js.",
          subtopics: [
            {
              id: "graphql-intro",
              title: "GraphQL — queries, mutations, subscriptions",
            },
            {
              id: "apollo-server",
              title: "Apollo Server — setup with Express",
            },
            {
              id: "typedefs-resolvers",
              title: "typeDefs & resolvers — SDL-first",
            },
            {
              id: "graphql-types",
              title: "GraphQL scalar, type, interface, union",
            },
            {
              id: "context-dataloaders",
              title: "Context & DataLoader (N+1 problem)",
            },
            {
              id: "graphql-auth",
              title: "GraphQL authentication & authorization",
            },
            { id: "graphql-errors", title: "Error handling in GraphQL" },
            {
              id: "code-first-graphql",
              title: "Code-first GraphQL (Pothos / NexusJS)",
            },
            {
              id: "graphql-subscriptions",
              title: "Subscriptions with WebSockets",
            },
          ],
        },
        {
          id: "websockets-node",
          title: "WebSockets",
          description: "Real-time bidirectional communication.",
          subtopics: [
            { id: "ws-library", title: "ws — WebSocket server & client" },
            {
              id: "ws-events",
              title:
                "WebSocket events: 'connection', 'message', 'close', 'error'",
            },
            {
              id: "socketio-server",
              title: "Socket.IO — server setup & events",
            },
            { id: "socketio-rooms", title: "Socket.IO Rooms & Namespaces" },
            {
              id: "socketio-auth",
              title: "Socket.IO authentication middleware",
            },
            {
              id: "socketio-broadcast",
              title: "socket.emit vs socket.broadcast.emit",
            },
            {
              id: "socketio-redis-adapter",
              title: "Socket.IO Redis Adapter — multi-server",
            },
            {
              id: "ws-vs-socketio",
              title: "WebSocket (ws) vs Socket.IO — trade-offs",
            },
          ],
        },
        {
          id: "message-queues",
          title: "Message Queues",
          description: "Async job processing in Node.js.",
          subtopics: [
            { id: "bullmq-intro", title: "BullMQ — intro & setup with Redis" },
            { id: "bullmq-queue-worker", title: "BullMQ Queue & Worker" },
            {
              id: "bullmq-jobs",
              title: "Job options: delay, priority, attempts, backoff",
            },
            {
              id: "bullmq-events",
              title: "BullMQ events: 'completed', 'failed', 'progress'",
            },
            {
              id: "bullmq-concurrency",
              title: "Worker concurrency & rate limiting",
            },
            { id: "bullmq-scheduler", title: "Repeatable jobs & schedulers" },
            {
              id: "rabbitmq-amqplib",
              title: "RabbitMQ with amqplib — exchanges & queues",
            },
            {
              id: "rabbitmq-patterns",
              title: "RabbitMQ patterns: work queue, pub/sub, RPC",
            },
          ],
        },
        {
          id: "caching-node",
          title: "Caching Strategies",
          description: "Application-level caching patterns.",
          subtopics: [
            {
              id: "in-memory-cache",
              title: "In-memory caching (node-cache, lru-cache)",
            },
            {
              id: "redis-caching",
              title: "Redis as cache (SET EX, GETSET, pipeline)",
            },
            {
              id: "cache-aside-pattern",
              title: "Cache-Aside (lazy loading) pattern",
            },
            {
              id: "write-through-pattern",
              title: "Write-Through & Write-Behind patterns",
            },
            {
              id: "cache-invalidation",
              title: "Cache invalidation strategies",
            },
            {
              id: "http-caching-headers",
              title: "HTTP Cache-Control, ETag, Last-Modified",
            },
            {
              id: "redis-pub-sub-cache",
              title: "Redis Pub/Sub for cache invalidation",
            },
          ],
        },
        {
          id: "logging-node",
          title: "Logging",
          description: "Structured logging for Node.js.",
          subtopics: [
            {
              id: "winston-intro",
              title: "Winston — transports, levels, format",
            },
            {
              id: "winston-file-transport",
              title: "Winston File transport with rotation",
            },
            { id: "pino-intro", title: "Pino — ultra-fast JSON logger" },
            { id: "pino-pretty", title: "pino-pretty for development" },
            {
              id: "log-levels",
              title: "Log levels: error, warn, info, http, debug, verbose",
            },
            {
              id: "structured-logs",
              title: "Structured (JSON) logging for log aggregators",
            },
            {
              id: "request-logging",
              title: "HTTP request logging (morgan, pino-http)",
            },
            {
              id: "correlation-ids",
              title: "Correlation IDs for distributed tracing",
            },
          ],
        },
        {
          id: "scheduling-node",
          title: "Task Scheduling",
          description: "Scheduled and recurring jobs.",
          subtopics: [
            {
              id: "node-cron",
              title: "node-cron — cron expressions in Node.js",
            },
            { id: "agenda-js", title: "Agenda — MongoDB-backed job scheduler" },
            {
              id: "cron-expressions",
              title: "Cron expression syntax (*/5 * * * *)",
            },
            {
              id: "schedule-cleanup",
              title: "Scheduling cleanup & maintenance jobs",
            },
            {
              id: "distributed-scheduling",
              title: "Distributed scheduling with Redis lock",
            },
          ],
        },
        {
          id: "file-uploads",
          title: "File Uploads & Processing",
          description: "Handling file uploads and processing.",
          subtopics: [
            { id: "multer-setup", title: "multer — disk vs memory storage" },
            { id: "multer-limits", title: "multer — file size & type limits" },
            {
              id: "sharp-image",
              title: "sharp — resize, convert, compress images",
            },
            { id: "s3-upload", title: "AWS S3 upload with @aws-sdk/client-s3" },
            {
              id: "presigned-urls",
              title: "S3 presigned URLs for direct browser upload",
            },
            { id: "streaming-upload", title: "Streaming upload to S3" },
          ],
        },
        {
          id: "email-node",
          title: "Email",
          description: "Sending emails from Node.js.",
          subtopics: [
            {
              id: "nodemailer-setup",
              title: "Nodemailer — SMTP transport setup",
            },
            {
              id: "nodemailer-send",
              title: "sendMail() — basic email sending",
            },
            {
              id: "nodemailer-attachments",
              title: "Attachments & inline images",
            },
            {
              id: "email-templates",
              title: "Email templates (Handlebars, MJML, react-email)",
            },
            { id: "ses-transport", title: "AWS SES transport with Nodemailer" },
            { id: "sendgrid-mailgun", title: "SendGrid / Mailgun SDKs" },
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
      description: "Advanced algorithms for backend systems.",
      topics: [
        {
          id: "graph-algorithms-node",
          title: "Graph Algorithms for Backend",
          description: "Graph problems relevant to backend systems.",
          subtopics: [
            {
              id: "dependency-resolution",
              title: "Dependency Resolution (topological sort)",
            },
            {
              id: "permission-graph",
              title: "Permission Graph traversal (RBAC)",
            },
            {
              id: "shortest-path-routing",
              title: "Shortest path for service routing",
            },
            {
              id: "connected-components",
              title: "Connected components in user graphs",
            },
            {
              id: "bipartite-check",
              title: "Bipartite check for conflict detection",
            },
          ],
        },
        {
          id: "caching-dsa",
          title: "Caching Data Structures",
          description: "Implementing caching algorithms.",
          subtopics: [
            {
              id: "lru-cache-impl",
              title: "LRU Cache (Map + DoublyLinkedList)",
            },
            { id: "lfu-cache-impl", title: "LFU Cache implementation" },
            { id: "ttl-cache", title: "TTL-based Cache implementation" },
            {
              id: "bloom-filter",
              title: "Bloom Filter (probabilistic membership)",
            },
          ],
        },
        {
          id: "rate-limit-dsa",
          title: "Rate Limiting Algorithms",
          description: "Algorithms for API rate limiting.",
          subtopics: [
            { id: "token-bucket", title: "Token Bucket algorithm" },
            { id: "sliding-window-log", title: "Sliding Window Log algorithm" },
            {
              id: "sliding-window-counter",
              title: "Sliding Window Counter algorithm",
            },
            {
              id: "fixed-window-counter",
              title: "Fixed Window Counter algorithm",
            },
            { id: "leaky-bucket", title: "Leaky Bucket algorithm" },
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
      description: "Senior Node.js interview prep.",
      topics: [
        {
          id: "express-security-qa",
          title: "Express & Security Q&A",
          description: "Interview questions on Express and web security.",
          subtopics: [
            {
              id: "express-middleware-qa",
              title: "How does Express middleware chain work?",
            },
            {
              id: "error-middleware-qa",
              title: "How do you write an error-handling middleware?",
            },
            {
              id: "helmet-usecase-qa",
              title: "What does Helmet.js protect against?",
            },
            {
              id: "sql-injection-qa",
              title: "Explain SQL injection and how to prevent it",
            },
            { id: "csrf-qa", title: "What is CSRF? How do you prevent it?" },
            {
              id: "prototype-pollution-qa",
              title: "What is prototype pollution?",
            },
          ],
        },
        {
          id: "auth-qa",
          title: "Authentication & Authorization Q&A",
          description: "Auth implementation interview questions.",
          subtopics: [
            {
              id: "jwt-vs-session-qa",
              title: "JWT vs session-based auth — trade-offs",
            },
            {
              id: "jwt-expiry-qa",
              title: "How do you handle JWT expiry & refresh?",
            },
            {
              id: "bcrypt-qa",
              title: "Why use bcrypt? What is the salt rounds?",
            },
            {
              id: "oauth2-flow-qa",
              title: "Explain OAuth2 Authorization Code flow",
            },
            {
              id: "rbac-impl-qa",
              title: "How do you implement RBAC in Node.js?",
            },
          ],
        },
        {
          id: "databases-node-qa",
          title: "Databases Q&A",
          description: "Node.js database integration questions.",
          subtopics: [
            {
              id: "n-plus-one-qa",
              title: "What is the N+1 Problem? How to solve?",
            },
            { id: "connection-pool-qa", title: "Why use a connection pool?" },
            {
              id: "transactions-qa",
              title: "How do you handle transactions in Node.js?",
            },
            {
              id: "prisma-mongoose-qa",
              title: "Prisma vs Mongoose — when to use each?",
            },
            {
              id: "redis-use-cases-qa",
              title: "Common Redis use cases in Node.js",
            },
          ],
        },
        {
          id: "realtime-messaging-qa",
          title: "Real-Time & Messaging Q&A",
          description: "WebSocket and queue interview questions.",
          subtopics: [
            {
              id: "ws-vs-socketio-qa",
              title: "ws vs Socket.IO — when to use each?",
            },
            {
              id: "ws-vs-polling-qa",
              title: "WebSocket vs HTTP polling / SSE",
            },
            {
              id: "bullmq-purpose-qa",
              title: "Why use BullMQ instead of setTimeout?",
            },
            {
              id: "message-queue-qa",
              title: "Why use a message queue? Pattern benefits?",
            },
            {
              id: "rabbitmq-exchanges-qa",
              title: "RabbitMQ exchange types (direct, fanout, topic)",
            },
          ],
        },
        {
          id: "senior-coding-node",
          title: "Senior Coding Exercises",
          description: "Advanced Node.js coding challenges.",
          subtopics: [
            {
              id: "jwt-middleware-ex",
              title: "Build a JWT authentication middleware",
            },
            {
              id: "rate-limiter-redis-ex",
              title: "Implement Redis-based sliding window rate limiter",
            },
            {
              id: "bullmq-worker-ex",
              title: "Create a BullMQ worker for email notifications",
            },
            {
              id: "lru-cache-ex",
              title: "Implement LRU Cache with O(1) operations",
            },
            {
              id: "api-pagination-ex",
              title: "Implement cursor-based pagination",
            },
          ],
        },
      ],
    },
  ],
};
