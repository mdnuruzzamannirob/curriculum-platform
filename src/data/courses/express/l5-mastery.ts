import { Level } from "@/types";

export const l5Level: Level = {
  id: "mastery",
  title: "Express.js Mastery",
  description: "Principal / Lead",
  color: "#34d399",
  modules: [
    // ── Express ──────────────────────────────────────────
    {
      id: "express",
      title: "Express",
      icon: "layers",
      color: "#e67e22",
      description: "Express.js mastery — internals, architecture & ecosystem.",
      topics: [
        {
          id: "express-internals",
          title: "Express.js Internals — Router & Middleware Engine",
          description: "Understanding how Express works under the hood.",
          subtopics: [
            {
              id: "express-application-object",
              title: "Express Application object — prototype chain",
            },
            {
              id: "express-router-internals",
              title: "Express Router internals — Layer class",
            },
            {
              id: "middleware-stack",
              title: "Middleware stack — push, pop, traverse",
            },
            {
              id: "route-matching-algorithm",
              title: "Route matching algorithm — path-to-regexp",
            },
            {
              id: "req-res-augmentation",
              title: "How Express augments Node's req/res",
            },
            {
              id: "express-response-prototype",
              title: "Express response prototype methods",
            },
            {
              id: "app-settings-internals",
              title: "App settings and view engine resolution",
            },
            {
              id: "express-code-reading",
              title: "Reading Express source code — key files",
            },
          ],
        },
        {
          id: "microservices-express",
          title: "Microservices with Express",
          description: "Designing microservices using Express.",
          subtopics: [
            {
              id: "microservices-intro",
              title: "Microservices — principles and trade-offs vs monolith",
            },
            {
              id: "service-decomposition",
              title: "Service decomposition by domain (DDD bounded contexts)",
            },
            {
              id: "inter-service-http",
              title:
                "Synchronous inter-service communication (HTTP/REST, axios)",
            },
            {
              id: "inter-service-grpc",
              title: "gRPC for efficient service-to-service calls",
            },
            {
              id: "inter-service-events",
              title: "Asynchronous communication — events and message queues",
            },
            {
              id: "service-discovery",
              title: "Service discovery — Consul, Kubernetes DNS",
            },
            {
              id: "circuit-breaker",
              title: "Circuit breaker pattern (opossum library)",
            },
            {
              id: "bulkhead-pattern",
              title: "Bulkhead pattern — isolating failures",
            },
            {
              id: "distributed-logging",
              title: "Distributed logging with correlation IDs",
            },
            {
              id: "microservices-testing",
              title: "Contract testing with Pact.io",
            },
          ],
        },
        {
          id: "api-gateway-patterns",
          title: "API Gateway Patterns",
          description: "Implementing API gateways with Express.",
          subtopics: [
            {
              id: "api-gateway-role",
              title: "API gateway role — single entry point",
            },
            {
              id: "express-as-gateway",
              title: "Express as a lightweight API gateway",
            },
            {
              id: "reverse-proxy-http-proxy",
              title: "http-proxy-middleware — request proxying",
            },
            {
              id: "gateway-auth",
              title: "Centralized authentication in gateway",
            },
            {
              id: "gateway-rate-limiting",
              title: "Rate limiting at the gateway layer",
            },
            {
              id: "gateway-request-transform",
              title: "Request/response transformation",
            },
            {
              id: "gateway-aggregation",
              title: "Request aggregation — BFF (Backend for Frontend)",
            },
            {
              id: "kong-nginx-comparison",
              title: "Express gateway vs Kong vs NGINX — trade-offs",
            },
          ],
        },
        {
          id: "event-driven-architecture",
          title: "Event-Driven Architecture",
          description: "Building event-driven systems with Express.",
          subtopics: [
            {
              id: "event-driven-intro",
              title: "Event-driven architecture — events, producers, consumers",
            },
            {
              id: "domain-events",
              title: "Domain events — decoupling business logic",
            },
            {
              id: "event-bus-express",
              title: "In-process event bus with Node.js EventEmitter",
            },
            {
              id: "kafka-express",
              title: "Apache Kafka with kafkajs — producer and consumer",
            },
            {
              id: "rabbitmq-express",
              title: "RabbitMQ with amqplib — exchanges and routing keys",
            },
            {
              id: "outbox-pattern",
              title:
                "Transactional outbox pattern — guaranteeing event delivery",
            },
            {
              id: "event-sourcing",
              title: "Event sourcing — storing events as state",
            },
            {
              id: "cqrs-express",
              title: "CQRS — Command Query Responsibility Segregation",
            },
          ],
        },
        {
          id: "grpc-express",
          title: "gRPC with Express / Node.js",
          description: "Efficient binary communication with gRPC.",
          subtopics: [
            {
              id: "protobuf-basics",
              title: "Protocol Buffers — .proto file syntax",
            },
            {
              id: "grpc-node-setup",
              title: "@grpc/grpc-js — server and client setup",
            },
            {
              id: "grpc-service-definition",
              title: "Defining services and RPCs in proto",
            },
            { id: "grpc-unary", title: "Unary RPC — request/response" },
            {
              id: "grpc-streaming",
              title:
                "Server streaming, client streaming, bidirectional streaming",
            },
            {
              id: "grpc-interceptors",
              title: "gRPC interceptors — auth, logging, metrics",
            },
            {
              id: "grpc-gateway",
              title: "grpc-gateway — transcoding gRPC to REST",
            },
            {
              id: "grpc-vs-rest",
              title: "gRPC vs REST — performance and use cases",
            },
          ],
        },
        {
          id: "advanced-security",
          title: "Advanced Security",
          description: "Defense in depth for Express APIs.",
          subtopics: [
            {
              id: "security-headers-adv",
              title:
                "Advanced security headers — Permissions-Policy, CORP, COEP",
            },
            { id: "zero-trust", title: "Zero-trust security model for APIs" },
            {
              id: "tls-mutual-auth",
              title: "Mutual TLS (mTLS) — client certificate authentication",
            },
            {
              id: "pen-testing",
              title: "Penetration testing Express APIs (OWASP ZAP)",
            },
            {
              id: "secrets-vault",
              title: "Secrets management with HashiCorp Vault",
            },
            {
              id: "audit-logging",
              title: "Security audit logging — who did what when",
            },
            {
              id: "threat-modeling",
              title: "Threat modeling for API design (STRIDE)",
            },
            {
              id: "supply-chain-security",
              title: "Software supply chain security (Snyk, SBOM)",
            },
          ],
        },
        {
          id: "custom-plugins-extensions",
          title: "Custom Plugins & Extending Express",
          description: "Extending Express with custom abstractions.",
          subtopics: [
            {
              id: "extending-req-res",
              title: "Extending req/res with custom properties",
            },
            {
              id: "express-plugin-pattern",
              title: "Plugin pattern — injectable middleware factories",
            },
            {
              id: "custom-router-class",
              title: "Creating a custom Router subclass",
            },
            {
              id: "framework-wrapper",
              title: "Building a thin framework wrapper over Express",
            },
            {
              id: "opentelemetry-custom",
              title: "Custom OpenTelemetry instrumentation",
            },
            {
              id: "express-version-5",
              title: "Express 5 — new features and async route handlers",
            },
          ],
        },
        {
          id: "system-design-express",
          title: "System Design with Express",
          description: "Designing large-scale systems using Express.",
          subtopics: [
            {
              id: "design-url-shortener",
              title:
                "Design a URL shortener service (Express + Redis + PostgreSQL)",
            },
            {
              id: "design-chat-app",
              title:
                "Design a real-time chat application (Express + Socket.IO + Redis)",
            },
            {
              id: "design-file-upload",
              title: "Design a large file upload system (multipart, S3, CDN)",
            },
            {
              id: "design-auth-service",
              title: "Design an authentication service (JWT, OAuth2, MFA)",
            },
            {
              id: "design-notification",
              title: "Design a notification service (webhooks, SSE, WebSocket)",
            },
            {
              id: "design-rate-limiter",
              title: "Design a distributed rate limiter (Redis sliding window)",
            },
            {
              id: "design-api-gateway",
              title: "Design an API gateway (auth, rate limit, proxy, cache)",
            },
            {
              id: "cap-theorem-express",
              title: "CAP theorem — impact on Express + database design",
            },
          ],
        },
        {
          id: "open-source-ecosystem",
          title: "Open-Source & Express Ecosystem",
          description: "Contributing and extending the Express ecosystem.",
          subtopics: [
            {
              id: "express-lifecycle",
              title: "Express.js project lifecycle and governance",
            },
            {
              id: "express-alternatives",
              title: "Express alternatives — Fastify, Koa, Hapi, NestJS",
            },
            {
              id: "publishing-npm-package",
              title: "Publishing an Express middleware as npm package",
            },
            {
              id: "semantic-versioning",
              title: "Semantic versioning for published packages",
            },
            {
              id: "contributing-express",
              title: "Contributing to Express.js on GitHub",
            },
            {
              id: "express-roadmap",
              title: "Express.js roadmap — what's coming in v5",
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
      description: "Principal/expert-level Express interview questions.",
      topics: [
        {
          id: "system-design-qa",
          title: "System Design Q&A",
          description: "System design questions for senior/principal roles.",
          subtopics: [
            {
              id: "design-scalable-api-qa",
              title: "How would you design a scalable REST API for 1M users?",
            },
            {
              id: "design-real-time-qa",
              title: "Design a real-time notification system",
            },
            {
              id: "design-auth-system-qa",
              title:
                "Design a complete authentication system (JWT + refresh + MFA)",
            },
            {
              id: "cap-theorem-qa",
              title: "Explain CAP theorem and how it affects API design",
            },
            {
              id: "consistent-hashing-qa",
              title: "What is consistent hashing? Where is it used?",
            },
            {
              id: "event-sourcing-qa",
              title:
                "What is event sourcing? Trade-offs vs traditional storage?",
            },
            { id: "cqrs-qa", title: "What is CQRS and when would you use it?" },
            {
              id: "saga-transactions-qa",
              title:
                "How do you handle distributed transactions with Saga pattern?",
            },
          ],
        },
        {
          id: "microservices-qa",
          title: "Microservices Q&A",
          description: "Microservices architecture interview questions.",
          subtopics: [
            {
              id: "microservices-benefits-qa",
              title: "What are the benefits and drawbacks of microservices?",
            },
            {
              id: "service-decomposition-qa",
              title: "How do you decide how to decompose a monolith?",
            },
            {
              id: "circuit-breaker-qa",
              title:
                "What is the circuit breaker pattern and when does it trip?",
            },
            {
              id: "inter-service-auth-qa",
              title: "How do you authenticate between microservices?",
            },
            {
              id: "data-consistency-qa",
              title: "How do you maintain data consistency across services?",
            },
            {
              id: "service-mesh-qa",
              title: "What is a service mesh? (Istio, Linkerd)",
            },
            {
              id: "contract-testing-qa",
              title: "What is contract testing? How does Pact work?",
            },
            {
              id: "grpc-vs-rest-ms-qa",
              title: "gRPC vs REST for inter-service communication?",
            },
          ],
        },
        {
          id: "expert-architecture-qa",
          title: "Expert Architecture & Leadership Q&A",
          description: "Expert-level architectural questions.",
          subtopics: [
            {
              id: "express-internals-qa",
              title: "How does Express.js routing work internally?",
            },
            {
              id: "express-vs-fastify-deep-qa",
              title: "Deep comparison: Express vs Fastify internals",
            },
            {
              id: "zero-trust-qa",
              title: "Explain the zero-trust security model for APIs",
            },
            {
              id: "mtls-qa",
              title: "What is mutual TLS and when do you use it?",
            },
            {
              id: "open-telemetry-qa",
              title:
                "What is OpenTelemetry? How do you add tracing to Express?",
            },
            {
              id: "technical-debt-qa",
              title:
                "How do you manage technical debt in a large Express codebase?",
            },
            {
              id: "api-breaking-change-qa",
              title:
                "How do you introduce a breaking API change without downtime?",
            },
            {
              id: "10x-requests-qa",
              title:
                "Your Express app needs to handle 10x traffic tonight — what do you do?",
            },
          ],
        },
      ],
    },
  ],
};
