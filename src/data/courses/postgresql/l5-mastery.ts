import { Level } from "@/types";

export const l5Level: Level = {
  id: "mastery",
  title: "PostgreSQL Mastery",
  description: "Principal / Lead",
  color: "#34d399",
  modules: [
    // ── PostgreSQL ───────────────────────────────────────
    {
      id: "postgresql",
      title: "PostgreSQL",
      icon: "bookOpen",
      color: "#336791",
      description:
        "Storage internals, MVCC, query planner, parallel query, system design, and PG roadmap.",
      topics: [
        {
          id: "storage-internals",
          title: "Storage Internals",
          description: "How PostgreSQL stores data on disk.",
          subtopics: [
            {
              id: "heap-file-structure",
              title:
                "Heap file — relation stored as 8KB pages in $PGDATA/base/{oid}",
            },
            {
              id: "page-layout",
              title:
                "Page layout — header, item pointer array, free space, items (tuples)",
            },
            {
              id: "tuple-header",
              title:
                "Tuple header — xmin, xmax, cid, infomask, natts, data offset",
            },
            {
              id: "toast",
              title:
                "TOAST — The Oversized-Attribute Storage Technique for large values (> ~2KB)",
            },
            {
              id: "toast-strategies",
              title: "TOAST strategies — PLAIN, EXTENDED, EXTERNAL, MAIN",
            },
            {
              id: "tablespaces",
              title:
                "Tablespaces — CREATE TABLESPACE; store relations on different disk paths",
            },
            {
              id: "fork-types",
              title:
                "Relation forks — main (0), fsm (free space map), vm (visibility map), init",
            },
            {
              id: "visibility-map",
              title:
                "Visibility map — 2 bits per page; all-visible / all-frozen for vacuum & indexscan",
            },
            {
              id: "free-space-map",
              title:
                "Free space map — FSM tracks available space per page for INSERT",
            },
            {
              id: "fillfactor",
              title:
                "fillfactor storage parameter — leave space for HOT updates on same page",
            },
          ],
        },
        {
          id: "mvcc-internals",
          title: "MVCC Internals",
          description: "Under the hood of PostgreSQL's concurrency model.",
          subtopics: [
            {
              id: "xid-overview",
              title:
                "Transaction IDs (XIDs) — 32-bit counters; monotonically increasing",
            },
            {
              id: "xmin-xmax",
              title:
                "xmin / xmax — tuple visible if xmin committed and xmax null-or-aborted",
            },
            {
              id: "combo-cid",
              title:
                "combo CID — command ID to distinguish inserts within same transaction",
            },
            {
              id: "tuple-visibility",
              title:
                "Tuple visibility algorithm — check transaction status via pg_clog / pg_xact",
            },
            {
              id: "snapshot",
              title:
                "Transaction snapshot — xmin, xmax, xip[] capture active transactions at snapshot time",
            },
            {
              id: "xid-wraparound-internals",
              title:
                "XID wraparound danger — 2^31 transactions then oldest XID wraps to future",
            },
            {
              id: "vacuum-freeze",
              title:
                "VACUUM FREEZE — replace old xmin with FrozenTransactionId to skip visibility checks",
            },
            {
              id: "pg-infomask-flags",
              title:
                "Infomask flags — HEAP_XMIN_COMMITTED, HEAP_XMAX_INVALID hint bits",
            },
            {
              id: "hot-chain",
              title:
                "HOT (Heap Only Tuple) — in-page update chain avoids index update overhead",
            },
          ],
        },
        {
          id: "query-planner-internals",
          title: "Query Planner Internals",
          description: "How PostgreSQL chooses query execution plans.",
          subtopics: [
            {
              id: "statistics-catalog",
              title:
                "pg_statistic / pg_stats — ndistinct, correlation, MCV, histogram_bounds",
            },
            {
              id: "analyze-deep",
              title:
                "ANALYZE — samples rows (default_statistics_target rows) to update statistics",
            },
            {
              id: "cost-model-deep",
              title:
                "Cost model — startup_cost + run_cost; seq_page_cost, cpu_tuple_cost per row",
            },
            {
              id: "selectivity-estimation",
              title:
                "Selectivity estimation — fraction of rows meeting a condition; from MCV/histogram",
            },
            {
              id: "join-strategies-planner",
              title:
                "Join strategies — nested loop, hash join, merge join; planner chooses based on cost",
            },
            {
              id: "planner-settings",
              title:
                "enable_* settings — enable_seqscan, enable_nestloop, enable_hashjoin toggles",
            },
            {
              id: "genetic-query-optimizer",
              title:
                "GEQO — genetic algorithm for >threshold table joins (default geqo_threshold=12)",
            },
            {
              id: "extended-statistics",
              title:
                "CREATE STATISTICS — multi-column statistics for correlated columns",
            },
            {
              id: "plan-stability",
              title:
                "Plan stability — pg_hint_plan extension for manual join/scan hints",
            },
          ],
        },
        {
          id: "parallel-query",
          title: "Parallel Query",
          description: "PostgreSQL multi-core query execution.",
          subtopics: [
            {
              id: "parallel-workers-overview",
              title:
                "Parallel workers — leader + N workers using shared memory ring buffers",
            },
            {
              id: "max-parallel-workers",
              title:
                "max_parallel_workers_per_gather — per Gather/GatherMerge node limit",
            },
            {
              id: "parallel-seq-scan",
              title:
                "Parallel sequential scan — table split into chunks across workers",
            },
            {
              id: "parallel-index-scan",
              title: "Parallel index scan — since PG 10 for some index types",
            },
            {
              id: "parallel-hash-join",
              title:
                "Parallel hash join — parallel build of hash table across workers",
            },
            {
              id: "parallel-aggregation",
              title:
                "Parallel aggregation — partial aggregates merged by leader",
            },
            {
              id: "parallel-cost-calc",
              title:
                "parallel_tuple_cost, parallel_setup_cost — tune when parallel pays off",
            },
            {
              id: "parallel-safety",
              title:
                "Function parallel safety — PARALLEL SAFE / UNSAFE / RESTRICTED annotation",
            },
          ],
        },
        {
          id: "advanced-indexing-mastery",
          title: "Advanced Indexing Strategies",
          description: "Pushing indexes to their limits.",
          subtopics: [
            {
              id: "index-only-scan-deep",
              title:
                "Index-only scan — vm bit must indicate page is all-visible; visibility map role",
            },
            {
              id: "brin-deep",
              title:
                "BRIN for time-ordered data — pages_per_range, summary (min/max per block range)",
            },
            {
              id: "bloom-filter-index",
              title:
                "Bloom filter index — probabilistic; multi-column equality at low storage cost",
            },
            {
              id: "trgm-gin-fuzzy",
              title:
                "pg_trgm GIN — accelerate LIKE '%middle%', ILIKE, similarity()",
            },
            {
              id: "index-skip-scan",
              title:
                "Index skip scan — PostgreSQL 17+ loose index scan for DISTINCT-like queries",
            },
            {
              id: "index-maintenance",
              title:
                "Index maintenance — REINDEX, REINDEX CONCURRENTLY, bloat avoidance",
            },
            {
              id: "partial-index-patterns",
              title:
                "Partial index patterns — active records only, non-null columns, soft deletes",
            },
            {
              id: "hypopg",
              title:
                "HypoPG extension — create hypothetical indexes to test without building them",
            },
          ],
        },
        {
          id: "logical-decoding-deep",
          title: "Logical Decoding & CDC",
          description: "Streaming changes from PostgreSQL WAL.",
          subtopics: [
            {
              id: "logical-decoding-overview",
              title:
                "Logical decoding — translate WAL binary into logical change stream",
            },
            {
              id: "output-plugins",
              title:
                "Output plugins — pgoutput (built-in), wal2json, decoderbufs for Debezium",
            },
            {
              id: "replication-slot-create",
              title:
                "pg_create_logical_replication_slot — create a named logical slot",
            },
            {
              id: "pg-logical-slot-get",
              title:
                "pg_logical_slot_get_changes — pull change records from slot",
            },
            {
              id: "pg-logical-emit",
              title:
                "pg_logical_emit_message — emit custom messages into WAL for consumers",
            },
            {
              id: "debezium-deep",
              title:
                "Debezium PostgreSQL connector — pgoutput plugin, snapshot mode, event envelope",
            },
            {
              id: "outbox-pattern",
              title:
                "Transactional outbox pattern — write event and outbox row in same transaction",
            },
            {
              id: "slot-lag-risk",
              title:
                "Replication slot lag risk — WAL accumulates if consumer is slow or stopped",
            },
          ],
        },
        {
          id: "system-design-postgresql",
          title: "System Design with PostgreSQL",
          description:
            "Architecture patterns for large-scale PostgreSQL systems.",
          subtopics: [
            {
              id: "multi-tenancy-row-level",
              title:
                "Row-level multi-tenancy — tenant_id column + RLS; simple but shared schema",
            },
            {
              id: "multi-tenancy-schema",
              title:
                "Schema-per-tenant — CREATE SCHEMA tenant_123; isolation vs overhead trade-off",
            },
            {
              id: "event-sourcing-pg",
              title:
                "Event sourcing with PostgreSQL — append-only events table, projections",
            },
            {
              id: "cqrs-pg",
              title:
                "CQRS with PostgreSQL — separate write and read models; materialized views for reads",
            },
            {
              id: "outbox-implementation",
              title:
                "Outbox pattern implementation — transactional events table + Debezium/polling",
            },
            {
              id: "time-series-pg",
              title:
                "Time-series with PostgreSQL — range partitioning + BRIN index + TimescaleDB",
            },
            {
              id: "read-replicas-routing",
              title:
                "Read replica routing — direct writes to primary, reads to replicas",
            },
            {
              id: "sharding-strategies",
              title:
                "Sharding strategies — application-level sharding, Citus extension, foreign tables",
            },
            {
              id: "citus-extension",
              title:
                "Citus — horizontal scaling; distributed tables, reference tables, coordinator node",
            },
          ],
        },
        {
          id: "postgresql-version-features",
          title: "PostgreSQL Version Roadmap",
          description: "Key features added in PostgreSQL 14–18.",
          subtopics: [
            {
              id: "pg14-features",
              title:
                "PG 14 — multirange types, JSON subscripting, Btree deduplication improvements",
            },
            {
              id: "pg15-features",
              title:
                "PG 15 — MERGE statement, row filtering in publications, UNIQUE NULLS NOT DISTINCT",
            },
            {
              id: "pg16-features",
              title:
                "PG 16 — logical replication from standby, COPY FROM WHERE, pg_stat_io view",
            },
            {
              id: "pg17-features",
              title:
                "PG 17 — COPY ON_ERROR IGNORE, vacuum improvements, incremental sort enhancements, JSON_TABLE",
            },
            {
              id: "pg18-preview",
              title:
                "PG 18 (preview) — OAuth authentication, async I/O for seq scan, faster copy",
            },
            {
              id: "release-cycle",
              title:
                "PostgreSQL release cycle — one major version per year (November), 5 years support",
            },
          ],
        },
        {
          id: "custom-functions-operators",
          title: "Custom Functions, Aggregates & Operators",
          description: "Extending PostgreSQL with custom behaviour.",
          subtopics: [
            {
              id: "create-aggregate",
              title:
                "CREATE AGGREGATE — state function, final function, initial state",
            },
            {
              id: "create-operator",
              title: "CREATE OPERATOR — define +, -, ~ etc. for custom types",
            },
            {
              id: "custom-types-c",
              title:
                "Custom types in C — input/output functions, type OID, C functions",
            },
            {
              id: "operator-class",
              title:
                "CREATE OPERATOR CLASS — define ordering for custom type indexing",
            },
            {
              id: "event-triggers",
              title:
                "Event triggers — fire on DDL events: ddl_command_start, ddl_command_end, sql_drop",
            },
            {
              id: "background-workers",
              title:
                "Background workers — pg_bgworker_register for long-running background processes",
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
      description: "Principal/Lead PostgreSQL engineer interview questions.",
      topics: [
        {
          id: "internals-mvcc-qa",
          title: "Storage & MVCC Internals Q&A",
          description: "Deep internals and MVCC interview questions.",
          subtopics: [
            {
              id: "page-layout-qa",
              title: "Explain the layout of a PostgreSQL heap page.",
            },
            {
              id: "toast-qa",
              title: "What is TOAST and when does PostgreSQL use it?",
            },
            {
              id: "xmin-xmax-qa",
              title:
                "What are xmin and xmax in a PostgreSQL tuple and how are they used?",
            },
            {
              id: "mvcc-isolation-qa",
              title:
                "How does MVCC allow readers and writers to not block each other?",
            },
            {
              id: "hot-update-qa",
              title:
                "What is a HOT update and why does it matter for performance?",
            },
            {
              id: "visibility-map-qa",
              title:
                "What is the visibility map and how does it relate to index-only scans?",
            },
            {
              id: "xid-wraparound-mastery-qa",
              title:
                "Explain transaction ID wraparound. How do you prevent it?",
            },
            {
              id: "freeze-qa",
              title: "What does VACUUM FREEZE do and why is it necessary?",
            },
          ],
        },
        {
          id: "planner-parallel-qa",
          title: "Planner, Parallel & Indexing Q&A",
          description:
            "Query planner and advanced indexing interview questions.",
          subtopics: [
            {
              id: "planner-statistics-qa",
              title:
                "What statistics does PostgreSQL collect and how does it affect plans?",
            },
            {
              id: "extended-statistics-qa",
              title:
                "What are extended statistics and when would you create them?",
            },
            {
              id: "enable-seqscan-qa",
              title:
                "What does SET enable_seqscan = off do? When would you use it?",
            },
            {
              id: "parallel-workers-qa",
              title:
                "How does PostgreSQL parallel query work? What controls the worker count?",
            },
            {
              id: "brin-use-case-qa",
              title: "What is a BRIN index best suited for?",
            },
            {
              id: "bloom-qa",
              title: "What is a Bloom filter index? When would you choose it?",
            },
            {
              id: "hypopg-qa",
              title: "What is HypoPG and how does it help with index design?",
            },
            {
              id: "plan-stability-qa",
              title:
                "How do you force PostgreSQL to use a specific plan without modifying the query?",
            },
          ],
        },
        {
          id: "system-design-pg-qa",
          title: "System Design & Architecture Q&A",
          description: "Large-scale system design with PostgreSQL.",
          subtopics: [
            {
              id: "multi-tenancy-compare-qa",
              title:
                "Compare row-level vs schema-per-tenant multi-tenancy in PostgreSQL.",
            },
            {
              id: "event-sourcing-pg-qa",
              title: "How would you implement event sourcing with PostgreSQL?",
            },
            {
              id: "outbox-pattern-qa",
              title:
                "What is the transactional outbox pattern and why is it needed?",
            },
            {
              id: "cdc-pg-qa",
              title:
                "How would you stream database changes to Kafka from PostgreSQL?",
            },
            {
              id: "time-series-pg-qa",
              title:
                "How would you store and query billion-row time-series data in PostgreSQL?",
            },
            {
              id: "citus-qa",
              title:
                "What is Citus and how does it extend PostgreSQL for horizontal scaling?",
            },
            {
              id: "pg15-merge-qa",
              title:
                "What does the MERGE statement in PostgreSQL 15 do differently from INSERT ON CONFLICT?",
            },
            {
              id: "pg-version-qa",
              title:
                "What are the most impactful features added to PostgreSQL in recent major versions?",
            },
          ],
        },
      ],
    },
  ],
};
