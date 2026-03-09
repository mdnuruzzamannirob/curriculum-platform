import { Level } from "@/types";

export const l4Level: Level = {
  id: "professional",
  title: "MongoDB in Production",
  description: "Staff Engineer",
  color: "#38bdf8",
  modules: [
    // ── MongoDB ──────────────────────────────────────────
    {
      id: "mongodb",
      title: "MongoDB",
      icon: "layers",
      color: "#47a248",
      description:
        "Production MongoDB — performance, security, Node.js driver, and Mongoose.",
      topics: [
        {
          id: "performance-tuning",
          title: "Query Performance & explain()",
          description: "Analysing and optimising query execution plans.",
          subtopics: [
            {
              id: "explain-method",
              title: "explain('executionStats') — full execution statistics",
            },
            {
              id: "explain-modes",
              title:
                "Explain modes — queryPlanner, executionStats, allPlansExecution",
            },
            {
              id: "winning-plan",
              title: "winningPlan — the chosen execution plan",
            },
            {
              id: "collscan-bad",
              title: "COLLSCAN — collection scan, every document examined",
            },
            {
              id: "ixscan-good",
              title: "IXSCAN — index scan, reading from B-tree",
            },
            {
              id: "totalkeys-docs-examined",
              title: "totalKeysExamined vs totalDocsExamined — key ratio",
            },
            {
              id: "executiontime-ms",
              title: "executionTimeMillis — total query time",
            },
            {
              id: "index-hint",
              title: "cursor.hint() — force a specific index",
            },
            {
              id: "noreturned",
              title: "nReturned — number of documents returned",
            },
            {
              id: "query-shape",
              title: "Query shape — normalized query used for cache",
            },
            {
              id: "plan-cache",
              title: "Plan cache — db.collection.getPlanCache()",
            },
          ],
        },
        {
          id: "index-strategies-production",
          title: "Index Strategies for Production",
          description: "Advanced indexing techniques for production systems.",
          subtopics: [
            {
              id: "background-index-build",
              title: "Index builds — rolling index builds on replica sets",
            },
            {
              id: "foreground-background",
              title: "Foreground vs background builds — impact on operations",
            },
            {
              id: "hide-index",
              title: "hideIndex() — evaluate impact before dropping an index",
            },
            {
              id: "index-intersection-prod",
              title: "Index intersection — MongoDB combining two indexes",
            },
            {
              id: "too-many-indexes",
              title: "Too many indexes — write overhead, memory cost",
            },
            {
              id: "index-stats",
              title: "$indexStats — see index usage statistics",
            },
            {
              id: "unused-index-detect",
              title:
                "Detecting unused indexes with $indexStats accesses counter",
            },
            {
              id: "partial-index-prod",
              title:
                "Partial index in prod — index only active/non-deleted docs",
            },
            {
              id: "index-on-array-production",
              title: "Multikey index trade-offs in high-write collections",
            },
          ],
        },
        {
          id: "connection-management",
          title: "Connection Pooling & Driver Config",
          description: "Managing database connections in production.",
          subtopics: [
            {
              id: "connection-pool-concept",
              title: "Connection pool — reusing connections across requests",
            },
            {
              id: "maxpoolsize",
              title: "maxPoolSize — max open connections (default 100)",
            },
            {
              id: "minpoolsize",
              title: "minPoolSize — maintain minimum connections",
            },
            {
              id: "waitqueuetimeoutms",
              title:
                "waitQueueTimeoutMS — timeout while waiting for connection",
            },
            {
              id: "connecttimeoutms",
              title: "connectTimeoutMS — time to establish TCP connection",
            },
            {
              id: "sockettimeoutms",
              title: "socketTimeoutMS — socket inactivity timeout",
            },
            {
              id: "server-selection-timeout",
              title: "serverSelectionTimeoutMS — time to find suitable server",
            },
            {
              id: "connection-monitoring",
              title: "CMAP (Connection Monitoring and Pooling) events",
            },
            {
              id: "pool-per-service",
              title: "One MongoClient per application — avoid multiple clients",
            },
          ],
        },
        {
          id: "nodejs-driver",
          title: "MongoDB Node.js Driver",
          description: "Using the official MongoDB Node.js driver.",
          subtopics: [
            {
              id: "driver-install",
              title: "npm install mongodb — official driver",
            },
            {
              id: "mongoclient-connect",
              title:
                "MongoClient.connect(uri, options) — establishing connection",
            },
            {
              id: "singleton-pattern",
              title: "Singleton MongoClient — share across application",
            },
            {
              id: "db-collection-access",
              title:
                "client.db('name').collection('name') — accessing collections",
            },
            {
              id: "crud-driver",
              title: "CRUD operations — insertOne, find, updateOne, deleteOne",
            },
            {
              id: "cursor-driver",
              title: "Cursor API — toArray(), forEach(), next(), hasNext()",
            },
            {
              id: "bulkwrite-driver",
              title: "bulkWrite() — batching multiple operations",
            },
            {
              id: "aggregate-driver",
              title: "aggregate() with pipeline array",
            },
            {
              id: "sessions-transactions-driver",
              title:
                "Sessions and transactions — startSession, withTransaction",
            },
            {
              id: "change-streams-driver",
              title: "Change streams — collection.watch() with async iterator",
            },
            {
              id: "typescript-driver",
              title: "TypeScript support — typed collections: Collection<User>",
            },
          ],
        },
        {
          id: "mongoose-odm",
          title: "Mongoose ODM",
          description: "Object Document Mapper for Node.js.",
          subtopics: [
            {
              id: "mongoose-connect",
              title: "mongoose.connect(uri) — connecting to MongoDB",
            },
            {
              id: "schema-definition",
              title:
                "new Schema({ field: { type, required, default } }) — schema",
            },
            {
              id: "schema-types-mongoose",
              title:
                "Schema types — String, Number, Date, Boolean, ObjectId, Array, Mixed",
            },
            {
              id: "model-creation",
              title: "mongoose.model('User', userSchema) — creating model",
            },
            {
              id: "mongoose-crud",
              title:
                "Model.create(), find(), findById(), findByIdAndUpdate(), save()",
            },
            {
              id: "mongoose-populate",
              title: "populate() — join documents by ObjectId reference",
            },
            {
              id: "virtual-fields",
              title: "Virtuals — schema.virtual('fullName').get(() => ...)",
            },
            {
              id: "pre-post-hooks",
              title: "Pre/post middleware hooks — pre('save'), post('find')",
            },
            {
              id: "instance-static-methods",
              title: "Instance methods and static methods on schema",
            },
            {
              id: "mongoose-validators",
              title: "Built-in validators — required, min, max, match, enum",
            },
            {
              id: "custom-validators",
              title: "Custom validators — validate: { validator: fn, message }",
            },
            {
              id: "mongoose-lean",
              title:
                ".lean() — return plain JS objects (skip Mongoose overhead)",
            },
            {
              id: "mongoose-pagination",
              title: "Pagination with .skip().limit() and mongoose-paginate-v2",
            },
            {
              id: "mongoose-discriminators",
              title: "Discriminators — polymorphic schemas from a base model",
            },
          ],
        },
        {
          id: "security-mongodb",
          title: "Security",
          description: "Securing MongoDB deployments.",
          subtopics: [
            {
              id: "auth-mongodb",
              title: "Authentication — SCRAM-SHA-256, x.509 certificates, LDAP",
            },
            {
              id: "authorization-rbac",
              title:
                "Authorization — RBAC, built-in roles (read, readWrite, dbAdmin)",
            },
            {
              id: "create-user",
              title:
                "db.createUser({ user, pwd, roles }) — create database users",
            },
            {
              id: "least-privilege",
              title:
                "Principle of least privilege — application-specific users",
            },
            {
              id: "tls-ssl",
              title: "TLS/SSL — encrypting data in transit (--tls flag)",
            },
            {
              id: "encryption-at-rest",
              title: "Encryption at rest — WiredTiger encryption, KMIP",
            },
            {
              id: "network-isolation",
              title: "Network isolation — VPC, firewall rules, bindIp",
            },
            {
              id: "audit-logging",
              title: "Audit logging — auditLog configuration for compliance",
            },
            {
              id: "csfle-intro-prod",
              title: "CSFLE (Client-Side Field Level Encryption) intro",
            },
            {
              id: "injection-prevention",
              title:
                "NoSQL injection prevention — validate input, avoid $where",
            },
          ],
        },
        {
          id: "backup-recovery",
          title: "Backup & Recovery",
          description: "Data backup strategies for MongoDB.",
          subtopics: [
            {
              id: "mongodump-mongorestore",
              title: "mongodump / mongorestore — logical backup and restore",
            },
            {
              id: "mongodump-options",
              title:
                "mongodump options — --db, --collection, --query, --gzip, --archive",
            },
            {
              id: "mongorestore-options",
              title:
                "mongorestore options — --drop, --nsInclude, --preserveUUID",
            },
            {
              id: "atlas-backups",
              title:
                "Atlas Backup — continuous cloud backup with point-in-time restore",
            },
            {
              id: "cloud-manager-backup",
              title:
                "Cloud Manager / Ops Manager backup — block-level snapshots",
            },
            {
              id: "filesystem-snapshot",
              title: "Filesystem snapshot — LVM or cloud provider snapshots",
            },
            {
              id: "pitr-restore",
              title:
                "Point-in-time restore — replay oplog to specific timestamp",
            },
            {
              id: "backup-testing",
              title: "Backup testing — regular restore drills",
            },
          ],
        },
        {
          id: "monitoring-profiling",
          title: "Monitoring & Profiling",
          description: "Observability tools for MongoDB in production.",
          subtopics: [
            {
              id: "mongostat-tool",
              title:
                "mongostat — real-time server statistics (ops/s, connections)",
            },
            {
              id: "mongotop-tool",
              title: "mongotop — per-collection read/write time",
            },
            {
              id: "db-profiler",
              title:
                "Database profiler — db.setProfilingLevel(1, { slowms: 100 })",
            },
            {
              id: "system-profile-collection",
              title: "system.profile collection — query slow ops",
            },
            {
              id: "currentop",
              title: "db.currentOp() — see active operations",
            },
            {
              id: "killop",
              title: "db.killOp(opId) — terminate long-running operation",
            },
            {
              id: "atlas-monitoring",
              title: "Atlas Monitoring — metrics, alerts, performance advisor",
            },
            {
              id: "atlas-performance-advisor",
              title: "Atlas Performance Advisor — auto-suggest indexes",
            },
            {
              id: "serverStatus",
              title: "db.serverStatus() — full server metrics document",
            },
            {
              id: "db-stats",
              title: "db.stats() / collection.stats() — storage statistics",
            },
          ],
        },
        {
          id: "capped-collections-tailable",
          title: "Capped Collections & Tailable Cursors",
          description: "Fixed-size collections for streaming use cases.",
          subtopics: [
            {
              id: "capped-create",
              title:
                "createCollection('logs', { capped: true, size: 10485760, max: 1000 })",
            },
            {
              id: "capped-behavior",
              title: "FIFO behaviour — oldest documents auto-deleted when full",
            },
            {
              id: "capped-limitations",
              title: "Capped limitations — no deletes by filter, no shard key",
            },
            {
              id: "tailable-cursor",
              title: "Tailable cursor — { tailable: true, awaitData: true }",
            },
            {
              id: "tailable-use-case",
              title: "Tailable cursor use cases — log streaming, message queue",
            },
            {
              id: "capped-vs-timeseries",
              title: "Capped collections vs time-series — when to use each",
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
      description: "Staff-level MongoDB interview questions.",
      topics: [
        {
          id: "performance-indexing-qa",
          title: "Performance & Indexing Q&A",
          description: "Production performance interview questions.",
          subtopics: [
            {
              id: "explain-qa",
              title: "How do you use explain() to diagnose a slow query?",
            },
            {
              id: "collscan-fix-qa",
              title: "You see a COLLSCAN in explain output. What do you do?",
            },
            {
              id: "index-stats-qa",
              title: "How do you find unused indexes in MongoDB?",
            },
            {
              id: "hide-index-qa",
              title: "What does hideIndex() do and why is it useful?",
            },
            {
              id: "too-many-indexes-qa",
              title: "What are the downsides of having too many indexes?",
            },
            {
              id: "connection-pool-qa",
              title: "How do you configure connection pool size in MongoDB?",
            },
            {
              id: "mongoclient-singleton-qa",
              title: "Why should you use a singleton MongoClient?",
            },
            {
              id: "bulkwrite-qa",
              title:
                "When would you use bulkWrite() instead of individual operations?",
            },
          ],
        },
        {
          id: "mongoose-driver-qa",
          title: "Mongoose & Driver Q&A",
          description: "Node.js driver and Mongoose interview questions.",
          subtopics: [
            {
              id: "mongoose-lean-qa",
              title:
                "What does .lean() do in Mongoose and when would you use it?",
            },
            {
              id: "populate-vs-lookup-qa",
              title: "Mongoose populate vs $lookup — what are the trade-offs?",
            },
            {
              id: "mongoose-hooks-qa",
              title: "How does Mongoose middleware (pre/post hooks) work?",
            },
            {
              id: "virtual-qa",
              title: "What are Mongoose virtuals? Give an example.",
            },
            {
              id: "discriminator-qa",
              title:
                "What is a Mongoose discriminator and when would you use it?",
            },
            {
              id: "mongoose-validators-qa",
              title: "How do you add custom validation to a Mongoose schema?",
            },
            {
              id: "mongoose-vs-driver-qa",
              title:
                "When would you use the native driver instead of Mongoose?",
            },
            {
              id: "typed-collection-qa",
              title:
                "How do you get TypeScript typing with the MongoDB Node.js driver?",
            },
          ],
        },
        {
          id: "security-backup-qa",
          title: "Security & Backup Q&A",
          description: "Security and backup interview questions.",
          subtopics: [
            {
              id: "create-user-roles-qa",
              title:
                "How do you create a MongoDB user with limited permissions?",
            },
            {
              id: "nosql-injection-qa",
              title: "What is NoSQL injection and how do you prevent it?",
            },
            {
              id: "tls-mongodb-qa",
              title: "How do you enable TLS in MongoDB?",
            },
            {
              id: "csfle-prod-qa",
              title: "What is CSFLE and when would you use it?",
            },
            {
              id: "mongodump-qa",
              title: "How does mongodump differ from Atlas backup?",
            },
            {
              id: "pitr-qa",
              title: "How does point-in-time recovery work in Atlas?",
            },
            {
              id: "profiler-qa",
              title:
                "How do you use the MongoDB profiler to find slow queries?",
            },
            {
              id: "currentop-qa",
              title: "How do you kill a runaway operation in MongoDB?",
            },
          ],
        },
      ],
    },
  ],
};
