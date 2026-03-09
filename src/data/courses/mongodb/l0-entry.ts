import { Level } from "@/types";

export const l0Level: Level = {
  id: "entry",
  title: "MongoDB Foundations",
  description: "Beginner",
  color: "#4ade80",
  modules: [
    // ── MongoDB ──────────────────────────────────────────
    {
      id: "mongodb",
      title: "MongoDB",
      icon: "layers",
      color: "#47a248",
      description: "MongoDB absolute basics — what it is and first steps.",
      topics: [
        {
          id: "what-is-mongodb",
          title: "What is MongoDB?",
          description: "Introduction to MongoDB and the NoSQL world.",
          subtopics: [
            {
              id: "mongodb-definition",
              title: "MongoDB — open-source, document-oriented NoSQL database",
            },
            {
              id: "nosql-vs-sql",
              title: "NoSQL vs SQL — key differences and when to choose each",
            },
            {
              id: "document-model",
              title:
                "Document model — data stored as JSON-like documents (BSON)",
            },
            {
              id: "collections-vs-tables",
              title: "Collections vs tables, documents vs rows",
            },
            {
              id: "schemaless-nature",
              title: "Schema-flexible design — no fixed columns",
            },
            {
              id: "mongodb-use-cases",
              title:
                "Use cases — content management, catalogs, real-time analytics, IoT",
            },
            {
              id: "mongodb-vs-alternatives",
              title: "MongoDB vs PostgreSQL, MySQL, Redis — positioning",
            },
            {
              id: "mongodb-history",
              title: "MongoDB Inc. history — 10gen, open-source, Atlas cloud",
            },
          ],
        },
        {
          id: "installation-setup",
          title: "Installation & Setup",
          description: "Getting MongoDB running locally and in the cloud.",
          subtopics: [
            {
              id: "install-community",
              title:
                "Installing MongoDB Community Edition — Windows / macOS / Linux",
            },
            {
              id: "mongod-service",
              title: "mongod — the database server daemon, starting/stopping",
            },
            {
              id: "mongosh-install",
              title: "mongosh — MongoDB Shell (modern replacement for mongo)",
            },
            {
              id: "mongodb-atlas-signup",
              title: "MongoDB Atlas — free tier cluster creation",
            },
            {
              id: "atlas-network-access",
              title: "Atlas network access — IP allowlist, 0.0.0.0/0 for dev",
            },
            {
              id: "atlas-database-user",
              title: "Atlas database users — username/password auth",
            },
            {
              id: "compass-install",
              title: "MongoDB Compass — GUI for browsing and querying",
            },
            {
              id: "connect-string",
              title:
                "Connection string format — mongodb://user:pass@host:port/db",
            },
          ],
        },
        {
          id: "bson-data-types",
          title: "BSON & Data Types",
          description: "Understanding BSON and MongoDB's supported types.",
          subtopics: [
            {
              id: "bson-definition",
              title: "BSON — Binary JSON, superset of JSON with extra types",
            },
            {
              id: "objectid-type",
              title:
                "ObjectId — 12-byte auto-generated _id (timestamp + random + counter)",
            },
            {
              id: "string-number-bool",
              title: "String, Int32, Int64, Double, Boolean types",
            },
            {
              id: "date-type",
              title: "Date type — stored as UTC milliseconds since epoch",
            },
            {
              id: "array-type",
              title: "Array type — ordered list of values, mixed types allowed",
            },
            {
              id: "embedded-document",
              title: "Embedded document (sub-document) — nested objects",
            },
            {
              id: "null-undefined",
              title: "Null vs missing field — null value vs field absence",
            },
            {
              id: "binary-decimal128",
              title: "Binary, Decimal128 (high-precision numbers), Timestamp",
            },
          ],
        },
        {
          id: "mongosh-basics",
          title: "MongoDB Shell (mongosh)",
          description: "Navigating databases with mongosh.",
          subtopics: [
            {
              id: "connect-mongosh",
              title: "mongosh 'connection-string' — connecting to server",
            },
            { id: "show-dbs", title: "show dbs — list all databases" },
            {
              id: "use-db",
              title: "use mydb — switch to or create a database",
            },
            {
              id: "show-collections",
              title: "show collections — list collections in current db",
            },
            {
              id: "db-object",
              title: "db object — reference to current database",
            },
            {
              id: "mongosh-helpers",
              title: "mongosh helpers — it (iterate cursor), cls, exit",
            },
            {
              id: "mongosh-scripts",
              title: "Running .js scripts with mongosh — mongosh script.js",
            },
            {
              id: "mongosh-editor",
              title: "edit command — open expression in external editor",
            },
          ],
        },
        {
          id: "crud-basics",
          title: "CRUD — Insert, Find, Update, Delete",
          description: "Core create/read/update/delete operations.",
          subtopics: [
            {
              id: "insertone",
              title: "insertOne(doc) — insert a single document",
            },
            {
              id: "insertmany",
              title: "insertMany([doc1, doc2]) — insert multiple documents",
            },
            {
              id: "findone",
              title: "findOne(filter) — return first matching document",
            },
            {
              id: "find-cursor",
              title: "find(filter) — return a cursor over matching documents",
            },
            {
              id: "updateone",
              title:
                "updateOne(filter, update) — modify first matching document",
            },
            {
              id: "updatemany",
              title:
                "updateMany(filter, update) — modify all matching documents",
            },
            {
              id: "deleteone",
              title: "deleteOne(filter) — remove first matching document",
            },
            {
              id: "deletemany",
              title: "deleteMany(filter) — remove all matching documents",
            },
            {
              id: "replaceone",
              title:
                "replaceOne(filter, replacement) — full document replacement",
            },
          ],
        },
        {
          id: "query-basics",
          title: "Query Basics",
          description: "Filtering documents with query operators.",
          subtopics: [
            {
              id: "equality-filter",
              title: "Equality filter — { field: value }",
            },
            {
              id: "comparison-ops-basic",
              title: "$eq, $ne — equal / not equal",
            },
            {
              id: "range-ops-basic",
              title: "$gt, $gte, $lt, $lte — greater/less than comparisons",
            },
            {
              id: "in-nin",
              title: "$in, $nin — match / exclude list of values",
            },
            {
              id: "projection-basics",
              title: "Projection — { field: 1 } include, { field: 0 } exclude",
            },
            {
              id: "sort-limit-skip-basics",
              title: "sort(), limit(), skip() — ordering and pagination",
            },
            {
              id: "count-basics",
              title: "countDocuments(filter) — count matching documents",
            },
            {
              id: "nested-field-query",
              title:
                "Dot notation — { 'address.city': 'Dhaka' } nested queries",
            },
          ],
        },
        {
          id: "compass-basics",
          title: "MongoDB Compass",
          description: "Using the Compass GUI to explore data.",
          subtopics: [
            {
              id: "compass-connect",
              title: "Connecting Compass to local or Atlas cluster",
            },
            {
              id: "compass-schema-tab",
              title: "Schema tab — visualizing field types and distributions",
            },
            {
              id: "compass-documents-tab",
              title: "Documents tab — browsing, inserting, editing documents",
            },
            {
              id: "compass-filter-bar",
              title: "Filter bar — writing queries in Compass",
            },
            {
              id: "compass-aggregation-pipeline",
              title: "Aggregation pipeline builder — visual pipeline editor",
            },
            {
              id: "compass-indexes-tab",
              title: "Indexes tab — viewing and creating indexes",
            },
            {
              id: "compass-explain-plan",
              title: "Explain plan tab — query performance visualizer",
            },
          ],
        },
        {
          id: "databases-collections",
          title: "Databases & Collections",
          description: "Organizing data with databases and collections.",
          subtopics: [
            {
              id: "create-database",
              title: "Creating a database — implicit on first insert",
            },
            {
              id: "create-collection-explicit",
              title: "db.createCollection('name', options) — explicit creation",
            },
            {
              id: "drop-collection",
              title: "db.collection.drop() — remove a collection",
            },
            {
              id: "drop-database",
              title: "db.dropDatabase() — remove entire database",
            },
            {
              id: "collection-naming",
              title: "Collection naming rules and conventions",
            },
            {
              id: "capped-collection-intro",
              title: "Capped collections intro — fixed-size circular buffer",
            },
            {
              id: "document-size-limit",
              title: "16 MB document size limit — BSON max size",
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
      description: "Beginner MongoDB interview questions.",
      topics: [
        {
          id: "mongodb-fundamentals-qa",
          title: "MongoDB Fundamentals Q&A",
          description: "Core concepts and document model questions.",
          subtopics: [
            {
              id: "nosql-vs-sql-qa",
              title: "What is the difference between SQL and NoSQL databases?",
            },
            {
              id: "what-is-mongodb-qa",
              title: "What is MongoDB and why would you use it?",
            },
            {
              id: "document-model-qa",
              title:
                "What is a document in MongoDB? How is it different from a SQL row?",
            },
            {
              id: "collection-vs-table-qa",
              title: "What is the difference between a collection and a table?",
            },
            {
              id: "bson-vs-json-qa",
              title: "What is BSON and how does it differ from JSON?",
            },
            {
              id: "objectid-qa",
              title: "What is an ObjectId? What information does it contain?",
            },
            {
              id: "schemaless-qa",
              title: "What does it mean for MongoDB to be schema-flexible?",
            },
            {
              id: "when-mongodb-qa",
              title:
                "When would you choose MongoDB over a relational database?",
            },
          ],
        },
        {
          id: "crud-basics-qa",
          title: "CRUD Q&A",
          description: "Basic CRUD operation questions.",
          subtopics: [
            {
              id: "insertone-many-qa",
              title:
                "What is the difference between insertOne() and insertMany()?",
            },
            {
              id: "find-findone-qa",
              title: "What is the difference between find() and findOne()?",
            },
            {
              id: "updateone-many-qa",
              title: "When would you use updateOne() vs updateMany()?",
            },
            {
              id: "replaceone-vs-update-qa",
              title:
                "What is the difference between replaceOne() and updateOne()?",
            },
            { id: "deleteone-many-qa", title: "What does deleteMany({}) do?" },
            {
              id: "projection-qa",
              title:
                "How do you select only specific fields in a MongoDB query?",
            },
            {
              id: "sort-limit-qa",
              title: "How do you sort and limit MongoDB query results?",
            },
            {
              id: "dot-notation-qa",
              title: "How do you query nested document fields in MongoDB?",
            },
          ],
        },
        {
          id: "setup-tools-qa",
          title: "Setup & Tools Q&A",
          description: "Installation and tooling questions.",
          subtopics: [
            {
              id: "mongod-mongosh-qa",
              title: "What is the difference between mongod and mongosh?",
            },
            {
              id: "atlas-vs-local-qa",
              title:
                "What is MongoDB Atlas and when would you use it over a local install?",
            },
            {
              id: "compass-use-qa",
              title: "What is MongoDB Compass used for?",
            },
            {
              id: "connection-string-qa",
              title: "What does a MongoDB connection string look like?",
            },
            {
              id: "create-db-qa",
              title: "How do you create a database in MongoDB?",
            },
            {
              id: "drop-collection-qa",
              title: "How do you drop a collection? Is it reversible?",
            },
            {
              id: "document-limit-qa",
              title: "What is the maximum size of a MongoDB document?",
            },
            {
              id: "default-id-qa",
              title:
                "What happens if you don't provide an _id when inserting a document?",
            },
          ],
        },
      ],
    },
  ],
};
