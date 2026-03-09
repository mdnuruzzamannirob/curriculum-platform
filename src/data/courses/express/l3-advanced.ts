import { Level } from "@/types";

export const l3Level: Level = {
  id: "senior",
  title: "Advanced Express.js",
  description: "Senior Dev",
  color: "#f472b6",
  modules: [
    // ── Express ──────────────────────────────────────────
    {
      id: "express",
      title: "Express",
      icon: "layers",
      color: "#e67e22",
      description: "Advanced Express.js patterns.",
      topics: [
        {
          id: "advanced-middleware",
          title: "Advanced Middleware Patterns",
          description: "Composing and designing complex middleware.",
          subtopics: [
            {
              id: "middleware-factory-adv",
              title: "Middleware factory with configuration options",
            },
            {
              id: "conditional-middleware",
              title: "Conditional middleware (skip based on env/path)",
            },
            {
              id: "middleware-composition-adv",
              title: "Composing middleware pipelines",
            },
            {
              id: "express-unless",
              title: "express-unless — exclude paths from middleware",
            },
            {
              id: "global-request-logger",
              title: "Global request/response logging middleware",
            },
            {
              id: "request-id-adv",
              title: "Request correlation ID with ALS (AsyncLocalStorage)",
            },
            {
              id: "response-wrapper",
              title: "Response wrapper middleware for consistent API shape",
            },
            {
              id: "middleware-testing",
              title: "Unit testing individual middleware",
            },
          ],
        },
        {
          id: "security-hardening",
          title: "Security Hardening",
          description: "Protecting Express apps from common vulnerabilities.",
          subtopics: [
            {
              id: "helmet-setup",
              title: "helmet.js — sets security HTTP headers",
            },
            {
              id: "helmet-csp",
              title: "helmet contentSecurityPolicy — XSS prevention",
            },
            {
              id: "csrf-protection",
              title: "CSRF — what it is and csurf / csrf-csrf package",
            },
            {
              id: "xss-prevention",
              title: "XSS prevention — escape output, sanitize input",
            },
            {
              id: "sql-injection",
              title: "SQL injection prevention — parameterized queries",
            },
            {
              id: "nosql-injection",
              title: "NoSQL injection — operator injection in MongoDB",
            },
            {
              id: "hpp-protection",
              title: "HTTP Parameter Pollution — hpp package",
            },
            {
              id: "dependency-audit",
              title: "npm audit — scanning for vulnerable dependencies",
            },
            {
              id: "ssrf-prevention",
              title: "SSRF prevention — block internal IP ranges in user URLs",
            },
            { id: "path-traversal", title: "Path traversal attack prevention" },
          ],
        },
        {
          id: "rate-limiting",
          title: "Rate Limiting & Throttling",
          description: "Protecting APIs from abuse.",
          subtopics: [
            {
              id: "rate-limit-package",
              title: "express-rate-limit — setup and configuration",
            },
            {
              id: "rate-limit-options",
              title: "windowMs, max, message options",
            },
            { id: "rate-limit-by-ip", title: "Rate limiting by IP address" },
            {
              id: "rate-limit-by-user",
              title: "Rate limiting by authenticated user",
            },
            {
              id: "redis-rate-limit",
              title: "Redis-backed rate limiting (rate-limit-redis)",
            },
            {
              id: "sliding-window",
              title: "Sliding window vs fixed window algorithms",
            },
            {
              id: "token-bucket",
              title: "Token bucket algorithm (express-slow-down)",
            },
            {
              id: "rate-limit-headers",
              title: "X-RateLimit-Limit, X-RateLimit-Remaining headers",
            },
          ],
        },
        {
          id: "caching",
          title: "Caching Strategies",
          description: "Improving performance with caching.",
          subtopics: [
            {
              id: "in-memory-cache",
              title: "In-memory caching (node-cache, lru-cache)",
            },
            {
              id: "redis-cache-setup",
              title: "Redis caching with ioredis — GET, SET, EXPIRE",
            },
            {
              id: "cache-aside-pattern",
              title: "Cache-aside (lazy loading) pattern",
            },
            { id: "cache-middleware", title: "Route-level cache middleware" },
            {
              id: "cache-invalidation",
              title: "Cache invalidation strategies",
            },
            {
              id: "http-cache-control",
              title: "HTTP Cache-Control, ETag, Last-Modified headers",
            },
            {
              id: "cache-key-design",
              title: "Cache key design (namespace:resource:id)",
            },
            {
              id: "redis-pub-sub-invalid",
              title: "Redis Pub/Sub for cache invalidation across instances",
            },
          ],
        },
        {
          id: "websockets",
          title: "WebSockets & Real-time Communication",
          description: "Real-time features with Socket.IO and ws.",
          subtopics: [
            { id: "ws-library", title: "ws — lightweight WebSocket server" },
            {
              id: "ws-events",
              title: "WebSocket events: connection, message, close, error",
            },
            {
              id: "socket-io-setup",
              title: "Socket.IO — server setup with Express HTTP server",
            },
            {
              id: "socket-io-events",
              title: "socket.on() / socket.emit() — events",
            },
            {
              id: "socket-io-rooms",
              title: "Rooms and namespaces in Socket.IO",
            },
            {
              id: "socket-io-broadcast",
              title: "socket.broadcast.emit vs io.emit",
            },
            {
              id: "socket-io-auth",
              title: "Socket.IO authentication middleware",
            },
            {
              id: "socket-io-redis-adapter",
              title: "Redis adapter for multi-server Socket.IO",
            },
            {
              id: "socketio-vs-ws",
              title: "Socket.IO vs raw WebSocket — trade-offs",
            },
          ],
        },
        {
          id: "oauth2-passport",
          title: "OAuth2 & Passport.js",
          description: "Social login and OAuth2 flows.",
          subtopics: [
            { id: "oauth2-flow", title: "OAuth2 Authorization Code flow" },
            {
              id: "passport-setup",
              title: "Passport.js — initialize and session middleware",
            },
            {
              id: "passport-local",
              title: "passport-local — username/password strategy",
            },
            { id: "passport-jwt", title: "passport-jwt — JWT strategy" },
            {
              id: "passport-google",
              title: "passport-google-oauth20 — Google login",
            },
            { id: "passport-github", title: "passport-github2 — GitHub login" },
            {
              id: "passport-serialize",
              title: "serializeUser & deserializeUser",
            },
            {
              id: "oauth-state-param",
              title: "State parameter — CSRF protection in OAuth",
            },
            {
              id: "oidc-intro",
              title: "OpenID Connect (OIDC) — identity layer on OAuth2",
            },
          ],
        },
        {
          id: "testing-express",
          title: "Testing Express APIs",
          description: "Unit, integration, and e2e testing.",
          subtopics: [
            {
              id: "supertest-setup",
              title: "supertest — HTTP assertions for Express",
            },
            {
              id: "jest-express",
              title: "Jest with supertest — integration test setup",
            },
            { id: "mocha-chai", title: "Mocha + Chai alternative test setup" },
            {
              id: "testing-routes",
              title: "Testing routes (GET, POST, auth protected)",
            },
            {
              id: "mocking-db",
              title: "Mocking database calls (jest.mock, mongoose-memory)",
            },
            {
              id: "testing-middleware",
              title: "Testing middleware in isolation",
            },
            {
              id: "test-coverage",
              title: "Coverage reports with Istanbul/nyc",
            },
            {
              id: "test-database-setup",
              title: "In-memory MongoDB (mongodb-memory-server) for tests",
            },
          ],
        },
        {
          id: "background-jobs",
          title: "Background Jobs & Queues",
          description: "Async job processing in Express apps.",
          subtopics: [
            { id: "bullmq-setup", title: "BullMQ — setup with Redis" },
            { id: "bullmq-queue", title: "Creating a Queue and adding jobs" },
            { id: "bullmq-worker", title: "Worker — processing jobs" },
            {
              id: "bullmq-job-options",
              title: "Job options: delay, priority, attempts, backoff",
            },
            {
              id: "bullmq-events",
              title: "Events: completed, failed, stalled, progress",
            },
            {
              id: "bullmq-scheduler",
              title: "Repeatable job scheduling (cron patterns)",
            },
            { id: "email-queue", title: "Email sending via job queue pattern" },
            {
              id: "job-concurrency",
              title: "Worker concurrency — parallel job processing",
            },
          ],
        },
        {
          id: "async-error-patterns",
          title: "Async Error Handling Patterns",
          description: "Handling errors in async Express code.",
          subtopics: [
            { id: "asynchandler-impl", title: "Implementing asyncHandler HOF" },
            {
              id: "express-async-errors",
              title: "express-async-errors — patches Express for async",
            },
            {
              id: "unhandled-rejection",
              title:
                "process.on('unhandledRejection') — catching missed errors",
            },
            {
              id: "uncaught-exception",
              title: "process.on('uncaughtException') — fatal errors",
            },
            {
              id: "operational-errors",
              title: "Operational vs programmer errors in production",
            },
            {
              id: "error-class-hierarchy",
              title:
                "Custom error class hierarchy (NotFoundError, ValidationError)",
            },
            {
              id: "graceful-vs-crash",
              title: "When to gracefully recover vs crash and restart",
            },
          ],
        },
        {
          id: "graphql-express",
          title: "GraphQL with Express",
          description: "Building GraphQL APIs on Express.",
          subtopics: [
            {
              id: "graphql-intro",
              title: "GraphQL — queries, mutations, subscriptions",
            },
            {
              id: "apollo-server-express",
              title: "apollo-server-express — setup",
            },
            { id: "typedefs-resolvers", title: "typeDefs (SDL) and resolvers" },
            {
              id: "graphql-context",
              title: "Context — passing user/db to resolvers",
            },
            {
              id: "graphql-dataloader",
              title: "DataLoader — solving the N+1 problem",
            },
            {
              id: "graphql-auth",
              title: "Authentication in GraphQL resolvers",
            },
            {
              id: "graphql-error-handling",
              title: "Error handling in GraphQL",
            },
            {
              id: "graphql-vs-rest",
              title: "GraphQL vs REST — when to choose each",
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
      description: "Senior-level Express interview questions.",
      topics: [
        {
          id: "security-qa",
          title: "Security Q&A",
          description: "Security interview questions for Express.",
          subtopics: [
            { id: "owasp-top10-qa", title: "What is the OWASP Top 10?" },
            { id: "helmet-qa", title: "What does helmet.js protect against?" },
            {
              id: "csrf-qa",
              title: "What is CSRF and how do you prevent it in Express?",
            },
            { id: "xss-qa", title: "What is XSS and how to prevent it?" },
            {
              id: "sql-injection-qa",
              title: "How do parameterized queries prevent SQL injection?",
            },
            {
              id: "nosql-injection-qa",
              title: "What is NoSQL injection? How to prevent it?",
            },
            {
              id: "rate-limiting-whys-qa",
              title: "Why is rate limiting important for APIs?",
            },
            {
              id: "https-vs-http-qa",
              title: "HTTPS vs HTTP — what does TLS do?",
            },
          ],
        },
        {
          id: "advanced-routing-qa",
          title: "Advanced Middleware & Architecture Q&A",
          description: "Advanced architecture and middleware questions.",
          subtopics: [
            {
              id: "als-request-context-qa",
              title:
                "What is AsyncLocalStorage and how to use it for request context?",
            },
            {
              id: "middleware-error-handling-qa",
              title: "How does error middleware catch async errors?",
            },
            {
              id: "custom-error-class-qa",
              title: "Design a custom error class hierarchy for an API",
            },
            { id: "cache-aside-qa", title: "Explain the cache-aside pattern" },
            {
              id: "redis-use-cases-qa",
              title: "What are the use cases for Redis in Express?",
            },
            {
              id: "socket-io-arch-qa",
              title: "How does Socket.IO scale across multiple servers?",
            },
            {
              id: "bullmq-vs-cron-qa",
              title: "BullMQ job queues vs cron jobs — when to use each?",
            },
            {
              id: "graphql-n1-qa",
              title: "What is the N+1 problem in GraphQL?",
            },
          ],
        },
        {
          id: "testing-qa",
          title: "Testing Q&A",
          description: "Testing Express applications interview questions.",
          subtopics: [
            {
              id: "supertest-qa",
              title: "What is supertest and how do you use it?",
            },
            {
              id: "unit-vs-integration-qa",
              title: "Unit vs integration tests — balance?",
            },
            {
              id: "mocking-db-qa",
              title: "How do you mock a database in Express tests?",
            },
            { id: "test-db-setup-qa", title: "How to set up a test database?" },
            {
              id: "jest-vs-mocha-qa",
              title: "Jest vs Mocha+Chai — which to choose?",
            },
            {
              id: "test-coverage-qa",
              title: "What is code coverage and what % is enough?",
            },
            {
              id: "oauth2-testing-qa",
              title: "How do you test OAuth2 routes?",
            },
            {
              id: "async-test-qa",
              title: "How do you test async route handlers?",
            },
          ],
        },
      ],
    },
  ],
};
