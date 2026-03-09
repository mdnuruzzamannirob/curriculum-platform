import { Level } from "@/types";

export const l2Level: Level = {
  id: "mid",
  title: "Advanced SQL & Indexing",
  description: "Mid-level Dev",
  color: "#fb923c",
  modules: [
    // ── PostgreSQL ───────────────────────────────────────
    {
      id: "postgresql",
      title: "PostgreSQL",
      icon: "bookOpen",
      color: "#336791",
      description:
        "Window functions, CTEs, indexing deep-dive, transactions, PL/pgSQL, JSONB, and EXPLAIN.",
      topics: [
        {
          id: "window-functions",
          title: "Window Functions",
          description:
            "Analytics over a window of rows without collapsing the result set.",
          subtopics: [
            {
              id: "over-clause",
              title:
                "OVER () clause — defines the window; empty means whole result set",
            },
            {
              id: "partition-by",
              title: "PARTITION BY col — splits window into separate groups",
            },
            {
              id: "order-by-window",
              title:
                "ORDER BY inside OVER — determines row ordering within partition",
            },
            {
              id: "row-number",
              title: "ROW_NUMBER() — sequential integer per row in partition",
            },
            {
              id: "rank-dense-rank",
              title: "RANK() vs DENSE_RANK() — gaps on tie vs no gaps",
            },
            {
              id: "ntile",
              title: "NTILE(n) — divides rows into n equal buckets",
            },
            {
              id: "lag-lead",
              title:
                "LAG(col, offset) / LEAD(col, offset) — access previous/next row value",
            },
            {
              id: "first-last-value",
              title:
                "FIRST_VALUE(col) / LAST_VALUE(col) — first/last in window",
            },
            {
              id: "nth-value",
              title: "NTH_VALUE(col, n) — nth value in the window frame",
            },
            {
              id: "frame-specification",
              title: "ROWS/RANGE BETWEEN ... — window frame boundaries",
            },
            {
              id: "cumulative-sum",
              title: "Running total — SUM(col) OVER (ORDER BY date)",
            },
            {
              id: "percent-rank",
              title: "PERCENT_RANK() / CUME_DIST() — relative rank as fraction",
            },
          ],
        },
        {
          id: "ctes",
          title: "Common Table Expressions (CTEs)",
          description: "Named temporary result sets using WITH.",
          subtopics: [
            {
              id: "basic-cte",
              title: "WITH name AS (SELECT ...) SELECT ... — basic CTE",
            },
            {
              id: "multiple-ctes",
              title: "Multiple CTEs — WITH a AS (...), b AS (...) SELECT ...",
            },
            {
              id: "cte-for-readability",
              title:
                "CTE for readability — breaking complex queries into named steps",
            },
            {
              id: "recursive-cte",
              title:
                "Recursive CTE — WITH RECURSIVE for hierarchies and graphs",
            },
            {
              id: "recursive-anchor-member",
              title:
                "Anchor member + recursive member — base case and iteration",
            },
            {
              id: "cycle-detection",
              title:
                "Cycle detection in recursive CTEs — CYCLE clause (PG 14+)",
            },
            {
              id: "cte-materialized",
              title:
                "MATERIALIZED / NOT MATERIALIZED — force or prevent CTE inlining",
            },
            {
              id: "writable-cte",
              title:
                "Writable CTE — WITH ... INSERT/UPDATE/DELETE RETURNING ...",
            },
          ],
        },
        {
          id: "indexing-deep-dive",
          title: "Indexing Deep-Dive",
          description: "Index types, strategies and usage.",
          subtopics: [
            {
              id: "btree-index-deep",
              title:
                "B-tree index — ordered structure, supports =, <, >, BETWEEN, LIKE 'abc%'",
            },
            {
              id: "hash-index",
              title: "Hash index — equality-only (=), smaller than B-tree",
            },
            {
              id: "gin-index",
              title:
                "GIN index — for arrays, JSONB, full-text search (tsvector)",
            },
            {
              id: "gist-index",
              title:
                "GiST index — geometric types, ranges, text search, EXCLUDE constraints",
            },
            {
              id: "brin-index",
              title:
                "BRIN index — Block Range INdex, tiny; great for append-only time-series",
            },
            {
              id: "sp-gist-index",
              title:
                "SP-GiST — space-partitioned GiST for non-balanced structures",
            },
            {
              id: "partial-index",
              title:
                "Partial index — CREATE INDEX ... WHERE condition (smaller, faster)",
            },
            {
              id: "expression-index-deep",
              title:
                "Expression/functional index — CREATE INDEX ON t (LOWER(email))",
            },
            {
              id: "covering-index",
              title:
                "Covering index (INCLUDE) — store extra columns to enable index-only scan",
            },
            {
              id: "composite-index-order",
              title:
                "Composite index column order — leading column rule, equality first",
            },
            {
              id: "unique-index",
              title:
                "Unique index — CREATE UNIQUE INDEX; backing for UNIQUE constraint",
            },
            {
              id: "concurrent-index",
              title:
                "CREATE INDEX CONCURRENTLY — build index without locking writes",
            },
          ],
        },
        {
          id: "explain-analyze",
          title: "EXPLAIN & Query Plans",
          description: "Reading and interpreting query execution plans.",
          subtopics: [
            {
              id: "explain-basic",
              title:
                "EXPLAIN SELECT ... — show estimated query plan without running",
            },
            {
              id: "explain-analyze-pg",
              title:
                "EXPLAIN ANALYZE — run query and show actual vs estimated rows/time",
            },
            {
              id: "explain-buffers",
              title:
                "EXPLAIN (ANALYZE, BUFFERS) — show shared/local/temp buffer hits and misses",
            },
            {
              id: "seq-scan",
              title:
                "Seq Scan — reads every page in the table; expected for small tables or high selectivity",
            },
            {
              id: "index-scan",
              title:
                "Index Scan — uses index to find row, then fetches heap page",
            },
            {
              id: "index-only-scan",
              title:
                "Index Only Scan — all needed data in index; avoids heap fetch",
            },
            {
              id: "bitmap-heap-scan",
              title:
                "Bitmap Index Scan → Bitmap Heap Scan — batch fetches via bitmap",
            },
            {
              id: "nested-loop-pg",
              title:
                "Nested Loop — outer row * inner index scan; good for small row counts",
            },
            {
              id: "hash-join-pg",
              title:
                "Hash Join — hash smaller table, probe with larger; good for large equijoins",
            },
            {
              id: "merge-join-pg",
              title:
                "Merge Join — requires sorted inputs; good when both sides are sorted",
            },
            {
              id: "cost-model",
              title:
                "Cost model — seq_page_cost, random_page_cost, cpu_tuple_cost",
            },
            {
              id: "actual-rows-vs-estimate",
              title:
                "Actual rows vs estimated rows — large discrepancy → stale statistics",
            },
            {
              id: "analyze-statistics",
              title: "ANALYZE table — update table statistics for the planner",
            },
          ],
        },
        {
          id: "transactions-isolation",
          title: "Transactions & Isolation Levels",
          description: "Understanding MVCC and concurrency control.",
          subtopics: [
            {
              id: "acid-pg",
              title:
                "ACID review — Atomicity, Consistency, Isolation, Durability in PostgreSQL",
            },
            {
              id: "read-committed",
              title:
                "READ COMMITTED — default; each statement sees latest committed data",
            },
            {
              id: "repeatable-read-pg",
              title:
                "REPEATABLE READ — snapshot at transaction start; prevents non-repeatable reads",
            },
            {
              id: "serializable-pg",
              title:
                "SERIALIZABLE — SSI; prevents all anomalies (phantom reads, write skew)",
            },
            {
              id: "read-uncommitted-pg",
              title:
                "READ UNCOMMITTED — treated as READ COMMITTED in PostgreSQL",
            },
            {
              id: "setting-isolation",
              title:
                "SET TRANSACTION ISOLATION LEVEL ... — set for current transaction",
            },
            {
              id: "mvcc-overview",
              title:
                "MVCC overview — multiple row versions; readers don't block writers",
            },
            {
              id: "deadlock-pg",
              title:
                "Deadlocks — PostgreSQL detects automatically and kills one transaction",
            },
            {
              id: "advisory-locks",
              title:
                "Advisory locks — pg_try_advisory_lock(key) / pg_advisory_unlock(key)",
            },
          ],
        },
        {
          id: "plpgsql-basics",
          title: "PL/pgSQL — Functions & Procedures",
          description: "Server-side programming with PL/pgSQL.",
          subtopics: [
            {
              id: "create-function-pg",
              title:
                "CREATE FUNCTION name(args) RETURNS type AS $$ ... $$ LANGUAGE plpgsql",
            },
            {
              id: "dollar-quoting",
              title:
                "Dollar quoting — $$ ... $$ and $body$ ... $body$ to avoid escaping",
            },
            {
              id: "declare-begin-end",
              title: "DECLARE ... BEGIN ... END; block structure",
            },
            {
              id: "variables-assignment",
              title: "Variables — DECLARE v INTEGER := 0; and assignment :=",
            },
            {
              id: "if-then-elsif-else",
              title: "IF / ELSIF / ELSE / END IF — conditional control flow",
            },
            {
              id: "loop-for-while",
              title: "LOOP, FOR i IN 1..10 LOOP, WHILE condition LOOP",
            },
            {
              id: "return-next",
              title:
                "RETURN NEXT — accumulate rows for set-returning functions",
            },
            {
              id: "create-procedure-pg",
              title: "CREATE PROCEDURE — no return value; called with CALL",
            },
            {
              id: "sql-functions",
              title:
                "LANGUAGE SQL functions — simple functions without PL/pgSQL overhead",
            },
            {
              id: "function-volatility",
              title:
                "VOLATILE / STABLE / IMMUTABLE — optimization hints for functions",
            },
          ],
        },
        {
          id: "json-jsonb",
          title: "JSON & JSONB",
          description: "Storing and querying semi-structured data.",
          subtopics: [
            {
              id: "json-vs-jsonb",
              title:
                "JSON vs JSONB — JSONB is binary, parsed, supports indexes; JSON is text",
            },
            {
              id: "jsonb-create-column",
              title: "Creating JSONB column — col JSONB in CREATE TABLE",
            },
            {
              id: "arrow-operator",
              title: "-> operator — access JSON key/index, returns JSON",
            },
            {
              id: "double-arrow-operator",
              title: "->> operator — access JSON key/index, returns TEXT",
            },
            {
              id: "jsonb-contains",
              title: "@> (contains) operator — does left JSONB contain right?",
            },
            {
              id: "jsonb-exists",
              title:
                "? (key exists) operator — does key exist in top-level JSONB?",
            },
            {
              id: "jsonb-set",
              title:
                "jsonb_set(target, path, value) — update a JSONB value at path",
            },
            {
              id: "jsonb-each",
              title: "jsonb_each(col) — expand JSONB to key-value rows",
            },
            {
              id: "jsonb-to-record",
              title:
                "jsonb_to_record / jsonb_populate_record — JSONB to typed record",
            },
            {
              id: "gin-index-jsonb",
              title:
                "GIN index on JSONB — CREATE INDEX ON tbl USING GIN (data)",
            },
          ],
        },
        {
          id: "triggers",
          title: "Triggers",
          description: "Automatic actions on table events.",
          subtopics: [
            {
              id: "create-trigger",
              title:
                "CREATE TRIGGER — BEFORE/AFTER INSERT/UPDATE/DELETE ON table",
            },
            {
              id: "trigger-function",
              title: "Trigger function — RETURNS TRIGGER, NEW/OLD row access",
            },
            {
              id: "row-vs-statement-trigger",
              title:
                "Row-level vs statement-level triggers — FOR EACH ROW vs FOR EACH STATEMENT",
            },
            {
              id: "new-old-records",
              title:
                "NEW and OLD — access new and old row values inside trigger",
            },
            {
              id: "returning-null-from-trigger",
              title:
                "Returning NULL from BEFORE trigger — cancel the operation",
            },
            {
              id: "instead-of-trigger",
              title:
                "INSTEAD OF trigger — intercept INSERT/UPDATE/DELETE on views",
            },
            {
              id: "drop-trigger",
              title: "DROP TRIGGER name ON table — remove a trigger",
            },
            {
              id: "disable-trigger",
              title:
                "ALTER TABLE DISABLE TRIGGER — temporarily disable trigger",
            },
          ],
        },
        {
          id: "full-text-search",
          title: "Full-Text Search",
          description: "PostgreSQL built-in text search.",
          subtopics: [
            {
              id: "tsvector",
              title:
                "tsvector — to_tsvector('english', text) — parsed lexeme list",
            },
            {
              id: "tsquery",
              title:
                "tsquery — to_tsquery('english', 'word & phrase') — query object",
            },
            {
              id: "ts-match-operator",
              title:
                "@@ operator — tsvector @@ tsquery — returns true if match",
            },
            {
              id: "plainto-tsquery",
              title:
                "plainto_tsquery — treats input as natural language (no operators)",
            },
            {
              id: "websearch-tsquery",
              title: "websearch_to_tsquery — Google-style search input",
            },
            {
              id: "ts-rank",
              title: "ts_rank(tsvector, tsquery) — float relevance score",
            },
            {
              id: "ts-headline",
              title: "ts_headline — highlight matching words in original text",
            },
            {
              id: "gin-fts-index",
              title:
                "GIN index for FTS — CREATE INDEX ON t USING GIN (to_tsvector('english', body))",
            },
            {
              id: "fts-stored-column",
              title:
                "Stored tsvector column — auto-update with trigger for performance",
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
      description: "Mid-level PostgreSQL developer interview questions.",
      topics: [
        {
          id: "window-cte-qa",
          title: "Window Functions & CTEs Q&A",
          description: "Window function and CTE interview questions.",
          subtopics: [
            {
              id: "row-number-vs-rank-qa",
              title: "What is the difference between ROW_NUMBER and RANK?",
            },
            {
              id: "partition-by-qa",
              title: "What does PARTITION BY do in a window function?",
            },
            {
              id: "lag-lead-qa",
              title:
                "How would you compare a column's value to the previous row?",
            },
            {
              id: "running-total-qa",
              title: "How do you calculate a running total in PostgreSQL?",
            },
            {
              id: "recursive-cte-qa",
              title: "What is a recursive CTE and when would you use it?",
            },
            {
              id: "cte-vs-subquery-qa",
              title: "What is the difference between a CTE and a subquery?",
            },
            {
              id: "materialized-cte-qa",
              title: "What does the MATERIALIZED keyword do for a CTE?",
            },
            {
              id: "writable-cte-qa",
              title: "Can you do DML inside a CTE? Give an example.",
            },
          ],
        },
        {
          id: "indexing-explain-qa",
          title: "Indexing & EXPLAIN Q&A",
          description: "Index and query plan interview questions.",
          subtopics: [
            {
              id: "btree-vs-hash-qa",
              title: "What is the difference between B-tree and Hash indexes?",
            },
            {
              id: "gin-vs-gist-qa",
              title: "When would you use GIN vs GiST index?",
            },
            {
              id: "partial-index-qa",
              title: "What is a partial index? Give an example.",
            },
            {
              id: "covering-index-qa",
              title:
                "What is an INCLUDE index (covering index)? When is it beneficial?",
            },
            {
              id: "explain-analyze-qa",
              title: "How do you interpret EXPLAIN ANALYZE output?",
            },
            {
              id: "index-not-used-qa",
              title:
                "Why might PostgreSQL choose a sequential scan over an index?",
            },
            {
              id: "create-concurrently-qa",
              title: "What does CREATE INDEX CONCURRENTLY do?",
            },
            {
              id: "composite-index-order-qa",
              title: "Does column order matter in a composite index?",
            },
          ],
        },
        {
          id: "mvcc-plpgsql-qa",
          title: "MVCC, PL/pgSQL & JSONB Q&A",
          description: "Concurrency, functions, and JSONB interview questions.",
          subtopics: [
            {
              id: "isolation-levels-qa",
              title:
                "What are the SQL isolation levels? Which does PostgreSQL default to?",
            },
            { id: "mvcc-qa", title: "How does MVCC work in PostgreSQL?" },
            {
              id: "deadlock-qa",
              title: "How does PostgreSQL handle deadlocks?",
            },
            {
              id: "plpgsql-vs-sql-qa",
              title:
                "What is the difference between a PL/pgSQL function and a SQL function?",
            },
            {
              id: "trigger-qa",
              title: "What is a trigger and when would you use one?",
            },
            {
              id: "json-vs-jsonb-qa",
              title:
                "What is the difference between JSON and JSONB in PostgreSQL?",
            },
            {
              id: "jsonb-gin-qa",
              title: "How do you efficiently query inside a JSONB column?",
            },
            {
              id: "full-text-search-qa",
              title:
                "How does PostgreSQL full-text search work? What is tsvector?",
            },
          ],
        },
      ],
    },
  ],
};
