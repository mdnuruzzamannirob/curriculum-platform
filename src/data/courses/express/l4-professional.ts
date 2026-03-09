import { Level } from "@/types";

export const l4Level: Level = {
  id: "professional",
  title: "Express.js in Production",
  description: "Staff Engineer",
  color: "#38bdf8",
  modules: [
    // ── Express ──────────────────────────────────────────
    {
      id: "express",
      title: "Express",
      icon: "layers",
      color: "#e67e22",
      description: "Production-grade Express.js skills.",
      topics: [
        {
          id: "production-architecture",
          title: "Production Architecture Patterns",
          description: "Structuring large-scale Express applications.",
          subtopics: [
            {
              id: "feature-based-structure",
              title: "Feature-based (domain) folder structure",
            },
            {
              id: "service-repository-pattern",
              title: "Service + Repository pattern",
            },
            {
              id: "dependency-injection",
              title: "Dependency injection in Express (manual vs awilix)",
            },
            {
              id: "config-management",
              title: "Centralized config management (convict, zod)",
            },
            {
              id: "app-factory",
              title: "App factory pattern — testable Express instance",
            },
            {
              id: "barrel-exports",
              title: "Barrel exports (index.ts) for clean imports",
            },
            {
              id: "layered-architecture",
              title: "Layered architecture: Presentation → Service → Data",
            },
            {
              id: "hexagonal-architecture",
              title: "Hexagonal (Ports & Adapters) architecture intro",
            },
          ],
        },
        {
          id: "advanced-auth",
          title: "Advanced Authentication & Authorization",
          description: "Enterprise auth patterns in Express.",
          subtopics: [
            {
              id: "rbac-implementation",
              title: "RBAC — roles, permissions, middleware guards",
            },
            {
              id: "abac-implementation",
              title: "ABAC — attribute-based access control",
            },
            { id: "mfa-totp", title: "MFA with TOTP (speakeasy / otplib)" },
            {
              id: "api-keys",
              title: "API key authentication — generation, hashing, rotation",
            },
            {
              id: "oauth2-provider",
              title: "Building an OAuth2 authorization server",
            },
            {
              id: "oidc-integration",
              title: "OIDC integration with Keycloak / Auth0",
            },
            {
              id: "jwt-asymmetric",
              title: "JWT with RS256 — asymmetric key signing",
            },
            {
              id: "session-fixation",
              title: "Session fixation attack prevention",
            },
          ],
        },
        {
          id: "database-best-practices",
          title: "Database Best Practices",
          description: "Production database patterns for Express.",
          subtopics: [
            {
              id: "connection-pooling",
              title: "Connection pool sizing — max, min, idle timeout",
            },
            {
              id: "db-migrations",
              title:
                "Database migrations — Flyway, Liquibase, Knex, Prisma migrate",
            },
            {
              id: "db-transactions-adv",
              title: "Distributed transactions — Saga pattern",
            },
            {
              id: "read-replicas",
              title: "Read replicas for scaling read-heavy workloads",
            },
            {
              id: "db-indexing-strategy",
              title: "Indexing strategy — query analysis and index design",
            },
            {
              id: "query-optimization",
              title: "Query optimization — EXPLAIN ANALYZE, N+1 prevention",
            },
            {
              id: "soft-delete",
              title: "Soft delete pattern (deletedAt timestamp)",
            },
            { id: "db-seeding", title: "Database seeding for dev and test" },
          ],
        },
        {
          id: "performance-optimization",
          title: "Performance Optimization",
          description: "Making Express apps fast.",
          subtopics: [
            {
              id: "compression-gzip",
              title:
                "compression middleware — gzip/brotli response compression",
            },
            {
              id: "cluster-mode",
              title: "Node.js cluster module — multi-core usage",
            },
            {
              id: "pm2-setup",
              title: "PM2 — process manager with cluster mode",
            },
            { id: "pm2-ecosystem", title: "PM2 ecosystem.config.js" },
            {
              id: "response-caching-http",
              title: "HTTP response caching with Cache-Control headers",
            },
            { id: "cdn-static-assets", title: "CDN for static assets" },
            {
              id: "keepalive-connections",
              title: "HTTP keep-alive connections",
            },
            {
              id: "express-profiling",
              title: "Profiling Express with clinic.js",
            },
            {
              id: "payload-optimization",
              title:
                "Response payload optimization — field selection, sparse fields",
            },
          ],
        },
        {
          id: "docker-containerization",
          title: "Docker & Containerization",
          description: "Containerizing Express applications.",
          subtopics: [
            {
              id: "dockerfile-express",
              title: "Dockerfile for Express — multi-stage build",
            },
            {
              id: "docker-node-best",
              title:
                "Best practices — non-root user, .dockerignore, layer caching",
            },
            {
              id: "docker-compose-express",
              title: "docker-compose.yml — Express + MongoDB + Redis",
            },
            {
              id: "docker-env-vars",
              title: "Environment variables in Docker (--env-file, secrets)",
            },
            {
              id: "docker-health-check",
              title: "HEALTHCHECK instruction in Dockerfile",
            },
            {
              id: "docker-networking",
              title: "Docker networking — bridge, host, overlay",
            },
            { id: "docker-volumes", title: "Volumes for persistent data" },
            {
              id: "docker-production",
              title: "Production Docker — distroless / Alpine base images",
            },
          ],
        },
        {
          id: "cicd-deployment",
          title: "CI/CD & Deployment",
          description: "Automated deployment pipelines.",
          subtopics: [
            {
              id: "github-actions-express",
              title: "GitHub Actions — CI pipeline for Express",
            },
            { id: "test-in-ci", title: "Running tests and lint in CI" },
            {
              id: "docker-push-ci",
              title: "Building and pushing Docker image in CI",
            },
            {
              id: "deploy-to-vps",
              title: "Deploying to VPS (DigitalOcean, Hetzner) with PM2",
            },
            {
              id: "deploy-aws-eb",
              title: "Deploying to AWS Elastic Beanstalk",
            },
            {
              id: "deploy-render",
              title: "Deploying to Render / Railway / Fly.io",
            },
            {
              id: "zero-downtime-pm2",
              title: "Zero-downtime deploys with PM2 reload",
            },
            {
              id: "rollback-strategy",
              title: "Rollback strategy — Git tags, Docker image versions",
            },
          ],
        },
        {
          id: "api-documentation",
          title: "API Documentation — Swagger / OpenAPI",
          description: "Documenting REST APIs.",
          subtopics: [
            {
              id: "openapi-spec",
              title: "OpenAPI 3.0 spec — paths, components, schemas",
            },
            {
              id: "swagger-ui-express",
              title: "swagger-ui-express — serving Swagger UI",
            },
            {
              id: "swagger-jsdoc",
              title: "swagger-jsdoc — JSDoc annotations to OpenAPI",
            },
            {
              id: "request-response-schemas",
              title: "Documenting request body and response schemas",
            },
            {
              id: "auth-in-swagger",
              title: "Documenting Bearer auth in Swagger",
            },
            {
              id: "api-versioning-swagger",
              title: "Multiple API version docs",
            },
            {
              id: "postman-collection",
              title: "Postman collection as API documentation",
            },
          ],
        },
        {
          id: "health-graceful-shutdown",
          title: "Health Checks & Graceful Shutdown",
          description: "Production readiness patterns.",
          subtopics: [
            {
              id: "health-check-endpoint",
              title: "GET /health endpoint — readiness vs liveness",
            },
            {
              id: "health-db-check",
              title: "Checking database connectivity in health check",
            },
            {
              id: "health-redis-check",
              title: "Checking Redis availability in health check",
            },
            {
              id: "graceful-shutdown",
              title: "Graceful shutdown — drain connections on SIGTERM",
            },
            {
              id: "server-close",
              title: "server.close() — stop accepting new requests",
            },
            { id: "shutdown-timeout", title: "Force shutdown after timeout" },
            {
              id: "readiness-probe",
              title: "Kubernetes readiness and liveness probes",
            },
          ],
        },
        {
          id: "monitoring-observability",
          title: "Monitoring & Observability",
          description: "Observing Express apps in production.",
          subtopics: [
            {
              id: "prometheus-metrics",
              title: "Prometheus metrics with prom-client",
            },
            {
              id: "express-prometheus",
              title: "express-prom-bundle — HTTP metrics middleware",
            },
            {
              id: "grafana-dashboards",
              title: "Grafana dashboards for Express metrics",
            },
            {
              id: "distributed-tracing",
              title: "Distributed tracing with OpenTelemetry",
            },
            {
              id: "sentry-integration",
              title: "Sentry — error tracking integration",
            },
            {
              id: "apm-tools",
              title: "APM tools — Datadog, New Relic, Elastic APM",
            },
            {
              id: "log-aggregation",
              title: "Log aggregation — ELK Stack, Loki + Grafana",
            },
            {
              id: "alerting",
              title: "Setting up alerts for error rate, latency, availability",
            },
          ],
        },
        {
          id: "load-balancing",
          title: "Load Balancing & Horizontal Scaling",
          description: "Scaling Express beyond a single server.",
          subtopics: [
            {
              id: "nginx-reverse-proxy",
              title: "NGINX as reverse proxy for Express",
            },
            {
              id: "nginx-load-balancer",
              title: "NGINX upstream load balancer configuration",
            },
            {
              id: "session-sharing",
              title: "Shared session store (Redis) for load-balanced instances",
            },
            {
              id: "sticky-sessions",
              title: "Sticky sessions — use cases and drawbacks",
            },
            {
              id: "stateless-design",
              title: "Stateless API design for horizontal scaling",
            },
            {
              id: "kubernetes-express",
              title: "Kubernetes Deployment and Service for Express",
            },
            {
              id: "hpa-kubernetes",
              title: "Horizontal Pod Autoscaler (HPA) with Kubernetes",
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
      description: "Staff/production-level Express interview questions.",
      topics: [
        {
          id: "production-devops-qa",
          title: "Production & DevOps Q&A",
          description: "Production deployment interview questions.",
          subtopics: [
            {
              id: "pm2-qa",
              title: "What is PM2 and how does cluster mode work?",
            },
            {
              id: "dockerfile-multistage-qa",
              title: "What is multi-stage Docker build and why use it?",
            },
            {
              id: "graceful-shutdown-qa",
              title: "What is graceful shutdown and how do you implement it?",
            },
            {
              id: "zero-downtime-qa",
              title: "How do you achieve zero-downtime deployment?",
            },
            {
              id: "health-check-qa",
              title:
                "What is the difference between readiness and liveness checks?",
            },
            {
              id: "env-secrets-qa",
              title: "How do you manage secrets in production (not .env file)?",
            },
            {
              id: "docker-compose-qa",
              title: "When to use docker-compose vs Kubernetes?",
            },
            {
              id: "nginx-express-qa",
              title: "Why put NGINX in front of Express in production?",
            },
          ],
        },
        {
          id: "performance-scalability-qa",
          title: "Performance & Scalability Q&A",
          description: "Performance interview questions.",
          subtopics: [
            {
              id: "compress-qa",
              title: "What does response compression do? When to use it?",
            },
            {
              id: "cluster-event-loop-qa",
              title: "Why does Node.js cluster module help performance?",
            },
            {
              id: "connection-pool-size-qa",
              title: "How do you choose a database connection pool size?",
            },
            {
              id: "scaling-strategies-qa",
              title: "Vertical vs horizontal scaling — when to choose each?",
            },
            {
              id: "stateless-scaling-qa",
              title:
                "Why must your Express app be stateless to scale horizontally?",
            },
            { id: "cdn-assets-qa", title: "What should go behind a CDN?" },
            {
              id: "cache-hit-miss-qa",
              title: "Cache hit vs miss — what metrics do you track?",
            },
            {
              id: "profiling-qa",
              title: "How would you profile a slow Express endpoint?",
            },
          ],
        },
        {
          id: "architecture-qa",
          title: "Architecture Q&A",
          description: "Architecture design interview questions.",
          subtopics: [
            {
              id: "service-layer-qa",
              title: "Why separate the service layer from controllers?",
            },
            {
              id: "repository-pattern-qa",
              title: "What is the repository pattern and why use it?",
            },
            {
              id: "dependency-injection-qa",
              title:
                "What is dependency injection? How to implement it in Express?",
            },
            {
              id: "rbac-design-qa",
              title: "Design a role-based access control system for an API",
            },
            {
              id: "api-doc-qa",
              title:
                "Why is API documentation important? Which format do you use?",
            },
            {
              id: "multivariate-testing-qa",
              title: "How would you A/B test an API endpoint?",
            },
            {
              id: "monolith-vs-micro-qa",
              title:
                "When would you split an Express monolith into microservices?",
            },
            {
              id: "saga-pattern-qa",
              title: "What is the Saga pattern for distributed transactions?",
            },
          ],
        },
      ],
    },
  ],
};
