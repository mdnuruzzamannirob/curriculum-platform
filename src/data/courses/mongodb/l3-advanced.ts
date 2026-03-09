import { Level } from "@/types";

export const l3Level: Level = {
  id: "senior",
  title: "Advanced MongoDB",
  description: "Senior Dev",
  color: "#f472b6",
  modules: [
    // ── MongoDB ──────────────────────────────────────────
    {
      id: "mongodb",
      title: "MongoDB",
      icon: "layers",
      color: "#47a248",
      description:
        "Advanced MongoDB — replication, sharding, change streams, and Atlas Search.",
      topics: [
        {
          id: "replica-sets",
          title: "Replica Sets",
          description: "High availability with MongoDB replica sets.",
          subtopics: [
            {
              id: "replica-set-definition",
              title: "Replica set — a group of mongod instances with same data",
            },
            {
              id: "primary-secondary-arbiter",
              title: "Primary, secondary, and arbiter roles",
            },
            {
              id: "oplog",
              title:
                "Oplog — operations log used to replicate changes to secondaries",
            },
            {
              id: "automatic-failover",
              title:
                "Automatic failover — election when primary becomes unavailable",
            },
            {
              id: "election-process",
              title: "Election process — Raft-inspired, majority vote",
            },
            {
              id: "read-preference",
              title:
                "Read preference — primary, primaryPreferred, secondary, nearest",
            },
            {
              id: "write-concern-replica",
              title: "Write concern — w: 'majority' for durable writes",
            },
            {
              id: "read-concern",
              title: "Read concern — local, majority, linearizable, snapshot",
            },
            {
              id: "initial-sync",
              title: "Initial sync — how a new secondary copies data",
            },
            {
              id: "replica-set-config",
              title: "rs.initiate(), rs.add(), rs.status(), rs.conf()",
            },
            {
              id: "hidden-delayed-members",
              title:
                "Hidden and delayed members — reporting, backups use cases",
            },
            {
              id: "priority-votes",
              title: "Member priority and votes — influencing elections",
            },
          ],
        },
        {
          id: "sharding",
          title: "Sharding — Horizontal Scaling",
          description: "Distributing data across multiple shards.",
          subtopics: [
            {
              id: "sharding-concept",
              title: "Sharding — horizontal partitioning of data across shards",
            },
            {
              id: "sharded-cluster-components",
              title: "Cluster components — shards, mongos, config servers",
            },
            {
              id: "shard-key",
              title:
                "Shard key — field(s) used to distribute data across shards",
            },
            {
              id: "range-sharding",
              title: "Range-based sharding — sequential range partitioning",
            },
            {
              id: "hash-sharding",
              title:
                "Hash-based sharding — even distribution, no range queries",
            },
            {
              id: "zone-sharding",
              title: "Zone sharding — pinning data ranges to specific shards",
            },
            {
              id: "chunks",
              title: "Chunks — 128 MB data ranges, auto-split and migrate",
            },
            {
              id: "balancer",
              title:
                "Balancer — background process moving chunks for even distribution",
            },
            {
              id: "jumbo-chunks",
              title:
                "Jumbo chunks — chunks too large to split, causes imbalance",
            },
            {
              id: "shard-key-selection",
              title:
                "Shard key selection — cardinality, frequency, monotonic concerns",
            },
            {
              id: "targeted-vs-scatter-gather",
              title: "Targeted queries vs scatter-gather — shard key in query",
            },
            {
              id: "sh-commands",
              title: "sh.enableSharding(), sh.shardCollection(), sh.status()",
            },
          ],
        },
        {
          id: "change-streams",
          title: "Change Streams",
          description: "Real-time data change notifications.",
          subtopics: [
            {
              id: "change-stream-concept",
              title:
                "Change streams — watch() for real-time change notifications",
            },
            {
              id: "watch-collection",
              title: "collection.watch() — watch a collection",
            },
            {
              id: "watch-database",
              title: "db.watch() — watch all collections in a database",
            },
            {
              id: "watch-client",
              title: "client.watch() — watch all databases",
            },
            {
              id: "change-event-types",
              title:
                "Change event types — insert, update, replace, delete, invalidate",
            },
            {
              id: "change-stream-pipeline",
              title: "Change stream pipeline — filter with $match stage",
            },
            {
              id: "resume-token",
              title:
                "Resume token — resumeAfter / startAfter for fault tolerance",
            },
            {
              id: "full-document",
              title:
                "fullDocument: 'updateLookup' — get full post-update document",
            },
            {
              id: "change-stream-use-cases",
              title:
                "Use cases — event-driven triggers, CDC, cache invalidation",
            },
            {
              id: "change-stream-requirements",
              title: "Requirements — replica set or sharded cluster",
            },
          ],
        },
        {
          id: "geospatial-queries",
          title: "Geospatial Queries",
          description: "Location-based queries with 2dsphere indexes.",
          subtopics: [
            {
              id: "geojson-format",
              title:
                "GeoJSON format — Point, LineString, Polygon, MultiPolygon",
            },
            {
              id: "2dsphere-index-create",
              title: "createIndex({ location: '2dsphere' }) — geospatial index",
            },
            {
              id: "near-query",
              title:
                "$near — find documents near a point: { $geometry, $maxDistance }",
            },
            {
              id: "nearsphere",
              title: "$nearSphere — near calculation on sphere surface",
            },
            {
              id: "geowithin",
              title: "$geoWithin — documents within a shape (no distance sort)",
            },
            {
              id: "geointersects",
              title:
                "$geoIntersects — documents whose geometry intersects query geometry",
            },
            {
              id: "center-within",
              title: "$centerSphere, $center — legacy circle queries",
            },
            {
              id: "geowithin-box-polygon",
              title: "$box, $polygon — legacy bounding box queries",
            },
            {
              id: "geospatial-use-cases",
              title: "Use cases — nearby search, geofencing, delivery zones",
            },
          ],
        },
        {
          id: "atlas-search",
          title: "Atlas Search",
          description: "Full-text search powered by Apache Lucene.",
          subtopics: [
            {
              id: "atlas-search-intro",
              title: "Atlas Search — Lucene-based search built into Atlas",
            },
            {
              id: "search-index-create",
              title:
                "Creating a search index — UI / Atlas Admin API / Atlas CLI",
            },
            {
              id: "search-stage",
              title: "$search pipeline stage — main Atlas Search entry point",
            },
            {
              id: "text-operator",
              title: "text operator — { $search: { text: { query, path } } }",
            },
            {
              id: "compound-operator",
              title:
                "compound operator — must, should, mustNot, filter clauses",
            },
            {
              id: "autocomplete-operator",
              title:
                "autocomplete operator — prefix/regex/edgeGram tokenization",
            },
            {
              id: "fuzzy-search",
              title: "Fuzzy search — maxEdits for typo tolerance",
            },
            {
              id: "highlight-option",
              title:
                "highlight option — return matched text with hit highlights",
            },
            {
              id: "facet-atlas-search",
              title: "$searchMeta with facet — count by category using Lucene",
            },
            {
              id: "score-sort",
              title: "Sorting by score — { $meta: 'searchScore' }",
            },
            {
              id: "search-index-definition",
              title:
                "Search index definition — mappings, analyzers, tokenizers",
            },
          ],
        },
        {
          id: "gridfs",
          title: "GridFS — Large File Storage",
          description: "Storing files larger than 16 MB in MongoDB.",
          subtopics: [
            {
              id: "gridfs-concept",
              title: "GridFS — spec for storing files as chunks in MongoDB",
            },
            {
              id: "fs-files-chunks",
              title: "fs.files and fs.chunks collections — metadata and data",
            },
            { id: "gridfs-chunk-size", title: "Default chunk size — 255 KB" },
            {
              id: "mongofiles-tool",
              title: "mongofiles CLI — put, get, list, delete operations",
            },
            {
              id: "gridfs-driver",
              title:
                "GridFSBucket in Node.js driver — openUploadStream, openDownloadStream",
            },
            {
              id: "gridfs-metadata",
              title:
                "File metadata — filename, length, chunkSize, uploadDate, md5",
            },
            {
              id: "gridfs-vs-object-storage",
              title: "GridFS vs S3/object storage — when to use each",
            },
          ],
        },
        {
          id: "time-series-collections",
          title: "Time Series Collections",
          description: "Optimized storage for time-stamped data.",
          subtopics: [
            {
              id: "timeseries-create",
              title:
                "createCollection with timeseries option — timeField, metaField",
            },
            {
              id: "timeseries-granularity",
              title:
                "granularity — seconds, minutes, hours (columnar compression)",
            },
            {
              id: "timeseries-insert",
              title: "Inserting time series data — same insertOne/insertMany",
            },
            {
              id: "timeseries-query",
              title: "Querying time series collections — filter on time ranges",
            },
            {
              id: "timeseries-aggregation",
              title: "Aggregation with time series — $dateTrunc, $dateAdd",
            },
            {
              id: "timeseries-compression",
              title:
                "Columnar compression — efficient storage for repeated measurements",
            },
            {
              id: "timeseries-expiry",
              title: "Automatic expiry — expireAfterSeconds on time series",
            },
            {
              id: "timeseries-use-cases",
              title: "Use cases — IoT sensor data, metrics, financial ticks",
            },
          ],
        },
        {
          id: "schema-validation",
          title: "Schema Validation",
          description: "Enforcing document structure with JSON Schema.",
          subtopics: [
            {
              id: "validator-option",
              title:
                "validator option in createCollection — enforce schema rules",
            },
            {
              id: "jsonschema-validator",
              title: "$jsonSchema validator — bsonType, required, properties",
            },
            {
              id: "validation-level",
              title:
                "validationLevel — strict (all writes) vs moderate (existing docs)",
            },
            {
              id: "validation-action",
              title: "validationAction — error (reject) vs warn (log only)",
            },
            {
              id: "collmod-validator",
              title:
                "collMod command — add/update validator on existing collection",
            },
            {
              id: "bypass-validation",
              title:
                "bypassDocumentValidation — admin override for bulk imports",
            },
            {
              id: "schema-enum-pattern",
              title: "enum in $jsonSchema — restrict field to specific values",
            },
            {
              id: "nested-schema-validation",
              title: "Validating nested documents and arrays in $jsonSchema",
            },
          ],
        },
        {
          id: "window-functions",
          title: "Aggregation Window Functions",
          description: "$setWindowFields for running totals and ranking.",
          subtopics: [
            {
              id: "setwindowfields-stage",
              title:
                "$setWindowFields — window operations over ordered documents",
            },
            {
              id: "partitionby",
              title: "partitionBy — group into separate windows",
            },
            {
              id: "sortby-window",
              title: "sortBy — ordering within each window partition",
            },
            {
              id: "window-rank",
              title: "$rank, $denseRank — ranking within partition",
            },
            {
              id: "window-rownumber",
              title: "$documentNumber — sequential row number",
            },
            {
              id: "window-sum",
              title: "$sum over range/documents window — running total",
            },
            { id: "window-avg", title: "$avg over window — moving average" },
            {
              id: "window-shift",
              title: "$shift — access prior/next document value in window",
            },
            {
              id: "window-bounds",
              title:
                "Window bounds — documents: [-1, 0], range: ['unbounded', 'current']",
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
      description: "Senior MongoDB interview questions.",
      topics: [
        {
          id: "replica-sharding-qa",
          title: "Replication & Sharding Q&A",
          description: "Replication and sharding interview questions.",
          subtopics: [
            {
              id: "replica-set-qa",
              title: "What is a replica set and why do you need it?",
            },
            { id: "oplog-qa", title: "What is the oplog and how is it used?" },
            {
              id: "failover-qa",
              title:
                "How does automatic failover work in a MongoDB replica set?",
            },
            {
              id: "read-preference-qa",
              title:
                "Explain read preference modes and when you'd use secondary reads",
            },
            {
              id: "write-concern-majority-qa",
              title: "Why would you use w: 'majority' write concern?",
            },
            {
              id: "sharding-vs-replication-qa",
              title: "What is the difference between sharding and replication?",
            },
            {
              id: "shard-key-qa",
              title: "How would you choose a shard key? What are the pitfalls?",
            },
            {
              id: "scatter-gather-qa",
              title: "What is a scatter-gather query and why is it bad?",
            },
          ],
        },
        {
          id: "change-streams-geo-qa",
          title: "Change Streams & Geospatial Q&A",
          description: "Change streams and geospatial questions.",
          subtopics: [
            {
              id: "change-stream-qa",
              title:
                "What are MongoDB change streams and what are their use cases?",
            },
            {
              id: "resume-token-qa",
              title: "What is a resume token and how do you use it?",
            },
            {
              id: "full-document-qa",
              title: "What does fullDocument: 'updateLookup' do?",
            },
            {
              id: "change-stream-req-qa",
              title:
                "What infrastructure does MongoDB need for change streams?",
            },
            {
              id: "geojson-qa",
              title: "What is GeoJSON and how does MongoDB use it?",
            },
            {
              id: "near-query-qa",
              title:
                "How do you find documents near a GPS coordinate in MongoDB?",
            },
            {
              id: "geowithin-qa",
              title: "What is the difference between $near and $geoWithin?",
            },
            {
              id: "atlas-search-qa",
              title: "How is Atlas Search different from a MongoDB text index?",
            },
          ],
        },
        {
          id: "advanced-features-qa",
          title: "Advanced Features Q&A",
          description:
            "Time series, validation, and window function questions.",
          subtopics: [
            {
              id: "timeseries-qa",
              title:
                "What are time series collections and when would you use them?",
            },
            {
              id: "gridfs-qa",
              title: "What is GridFS and when would you use it over S3?",
            },
            {
              id: "schema-validation-qa",
              title: "How do you enforce schema validation in MongoDB?",
            },
            {
              id: "validation-level-qa",
              title:
                "What is the difference between strict and moderate validation level?",
            },
            {
              id: "window-functions-qa",
              title: "What are window functions ($setWindowFields) used for?",
            },
            {
              id: "rank-window-qa",
              title:
                "How do you rank documents within a group in an aggregation pipeline?",
            },
            {
              id: "bucket-vs-timeseries-qa",
              title:
                "Bucket pattern vs time-series collections — when to use each?",
            },
            {
              id: "jumbo-chunk-qa",
              title: "What are jumbo chunks and how do you deal with them?",
            },
          ],
        },
      ],
    },
  ],
};
