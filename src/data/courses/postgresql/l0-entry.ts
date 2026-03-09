import { Level } from "@/types";

export const l0Level: Level = {
  id: "entry",
  title: "PostgreSQL Foundations",
  description: "Beginner",
  color: "#4ade80",
  modules: [
    // ── PostgreSQL ───────────────────────────────────────
    {
      id: "postgresql",
      title: "PostgreSQL",
      icon: "bookOpen",
      color: "#336791",
      description:
        "PostgreSQL absolute basics — relational model, SQL, and first queries.",
      topics: [
        {
          id: "what-is-postgresql",
          title: "What is PostgreSQL?",
          description: "Introduction to PostgreSQL and the relational model.",
          subtopics: [
            {
              id: "postgresql-definition",
              title:
                "PostgreSQL — advanced open-source object-relational database system",
            },
            {
              id: "rdbms-concept",
              title:
                "RDBMS — Relational Database Management System, tables with rows and columns",
            },
            {
              id: "postgresql-vs-mysql",
              title:
                "PostgreSQL vs MySQL — standards compliance, feature richness, licensing",
            },
            {
              id: "postgresql-vs-nosql",
              title:
                "PostgreSQL vs NoSQL — ACID vs BASE, structured vs flexible schema",
            },
            {
              id: "postgresql-elephant",
              title:
                "Slonik the elephant — PostgreSQL mascot, 'Postgres' shorthand",
            },
            {
              id: "postgresql-history",
              title:
                "History — INGRES → Postgres (Stonebraker) → PostgreSQL, born 1986",
            },
            {
              id: "postgresql-use-cases",
              title:
                "Use cases — web apps, analytics, GIS, time series, JSON store",
            },
            {
              id: "postgresql-acid",
              title:
                "ACID guarantees — Atomicity, Consistency, Isolation, Durability",
            },
          ],
        },
        {
          id: "installation-setup",
          title: "Installation & Setup",
          description: "Installing PostgreSQL and connecting to the server.",
          subtopics: [
            {
              id: "install-linux",
              title:
                "Installing on Linux — apt/yum packages, postgresql-15 package",
            },
            {
              id: "install-macos",
              title: "Installing on macOS — Homebrew: brew install postgresql",
            },
            {
              id: "install-windows",
              title: "Installing on Windows — EDB installer, PATH setup",
            },
            {
              id: "postgresql-service",
              title:
                "Starting/stopping service — pg_ctl, systemctl, brew services",
            },
            {
              id: "postgres-superuser",
              title: "postgres OS user and superuser — default admin role",
            },
            {
              id: "data-directory",
              title: "Data directory (PGDATA) — where cluster files live",
            },
            {
              id: "pgadmin-install",
              title: "pgAdmin 4 — GUI client for PostgreSQL",
            },
            {
              id: "dbeaver-tableplus",
              title: "DBeaver / TablePlus — alternative GUI clients",
            },
          ],
        },
        {
          id: "psql-cli",
          title: "psql — The PostgreSQL CLI",
          description: "Navigating the psql interactive terminal.",
          subtopics: [
            {
              id: "psql-connect",
              title:
                "psql -U user -d dbname -h host -p port — connection flags",
            },
            {
              id: "psql-meta-commands",
              title:
                "Meta-commands — \\l (list dbs), \\c (connect), \\dt (tables), \\d (describe)",
            },
            {
              id: "psql-describe",
              title:
                "\\d tablename — describe table columns, types, constraints",
            },
            { id: "psql-quit", title: "\\q — quit psql" },
            {
              id: "psql-help",
              title: "\\h SELECT — SQL syntax help; \\? — meta-command help",
            },
            {
              id: "psql-run-file",
              title: "\\i file.sql — execute SQL from file",
            },
            {
              id: "psql-output-format",
              title: "\\x — expanded (vertical) output format",
            },
            {
              id: "psql-timing",
              title: "\\timing — show query execution time",
            },
            {
              id: "psql-variables",
              title: "\\set VAR value — psql session variables",
            },
          ],
        },
        {
          id: "databases-schemas",
          title: "Databases & Schemas",
          description: "Organising objects inside a PostgreSQL cluster.",
          subtopics: [
            {
              id: "create-database",
              title: "CREATE DATABASE mydb — creating a new database",
            },
            {
              id: "drop-database",
              title:
                "DROP DATABASE mydb — remove entire database (irreversible)",
            },
            {
              id: "database-vs-schema",
              title:
                "Database vs schema — database = isolated cluster; schema = namespace inside database",
            },
            {
              id: "create-schema",
              title: "CREATE SCHEMA myschema — logical namespace",
            },
            {
              id: "search-path",
              title: "search_path — SET search_path TO myschema, public",
            },
            {
              id: "public-schema",
              title: "public schema — default schema for all tables",
            },
            {
              id: "schema-qualified-names",
              title: "Schema-qualified names — myschema.mytable",
            },
            {
              id: "information-schema",
              title:
                "information_schema — standard views about database objects",
            },
          ],
        },
        {
          id: "data-types-basic",
          title: "Data Types",
          description: "PostgreSQL built-in data types.",
          subtopics: [
            {
              id: "integer-types",
              title:
                "Integer types — SMALLINT (2B), INTEGER / INT (4B), BIGINT (8B)",
            },
            {
              id: "numeric-decimal",
              title:
                "NUMERIC(p,s) / DECIMAL — exact arbitrary precision numbers",
            },
            {
              id: "float-real",
              title:
                "REAL (4B), DOUBLE PRECISION (8B) — inexact floating point",
            },
            {
              id: "serial-bigserial",
              title: "SERIAL, BIGSERIAL — auto-incrementing integer shorthand",
            },
            {
              id: "char-varchar-text",
              title: "CHAR(n), VARCHAR(n), TEXT — character types",
            },
            { id: "boolean-type", title: "BOOLEAN — TRUE / FALSE / NULL" },
            {
              id: "date-time-types",
              title: "DATE, TIME, TIMESTAMP, TIMESTAMPTZ, INTERVAL",
            },
            {
              id: "uuid-type",
              title: "UUID — universally unique identifier type",
            },
            { id: "bytea-type", title: "BYTEA — binary data storage" },
          ],
        },
        {
          id: "creating-tables",
          title: "CREATE TABLE & Basic DDL",
          description: "Defining table structure.",
          subtopics: [
            {
              id: "create-table-syntax",
              title: "CREATE TABLE syntax — column name, type, constraints",
            },
            {
              id: "primary-key-basic",
              title:
                "PRIMARY KEY — uniquely identifies each row, NOT NULL + UNIQUE",
            },
            {
              id: "not-null-constraint",
              title: "NOT NULL — column must always have a value",
            },
            {
              id: "unique-constraint",
              title: "UNIQUE — all values in column must be distinct",
            },
            {
              id: "default-value",
              title:
                "DEFAULT value — column default when not provided on insert",
            },
            {
              id: "alter-table-basics",
              title: "ALTER TABLE — ADD COLUMN, DROP COLUMN, ALTER COLUMN TYPE",
            },
            {
              id: "drop-table",
              title:
                "DROP TABLE — remove table; DROP TABLE IF EXISTS tablename",
            },
            {
              id: "truncate-table",
              title:
                "TRUNCATE TABLE — remove all rows, faster than DELETE, not logged per-row",
            },
          ],
        },
        {
          id: "basic-sql-crud",
          title: "Basic SQL — CRUD",
          description: "Core INSERT, SELECT, UPDATE, DELETE statements.",
          subtopics: [
            {
              id: "insert-basic",
              title: "INSERT INTO table (cols) VALUES (vals) — inserting a row",
            },
            {
              id: "insert-multiple",
              title:
                "INSERT INTO ... VALUES (...), (...) — inserting multiple rows",
            },
            {
              id: "insert-returning",
              title: "INSERT ... RETURNING id — return generated values",
            },
            {
              id: "select-basic",
              title: "SELECT col1, col2 FROM table — selecting columns",
            },
            {
              id: "select-star",
              title: "SELECT * FROM table — select all columns",
            },
            { id: "where-clause", title: "WHERE condition — filter rows" },
            {
              id: "update-basic",
              title: "UPDATE table SET col = val WHERE condition",
            },
            {
              id: "update-returning",
              title: "UPDATE ... RETURNING — return updated rows",
            },
            { id: "delete-basic", title: "DELETE FROM table WHERE condition" },
            {
              id: "delete-returning",
              title: "DELETE ... RETURNING — return deleted rows",
            },
          ],
        },
        {
          id: "basic-query-operators",
          title: "Basic Query Operators & Clauses",
          description: "Filtering, sorting, and limiting results.",
          subtopics: [
            {
              id: "comparison-operators-pg",
              title: "=, <>, !=, <, >, <=, >= — comparison operators",
            },
            {
              id: "logical-operators-pg",
              title: "AND, OR, NOT — logical operators",
            },
            {
              id: "between-operator",
              title: "BETWEEN a AND b — inclusive range check",
            },
            {
              id: "in-operator-pg",
              title: "IN (v1, v2, ...) — check membership in list",
            },
            {
              id: "like-ilike",
              title:
                "LIKE / ILIKE — pattern matching; % any chars, _ one char; ILIKE is case-insensitive",
            },
            {
              id: "is-null-check",
              title: "IS NULL / IS NOT NULL — checking nulls",
            },
            {
              id: "order-by-pg",
              title: "ORDER BY col ASC/DESC — sorting results",
            },
            { id: "limit-offset-pg", title: "LIMIT n OFFSET m — pagination" },
            {
              id: "distinct-pg",
              title: "SELECT DISTINCT col — deduplicate result rows",
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
      description: "Beginner PostgreSQL interview questions.",
      topics: [
        {
          id: "rdbms-fundamentals-qa",
          title: "RDBMS & PostgreSQL Fundamentals Q&A",
          description: "Core relational database concept questions.",
          subtopics: [
            {
              id: "what-is-rdbms-qa",
              title:
                "What is an RDBMS and how does PostgreSQL fit into that category?",
            },
            {
              id: "postgresql-vs-mysql-qa",
              title:
                "What are the key differences between PostgreSQL and MySQL?",
            },
            {
              id: "acid-qa",
              title: "What does ACID stand for and why is it important?",
            },
            {
              id: "table-row-column-qa",
              title:
                "What is the relationship between a database, schema, table, row, and column?",
            },
            {
              id: "primary-key-qa",
              title: "What is a primary key and why does every table need one?",
            },
            {
              id: "null-concept-qa",
              title:
                "What is NULL in SQL? How is it different from empty string or 0?",
            },
            {
              id: "serial-qa",
              title:
                "What is SERIAL in PostgreSQL and what does it do behind the scenes?",
            },
            {
              id: "data-types-choice-qa",
              title: "When would you use TEXT vs VARCHAR in PostgreSQL?",
            },
          ],
        },
        {
          id: "psql-ddl-qa",
          title: "psql & DDL Q&A",
          description: "psql tool and DDL questions.",
          subtopics: [
            {
              id: "psql-connect-qa",
              title:
                "How do you connect to a PostgreSQL database from the command line?",
            },
            {
              id: "list-tables-qa",
              title:
                "How do you list all tables in the current PostgreSQL database?",
            },
            {
              id: "describe-table-qa",
              title:
                "How do you view the structure (columns, types) of a table in psql?",
            },
            {
              id: "create-table-qa",
              title:
                "Write a CREATE TABLE statement with a primary key and a NOT NULL column",
            },
            {
              id: "alter-table-qa",
              title: "How do you add a new column to an existing table?",
            },
            {
              id: "drop-vs-truncate-qa",
              title:
                "What is the difference between DROP TABLE and TRUNCATE TABLE?",
            },
            {
              id: "schema-vs-database-qa",
              title:
                "What is the difference between a schema and a database in PostgreSQL?",
            },
            {
              id: "search-path-qa",
              title:
                "What is search_path in PostgreSQL and why does it matter?",
            },
          ],
        },
        {
          id: "basic-sql-qa",
          title: "Basic SQL Q&A",
          description: "Core SQL CRUD and query questions.",
          subtopics: [
            {
              id: "insert-returning-qa",
              title:
                "What does the RETURNING clause do in an INSERT statement?",
            },
            {
              id: "update-without-where-qa",
              title: "What happens if you run UPDATE without a WHERE clause?",
            },
            {
              id: "delete-vs-truncate-qa",
              title: "What is the difference between DELETE and TRUNCATE?",
            },
            {
              id: "like-vs-ilike-qa",
              title:
                "What is the difference between LIKE and ILIKE in PostgreSQL?",
            },
            {
              id: "between-qa",
              title:
                "Is BETWEEN inclusive or exclusive of the boundary values?",
            },
            { id: "distinct-qa", title: "How does SELECT DISTINCT work?" },
            {
              id: "order-by-null-qa",
              title: "How does PostgreSQL sort NULL values with ORDER BY?",
            },
            {
              id: "limit-offset-qa",
              title: "How do you implement pagination in a SQL query?",
            },
          ],
        },
      ],
    },
  ],
};
