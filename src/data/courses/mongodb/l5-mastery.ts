import { Level } from "@/types";

export const l5Level: Level = {
  id: "mastery",
  title: "MongoDB Mastery",
  description: "Principal / Lead",
  color: "#34d399",
  modules: [
    // ── MongoDB ──────────────────────────────────────────
    {
      id: "mongodb",
      title: "MongoDB",
      icon: "layers",
      color: "#47a248",
      description:
        "MongoDB mastery — internals, CSFLE, vector search, and system design.",
      topics: [
        {
          id: "wiredtiger-storage-engine",
          title: "WiredTiger Storage Engine",
          description: "Deep dive into MongoDB's default storage engine.",
          subtopics: [
            {
              id: "wiredtiger-intro",
              title: "WiredTiger — default storage engine since MongoDB 3.2",
            },
            {
              id: "document-level-concurrency",
              title: "Document-level concurrency — no collection-level locks",
            },
            {
              id: "mvcc",
              title:
                "MVCC — Multi-Version Concurrency Control for snapshot isolation",
            },
            {
              id: "wiredtiger-cache",
              title: "WiredTiger cache — default 50% of RAM - 1 GB",
            },
            {
              id: "journal",
              title: "Journal — write-ahead log for crash recovery",
            },
            {
              id: "checkpoints",
              title:
                "Checkpoints — periodic fsync of dirty pages (default 60s)",
            },
            {
              id: "compression",
              title:
                "Compression — snappy (default), zlib, zstd, none per collection",
            },
            {
              id: "block-manager",
              title: "Block manager — managing .wt files on disk",
            },
            {
              id: "in-memory-engine",
              title:
                "In-memory storage engine — for ephemeral data in replica set",
            },
          ],
        },
        {
          id: "replica-set-internals",
          title: "Replica Set Internals",
          description: "Deep understanding of replication mechanics.",
          subtopics: [
            {
              id: "oplog-structure",
              title: "Oplog structure — ts, t, op, ns, o, o2 fields",
            },
            {
              id: "oplog-size",
              title:
                "Oplog size — default 5% disk, configuring for high-write loads",
            },
            {
              id: "oplog-window",
              title:
                "Oplog window — how long secondaries can lag before full sync needed",
            },
            {
              id: "replication-lag",
              title: "Replication lag — causes, measurement, mitigation",
            },
            {
              id: "initial-sync-detail",
              title: "Initial sync phases — cloning, applying oplogs",
            },
            {
              id: "elections-raft",
              title: "Elections — Raft protocol, term numbers, vote requests",
            },
            {
              id: "rollback",
              title: "Rollback — uncommitted writes rolled back after failover",
            },
            {
              id: "majority-commit-point",
              title: "Majority commit point — highest optime majority confirms",
            },
            {
              id: "causally-consistent-sessions",
              title: "Causally consistent sessions — afterClusterTime",
            },
          ],
        },
        {
          id: "sharding-internals",
          title: "Sharding Internals",
          description: "Advanced sharding mechanics and operations.",
          subtopics: [
            {
              id: "config-server-detail",
              title:
                "Config servers — store cluster metadata, must be replica set",
            },
            {
              id: "mongos-routing",
              title: "mongos routing — targeting shard vs broadcasting",
            },
            {
              id: "chunk-migration-detail",
              title:
                "Chunk migration — moveChunk command, donor/recipient sync",
            },
            {
              id: "balancer-internals",
              title: "Balancer internals — threshold, schedule, activeWindow",
            },
            {
              id: "jumbo-chunk-resolution",
              title:
                "Resolving jumbo chunks — splitChunk, refineCollectionShardKey",
            },
            {
              id: "refine-shard-key",
              title:
                "refineCollectionShardKey — adding suffix fields to shard key",
            },
            {
              id: "resharding",
              title: "reshardCollection — change shard key (MongoDB 5.0+)",
            },
            {
              id: "global-transaction-id",
              title: "GTID / lsid — session-level transaction identifiers",
            },
            {
              id: "zones-detailed",
              title: "Zone sharding in depth — zoneKeyRange, addTagRange",
            },
          ],
        },
        {
          id: "csfle",
          title: "Client-Side Field Level Encryption (CSFLE)",
          description: "Encrypting sensitive fields on the client side.",
          subtopics: [
            {
              id: "csfle-concept",
              title:
                "CSFLE — fields encrypted/decrypted in driver, server sees ciphertext",
            },
            {
              id: "key-management",
              title:
                "Key management — Customer Master Key (CMK), Data Encryption Keys (DEK)",
            },
            {
              id: "kms-providers",
              title: "KMS providers — AWS KMS, Azure Key Vault, GCP KMS, local",
            },
            {
              id: "automatic-encryption",
              title:
                "Automatic CSFLE — encrypted fields schema in MongoClient options",
            },
            {
              id: "manual-encryption",
              title:
                "Manual (Explicit) CSFLE — ClientEncryption.encrypt/decrypt()",
            },
            {
              id: "queryable-encryption",
              title:
                "Queryable Encryption (MongoDB 6.0+) — equality/range queries on encrypted data",
            },
            {
              id: "csfle-schemamap",
              title: "schemaMap — defining which fields are encrypted",
            },
            {
              id: "csfle-algorithm",
              title:
                "Encryption algorithms — AEAD_AES_256_CBC_HMAC_SHA_512 (Deterministic/Random)",
            },
            {
              id: "csfle-mongocryptd",
              title:
                "mongocryptd / shared library — performing automatic encryption",
            },
          ],
        },
        {
          id: "atlas-vector-search",
          title: "Atlas Vector Search",
          description: "AI-powered semantic search with vector embeddings.",
          subtopics: [
            {
              id: "vector-search-concept",
              title:
                "Vector search — Approximate Nearest Neighbor (ANN) search",
            },
            {
              id: "vector-embedding-concept",
              title:
                "Vector embeddings — high-dimensional representations from AI models",
            },
            {
              id: "vector-index-create",
              title:
                "Creating vector search index — type vectorSearch, dimensions, similarity",
            },
            {
              id: "vectorsearch-stage",
              title:
                "$vectorSearch pipeline stage — queryVector, path, numCandidates, limit",
            },
            {
              id: "similarity-metrics",
              title: "Similarity metrics — cosine, euclidean, dotProduct",
            },
            {
              id: "vector-search-filter",
              title:
                "Pre-filter in $vectorSearch — filter field for hybrid search",
            },
            {
              id: "generate-embeddings",
              title:
                "Generating embeddings — OpenAI, Cohere, HuggingFace models",
            },
            {
              id: "rag-mongodb",
              title:
                "RAG (Retrieval-Augmented Generation) with MongoDB + LangChain",
            },
            {
              id: "vector-search-use-cases",
              title:
                "Use cases — semantic search, recommendation, anomaly detection",
            },
          ],
        },
        {
          id: "atlas-services",
          title: "Atlas App Services & Data Platform",
          description: "The full Atlas serverless and data platform.",
          subtopics: [
            {
              id: "atlas-triggers",
              title:
                "Atlas Triggers — database triggers, scheduled triggers, authentication triggers",
            },
            {
              id: "atlas-functions",
              title:
                "Atlas Functions — serverless JS functions with MongoDB context",
            },
            {
              id: "atlas-data-api",
              title:
                "Atlas Data API — HTTPS REST access to MongoDB without driver",
            },
            {
              id: "atlas-graphql",
              title: "Atlas GraphQL API — auto-generated GraphQL from schema",
            },
            {
              id: "atlas-device-sync",
              title:
                "Atlas Device Sync — offline-first mobile sync (Realm SDK)",
            },
            {
              id: "atlas-serverless-instances",
              title:
                "Atlas Serverless instances — pay-per-operation, auto-scale",
            },
            {
              id: "atlas-stream-processing",
              title:
                "Atlas Stream Processing — Apache Flink-based stream analytics",
            },
            {
              id: "atlas-charts",
              title: "Atlas Charts — embedded analytics and dashboards",
            },
            {
              id: "atlas-online-archive",
              title:
                "Atlas Online Archive — auto-tiering cold data to object storage",
            },
          ],
        },
        {
          id: "aggregation-optimization",
          title: "Aggregation Pipeline Optimization",
          description: "Tuning complex aggregation pipelines.",
          subtopics: [
            {
              id: "allow-disk-use",
              title: "allowDiskUse: true — spill to disk for large pipelines",
            },
            {
              id: "explain-aggregation",
              title:
                "aggregate([...], { explain: true }) — pipeline explain plan",
            },
            {
              id: "pipeline-optimizer",
              title: "Pipeline optimizer — stage merging and reordering",
            },
            {
              id: "match-push-down",
              title:
                "$match push-down — optimizer moves $match before $project/$lookup",
            },
            {
              id: "sort-index-pipeline",
              title: "Using index for $sort in pipeline — avoid in-memory SORT",
            },
            {
              id: "lookup-optimization",
              title: "$lookup optimization — index on foreignField is critical",
            },
            {
              id: "avoid-large-documents",
              title: "Avoid $$ROOT in $group — memory pressure",
            },
            {
              id: "pipeline-memory-limit",
              title: "100 MB pipeline stage limit — allowDiskUse when needed",
            },
            {
              id: "atlas-search-in-pipeline",
              title:
                "$search before other stages — Lucene handles filtering efficiently",
            },
          ],
        },
        {
          id: "multi-region-global",
          title: "Multi-Region & Global Clusters",
          description: "Globally distributed MongoDB deployments.",
          subtopics: [
            {
              id: "global-clusters",
              title:
                "Atlas Global Clusters — multi-region replica set + sharding",
            },
            {
              id: "zone-based-sharding-global",
              title: "Zone-based sharding — route writes to nearest region",
            },
            {
              id: "global-writes",
              title:
                "Global Writes — low-latency local writes with global replication",
            },
            {
              id: "read-local-region",
              title:
                "Reading from local region — readPreference nearest + tag sets",
            },
            {
              id: "geo-residency",
              title: "Data residency — keep EU data in EU region (GDPR)",
            },
            {
              id: "replica-set-across-regions",
              title:
                "Replica set member placement — spreading across AZs and regions",
            },
            {
              id: "network-latency-tradeoffs",
              title: "Network latency trade-offs — w:majority across regions",
            },
          ],
        },
        {
          id: "system-design-mongodb",
          title: "System Design with MongoDB",
          description: "Architectural decisions and patterns at scale.",
          subtopics: [
            {
              id: "cap-theorem-mongodb",
              title:
                "CAP theorem and MongoDB — CP system with tunable consistency",
            },
            {
              id: "event-sourcing-mongodb",
              title:
                "Event sourcing with MongoDB — append-only events collection",
            },
            {
              id: "outbox-pattern-mongodb",
              title: "Transactional outbox pattern — atomic event + DB write",
            },
            {
              id: "cqrs-mongodb",
              title: "CQRS with MongoDB — separate read/write models",
            },
            {
              id: "multi-tenancy-mongodb",
              title:
                "Multi-tenancy — database-per-tenant vs collection-per-tenant vs filter",
            },
            {
              id: "data-archival",
              title:
                "Data archival strategy — TTL, Atlas Online Archive, cold storage",
            },
            {
              id: "mongodb-vs-postgres",
              title: "MongoDB vs PostgreSQL — choosing the right tool",
            },
            {
              id: "migration-strategy",
              title:
                "Schema migration strategy — additive changes, dual-write, backfill",
            },
            {
              id: "capacity-planning",
              title: "Capacity planning — working set, RAM sizing, disk IOPS",
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
      description:
        "Principal/Lead MongoDB interview and system design questions.",
      topics: [
        {
          id: "internals-mastery-qa",
          title: "Storage Engine & Internals Q&A",
          description: "WiredTiger and replication internals questions.",
          subtopics: [
            {
              id: "wiredtiger-qa",
              title: "How does WiredTiger achieve document-level concurrency?",
            },
            {
              id: "mvcc-qa",
              title: "What is MVCC and how does MongoDB use it?",
            },
            {
              id: "journal-checkpoint-qa",
              title: "What is the WiredTiger journal and when is it synced?",
            },
            {
              id: "oplog-structure-qa",
              title: "What does the MongoDB oplog contain?",
            },
            {
              id: "oplog-window-qa",
              title:
                "What happens if a secondary falls too far behind the oplog window?",
            },
            {
              id: "rollback-qa",
              title: "When does MongoDB perform a rollback after failover?",
            },
            {
              id: "replication-lag-qa",
              title: "What causes replication lag and how do you address it?",
            },
            {
              id: "resharding-qa",
              title: "What is reshardCollection and when would you use it?",
            },
          ],
        },
        {
          id: "security-encryption-qa",
          title: "Security & Encryption Q&A",
          description: "CSFLE and security architecture questions.",
          subtopics: [
            {
              id: "csfle-concept-qa",
              title:
                "What is CSFLE and how is it different from encryption at rest?",
            },
            {
              id: "csfle-automatic-manual-qa",
              title:
                "What is the difference between automatic and explicit CSFLE?",
            },
            {
              id: "queryable-encryption-qa",
              title: "What is Queryable Encryption and why is it significant?",
            },
            {
              id: "kms-qa",
              title: "What KMS providers does MongoDB CSFLE support?",
            },
            {
              id: "vector-search-qa",
              title: "How does Atlas Vector Search work at a high level?",
            },
            {
              id: "rag-mongodb-qa",
              title: "How would you build a RAG application with MongoDB?",
            },
            {
              id: "global-cluster-qa",
              title: "How do Atlas Global Clusters handle multi-region writes?",
            },
            {
              id: "data-residency-qa",
              title: "How do you enforce data residency with MongoDB?",
            },
          ],
        },
        {
          id: "architecture-leadership-qa",
          title: "Architecture & Leadership Q&A",
          description: "System design and leadership questions.",
          subtopics: [
            {
              id: "cap-mongodb-qa",
              title: "Where does MongoDB sit in the CAP theorem?",
            },
            {
              id: "outbox-mongodb-qa",
              title:
                "How would you implement the transactional outbox pattern with MongoDB?",
            },
            {
              id: "event-sourcing-mongo-qa",
              title: "How would you implement event sourcing with MongoDB?",
            },
            {
              id: "multi-tenancy-mongo-qa",
              title: "What are the multi-tenancy strategies for MongoDB?",
            },
            {
              id: "capacity-plan-qa",
              title: "How do you size RAM for a MongoDB deployment?",
            },
            {
              id: "migration-strategy-qa",
              title: "How do you migrate a MongoDB schema without downtime?",
            },
            {
              id: "mongodb-vs-pg-qa",
              title:
                "When would you choose MongoDB over PostgreSQL for a new project?",
            },
            {
              id: "aggregation-opt-qa",
              title: "A pipeline with $lookup is slow. How do you optimise it?",
            },
          ],
        },
      ],
    },
  ],
};
