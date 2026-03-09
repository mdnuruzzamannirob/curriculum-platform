import { Level } from "@/types";

export const l5Level: Level = {
  id: "mastery",
  title: "NestJS Mastery",
  description: "Principal / Lead",
  color: "#34d399",
  modules: [
    // ── NestJS ───────────────────────────────────────────
    {
      id: "nestjs",
      title: "NestJS",
      icon: "sparkles",
      color: "#e0234e",
      description:
        "NestJS mastery — internals, serverless, system design, and leading teams.",
      topics: [
        {
          id: "nestjs-internals",
          title: "NestJS Internals & IoC Container",
          description: "How NestJS builds and manages the dependency graph.",
          subtopics: [
            {
              id: "reflect-metadata",
              title: "Reflect.metadata and the decorator metadata system",
            },
            {
              id: "ioc-container-internals",
              title: "NestJS IoC container — NestContainer, Module graph",
            },
            {
              id: "scanner-and-resolver",
              title: "DependenciesScanner and InstanceLoader internals",
            },
            {
              id: "discovery-service",
              title:
                "DiscoveryService — scanning providers and controllers at runtime",
            },
            {
              id: "metadata-scanner",
              title: "MetadataScanner — iterating methods with their metadata",
            },
            {
              id: "execution-context-deep",
              title: "ExecutionContext deep dive — HTTP vs WS vs RPC contexts",
            },
            {
              id: "argument-host",
              title: "ArgumentsHost — switchToHttp/Ws/Rpc adapters",
            },
            {
              id: "app-lifecycle-hooks",
              title:
                "Lifecycle hooks — OnModuleInit, OnModuleDestroy, BeforeApplicationShutdown",
            },
            {
              id: "nest-application-context",
              title: "NestApplicationContext — standalone app without HTTP",
            },
          ],
        },
        {
          id: "grpc-nestjs",
          title: "gRPC with NestJS",
          description: "High-performance RPC with gRPC transport.",
          subtopics: [
            {
              id: "grpc-install-nest",
              title: "@grpc/grpc-js & @grpc/proto-loader — install",
            },
            {
              id: "grpc-transport-options",
              title:
                "ClientOptions with GRPC transport — protoPath, package, url",
            },
            {
              id: "grpc-options-server",
              title: "NestFactory.createMicroservice with GrpcOptions",
            },
            {
              id: "grpc-controller-pattern",
              title: "@GrpcMethod() & @GrpcStreamMethod() decorators",
            },
            {
              id: "proto-file-design",
              title: "Designing .proto files — service, rpc, message types",
            },
            {
              id: "grpc-client-proxy",
              title: "ClientGrpc — getService<T>() typed gRPC proxy",
            },
            {
              id: "grpc-vs-rest-nest",
              title:
                "gRPC vs REST in NestJS microservices — latency/typing trade-offs",
            },
            {
              id: "grpc-streaming",
              title:
                "Server streaming, client streaming, bidirectional streaming",
            },
          ],
        },
        {
          id: "serverless-nestjs",
          title: "Serverless NestJS",
          description: "Running NestJS on serverless platforms.",
          subtopics: [
            {
              id: "serverless-express-adapter",
              title: "@vendia/serverless-express with NestJS — AWS Lambda",
            },
            {
              id: "lambda-handler-nest",
              title:
                "handler.ts — bootstrapping NestJS for cold start optimization",
            },
            {
              id: "warmup-cold-start",
              title: "Cold start mitigation — reuse app instance in lambda",
            },
            {
              id: "vercel-nestjs",
              title: "Deploying NestJS to Vercel as an API",
            },
            {
              id: "netlify-functions-nest",
              title: "NestJS on Netlify Functions",
            },
            {
              id: "serverless-framework-nest",
              title: "serverless.yml configuration for NestJS",
            },
            {
              id: "lambda-limitations-nest",
              title:
                "Serverless limitations — no WebSockets, cold starts, stateless",
            },
          ],
        },
        {
          id: "library-plugin-authoring",
          title: "NestJS Library & Plugin Authoring",
          description: "Creating re-usable open-source NestJS packages.",
          subtopics: [
            {
              id: "nestjs-module-library-structure",
              title:
                "Filing a NestJS library — module, service, decorators, index",
            },
            {
              id: "dynamic-module-library",
              title: "Exposing forRoot and forRootAsync on your library module",
            },
            {
              id: "peer-dependencies",
              title: "peer dependencies vs dependencies in NestJS libraries",
            },
            {
              id: "ng-packagr-nest",
              title:
                "Bundling NestJS library with tsup or tsc for distribution",
            },
            {
              id: "testing-library-nest",
              title: "Testing your NestJS library with TestingModule",
            },
            {
              id: "publish-npm-nestjs",
              title:
                "Publishing to npm — package.json, exports map, .d.ts files",
            },
            {
              id: "nestjs-devtools",
              title: "NestJS Devtools — graph visualization for modules",
            },
          ],
        },
        {
          id: "advanced-cqrs-event-sourcing",
          title: "Advanced CQRS & Event Sourcing",
          description: "Production-grade CQRS and event sourcing.",
          subtopics: [
            {
              id: "event-sourcing-concept",
              title: "Event sourcing — storing events as source of truth",
            },
            {
              id: "aggregate-root",
              title:
                "AggregateRoot in @nestjs/cqrs — apply() and uncommitted events",
            },
            {
              id: "event-store-nest",
              title:
                "Event store — persisting domain events (EventStoreDB, PostgreSQL)",
            },
            {
              id: "read-model-projection",
              title: "Read models and projections from event stream",
            },
            {
              id: "snapshot-pattern",
              title:
                "Snapshot pattern — periodic state snapshots for performance",
            },
            {
              id: "process-manager-nest",
              title:
                "Process manager (saga) — coordinating multiple aggregates",
            },
            {
              id: "eventual-consistency",
              title: "Eventual consistency design — handling async projections",
            },
            {
              id: "cqrs-microservices",
              title: "CQRS across microservices — distributing commands/events",
            },
          ],
        },
        {
          id: "custom-transport-strategy",
          title: "Custom Transport Strategy",
          description: "Writing a custom NestJS microservice transport.",
          subtopics: [
            {
              id: "custom-transport-interface",
              title:
                "CustomTransportStrategy — implementing listen() and close()",
            },
            {
              id: "server-custom-transport",
              title: "Server class extending Server + CustomTransportStrategy",
            },
            {
              id: "client-custom-transport",
              title:
                "Client class extending ClientProxy — connect(), dispatchEvent()",
            },
            {
              id: "custom-serializer-deserializer",
              title: "Custom serializer/deserializer — IncomingRequest shape",
            },
            {
              id: "real-world-custom-transport",
              title: "Real-world example: NATS custom transport",
            },
          ],
        },
        {
          id: "performance-nestjs",
          title: "Performance Tuning",
          description: "Optimizing NestJS application performance.",
          subtopics: [
            {
              id: "fastify-adapter",
              title: "FastifyAdapter — @nestjs/platform-fastify for throughput",
            },
            {
              id: "fastify-vs-express",
              title: "Fastify vs Express adapter — benchmarks and trade-offs",
            },
            {
              id: "exclude-interceptor-routes",
              title: "Avoid global interceptors on high-throughput routes",
            },
            {
              id: "connection-pool-tuning",
              title: "Database connection pool tuning — TypeORM extra.max",
            },
            {
              id: "response-stream-nest",
              title: "Streaming responses — StreamableFile and large payloads",
            },
            {
              id: "compressison-nest",
              title:
                "Response compression — @fastify/compress or compress middleware",
            },
            {
              id: "heap-profiling-nest",
              title: "Node.js heap profiling with --prof and clinic.js",
            },
            {
              id: "load-testing-nestjs",
              title: "Load testing NestJS with autocannon or k6",
            },
          ],
        },
        {
          id: "system-design-nestjs",
          title: "System Design with NestJS",
          description: "Architecture decision-making at scale.",
          subtopics: [
            {
              id: "modular-monolith-nest",
              title: "Modular monolith vs microservices with NestJS",
            },
            {
              id: "strangler-fig-nest",
              title:
                "Strangler fig pattern — migrating a monolith to NestJS microservices",
            },
            {
              id: "api-gateway-nest",
              title: "API gateway with NestJS — BFF pattern",
            },
            {
              id: "domain-modules-design",
              title: "Domain-driven module design — bounded contexts in NestJS",
            },
            {
              id: "shared-kernel-nest",
              title: "Shared kernel library between NestJS microservices",
            },
            {
              id: "outbox-pattern-nest",
              title: "Transactional outbox pattern — atomic DB + event publish",
            },
            {
              id: "idempotency-nest",
              title: "Idempotency keys — preventing duplicate operations",
            },
            {
              id: "multi-tenancy-nest",
              title:
                "Multi-tenancy — schema-per-tenant vs row-level with NestJS",
            },
          ],
        },
        {
          id: "nestjs-ecosystem",
          title: "NestJS Ecosystem & Roadmap",
          description: "The broader NestJS community and future directions.",
          subtopics: [
            {
              id: "official-packages-list",
              title: "Official @nestjs/* packages overview",
            },
            {
              id: "nestjs-config-best-practice",
              title:
                "Config best practices — Joi validation, nested config objects",
            },
            {
              id: "nestjs-version-lifecycle",
              title: "NestJS LTS and version support lifecycle",
            },
            {
              id: "nestjs-contribute",
              title: "Contributing to NestJS — issues, RFCs, pull requests",
            },
            {
              id: "nestjs-community-tools",
              title:
                "Community tools — nestjs-cls, nestjs-query, nestjs-paginate",
            },
            {
              id: "nestjs-vs-alternatives",
              title:
                "NestJS vs Fastify standalone vs tRPC — choosing the right tool",
            },
            {
              id: "nestjs-roadmap-official",
              title: "Official NestJS roadmap — upcoming features",
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
      description:
        "Principal/Lead NestJS interview and system design questions.",
      topics: [
        {
          id: "internals-mastery-qa",
          title: "NestJS Internals Q&A",
          description: "Deep internals interview questions.",
          subtopics: [
            {
              id: "ioc-container-qa",
              title: "How does NestJS build its IoC container at startup?",
            },
            {
              id: "reflect-metadata-qa",
              title: "What role does Reflect.metadata play in NestJS?",
            },
            {
              id: "discovery-service-qa",
              title:
                "How would you use DiscoveryService to find all decorated providers?",
            },
            {
              id: "execution-context-qa",
              title:
                "How is ExecutionContext different for HTTP vs WebSocket vs gRPC?",
            },
            {
              id: "standalone-app-qa",
              title:
                "What is a NestJS standalone application and when would you use it?",
            },
            {
              id: "lifecycle-hooks-order-qa",
              title: "In what order do NestJS lifecycle hooks fire?",
            },
            {
              id: "custom-transport-qa",
              title:
                "How would you implement a custom microservice transport strategy?",
            },
            {
              id: "arguments-host-qa",
              title:
                "What does ArgumentsHost provide and how do you use it in a filter?",
            },
          ],
        },
        {
          id: "advanced-architecture-qa",
          title: "Advanced Architecture Q&A",
          description: "System design and architectural decision questions.",
          subtopics: [
            {
              id: "event-sourcing-qa",
              title: "Explain event sourcing and how @nestjs/cqrs supports it",
            },
            {
              id: "aggregate-root-qa",
              title: "What is an AggregateRoot in CQRS?",
            },
            {
              id: "outbox-pattern-qa",
              title:
                "What is the transactional outbox pattern and how do you implement it?",
            },
            {
              id: "domain-modules-qa",
              title:
                "How would you design NestJS modules around domain boundaries?",
            },
            {
              id: "multi-tenancy-nest-qa",
              title: "How do you implement multi-tenancy in NestJS?",
            },
            {
              id: "modular-monolith-qa",
              title:
                "When would you choose a modular monolith over microservices in NestJS?",
            },
            {
              id: "grpc-vs-rest-qa",
              title: "When would you switch from REST to gRPC in a NestJS app?",
            },
            {
              id: "serverless-tradeoffs-qa",
              title: "What are the trade-offs of running NestJS on AWS Lambda?",
            },
          ],
        },
        {
          id: "leadership-mastery-qa",
          title: "Performance & Leadership Q&A",
          description: "Performance and team leadership questions.",
          subtopics: [
            {
              id: "fastify-adapter-qa",
              title: "How and why would you switch to the Fastify adapter?",
            },
            {
              id: "heap-profiling-qa",
              title: "How do you profile a NestJS app for memory leaks?",
            },
            {
              id: "cold-start-lambda-qa",
              title: "How do you optimize NestJS cold starts on Lambda?",
            },
            {
              id: "load-testing-qa",
              title: "How do you load test a NestJS API?",
            },
            {
              id: "library-authoring-qa",
              title: "How do you publish a reusable NestJS module to npm?",
            },
            {
              id: "code-review-nestjs-qa",
              title: "What do you look for when reviewing NestJS code?",
            },
            {
              id: "nestjs-team-onboarding-qa",
              title:
                "How would you onboard a junior developer to a NestJS codebase?",
            },
            {
              id: "nestjs-vs-fastify-qa",
              title:
                "NestJS vs Fastify vs Express — your recommendation and rationale",
            },
          ],
        },
      ],
    },
  ],
};
