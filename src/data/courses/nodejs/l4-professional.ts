import { Level } from "@/types";

export const l4Level: Level = {
  id: "professional",
  title: "Node.js in Production",
  description: "Staff Engineer",
  color: "#38bdf8",
  modules: [
    // ── Node.js ──────────────────────────────────────────
    {
      id: "nodejs",
      title: "Node.js",
      icon: "route",
      color: "#68a063",
      description: "Production-grade Node.js skills.",
      topics: [
        {
          id: "nestjs-framework",
          title: "NestJS Framework",
          description: "Enterprise Node.js framework with DI and decorators.",
          subtopics: [
            { id: "nestjs-setup", title: "NestJS CLI & project structure" },
            {
              id: "nestjs-modules",
              title: "Modules — organizing feature code",
            },
            {
              id: "nestjs-controllers",
              title: "Controllers — routing & request handling",
            },
            {
              id: "nestjs-providers",
              title: "Providers & dependency injection",
            },
            { id: "nestjs-services", title: "Services — business logic layer" },
            {
              id: "nestjs-guards",
              title: "Guards — authentication & authorization",
            },
            {
              id: "nestjs-interceptors",
              title: "Interceptors — request/response transformation",
            },
            {
              id: "nestjs-pipes",
              title: "Pipes — validation & transformation",
            },
            {
              id: "nestjs-exception-filters",
              title: "Exception filters — error handling",
            },
            { id: "nestjs-middleware", title: "Middleware in NestJS" },
            { id: "nestjs-config", title: "@nestjs/config — config module" },
            {
              id: "nestjs-typeorm-prisma",
              title: "TypeORM / Prisma integration in NestJS",
            },
          ],
        },
        {
          id: "fastify-framework",
          title: "Fastify Framework",
          description: "High-performance Node.js web framework.",
          subtopics: [
            { id: "fastify-setup", title: "Fastify setup & project structure" },
            {
              id: "fastify-routing",
              title: "Route declaration & shorthand methods",
            },
            {
              id: "fastify-schema",
              title: "Schema-based validation (JSON Schema)",
            },
            {
              id: "fastify-plugins",
              title: "Plugin system — fastify-plugin & encapsulation",
            },
            {
              id: "fastify-hooks",
              title: "Lifecycle hooks (onRequest, preHandler, onSend)",
            },
            {
              id: "fastify-decorators",
              title: "Decorators — extending fastify instance",
            },
            { id: "fastify-auth", title: "Authentication with @fastify/jwt" },
            { id: "fastify-swagger", title: "OpenAPI with @fastify/swagger" },
            {
              id: "fastify-vs-express",
              title: "Fastify vs Express — performance trade-offs",
            },
          ],
        },
        {
          id: "grpc-node",
          title: "gRPC with Node.js",
          description: "Efficient service-to-service communication.",
          subtopics: [
            {
              id: "protobuf-basics",
              title: "Protocol Buffers — .proto file syntax",
            },
            { id: "grpc-js-setup", title: "@grpc/grpc-js setup" },
            {
              id: "proto-loader",
              title: "@grpc/proto-loader — dynamic loading",
            },
            { id: "grpc-unary", title: "Unary RPC — request/response" },
            { id: "grpc-server-streaming", title: "Server-side streaming RPC" },
            { id: "grpc-client-streaming", title: "Client-side streaming RPC" },
            { id: "grpc-bidirectional", title: "Bidirectional streaming RPC" },
            { id: "grpc-auth", title: "gRPC authentication with TLS & tokens" },
            { id: "grpc-vs-rest", title: "gRPC vs REST — when to choose" },
          ],
        },
        {
          id: "microservices-node",
          title: "Microservices Architecture",
          description: "Building and operating microservices.",
          subtopics: [
            {
              id: "monolith-vs-microservice",
              title: "Monolith vs microservices",
            },
            { id: "api-gateway-pattern", title: "API Gateway pattern" },
            {
              id: "service-discovery",
              title: "Service Discovery (Consul, K8s DNS)",
            },
            {
              id: "circuit-breaker",
              title: "Circuit Breaker pattern (opossum)",
            },
            {
              id: "saga-pattern",
              title: "Saga pattern for distributed transactions",
            },
            {
              id: "cqrs-pattern",
              title: "CQRS — Command Query Responsibility Segregation",
            },
            { id: "event-sourcing-intro", title: "Event Sourcing basics" },
            {
              id: "nestjs-microservices",
              title: "NestJS Microservices (TCP, NATS, Kafka transport)",
            },
            {
              id: "health-checks",
              title: "Health checks — liveness & readiness probes",
            },
          ],
        },
        {
          id: "docker-node",
          title: "Docker & Node.js",
          description: "Containerizing Node.js applications.",
          subtopics: [
            {
              id: "dockerfile-node",
              title: "Dockerfile for Node.js (node:alpine)",
            },
            {
              id: "multistage-builds",
              title: "Multi-stage Docker builds (dev → prod)",
            },
            {
              id: "docker-ignore",
              title: ".dockerignore — exclude node_modules",
            },
            {
              id: "docker-layer-caching",
              title: "Layer caching strategies (COPY package.json first)",
            },
            {
              id: "docker-compose-node",
              title: "docker-compose — Node + DB + Redis stack",
            },
            {
              id: "environment-injection",
              title: "Injecting environment variables in Docker",
            },
            {
              id: "container-security",
              title: "Running containers as non-root user",
            },
          ],
        },
        {
          id: "kubernetes-node",
          title: "Kubernetes & Node.js",
          description: "Deploying Node.js on Kubernetes.",
          subtopics: [
            {
              id: "k8s-deployment",
              title: "Deployment resource — replicas, strategy",
            },
            {
              id: "k8s-service",
              title: "Service types — ClusterIP, NodePort, LoadBalancer",
            },
            {
              id: "k8s-configmap-secret",
              title: "ConfigMap & Secret for configuration",
            },
            { id: "k8s-probes", title: "Liveness & readiness probes" },
            { id: "k8s-hpa", title: "Horizontal Pod Autoscaler (HPA)" },
            { id: "k8s-ingress", title: "Ingress controller & routing" },
            { id: "k8s-resource-limits", title: "Resource requests & limits" },
          ],
        },
        {
          id: "cicd-node",
          title: "CI/CD for Node.js",
          description: "Automated build, test and delivery pipelines.",
          subtopics: [
            {
              id: "github-actions-node",
              title: "GitHub Actions workflow for Node.js",
            },
            { id: "ci-pipeline", title: "CI pipeline: lint → test → build" },
            {
              id: "semantic-versioning",
              title: "Semantic versioning & automated releases",
            },
            { id: "docker-ci", title: "Build & push Docker image in CI" },
            {
              id: "env-secrets-ci",
              title: "Managing secrets in CI (Actions Secrets)",
            },
            {
              id: "deploy-strategies",
              title: "Blue/Green, Canary, Rolling deployments",
            },
          ],
        },
        {
          id: "testing-node",
          title: "Testing Node.js",
          description: "Comprehensive testing strategies.",
          subtopics: [
            {
              id: "jest-vitest-setup",
              title: "Jest / Vitest setup & configuration",
            },
            {
              id: "unit-tests-node",
              title: "Unit tests — mocking dependencies",
            },
            {
              id: "integration-tests-node",
              title: "Integration tests with real database",
            },
            { id: "supertest", title: "Supertest — HTTP endpoint testing" },
            {
              id: "testcontainers-node",
              title: "TestContainers — containerized test dependencies",
            },
            {
              id: "mock-modules",
              title: "jest.mock() / vi.mock() — module mocking",
            },
            { id: "test-coverage", title: "Code coverage with --coverage" },
            {
              id: "e2e-testing-node",
              title: "E2E testing — the testing pyramid",
            },
            {
              id: "load-testing-node",
              title: "Load testing (k6, autocannon, Artillery)",
            },
          ],
        },
        {
          id: "performance-profiling",
          title: "Performance Profiling",
          description: "Finding and fixing Node.js bottlenecks.",
          subtopics: [
            {
              id: "node-inspect",
              title: "node --inspect & Chrome DevTools profiler",
            },
            { id: "flame-graphs-0x", title: "Flame graphs with 0x" },
            {
              id: "clinicjs-doctor",
              title: "clinic.js — doctor, bubbleprof, flame",
            },
            { id: "cpu-profile", title: "node --cpu-prof & file analysis" },
            {
              id: "autocannon-benchmarking",
              title: "Benchmarking with autocannon / wrk",
            },
            { id: "ab-testing-perf", title: "Identifying hot code paths" },
          ],
        },
        {
          id: "memory-management",
          title: "Memory Management",
          description: "Diagnosing and preventing memory leaks.",
          subtopics: [
            {
              id: "heap-snapshot",
              title: "Heap snapshot with --heap-snapshot & DevTools",
            },
            {
              id: "heap-prof",
              title: "node --heap-prof for allocation profiling",
            },
            {
              id: "memory-leak-patterns",
              title: "Common memory leak patterns (closures, globals, timers)",
            },
            { id: "gc-tuning", title: "V8 GC tuning (--max-old-space-size)" },
            {
              id: "weakmap-weakref",
              title: "WeakMap, WeakRef & FinalizationRegistry",
            },
            {
              id: "event-listener-leaks",
              title: "Event listener leaks (maxListeners)",
            },
          ],
        },
        {
          id: "observability-node",
          title: "APM & Observability",
          description: "Monitoring production Node.js applications.",
          subtopics: [
            {
              id: "opentelemetry-node",
              title: "OpenTelemetry — traces, metrics, logs",
            },
            {
              id: "prometheus-prom-client",
              title: "Prometheus metrics with prom-client",
            },
            {
              id: "grafana-dashboards",
              title: "Grafana dashboards for Node.js metrics",
            },
            { id: "jaeger-tracing", title: "Distributed tracing with Jaeger" },
            {
              id: "health-check-endpoint",
              title: "/health & /ready endpoints",
            },
            {
              id: "structured-logging-context",
              title: "Structured logging with request context",
            },
          ],
        },
        {
          id: "serverless-node",
          title: "Serverless Node.js",
          description: "Serverless deployments with Node.js.",
          subtopics: [
            {
              id: "aws-lambda-handler",
              title: "AWS Lambda handler — function structure",
            },
            { id: "cold-start-optimization", title: "Cold start optimization" },
            {
              id: "lambda-layers",
              title: "Lambda Layers for shared dependencies",
            },
            { id: "vercel-functions", title: "Vercel Serverless Functions" },
            {
              id: "cloudflare-workers",
              title: "Cloudflare Workers (V8 Isolates)",
            },
            { id: "serverless-framework", title: "Serverless Framework & SAM" },
          ],
        },
        {
          id: "config-management",
          title: "Environment & Config Management",
          description: "12-factor app configuration patterns.",
          subtopics: [
            { id: "dotenv-node", title: "dotenv — loading .env files" },
            { id: "env-validation", title: "Env validation with Zod or joi" },
            {
              id: "twelve-factor-config",
              title: "12-factor app — config from environment",
            },
            {
              id: "vault-secrets",
              title: "HashiCorp Vault & AWS Secrets Manager",
            },
            {
              id: "feature-flags",
              title: "Feature flags (LaunchDarkly, Unleash)",
            },
          ],
        },
      ],
    },
    // ── DSA ──────────────────────────────────────────────
    {
      id: "dsa",
      title: "DSA",
      icon: "workflow",
      color: "#22d3ee",
      description: "System design–oriented algorithms.",
      topics: [
        {
          id: "system-design-dsa",
          title: "System Design Algorithms",
          description: "Algorithms behind distributed systems.",
          subtopics: [
            {
              id: "consistent-hashing",
              title: "Consistent Hashing — distributed cache sharding",
            },
            { id: "rendezvous-hashing", title: "Rendezvous (HRW) hashing" },
            {
              id: "vector-clocks",
              title: "Vector Clocks — distributed event ordering",
            },
            {
              id: "crdt-intro",
              title: "CRDT — Conflict-free Replicated Data Types (intro)",
            },
            { id: "raft-intro", title: "Raft Consensus algorithm (intro)" },
          ],
        },
        {
          id: "advanced-ds-production",
          title: "Advanced Data Structures for Production",
          description: "Data structures used in production systems.",
          subtopics: [
            { id: "skip-list", title: "Skip List — O(log n) ordered data" },
            {
              id: "trie-autocomplete",
              title: "Trie — prefix search & autocomplete",
            },
            {
              id: "interval-tree",
              title: "Interval Tree — range overlap queries",
            },
            {
              id: "circular-buffer",
              title: "Circular Buffer for streaming data",
            },
            { id: "probabilistic-ds", title: "HyperLogLog & Count-Min Sketch" },
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
      description: "Staff Engineer interview prep.",
      topics: [
        {
          id: "framework-architecture-qa",
          title: "Framework & Architecture Q&A",
          description: "Senior architectural interview questions.",
          subtopics: [
            {
              id: "nestjs-di-qa",
              title: "How does NestJS dependency injection work?",
            },
            {
              id: "microservices-tradeoffs-qa",
              title: "When to use microservices vs monolith?",
            },
            { id: "grpc-vs-rest-qa", title: "gRPC vs REST — use cases" },
            {
              id: "saga-orchestration-qa",
              title: "Saga orchestration vs choreography",
            },
            {
              id: "circuit-breaker-qa",
              title: "What is the Circuit Breaker pattern?",
            },
          ],
        },
        {
          id: "testing-prod-qa",
          title: "Testing & Production Q&A",
          description: "Testing and production readiness questions.",
          subtopics: [
            {
              id: "unit-vs-integration-qa",
              title: "Unit vs integration vs E2E testing",
            },
            {
              id: "supertest-usecase-qa",
              title: "How do you test HTTP APIs in Node.js?",
            },
            {
              id: "memory-leak-qa",
              title: "How do you debug a memory leak in Node.js?",
            },
            {
              id: "zero-downtime-deploy-qa",
              title: "How do you achieve zero-downtime deployments?",
            },
            {
              id: "observability-qa",
              title: "Difference between monitoring and observability",
            },
          ],
        },
        {
          id: "docker-k8s-qa",
          title: "Docker & Kubernetes Q&A",
          description: "Containerization and orchestration questions.",
          subtopics: [
            {
              id: "multistage-docker-qa",
              title: "Why use multi-stage Docker builds?",
            },
            {
              id: "k8s-health-probe-qa",
              title: "k8s liveness vs readiness probe difference?",
            },
            { id: "hpa-qa", title: "How does Horizontal Pod Autoscaler work?" },
            {
              id: "k8s-secret-qa",
              title: "How do you manage secrets in Kubernetes?",
            },
            {
              id: "container-restart-qa",
              title: "Why should containers be run as non-root?",
            },
          ],
        },
        {
          id: "system-design-exercises",
          title: "System Design Exercises",
          description: "Staff-level system design challenges.",
          subtopics: [
            { id: "url-shortener", title: "Design a URL shortener (TinyURL)" },
            {
              id: "rate-limiter-design",
              title: "Design a distributed rate limiter",
            },
            {
              id: "notification-service",
              title: "Design a notification service",
            },
            {
              id: "job-queue-design",
              title: "Design a background job processing system",
            },
            { id: "api-gateway-design", title: "Design an API Gateway" },
          ],
        },
      ],
    },
  ],
};
