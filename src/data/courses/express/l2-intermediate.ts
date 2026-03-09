import { Level } from "@/types";

export const l2Level: Level = {
  id: "mid",
  title: "Intermediate Express.js",
  description: "Mid-level Dev",
  color: "#fb923c",
  modules: [
    // ── Express ──────────────────────────────────────────
    {
      id: "express",
      title: "Express",
      icon: "layers",
      color: "#e67e22",
      description: "Intermediate Express.js patterns.",
      topics: [
        {
          id: "rest-api-design",
          title: "REST API Design Principles",
          description: "Building well-structured REST APIs.",
          subtopics: [
            {
              id: "rest-constraints",
              title: "REST constraints: stateless, uniform interface, layered",
            },
            {
              id: "resource-naming",
              title:
                "Resource naming — nouns, plural, hierarchical (/users/:id/posts)",
            },
            {
              id: "http-methods-rest",
              title:
                "HTTP methods mapped to CRUD (GET=Read, POST=Create, PUT/PATCH=Update, DELETE=Delete)",
            },
            {
              id: "api-versioning",
              title: "API versioning strategies: /v1, Accept header",
            },
            {
              id: "pagination-rest",
              title: "Pagination: offset/limit, cursor-based, keyset",
            },
            {
              id: "filtering-sorting",
              title: "Query filters, sorting, field selection",
            },
            {
              id: "consistent-error-format",
              title:
                "Consistent error response format (RFC 7807 Problem Details)",
            },
            { id: "hateoas", title: "HATEOAS — hypermedia links in responses" },
            {
              id: "rest-best-practices",
              title: "REST best practices: idempotency, safe methods",
            },
            {
              id: "openapi-intro",
              title: "OpenAPI / Swagger — intro & why document APIs",
            },
          ],
        },
        {
          id: "mvc-architecture",
          title: "MVC Architecture Pattern",
          description: "Structuring Express with MVC.",
          subtopics: [
            { id: "mvc-concept", title: "Model — View — Controller concept" },
            {
              id: "controllers-layer",
              title: "Controllers — handling req/res, calling services",
            },
            {
              id: "services-layer",
              title: "Service layer — business logic separation",
            },
            { id: "models-layer", title: "Models — data schema definitions" },
            {
              id: "routes-layer",
              title: "Routes — wiring URLs to controllers",
            },
            {
              id: "middlewares-layer",
              title: "Middlewares folder — auth, validation, etc.",
            },
            {
              id: "mvc-folder-structure",
              title: "Full MVC folder structure example",
            },
            {
              id: "separation-of-concerns",
              title: "Separation of concerns principle",
            },
          ],
        },
        {
          id: "input-validation",
          title: "Input Validation",
          description: "Validating and sanitizing user input.",
          subtopics: [
            {
              id: "why-validation",
              title: "Why validate input? (security & data integrity)",
            },
            {
              id: "joi-schema",
              title: "Joi — schema definition and validation",
            },
            {
              id: "joi-middleware",
              title: "Joi validation middleware wrapper",
            },
            {
              id: "express-validator",
              title: "express-validator — check(), validationResult()",
            },
            { id: "zod-express", title: "Zod schema validation in Express" },
            {
              id: "sanitization",
              title: "Sanitization: trim, escape, normalize email",
            },
            {
              id: "validation-error-response",
              title: "Returning 422 with field-level error messages",
            },
            { id: "dto-pattern", title: "DTO (Data Transfer Object) pattern" },
          ],
        },
        {
          id: "jwt-authentication",
          title: "Authentication — JWT (JSON Web Tokens)",
          description: "Implementing JWT-based authentication.",
          subtopics: [
            {
              id: "jwt-structure",
              title: "JWT structure: header.payload.signature",
            },
            { id: "jwt-sign", title: "jwt.sign(payload, secret, options)" },
            {
              id: "jwt-verify",
              title: "jwt.verify(token, secret) — validation & decode",
            },
            {
              id: "jwt-middleware",
              title: "Auth middleware — extracting Bearer token from header",
            },
            {
              id: "access-refresh-tokens",
              title: "Access token vs Refresh token strategy",
            },
            {
              id: "refresh-token-rotation",
              title: "Refresh token rotation — security",
            },
            {
              id: "jwt-expiry",
              title: "Token expiry (expiresIn: '15m', '7d')",
            },
            {
              id: "jwt-payload-design",
              title: "JWT payload design: userId, role (avoid sensitive data)",
            },
            {
              id: "jwt-secret-rotation",
              title: "JWT secret rotation & key management",
            },
            {
              id: "token-blacklisting",
              title: "Token blacklisting with Redis on logout",
            },
          ],
        },
        {
          id: "password-security",
          title: "Password Security",
          description: "Secure password handling with bcrypt.",
          subtopics: [
            {
              id: "hashing-vs-encryption",
              title: "Hashing vs Encryption — difference",
            },
            {
              id: "bcrypt-intro",
              title: "bcrypt — adaptive hash function for passwords",
            },
            { id: "bcrypt-hash", title: "bcrypt.hash(password, saltRounds)" },
            { id: "bcrypt-compare", title: "bcrypt.compare(password, hash)" },
            {
              id: "salt-rounds",
              title: "Salt rounds: security vs performance trade-off",
            },
            { id: "argon2", title: "argon2 — modern alternative to bcrypt" },
            {
              id: "password-policy",
              title: "Password policy enforcement (min length, complexity)",
            },
            {
              id: "timing-attacks",
              title: "Timing attack prevention with constant-time compare",
            },
          ],
        },
        {
          id: "mongodb-mongoose",
          title: "MongoDB Integration — Mongoose",
          description: "Connecting Express to MongoDB with Mongoose.",
          subtopics: [
            {
              id: "mongoose-connect",
              title: "mongoose.connect() — connection string",
            },
            {
              id: "mongoose-schema",
              title: "Schema definition: types, required, default, unique",
            },
            { id: "mongoose-model", title: "mongoose.model('User', schema)" },
            {
              id: "mongoose-crud",
              title:
                "CRUD: create, find, findById, findByIdAndUpdate, deleteOne",
            },
            {
              id: "mongoose-validation",
              title: "Schema-level validation & custom validators",
            },
            {
              id: "mongoose-populate",
              title: "populate() — reference joins between collections",
            },
            {
              id: "mongoose-virtuals",
              title: "Virtual fields and toJSON transforms",
            },
            {
              id: "mongoose-middlewares",
              title: "Mongoose pre/post hooks (save, remove, find)",
            },
            {
              id: "mongoose-aggregation",
              title: "Aggregation pipeline basics",
            },
            {
              id: "mongodb-indexes",
              title: "Indexes — createIndex, compound, text indexes",
            },
          ],
        },
        {
          id: "postgresql-integration",
          title: "PostgreSQL Integration — pg & Sequelize",
          description: "Connecting Express to PostgreSQL.",
          subtopics: [
            {
              id: "pg-install",
              title: "pg (node-postgres) — install and Pool setup",
            },
            {
              id: "pg-query",
              title: "pool.query(sql, params) — parameterized queries",
            },
            {
              id: "pg-transactions",
              title: "Transactions with BEGIN, COMMIT, ROLLBACK",
            },
            {
              id: "pg-connection-pool",
              title: "Connection pool configuration (max, idleTimeoutMillis)",
            },
            {
              id: "sequelize-setup",
              title: "Sequelize ORM — setup and dialect config",
            },
            {
              id: "sequelize-models",
              title: "Sequelize model definition with DataTypes",
            },
            {
              id: "sequelize-associations",
              title: "Associations: hasOne, hasMany, belongsTo, belongsToMany",
            },
            {
              id: "sequelize-migrations",
              title: "Sequelize migrations for schema changes",
            },
            {
              id: "prisma-intro",
              title: "Prisma — modern TypeScript ORM (intro)",
            },
          ],
        },
        {
          id: "file-uploads",
          title: "File Uploads — Multer",
          description: "Handling multipart file uploads.",
          subtopics: [
            { id: "multer-setup", title: "multer — npm install multer" },
            {
              id: "multer-disk-storage",
              title: "diskStorage — destination & filename",
            },
            {
              id: "multer-memory-storage",
              title: "memoryStorage — in-memory buffer",
            },
            {
              id: "multer-single-multiple",
              title: "upload.single() vs upload.array() vs upload.fields()",
            },
            {
              id: "multer-file-filter",
              title: "fileFilter — MIME type validation",
            },
            {
              id: "multer-size-limit",
              title: "limits.fileSize — size restriction",
            },
            {
              id: "multer-file-object",
              title: "req.file & req.files — accessing uploaded files",
            },
            {
              id: "cloud-storage-upload",
              title: "Uploading to S3 / Cloudinary after multer",
            },
          ],
        },
        {
          id: "logging-winston",
          title: "Logging — Winston & Morgan",
          description: "Production-grade logging.",
          subtopics: [
            {
              id: "winston-setup",
              title: "winston.createLogger() with transports",
            },
            {
              id: "winston-levels",
              title: "Log levels: error, warn, info, http, verbose, debug",
            },
            {
              id: "winston-console-transport",
              title: "Console transport with colorize",
            },
            {
              id: "winston-file-transport",
              title:
                "File transport with daily rotation (winston-daily-rotate-file)",
            },
            {
              id: "winston-combine-format",
              title: "combine(timestamp(), printf()) format",
            },
            {
              id: "structured-json-logs",
              title: "Structured JSON logging for log aggregators",
            },
            {
              id: "morgan-winston-combine",
              title: "Combining morgan HTTP logs with winston",
            },
            { id: "log-request-id", title: "Adding request ID to log context" },
          ],
        },
        {
          id: "api-versioning",
          title: "API Versioning Strategies",
          description: "Versioning REST APIs effectively.",
          subtopics: [
            { id: "url-versioning", title: "URL versioning: /api/v1, /api/v2" },
            {
              id: "header-versioning",
              title:
                "Header versioning: Accept: application/vnd.api+json;version=1",
            },
            {
              id: "query-versioning",
              title: "Query param versioning: ?version=1",
            },
            { id: "versioned-routers", title: "Separate routers per version" },
            {
              id: "version-deprecation",
              title: "Deprecating old API versions gracefully",
            },
            { id: "semver-api", title: "Semantic versioning for APIs" },
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
      description: "Mid-level Express interview questions.",
      topics: [
        {
          id: "rest-api-qa",
          title: "REST & API Design Q&A",
          description: "REST API design interview questions.",
          subtopics: [
            { id: "rest-vs-soap-qa", title: "REST vs SOAP — differences?" },
            {
              id: "restful-principles-qa",
              title: "What are the 6 REST architectural constraints?",
            },
            {
              id: "http-safe-idempotent-qa",
              title: "Safe vs idempotent HTTP methods — explain",
            },
            {
              id: "pagination-approaches-qa",
              title: "Offset vs cursor pagination — trade-offs?",
            },
            {
              id: "api-versioning-qa",
              title: "How would you version a REST API?",
            },
            {
              id: "status-201-204-qa",
              title: "When to return 201 vs 200 vs 204?",
            },
            { id: "hateoas-qa", title: "What is HATEOAS in REST?" },
            {
              id: "rate-limiting-intro-qa",
              title: "What is rate limiting and why is it important?",
            },
          ],
        },
        {
          id: "auth-security-qa",
          title: "Authentication & Security Q&A",
          description: "Auth and security interview questions.",
          subtopics: [
            {
              id: "jwt-structure-qa",
              title: "What are the three parts of a JWT?",
            },
            {
              id: "jwt-vs-session-qa",
              title: "JWT vs session-based auth — trade-offs?",
            },
            {
              id: "jwt-storage-qa",
              title: "Where to store JWT — localStorage vs httpOnly cookie?",
            },
            {
              id: "refresh-token-qa",
              title: "What is a refresh token and how does it work?",
            },
            {
              id: "bcrypt-qa",
              title: "Why use bcrypt instead of MD5/SHA for passwords?",
            },
            { id: "salt-qa", title: "What is a salt in password hashing?" },
            { id: "bearer-token-qa", title: "What is a Bearer token?" },
            {
              id: "token-blacklist-qa",
              title: "How do you invalidate a JWT on logout?",
            },
          ],
        },
        {
          id: "database-integration-qa",
          title: "Database Integration Q&A",
          description: "Database usage in Express apps.",
          subtopics: [
            {
              id: "mongoose-vs-mongodb-qa",
              title: "Mongoose vs native MongoDB driver?",
            },
            {
              id: "schema-validation-qa",
              title: "Why use Mongoose schema validation?",
            },
            {
              id: "populate-qa",
              title: "What does populate() do in Mongoose?",
            },
            {
              id: "mongoose-hooks-qa",
              title: "What are Mongoose pre/post hooks?",
            },
            { id: "sql-vs-nosql-qa", title: "When to choose SQL vs NoSQL?" },
            {
              id: "connection-pool-qa",
              title: "What is a database connection pool?",
            },
            {
              id: "parameterized-queries-qa",
              title:
                "Why use parameterized queries? (SQL injection prevention)",
            },
            {
              id: "orm-vs-query-builder-qa",
              title: "ORM vs query builder vs raw SQL — trade-offs?",
            },
          ],
        },
      ],
    },
  ],
};
