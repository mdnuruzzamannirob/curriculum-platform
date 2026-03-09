import { Level } from "@/types";

export const l4Level: Level = {
  id: "professional",
  title: "PostgreSQL in Production",
  description: "Staff Engineer",
  color: "#38bdf8",
  modules: [
    // ── PostgreSQL ───────────────────────────────────────
    {
      id: "postgresql",
      title: "PostgreSQL",
      icon: "bookOpen",
      color: "#336791",
      description:
        "Connection pooling, replication, backup, vacuuming, security, and configuration tuning.",
      topics: [
        {
          id: "connection-pooling",
          title: "Connection Pooling",
          description: "Scaling PostgreSQL connections with poolers.",
          subtopics: [
            {
              id: "connection-overhead",
              title:
                "Connection overhead — each PostgreSQL connection forks a backend process",
            },
            {
              id: "pgbouncer-overview",
              title:
                "PgBouncer — lightweight connection pooler; transaction/session/statement modes",
            },
            {
              id: "pgbouncer-transaction-mode",
              title:
                "Transaction mode — connection returned to pool after each transaction",
            },
            {
              id: "pgbouncer-session-mode",
              title:
                "Session mode — connection held for client session lifetime",
            },
            {
              id: "pgbouncer-config",
              title:
                "pgbouncer.ini — [databases], [pgbouncer], max_client_conn, pool_size",
            },
            {
              id: "pgpool-ii",
              title:
                "Pgpool-II — pooling + load balancing + failover in one tool",
            },
            {
              id: "prepared-statements-pooling",
              title:
                "Prepared statements with PgBouncer — use protocol-level stmts or disable",
            },
            {
              id: "server-side-pooling",
              title:
                "Built-in connection limits — max_connections, reserved_connections",
            },
          ],
        },
        {
          id: "streaming-replication",
          title: "Streaming Replication",
          description: "Physical replication for high availability.",
          subtopics: [
            {
              id: "wal-overview",
              title:
                "WAL (Write-Ahead Log) — all changes recorded before being applied",
            },
            {
              id: "primary-standby",
              title:
                "Primary / standby setup — wal_level=replica, primary_conninfo",
            },
            {
              id: "pg-basebackup",
              title:
                "pg_basebackup — take a base backup to initialise a standby",
            },
            {
              id: "recovery-config",
              title:
                "postgresql.conf recovery settings — standby_mode, restore_command, recovery_target",
            },
            {
              id: "hot-standby",
              title:
                "Hot standby — standby accepts read-only queries (hot_standby=on)",
            },
            {
              id: "replication-slots-physical",
              title:
                "Replication slots — prevent WAL from being removed before consumed",
            },
            {
              id: "synchronous-replication",
              title:
                "Synchronous replication — synchronous_standby_names, data safety trade-off",
            },
            {
              id: "promote-standby",
              title: "Promoting standby — pg_promote() or trigger file",
            },
            {
              id: "patroni-overview",
              title:
                "Patroni — HA orchestration layer using Etcd/Consul for leader election",
            },
          ],
        },
        {
          id: "logical-replication",
          title: "Logical Replication",
          description: "Row-level change replication between instances.",
          subtopics: [
            {
              id: "logical-vs-physical",
              title:
                "Logical vs physical replication — row-level changes vs byte-level WAL",
            },
            {
              id: "create-publication",
              title:
                "CREATE PUBLICATION pub FOR TABLE t1, t2 — define what to replicate",
            },
            {
              id: "create-subscription",
              title: "CREATE SUBSCRIPTION sub CONNECTION '...' PUBLICATION pub",
            },
            {
              id: "logical-replication-slots",
              title:
                "Logical replication slot — tracks consumer's WAL position",
            },
            {
              id: "filtering-publications",
              title:
                "Publication filters — WHERE clause for row filtering (PG 15+)",
            },
            {
              id: "two-way-replication",
              title:
                "Bi-directional replication — conflict handling challenges",
            },
            {
              id: "wal2json",
              title:
                "wal2json output plugin — logical decoding to JSON for CDC consumers",
            },
            {
              id: "debezium-cdc",
              title:
                "Debezium CDC — Kafka Connect plugin using PostgreSQL logical decoding",
            },
          ],
        },
        {
          id: "backup-recovery",
          title: "Backup & Recovery",
          description: "Protecting data and restoring PostgreSQL.",
          subtopics: [
            {
              id: "pg-dump-overview",
              title:
                "pg_dump — logical backup; output formats: plain, custom, directory, tar",
            },
            {
              id: "pg-dump-flags",
              title:
                "pg_dump flags — -Fc (custom), -j (parallel), --schema-only, --data-only",
            },
            {
              id: "pg-restore",
              title:
                "pg_restore — restore from custom/directory/tar format; -j parallel restore",
            },
            {
              id: "pg-dumpall",
              title:
                "pg_dumpall — dump all databases including roles and tablespaces",
            },
            {
              id: "pg-basebackup-backup",
              title:
                "pg_basebackup — physical base backup; -Ft (tar), -Fp (plain), -z (gzip)",
            },
            {
              id: "wal-archiving",
              title:
                "WAL archiving — archive_mode=on, archive_command for WAL shipping",
            },
            {
              id: "pitr",
              title:
                "PITR (Point-in-Time Recovery) — restore to exact timestamp using WAL archives",
            },
            {
              id: "restore-command",
              title:
                "restore_command in recovery — retrieves archived WAL files",
            },
            {
              id: "continuous-archiving",
              title:
                "pgBackRest / Barman — production-grade WAL archiving and PITR tools",
            },
          ],
        },
        {
          id: "vacuum-autovacuum",
          title: "Vacuuming & Autovacuum",
          description: "Managing table bloat and dead tuples.",
          subtopics: [
            {
              id: "dead-tuples",
              title:
                "Dead tuples — MVCC leaves old row versions; VACUUM reclaims them",
            },
            {
              id: "vacuum-command",
              title: "VACUUM table — reclaim dead tuple space (non-blocking)",
            },
            {
              id: "vacuum-full",
              title:
                "VACUUM FULL — rewrites table; fully reclaims space but requires lock",
            },
            {
              id: "vacuum-verbose",
              title: "VACUUM VERBOSE — output detailed vacuum statistics",
            },
            {
              id: "autovacuum-settings",
              title:
                "autovacuum_vacuum_threshold, autovacuum_vacuum_scale_factor — trigger threshold",
            },
            {
              id: "pg-stat-user-tables",
              title:
                "pg_stat_user_tables — n_dead_tup, n_live_tup, last_autovacuum",
            },
            {
              id: "table-bloat",
              title:
                "Table bloat — pgstattuple extension, bloat detection queries",
            },
            {
              id: "index-bloat",
              title:
                "Index bloat — btree bloat from deletions; REINDEX to reclaim",
            },
            {
              id: "freeze-wraparound",
              title:
                "Transaction ID wraparound — VACUUM freezes old tuples to prevent XID wraparound",
            },
          ],
        },
        {
          id: "security-roles",
          title: "Security & Roles",
          description: "Authentication, authorisation, and encryption.",
          subtopics: [
            {
              id: "create-role",
              title:
                "CREATE ROLE name LOGIN PASSWORD '...' — create database user",
            },
            {
              id: "role-attributes",
              title:
                "Role attributes — SUPERUSER, CREATEDB, CREATEROLE, LOGIN, NOLOGIN",
            },
            {
              id: "grant-revoke",
              title:
                "GRANT SELECT ON table TO role / REVOKE — privilege management",
            },
            {
              id: "pg-hba-conf",
              title:
                "pg_hba.conf — host-based authentication; local, host, hostssl entries",
            },
            {
              id: "scram-sha-256",
              title:
                "scram-sha-256 — modern password hashing (default in PG 14+)",
            },
            {
              id: "ssl-tls-pg",
              title:
                "SSL/TLS — ssl=on, ssl_cert_file, ssl_key_file, client certificate auth",
            },
            {
              id: "pg-audit",
              title:
                "pgAudit extension — granular audit logging of DML/DDL operations",
            },
            {
              id: "column-level-privileges",
              title:
                "Column-level privileges — GRANT SELECT (col) ON table TO role",
            },
            {
              id: "row-security-production",
              title:
                "RLS in production — app role + session variable pattern for multi-tenancy",
            },
          ],
        },
        {
          id: "configuration-tuning",
          title: "Configuration & Performance Tuning",
          description: "postgresql.conf settings for production workloads.",
          subtopics: [
            {
              id: "shared-buffers",
              title: "shared_buffers — 25% of RAM; main shared memory cache",
            },
            {
              id: "effective-cache-size",
              title:
                "effective_cache_size — tell planner how much OS cache is available (don't allocate)",
            },
            {
              id: "work-mem",
              title:
                "work_mem — per-sort/hash operation; watch total: max_connections × work_mem",
            },
            {
              id: "maintenance-work-mem",
              title:
                "maintenance_work_mem — for VACUUM, CREATE INDEX, pg_restore",
            },
            {
              id: "wal-buffers",
              title: "wal_buffers — WAL caching; auto-tune or set 64MB",
            },
            {
              id: "checkpoint-settings",
              title:
                "checkpoint_timeout, max_wal_size — control checkpoint frequency and WAL size",
            },
            {
              id: "max-connections",
              title:
                "max_connections — limit concurrent connections; prefer pooler over huge values",
            },
            {
              id: "random-page-cost",
              title:
                "random_page_cost — reduce for SSDs (1.1–2.0); default 4 assumes HDD",
            },
            {
              id: "default-statistics-target",
              title:
                "default_statistics_target — increase (200-500) for better planner estimates",
            },
            {
              id: "parallel-query-settings",
              title:
                "max_parallel_workers_per_gather — enable parallel seq scan and aggregation",
            },
            {
              id: "pgtune",
              title:
                "pgTune tool — generate postgresql.conf based on hardware and workload type",
            },
          ],
        },
        {
          id: "monitoring-observability",
          title: "Monitoring & Observability",
          description: "Detecting problems and understanding performance.",
          subtopics: [
            {
              id: "pg-stat-activity",
              title:
                "pg_stat_activity — active queries, wait events, client info",
            },
            {
              id: "pg-stat-statements-monitor",
              title:
                "pg_stat_statements — track total time, calls, rows per query",
            },
            {
              id: "pg-locks",
              title:
                "pg_locks — active lock info; join with pg_stat_activity to find waiters",
            },
            {
              id: "pg-stat-bgwriter",
              title:
                "pg_stat_bgwriter — buffers_clean vs buffers_backend for checkpoint pressure",
            },
            {
              id: "pg-stat-replication",
              title:
                "pg_stat_replication — monitor replication lag (write/flush/replay lag)",
            },
            {
              id: "long-running-queries",
              title:
                "Killing long queries — pg_cancel_backend(pid) / pg_terminate_backend(pid)",
            },
            {
              id: "prometheus-postgres-exporter",
              title:
                "postgres_exporter + Prometheus + Grafana — metrics dashboards",
            },
            {
              id: "pgbadger",
              title:
                "pgBadger — log analyser that generates HTML reports from slow query logs",
            },
            {
              id: "log-min-duration",
              title: "log_min_duration_statement — log queries slower than Nms",
            },
          ],
        },
        {
          id: "fdw-upgrades",
          title: "Foreign Data Wrappers & pg_upgrade",
          description: "External data access and version upgrades.",
          subtopics: [
            {
              id: "fdw-overview",
              title:
                "Foreign Data Wrapper (FDW) — access external data sources as local tables",
            },
            {
              id: "postgres-fdw",
              title:
                "postgres_fdw — access remote PostgreSQL tables; CREATE SERVER, USER MAPPING",
            },
            {
              id: "file-fdw",
              title: "file_fdw — read CSV/text files as tables",
            },
            {
              id: "other-fdws",
              title:
                "Other FDWs — mysql_fdw, oracle_fdw, redis_fdw, mongo_fdw ecosystem",
            },
            {
              id: "fdw-pushdown",
              title:
                "FDW pushdown — WHERE/ORDER BY pushed to remote for efficiency",
            },
            {
              id: "pg-upgrade-tool",
              title:
                "pg_upgrade — in-place major version upgrade with minimal downtime",
            },
            {
              id: "pg-upgrade-steps",
              title:
                "pg_upgrade steps — check mode, upgrade, adjust, parallel option (-j)",
            },
            {
              id: "logical-replication-upgrade",
              title:
                "Zero-downtime upgrade via logical replication — replicate to new version, failover",
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
      description: "Staff engineer PostgreSQL production interview questions.",
      topics: [
        {
          id: "pooling-replication-qa",
          title: "Connection Pooling & Replication Q&A",
          description: "Pooling and replication interview questions.",
          subtopics: [
            {
              id: "pgbouncer-modes-qa",
              title:
                "What are the three PgBouncer pooling modes and when would you choose each?",
            },
            {
              id: "prepared-stmt-pool-qa",
              title:
                "Why can prepared statements be problematic with PgBouncer transaction mode?",
            },
            {
              id: "streaming-vs-logical-qa",
              title:
                "What is the difference between streaming replication and logical replication?",
            },
            {
              id: "replication-slot-qa",
              title:
                "What is a replication slot and what risk does an unused slot pose?",
            },
            {
              id: "hot-standby-qa",
              title:
                "What does hot standby mean? What operations are supported?",
            },
            {
              id: "pitr-qa",
              title:
                "How would you set up PITR for a production PostgreSQL database?",
            },
            {
              id: "pg-basebackup-qa",
              title: "What is pg_basebackup and when would you use it?",
            },
            {
              id: "patroni-qa",
              title: "What is Patroni and why is it needed for HA?",
            },
          ],
        },
        {
          id: "vacuum-security-pg-qa",
          title: "Vacuum, Security & Config Q&A",
          description:
            "Vacuum, authentication, and tuning interview questions.",
          subtopics: [
            {
              id: "dead-tuples-qa",
              title: "What are dead tuples and how does VACUUM help?",
            },
            {
              id: "vacuum-full-qa",
              title: "What is the difference between VACUUM and VACUUM FULL?",
            },
            {
              id: "xid-wraparound-qa",
              title:
                "What is transaction ID wraparound and why is it dangerous?",
            },
            {
              id: "autovacuum-tuning-qa",
              title: "How do you tune autovacuum for a high-write table?",
            },
            {
              id: "pg-hba-conf-qa",
              title: "What is pg_hba.conf and what does it control?",
            },
            {
              id: "scram-sha-256-qa",
              title:
                "What authentication method does PostgreSQL prefer and why?",
            },
            {
              id: "shared-buffers-qa",
              title:
                "What is shared_buffers? What is a common recommended value?",
            },
            {
              id: "work-mem-qa",
              title:
                "What is work_mem and what is the risk of setting it too high?",
            },
          ],
        },
        {
          id: "monitoring-fdw-qa",
          title: "Monitoring & FDW Q&A",
          description:
            "Observability and foreign data wrapper interview questions.",
          subtopics: [
            {
              id: "pg-stat-activity-qa",
              title: "How do you find currently running queries in PostgreSQL?",
            },
            {
              id: "pg-stat-statements-qa",
              title: "How do you find the slowest queries in PostgreSQL?",
            },
            {
              id: "lock-blocking-qa",
              title: "How do you find which query is blocking another?",
            },
            {
              id: "replication-lag-qa",
              title: "How do you monitor replication lag?",
            },
            {
              id: "kill-query-qa",
              title:
                "What is the difference between pg_cancel_backend and pg_terminate_backend?",
            },
            {
              id: "fdw-qa",
              title:
                "What is a Foreign Data Wrapper? Give an example of when you'd use postgres_fdw.",
            },
            {
              id: "pg-upgrade-qa",
              title:
                "How does pg_upgrade work? What is the alternative for zero-downtime upgrades?",
            },
            {
              id: "log-slow-queries-qa",
              title: "How do you log slow queries in PostgreSQL?",
            },
          ],
        },
      ],
    },
  ],
};
