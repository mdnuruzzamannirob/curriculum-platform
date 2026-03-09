import { Level } from "@/types";

export const l4Level: Level = {
  id: "professional",
  title: "NestJS in Production",
  description: "Staff Engineer",
  color: "#38bdf8",
  modules: [
    // ── NestJS ───────────────────────────────────────────
    {
      id: "nestjs",
      title: "NestJS",
      icon: "sparkles",
      color: "#e0234e",
      description: "Production NestJS — DI internals, testing, and scaling.",
      topics: [
        {
          id: "advanced-di",
          title: "Advanced Dependency Injection",
          description: "Custom providers and advanced IoC patterns.",
          subtopics: [
            {
              id: "use-value-provider",
              title: "useValue provider — { provide: TOKEN, useValue: val }",
            },
            {
              id: "use-class-provider",
              title:
                "useClass provider — { provide: SERVICE, useClass: MockService }",
            },
            {
              id: "use-factory-provider",
              title: "useFactory provider — asynchronous factory with inject",
            },
            {
              id: "use-existing-provider",
              title: "useExisting provider — aliasing tokens",
            },
            {
              id: "async-providers",
              title:
                "Async providers with useFactory — waiting for external config",
            },
            {
              id: "injection-token",
              title:
                "Custom injection tokens — Symbol/string vs InjectionToken",
            },
            {
              id: "module-ref",
              title:
                "ModuleRef — resolve(), get(), create() for dynamic access",
            },
            {
              id: "lazy-providers",
              title: "Lazy-loaded modules — LazyModuleLoader",
            },
            {
              id: "scoped-providers",
              title: "Request-scoped providers — { scope: Scope.REQUEST }",
            },
            {
              id: "transient-providers",
              title: "Transient-scoped providers — { scope: Scope.TRANSIENT }",
            },
            {
              id: "circular-deps",
              title:
                "Circular dependencies — forwardRef() and why to avoid them",
            },
          ],
        },
        {
          id: "dynamic-modules",
          title: "Dynamic Modules",
          description: "Creating re-usable, configurable NestJS modules.",
          subtopics: [
            {
              id: "dynamic-module-interface",
              title:
                "DynamicModule interface — module, imports, providers, exports",
            },
            {
              id: "forroot-pattern",
              title: "Module.forRoot(options) — configuring a library module",
            },
            {
              id: "forroot-async-pattern",
              title:
                "Module.forRootAsync({ useFactory, inject }) — using ConfigService",
            },
            {
              id: "forfeature-pattern",
              title: "Module.forFeature([Entity]) — feature registration",
            },
            {
              id: "register-pattern",
              title: "Module.register(options) — per-use configuration",
            },
            {
              id: "register-async-pattern",
              title: "Module.registerAsync({ useFactory }) — async per-use",
            },
            {
              id: "dynamic-module-real-world",
              title:
                "Building a reusable NotificationsModule with dynamic config",
            },
            {
              id: "config-options-type",
              title: "Typing options with interface and MODULE_OPTIONS_TOKEN",
            },
          ],
        },
        {
          id: "custom-decorators",
          title: "Custom Decorators",
          description: "Building reusable decorators in NestJS.",
          subtopics: [
            {
              id: "create-param-decorator",
              title:
                "createParamDecorator((data, ctx) => ...) — custom @User()",
            },
            {
              id: "set-metadata",
              title: "SetMetadata(KEY, value) — attaching metadata to handlers",
            },
            {
              id: "apply-decorators",
              title: "applyDecorators(Guard, ApiAuth) — composing decorators",
            },
            {
              id: "reflector-usage",
              title:
                "Reflector.get / getAllAndOverride in guards & interceptors",
            },
            {
              id: "class-decorator-nest",
              title: "Class-level vs method-level decorator precedence",
            },
            {
              id: "property-decorator-nest",
              title: "Property decorators with Reflect.metadata",
            },
            {
              id: "combined-auth-decorator",
              title: "Practical: @Auth('admin') combining @UseGuards + @Roles",
            },
          ],
        },
        {
          id: "testing-nestjs",
          title: "Testing in NestJS",
          description: "Unit and e2e testing NestJS applications.",
          subtopics: [
            {
              id: "testingmodule",
              title: "Test.createTestingModule({ imports, providers }) — setup",
            },
            {
              id: "mock-providers-jest",
              title:
                "Mocking providers with { provide: Service, useValue: mockObj }",
            },
            {
              id: "testing-controllers",
              title:
                "Testing controllers — calling controller methods directly",
            },
            {
              id: "testing-services",
              title: "Testing services — injecting mocked dependencies",
            },
            {
              id: "testing-guards-pipes",
              title: "Testing guards and pipes — CanActivate, transform",
            },
            {
              id: "supertest-e2e",
              title: "supertest with app.getHttpServer() — e2e request testing",
            },
            {
              id: "e2e-test-setup",
              title: "E2E test setup — beforeAll createTestingModule + listen",
            },
            {
              id: "test-database",
              title:
                "Test database strategies — SQLite in-memory vs docker-compose",
            },
            {
              id: "coverage-nest",
              title: "Jest coverage — jest --coverage for NestJS apps",
            },
            {
              id: "jest-factory-mock",
              title: "jest.fn() factory function mocks for repositories",
            },
            {
              id: "testing-events-queue",
              title: "Testing event-emitter and BullMQ processors",
            },
          ],
        },
        {
          id: "interceptor-patterns",
          title: "Advanced Interceptor Patterns",
          description: "Production interceptor use cases.",
          subtopics: [
            {
              id: "logging-interceptor",
              title: "Logging interceptor — tapResponse + execution context",
            },
            {
              id: "transform-interceptor",
              title: "Transform interceptor — wrapping response in { data }",
            },
            {
              id: "timeout-interceptor",
              title: "Timeout interceptor — RxJS timeout operator",
            },
            {
              id: "circuit-breaker-interceptor",
              title: "Circuit-breaker interceptor — catching and re-throwing",
            },
            {
              id: "cache-interceptor-custom",
              title: "Custom cache interceptor — overriding trackBy()",
            },
            {
              id: "global-interceptor-bind",
              title: "Binding interceptors globally with APP_INTERCEPTOR token",
            },
          ],
        },
        {
          id: "rate-limiting-nestjs",
          title: "Rate Limiting — @nestjs/throttler",
          description: "Protecting NestJS APIs with rate limiting.",
          subtopics: [
            {
              id: "throttler-module",
              title:
                "ThrottlerModule.forRoot([{ ttl, limit }]) — global config",
            },
            {
              id: "throttler-guard",
              title: "ThrottlerGuard — APP_GUARD global or per-route",
            },
            {
              id: "skip-throttle",
              title: "@SkipThrottle() — disable rate limiting for a route",
            },
            {
              id: "throttle-override",
              title:
                "@Throttle({ default: { limit, ttl } }) — per-route override",
            },
            {
              id: "throttler-storage-redis",
              title: "ThrottlerStorageRedisService — distributed rate limiting",
            },
          ],
        },
        {
          id: "docker-production-nestjs",
          title: "Docker & Production Deployment",
          description: "Containerizing and deploying NestJS apps.",
          subtopics: [
            {
              id: "dockerfile-nestjs",
              title:
                "Multi-stage Dockerfile for NestJS — build + production stage",
            },
            {
              id: "docker-compose-nestjs",
              title: "docker-compose.yml — app, db, redis services",
            },
            {
              id: "env-config-production",
              title:
                "Production env config — ConfigModule.forRoot({ cache, expandVariables })",
            },
            {
              id: "graceful-shutdown",
              title:
                "Graceful shutdown — app.enableShutdownHooks() + OnApplicationShutdown",
            },
            {
              id: "compression-helmet",
              title: "compression + helmet middleware for production",
            },
            {
              id: "cors-nest-production",
              title:
                "CORS configuration — app.enableCors({ origin, credentials })",
            },
            {
              id: "pm2-nestjs",
              title: "PM2 cluster mode for Node.js NestJS apps",
            },
            {
              id: "kubernetes-nestjs",
              title:
                "Kubernetes deployment — Deployment, Service, ConfigMap, probes",
            },
          ],
        },
        {
          id: "monitoring-observability",
          title: "Monitoring & Observability",
          description: "Logging, metrics, and tracing in NestJS.",
          subtopics: [
            {
              id: "logger-nestjs",
              title: "Built-in Logger — Logger.log/error/warn/debug/verbose",
            },
            {
              id: "logger-context",
              title:
                "Logger context injection — private readonly logger = new Logger()",
            },
            {
              id: "pino-logger",
              title: "nestjs-pino — structured JSON logging with pino",
            },
            {
              id: "prometheus-metrics",
              title: "prom-client + custom metrics endpoint for NestJS",
            },
            {
              id: "nestjs-prometheus",
              title:
                "@willsoto/nestjs-prometheus — CounterProvider, GaugeProvider",
            },
            {
              id: "opentelemetry-nest",
              title: "OpenTelemetry with NestJS — auto-instrumentation",
            },
            {
              id: "sentry-nest",
              title: "@ntegral/nestjs-sentry — error tracking integration",
            },
            {
              id: "distributed-tracing-nest",
              title:
                "Distributed tracing — trace context propagation across microservices",
            },
          ],
        },
        {
          id: "monorepo-nx-nestjs",
          title: "Monorepo with Nx + NestJS",
          description: "Managing NestJS apps in an Nx monorepo.",
          subtopics: [
            {
              id: "nx-nestjs-setup",
              title: "Creating NestJS app in Nx — nx generate @nx/nest:app",
            },
            {
              id: "nx-library-nestjs",
              title: "Shared libraries — nx generate @nx/nest:lib",
            },
            {
              id: "nx-affected",
              title: "nx affected — building/testing only changed apps",
            },
            {
              id: "nx-caching",
              title: "Nx computation caching — local and Nx Cloud",
            },
            {
              id: "code-sharing-monorepo",
              title: "Sharing DTOs, interfaces, constants across apps",
            },
            {
              id: "nx-vs-turborepo",
              title: "Nx vs Turborepo for NestJS monorepos",
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
      description: "Staff-level NestJS interview questions.",
      topics: [
        {
          id: "di-testing-qa",
          title: "DI & Testing Q&A",
          description: "Advanced dependency injection and testing questions.",
          subtopics: [
            {
              id: "custom-provider-qa",
              title:
                "Explain useValue, useClass, useFactory, useExisting with examples",
            },
            {
              id: "request-scoped-qa",
              title: "What is request scope and when do you need it?",
            },
            {
              id: "module-ref-qa",
              title: "When would you use ModuleRef over constructor injection?",
            },
            {
              id: "lazy-module-qa",
              title: "What is LazyModuleLoader and when is it used?",
            },
            {
              id: "circular-dep-qa",
              title: "How do you resolve circular dependencies in NestJS?",
            },
            {
              id: "testing-module-qa",
              title:
                "How do you unit test a NestJS service with a mocked repository?",
            },
            {
              id: "e2e-nest-qa",
              title: "How do you write e2e tests in NestJS with supertest?",
            },
            {
              id: "dynamic-module-qa",
              title:
                "Build a configurable NestJS module — what pattern do you use?",
            },
          ],
        },
        {
          id: "production-architecture-qa",
          title: "Production Architecture Q&A",
          description: "Production patterns and deployment questions.",
          subtopics: [
            {
              id: "graceful-shutdown-qa",
              title: "How does graceful shutdown work in NestJS?",
            },
            {
              id: "rate-limit-qa",
              title:
                "How do you implement distributed rate limiting in NestJS?",
            },
            {
              id: "logging-prod-qa",
              title:
                "What is your preferred logging strategy for production NestJS apps?",
            },
            {
              id: "prometheus-nestjs-qa",
              title: "How do you expose metrics from a NestJS app?",
            },
            {
              id: "docker-multistage-qa",
              title: "Describe a production Dockerfile for NestJS",
            },
            {
              id: "env-validation-qa",
              title:
                "How do you validate environment variables in NestJS at startup?",
            },
            {
              id: "otel-nest-qa",
              title:
                "How do you add distributed tracing to a NestJS microservice?",
            },
            {
              id: "nx-monorepo-qa",
              title: "What are the benefits of using Nx with NestJS?",
            },
          ],
        },
        {
          id: "interceptor-decorator-qa",
          title: "Interceptors & Decorators Q&A",
          description: "Advanced interceptor and decorator questions.",
          subtopics: [
            {
              id: "transform-interceptor-qa",
              title:
                "How do you wrap all API responses in { data } with an interceptor?",
            },
            {
              id: "timeout-interceptor-qa",
              title: "How do you add a request timeout interceptor?",
            },
            {
              id: "logging-interceptor-qa",
              title: "How do you log request/response time in NestJS?",
            },
            {
              id: "global-guard-token-qa",
              title: "How do you register a global guard?",
            },
            {
              id: "create-param-decorator-qa",
              title: "How do you create a custom @CurrentUser() decorator?",
            },
            {
              id: "reflector-guard-qa",
              title:
                "How does Reflector work when combining guards with custom metadata?",
            },
            {
              id: "app-interceptor-qa",
              title:
                "What is the difference between APP_INTERCEPTOR and @UseInterceptors?",
            },
            {
              id: "applydecorators-qa",
              title:
                "How do you compose multiple decorators with applyDecorators?",
            },
          ],
        },
      ],
    },
  ],
};
