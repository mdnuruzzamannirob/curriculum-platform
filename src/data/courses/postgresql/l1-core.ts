import { Level } from "@/types";

export const l1Level: Level = {
  id: "junior",
  title: "Core PostgreSQL",
  description: "Junior Dev",
  color: "#facc15",
  modules: [
    // ── PostgreSQL ───────────────────────────────────────
    {
      id: "postgresql",
      title: "PostgreSQL",
      icon: "bookOpen",
      color: "#336791",
      description:
        "Core SQL — joins, aggregates, constraints, functions, and views.",
      topics: [
        {
          id: "joins",
          title: "JOINs",
          description: "Combining rows from multiple tables.",
          subtopics: [
            {
              id: "inner-join",
              title: "INNER JOIN — rows with matching values in both tables",
            },
            {
              id: "left-join",
              title:
                "LEFT JOIN (LEFT OUTER JOIN) — all left rows, matched right rows or NULL",
            },
            {
              id: "right-join",
              title: "RIGHT JOIN — all right rows, matched left rows or NULL",
            },
            {
              id: "full-join",
              title:
                "FULL OUTER JOIN — all rows from both tables, NULLs where no match",
            },
            {
              id: "cross-join",
              title: "CROSS JOIN — Cartesian product of every row combination",
            },
            {
              id: "self-join",
              title:
                "Self-join — joining a table to itself (e.g. employee → manager)",
            },
            {
              id: "join-conditions",
              title: "ON vs USING vs NATURAL JOIN — join condition forms",
            },
            {
              id: "multiple-joins",
              title: "Chaining multiple JOINs — joining 3+ tables",
            },
            {
              id: "join-filter-on-vs-where",
              title: "Filter in ON vs WHERE — difference for outer joins",
            },
          ],
        },
        {
          id: "aggregate-functions",
          title: "Aggregate Functions & GROUP BY",
          description: "Summarising data with aggregate functions.",
          subtopics: [
            {
              id: "count-function",
              title: "COUNT(*) vs COUNT(col) — count rows vs non-null values",
            },
            { id: "sum-avg", title: "SUM(col), AVG(col) — total and average" },
            {
              id: "min-max-pg",
              title: "MIN(col), MAX(col) — smallest and largest values",
            },
            {
              id: "string-agg",
              title: "STRING_AGG(col, ', ') — concatenate strings per group",
            },
            {
              id: "array-agg",
              title: "ARRAY_AGG(col) — collect values into a PostgreSQL array",
            },
            {
              id: "group-by",
              title: "GROUP BY col — group rows sharing a column value",
            },
            {
              id: "having",
              title: "HAVING condition — filter groups after aggregation",
            },
            {
              id: "group-by-multiple",
              title: "GROUP BY multiple columns — multi-dimensional grouping",
            },
            {
              id: "grouping-sets",
              title: "GROUPING SETS, ROLLUP, CUBE — multi-level subtotals",
            },
          ],
        },
        {
          id: "subqueries",
          title: "Subqueries",
          description: "Nested queries and set operations.",
          subtopics: [
            {
              id: "scalar-subquery",
              title:
                "Scalar subquery — subquery in SELECT that returns one value",
            },
            {
              id: "subquery-in-where",
              title: "Subquery in WHERE — WHERE id IN (SELECT ...)",
            },
            {
              id: "subquery-in-from",
              title: "Derived table — subquery in FROM clause",
            },
            {
              id: "correlated-subquery",
              title: "Correlated subquery — references outer query's columns",
            },
            {
              id: "exists-subquery",
              title: "EXISTS / NOT EXISTS — check if subquery returns any rows",
            },
            {
              id: "any-all-operators",
              title:
                "ANY/SOME, ALL — compare with set of values: salary > ALL (SELECT ...)",
            },
            {
              id: "union-intersect-except",
              title: "UNION, INTERSECT, EXCEPT — combining result sets",
            },
            {
              id: "union-vs-union-all",
              title:
                "UNION vs UNION ALL — deduplication vs preserve duplicates",
            },
          ],
        },
        {
          id: "constraints-detail",
          title: "Constraints in Depth",
          description: "Enforcing data integrity rules.",
          subtopics: [
            {
              id: "primary-key-detail",
              title: "PRIMARY KEY — single or composite primary key",
            },
            {
              id: "foreign-key-detail",
              title: "FOREIGN KEY (col) REFERENCES other_table(col)",
            },
            {
              id: "on-delete-update",
              title:
                "ON DELETE / ON UPDATE actions — CASCADE, SET NULL, RESTRICT, NO ACTION",
            },
            {
              id: "unique-constraint-detail",
              title: "UNIQUE constraint — single and multi-column unique",
            },
            {
              id: "check-constraint",
              title: "CHECK (expression) — arbitrary row-level condition",
            },
            {
              id: "not-null-detail",
              title: "NOT NULL — column-level vs table-level NOT NULL",
            },
            {
              id: "constraint-naming",
              title: "Named constraints — CONSTRAINT pk_users PRIMARY KEY",
            },
            {
              id: "deferrable-constraint",
              title:
                "DEFERRABLE constraints — INITIALLY DEFERRED for batch inserts",
            },
            {
              id: "exclusion-constraint",
              title: "EXCLUDE USING — prevent overlapping ranges (GiST-based)",
            },
          ],
        },
        {
          id: "sequences-identity",
          title: "Sequences & Identity Columns",
          description: "Auto-incrementing values in PostgreSQL.",
          subtopics: [
            {
              id: "serial-types",
              title:
                "SERIAL, SMALLSERIAL, BIGSERIAL — shorthand for sequence + default",
            },
            {
              id: "create-sequence",
              title: "CREATE SEQUENCE — explicit sequence with options",
            },
            {
              id: "nextval-currval",
              title: "nextval(), currval(), setval() — sequence manipulation",
            },
            {
              id: "identity-column",
              title:
                "GENERATED ALWAYS AS IDENTITY — SQL standard identity column",
            },
            {
              id: "generated-by-default",
              title:
                "GENERATED BY DEFAULT AS IDENTITY — allow explicit override",
            },
            {
              id: "sequence-options",
              title:
                "Sequence options — START, INCREMENT, MINVALUE, MAXVALUE, CYCLE",
            },
            {
              id: "gap-in-sequences",
              title: "Gaps in sequences — normal due to rollbacks and caching",
            },
          ],
        },
        {
          id: "built-in-functions",
          title: "Built-in Functions",
          description: "String, math, date/time, and type functions.",
          subtopics: [
            {
              id: "string-functions",
              title:
                "String functions — LOWER, UPPER, TRIM, LENGTH, SUBSTRING, REPLACE, CONCAT, SPLIT_PART",
            },
            {
              id: "string-format",
              title:
                "FORMAT('%s has %s items', name, count) — printf-style formatting",
            },
            {
              id: "math-functions",
              title:
                "Math functions — ABS, CEIL, FLOOR, ROUND, POWER, SQRT, MOD",
            },
            {
              id: "date-functions",
              title:
                "Date functions — NOW(), CURRENT_DATE, CURRENT_TIMESTAMP, EXTRACT, DATE_PART",
            },
            {
              id: "date-trunc",
              title: "DATE_TRUNC('month', ts) — truncate to time unit",
            },
            {
              id: "date-arithmetic",
              title:
                "Date arithmetic — date + interval '7 days', age(ts1, ts2)",
            },
            {
              id: "coalesce",
              title: "COALESCE(a, b, c) — first non-null value",
            },
            {
              id: "nullif",
              title: "NULLIF(a, b) — return NULL if a equals b, else a",
            },
            {
              id: "cast-convert",
              title: "CAST(val AS type) and :: shorthand — type conversion",
            },
            {
              id: "greatest-least",
              title: "GREATEST / LEAST — maximum / minimum across values",
            },
          ],
        },
        {
          id: "views",
          title: "Views",
          description: "Named stored queries.",
          subtopics: [
            {
              id: "create-view",
              title: "CREATE VIEW name AS SELECT ... — define a stored query",
            },
            {
              id: "selecting-from-view",
              title: "SELECT from a view — same as a table",
            },
            {
              id: "updatable-views",
              title:
                "Updatable views — simple views allow INSERT/UPDATE/DELETE",
            },
            {
              id: "create-or-replace-view",
              title: "CREATE OR REPLACE VIEW — update view definition",
            },
            { id: "drop-view", title: "DROP VIEW name — remove a view" },
            {
              id: "view-with-check-option",
              title:
                "WITH CHECK OPTION — enforce WHERE clause on inserts/updates",
            },
            {
              id: "security-barrier-view",
              title:
                "security_barrier view — prevent filter push-down leaking data",
            },
          ],
        },
        {
          id: "null-handling",
          title: "NULL Handling",
          description: "Working correctly with NULL values.",
          subtopics: [
            {
              id: "three-valued-logic",
              title: "Three-valued logic — TRUE, FALSE, NULL (UNKNOWN)",
            },
            {
              id: "null-comparison",
              title: "NULL = NULL is NULL, not TRUE — use IS NULL instead",
            },
            {
              id: "null-in-aggregates",
              title:
                "NULL in aggregates — COUNT(*) includes NULLs; SUM/AVG ignore them",
            },
            {
              id: "null-in-joins",
              title: "NULL in JOINs — outer join NULLs vs missing data",
            },
            {
              id: "coalesce-null",
              title: "COALESCE for NULL substitution — default values",
            },
            {
              id: "nulls-first-last",
              title: "ORDER BY col NULLS FIRST / NULLS LAST",
            },
            {
              id: "null-in-unique",
              title: "NULL in UNIQUE constraints — multiple NULLs are allowed",
            },
          ],
        },
        {
          id: "indexes-intro",
          title: "Indexes — Introduction",
          description: "Why indexes matter and creating your first index.",
          subtopics: [
            {
              id: "why-indexes-pg",
              title: "Why indexes — sequential scan vs index scan performance",
            },
            {
              id: "btree-index",
              title:
                "B-tree index — CREATE INDEX idx ON tbl(col) — default type",
            },
            {
              id: "create-index-syntax",
              title: "CREATE INDEX, CREATE UNIQUE INDEX syntax",
            },
            {
              id: "composite-index-intro",
              title: "Composite index — CREATE INDEX idx ON tbl(a, b)",
            },
            { id: "drop-index", title: "DROP INDEX idx — remove an index" },
            {
              id: "index-on-expression",
              title: "Expression index — CREATE INDEX ON tbl (LOWER(email))",
            },
            {
              id: "pg-stat-user-indexes",
              title: "pg_stat_user_indexes — checking index usage",
            },
          ],
        },
        {
          id: "transactions-basics-pg",
          title: "Transactions — Basics",
          description: "Controlling atomicity with transactions.",
          subtopics: [
            {
              id: "begin-commit-rollback",
              title: "BEGIN / COMMIT / ROLLBACK — explicit transaction block",
            },
            {
              id: "autocommit",
              title:
                "Autocommit — each statement is its own transaction by default",
            },
            {
              id: "savepoint",
              title: "SAVEPOINT name / ROLLBACK TO SAVEPOINT name",
            },
            {
              id: "release-savepoint",
              title: "RELEASE SAVEPOINT name — discard a savepoint",
            },
            {
              id: "transaction-errors",
              title:
                "Error in transaction — transaction enters aborted state, must rollback",
            },
            {
              id: "ddl-in-transactions",
              title:
                "DDL in transactions — PostgreSQL allows CREATE/DROP inside BEGIN/COMMIT",
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
      description: "Junior PostgreSQL developer interview questions.",
      topics: [
        {
          id: "joins-aggregates-qa",
          title: "JOINs & Aggregates Q&A",
          description: "Join and aggregate function interview questions.",
          subtopics: [
            {
              id: "inner-vs-left-qa",
              title: "What is the difference between INNER JOIN and LEFT JOIN?",
            },
            {
              id: "full-outer-qa",
              title: "When would you use a FULL OUTER JOIN?",
            },
            {
              id: "self-join-qa",
              title: "What is a self-join and give a real example?",
            },
            {
              id: "join-on-vs-where-qa",
              title:
                "What is the difference between filtering in ON vs WHERE for a LEFT JOIN?",
            },
            {
              id: "count-star-vs-col-qa",
              title:
                "What is the difference between COUNT(*) and COUNT(column)?",
            },
            {
              id: "having-vs-where-qa",
              title: "What is the difference between WHERE and HAVING?",
            },
            {
              id: "grouping-sets-qa",
              title: "What does ROLLUP do in a GROUP BY?",
            },
            {
              id: "string-agg-qa",
              title:
                "How do you concatenate grouped values into a single string in PostgreSQL?",
            },
          ],
        },
        {
          id: "subquery-constraints-qa",
          title: "Subqueries & Constraints Q&A",
          description: "Subquery and constraint interview questions.",
          subtopics: [
            {
              id: "subquery-vs-join-qa",
              title: "When would you use a subquery vs a JOIN?",
            },
            {
              id: "correlated-subquery-qa",
              title:
                "What is a correlated subquery? How does it differ from a regular subquery?",
            },
            {
              id: "exists-vs-in-qa",
              title: "What is the difference between EXISTS and IN?",
            },
            {
              id: "union-vs-union-all-qa",
              title: "What is the difference between UNION and UNION ALL?",
            },
            {
              id: "foreign-key-cascade-qa",
              title: "What does ON DELETE CASCADE do?",
            },
            {
              id: "check-constraint-qa",
              title: "What is a CHECK constraint? Give an example.",
            },
            {
              id: "deferrable-qa",
              title:
                "What is a DEFERRABLE constraint and when would you need it?",
            },
            {
              id: "identity-vs-serial-qa",
              title:
                "What is the difference between SERIAL and GENERATED AS IDENTITY?",
            },
          ],
        },
        {
          id: "functions-transactions-pg-qa",
          title: "Functions & Transactions Q&A",
          description: "Built-in function and transaction interview questions.",
          subtopics: [
            { id: "coalesce-qa", title: "What does COALESCE do?" },
            { id: "nullif-qa", title: "What does NULLIF do? Give an example." },
            {
              id: "date-trunc-qa",
              title:
                "How do you truncate a timestamp to the start of the month?",
            },
            {
              id: "extract-qa",
              title: "How do you get the year from a date column?",
            },
            {
              id: "cast-qa",
              title:
                "How do you convert a TEXT column to INTEGER in PostgreSQL?",
            },
            {
              id: "begin-commit-qa",
              title: "What happens if you forget to COMMIT a transaction?",
            },
            {
              id: "savepoint-qa",
              title: "What is a SAVEPOINT and when would you use it?",
            },
            {
              id: "ddl-transaction-qa",
              title:
                "Can you run DDL statements inside a transaction in PostgreSQL?",
            },
          ],
        },
      ],
    },
  ],
};
