import { Level } from "@/types";

export const l3Level: Level = {
  id: "senior",
  title: "Advanced PostgreSQL",
  description: "Senior Dev",
  color: "#f472b6",
  modules: [
    // ── PostgreSQL ───────────────────────────────────────
    {
      id: "postgresql",
      title: "PostgreSQL",
      icon: "bookOpen",
      color: "#336791",
      description:
        "Partitioning, RLS, advanced JSONB, materialized views, extensions, and advanced PL/pgSQL.",
      topics: [
        {
          id: "table-partitioning",
          title: "Table Partitioning",
          description: "Splitting large tables into smaller physical pieces.",
          subtopics: [
            {
              id: "why-partition",
              title:
                "Why partition — partition pruning, bulk deletes, parallel query benefits",
            },
            {
              id: "range-partitioning",
              title:
                "Range partitioning — PARTITION BY RANGE(col); e.g. monthly time-series",
            },
            {
              id: "list-partitioning",
              title:
                "List partitioning — PARTITION BY LIST(col); e.g. region, status",
            },
            {
              id: "hash-partitioning",
              title:
                "Hash partitioning — PARTITION BY HASH(col); even distribution",
            },
            {
              id: "creating-child-partitions",
              title: "CREATE TABLE child PARTITION OF parent FOR VALUES ...",
            },
            {
              id: "default-partition",
              title:
                "Default partition — catches rows not matching any other partition",
            },
            {
              id: "partition-pruning",
              title:
                "Partition pruning — planner skips irrelevant partitions at query time",
            },
            {
              id: "attach-detach-partition",
              title:
                "ATTACH / DETACH PARTITION — add/remove partitions from running table",
            },
            {
              id: "partition-wise-join",
              title:
                "Partition-wise join & aggregate — enable_partitionwise_join setting",
            },
            {
              id: "global-indexes",
              title:
                "Global indexes — PostgreSQL uses local per-partition indexes",
            },
            {
              id: "sub-partitioning",
              title:
                "Sub-partitioning — partition a partition (multi-key strategies)",
            },
          ],
        },
        {
          id: "row-level-security",
          title: "Row-Level Security (RLS)",
          description: "Fine-grained access control at the row level.",
          subtopics: [
            {
              id: "enable-rls",
              title:
                "ENABLE ROW LEVEL SECURITY ON table — turn on RLS for table",
            },
            {
              id: "create-policy",
              title: "CREATE POLICY name ON table USING (expression)",
            },
            {
              id: "policy-for-roles",
              title: "TO role_name — scoping policy to specific roles",
            },
            {
              id: "with-check-policy",
              title: "WITH CHECK — restrict which rows can be inserted/updated",
            },
            {
              id: "permissive-restrictive",
              title: "PERMISSIVE vs RESTRICTIVE policies — OR vs AND logic",
            },
            {
              id: "current-user-policy",
              title:
                "current_user / current_setting in policies — dynamic user context",
            },
            {
              id: "bypass-rls",
              title:
                "BYPASSRLS privilege — superusers and table owners bypass by default",
            },
            {
              id: "rls-performance",
              title:
                "RLS performance — policy expressions added to WHERE; index considerations",
            },
          ],
        },
        {
          id: "materialized-views",
          title: "Materialized Views",
          description: "Pre-computed cached query results.",
          subtopics: [
            {
              id: "create-materialized-view",
              title:
                "CREATE MATERIALIZED VIEW name AS SELECT ... — store query result physically",
            },
            {
              id: "refresh-materialized-view",
              title:
                "REFRESH MATERIALIZED VIEW name — repopulate from base tables",
            },
            {
              id: "refresh-concurrently",
              title:
                "REFRESH MATERIALIZED VIEW CONCURRENTLY — allow reads during refresh",
            },
            {
              id: "with-no-data",
              title:
                "WITH NO DATA — create view definition without populating (fill later)",
            },
            {
              id: "indexes-on-mat-view",
              title:
                "Indexes on materialized views — CREATE INDEX on materialized view",
            },
            {
              id: "when-to-use-mat-view",
              title:
                "When to use — expensive aggregations, reporting, infrequently-changing data",
            },
            {
              id: "drop-materialized-view",
              title: "DROP MATERIALIZED VIEW — remove a materialized view",
            },
          ],
        },
        {
          id: "advanced-jsonb",
          title: "Advanced JSONB",
          description: "Complex JSONB querying and modification.",
          subtopics: [
            {
              id: "jsonpath",
              title: "JSONPath — $.store.book[*].author syntax (PG 12+)",
            },
            {
              id: "jsonb-path-query",
              title:
                "jsonb_path_query(data, '$.key') — extract values with JSONPath",
            },
            {
              id: "jsonb-path-query-array",
              title: "jsonb_path_query_array — returns matches as a JSON array",
            },
            {
              id: "jsonb-path-exists",
              title:
                "jsonb_path_exists(data, '$.key ? (@ > 5)') — conditional exists",
            },
            {
              id: "at-question-operator",
              title:
                "@? operator — jsonb @? '$.key' — key/value existence with JSONPath",
            },
            {
              id: "containment-deep",
              title:
                "Containment @> with nested objects — partial match on any depth",
            },
            {
              id: "jsonb-delete-key",
              title: "jsonb col - 'key' — remove a key from JSONB",
            },
            {
              id: "jsonb-concat",
              title: "|| operator — concatenate/merge two JSONB objects",
            },
            {
              id: "jsonb-agg-object-agg",
              title:
                "jsonb_agg / json_object_agg — aggregate rows into JSON array/object",
            },
            {
              id: "jsonb-to-table",
              title:
                "jsonb_to_recordset — expand JSONB array of objects to rows",
            },
          ],
        },
        {
          id: "arrays-pg",
          title: "Arrays",
          description: "PostgreSQL native array type.",
          subtopics: [
            {
              id: "array-column",
              title: "Array column — col INTEGER[], col TEXT[] in CREATE TABLE",
            },
            {
              id: "array-literals",
              title: "Array literal — ARRAY[1,2,3] or '{1,2,3}'",
            },
            {
              id: "array-subscript",
              title: "Array subscript — arr[1] (1-based indexing)",
            },
            {
              id: "array-operators-pg",
              title:
                "Array operators — @> contains, <@ contained by, && overlaps",
            },
            {
              id: "any-all-array",
              title:
                "ANY(array) / ALL(array) — check condition against all elements",
            },
            {
              id: "unnest-function",
              title: "unnest(arr) — expand array to rows",
            },
            {
              id: "array-length-cardinality",
              title: "array_length(arr, 1) / cardinality(arr) — count elements",
            },
            {
              id: "array-append-prepend",
              title: "array_append / array_prepend / array_cat — modify arrays",
            },
            {
              id: "gin-array-index",
              title: "GIN index on array columns — fast @>, &&, ANY queries",
            },
          ],
        },
        {
          id: "advanced-plpgsql",
          title: "Advanced PL/pgSQL",
          description: "Exception handling, cursors, and dynamic SQL.",
          subtopics: [
            {
              id: "exception-handling",
              title:
                "EXCEPTION block — WHEN division_by_zero THEN ... WHEN OTHERS THEN ...",
            },
            {
              id: "sqlerrm-sqlstate",
              title:
                "SQLERRM, SQLSTATE, GET STACKED DIAGNOSTICS for error details",
            },
            {
              id: "cursors",
              title:
                "Cursor DECLARE, OPEN, FETCH, CLOSE — row-by-row processing",
            },
            {
              id: "for-cursor-loop",
              title: "FOR rec IN cursor LOOP — implicit cursor loop",
            },
            {
              id: "dynamic-sql-execute",
              title:
                "EXECUTE query_string USING args — dynamic SQL with parameters",
            },
            {
              id: "dynamic-sql-injection",
              title:
                "quote_ident / quote_literal / format() — safe dynamic SQL construction",
            },
            {
              id: "composite-return-type",
              title:
                "RETURNS TABLE(...) / RETURNS SETOF type — multi-column returns",
            },
            {
              id: "out-inout-params",
              title:
                "OUT and INOUT parameters — return multiple values without RETURNS",
            },
            {
              id: "context-procedures",
              title:
                "Procedures vs functions — CALL vs SELECT, transaction control in procedures",
            },
          ],
        },
        {
          id: "extensions",
          title: "Extensions",
          description: "Extending PostgreSQL with modules.",
          subtopics: [
            {
              id: "create-extension",
              title: "CREATE EXTENSION extname — install extension",
            },
            {
              id: "uuid-ossp",
              title: "uuid-ossp — uuid_generate_v4() for UUID generation",
            },
            {
              id: "pg-trgm",
              title:
                "pg_trgm — trigram similarity, LIKE acceleration on GIN index",
            },
            {
              id: "pg-crypto",
              title:
                "pgcrypto — crypt(), gen_salt(), digest() for server-side crypto",
            },
            {
              id: "btree-gin",
              title: "btree_gin — GIN support for btree-indexed types",
            },
            {
              id: "pg-stat-statements-ext",
              title: "pg_stat_statements — track query execution statistics",
            },
            {
              id: "tablefunc-crosstab",
              title: "tablefunc — crosstab() for pivot tables",
            },
            {
              id: "list-extensions",
              title:
                "\\dx in psql / SELECT * FROM pg_extension — list installed extensions",
            },
          ],
        },
        {
          id: "lateral-joins",
          title: "LATERAL Joins",
          description: "Correlated sub-queries as joined tables.",
          subtopics: [
            {
              id: "lateral-overview",
              title:
                "LATERAL — allows subquery in FROM to reference preceding tables",
            },
            {
              id: "lateral-vs-correlated",
              title:
                "LATERAL vs correlated subquery — LATERAL returns a set, not scalar",
            },
            {
              id: "lateral-with-limit",
              title: "Top-N per group — LATERAL with ORDER BY + LIMIT",
            },
            {
              id: "lateral-with-function",
              title:
                "LATERAL with set-returning functions — unnest, generate_series",
            },
            {
              id: "join-lateral",
              title:
                "JOIN LATERAL vs CROSS JOIN LATERAL — difference for empty results",
            },
          ],
        },
        {
          id: "advanced-ddl",
          title: "Advanced DDL",
          description: "Types, inheritance, and schema design.",
          subtopics: [
            {
              id: "enum-types",
              title:
                "CREATE TYPE mood AS ENUM ('happy','sad') — strongly-typed enum column",
            },
            {
              id: "composite-types",
              title:
                "CREATE TYPE address AS (street TEXT, city TEXT) — composite type",
            },
            {
              id: "domain-types",
              title:
                "CREATE DOMAIN email AS TEXT CHECK (VALUE ~ '@') — constrained domain",
            },
            {
              id: "generated-columns",
              title:
                "GENERATED ALWAYS AS (expression) STORED — computed column",
            },
            {
              id: "table-inheritance",
              title:
                "Table inheritance — CREATE TABLE child () INHERITS (parent)",
            },
            {
              id: "unlogged-tables",
              title:
                "UNLOGGED TABLE — skip WAL for temporary high-insert-speed tables",
            },
            {
              id: "schema-management",
              title:
                "Schemas — CREATE SCHEMA, SET search_path, schema.table access",
            },
            {
              id: "comment-on",
              title:
                "COMMENT ON TABLE/COLUMN — documentation stored in system catalog",
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
      description: "Senior PostgreSQL developer interview questions.",
      topics: [
        {
          id: "partitioning-rls-qa",
          title: "Partitioning & RLS Q&A",
          description:
            "Table partitioning and row-level security interview questions.",
          subtopics: [
            {
              id: "why-partition-qa",
              title:
                "Why would you partition a table? What are the main benefits?",
            },
            {
              id: "range-vs-list-vs-hash-qa",
              title:
                "What is the difference between range, list, and hash partitioning?",
            },
            {
              id: "partition-pruning-qa",
              title:
                "What is partition pruning and how does the planner use it?",
            },
            {
              id: "attach-detach-qa",
              title:
                "How do you add a new partition to an existing partitioned table?",
            },
            {
              id: "rls-enable-qa",
              title: "How do you enable Row-Level Security on a table?",
            },
            {
              id: "rls-policy-qa",
              title:
                "What is the difference between PERMISSIVE and RESTRICTIVE policies?",
            },
            {
              id: "rls-bypass-qa",
              title: "Which roles bypass RLS by default?",
            },
            {
              id: "matview-refresh-qa",
              title:
                "What is the difference between REFRESH MATERIALIZED VIEW and REFRESH MATERIALIZED VIEW CONCURRENTLY?",
            },
          ],
        },
        {
          id: "jsonb-arrays-pg-qa",
          title: "JSONB, Arrays & Extensions Q&A",
          description: "JSONB, arrays, and extension interview questions.",
          subtopics: [
            {
              id: "jsonpath-qa",
              title: "What is JSONPath and how is it used in PostgreSQL?",
            },
            {
              id: "jsonb-contains-qa",
              title: "What does the @> operator do in JSONB?",
            },
            {
              id: "jsonb-gin-index-qa",
              title:
                "How would you index a JSONB column for efficient queries?",
            },
            {
              id: "array-operators-qa",
              title: "What does the && operator do for arrays?",
            },
            {
              id: "unnest-qa",
              title: "How do you expand a PostgreSQL array into rows?",
            },
            {
              id: "pg-trgm-qa",
              title: "What is pg_trgm and how does it help with LIKE queries?",
            },
            {
              id: "uuid-ossp-qa",
              title: "How do you generate a UUID in PostgreSQL?",
            },
            {
              id: "lateral-join-qa",
              title:
                "What is a LATERAL join? When would you use it instead of a subquery?",
            },
          ],
        },
        {
          id: "plpgsql-types-qa",
          title: "Advanced PL/pgSQL & DDL Q&A",
          description: "Advanced stored procedure and DDL interview questions.",
          subtopics: [
            {
              id: "exception-block-qa",
              title: "How do you handle exceptions in PL/pgSQL?",
            },
            {
              id: "dynamic-sql-qa",
              title: "How do you run dynamic SQL safely in PL/pgSQL?",
            },
            {
              id: "cursor-vs-loop-qa",
              title:
                "When would you use a cursor in PL/pgSQL over a simple FOR loop?",
            },
            {
              id: "enum-type-qa",
              title:
                "What are the advantages and drawbacks of PostgreSQL ENUM types?",
            },
            {
              id: "domain-type-qa",
              title:
                "What is a domain type and how does it differ from a CHECK constraint on a column?",
            },
            {
              id: "generated-column-qa",
              title:
                "What is a generated column? What limitations does it have?",
            },
            {
              id: "unlogged-table-qa",
              title: "What is an UNLOGGED table and when would you use it?",
            },
            {
              id: "table-inheritance-qa",
              title:
                "What is table inheritance in PostgreSQL? What are its limitations?",
            },
          ],
        },
      ],
    },
  ],
};
