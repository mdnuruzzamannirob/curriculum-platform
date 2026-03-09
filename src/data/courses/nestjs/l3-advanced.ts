import { Level } from "@/types";

export const l3Level: Level = {
  id: "senior",
  title: "Advanced NestJS",
  description: "Senior Dev",
  color: "#f472b6",
  modules: [
    // ── NestJS ───────────────────────────────────────────
    {
      id: "nestjs",
      title: "NestJS",
      icon: "sparkles",
      color: "#e0234e",
      description:
        "Advanced NestJS — microservices, WebSockets, GraphQL, CQRS.",
      topics: [
        {
          id: "microservices-nestjs",
          title: "Microservices with @nestjs/microservices",
          description: "Building microservices in NestJS.",
          subtopics: [
            {
              id: "microservices-install",
              title: "@nestjs/microservices — installation",
            },
            {
              id: "nestfactory-createmicroservice",
              title: "NestFactory.createMicroservice(AppModule, options)",
            },
            {
              id: "tcp-transport",
              title: "TCP transport — ClientOptions, host, port",
            },
            {
              id: "redis-transport",
              title: "Redis transport — url, wildcards",
            },
            {
              id: "rabbitmq-transport",
              title: "RabbitMQ transport — url, queue options",
            },
            {
              id: "kafka-transport",
              title: "Kafka transport — brokers, groupId, client",
            },
            {
              id: "message-pattern",
              title: "@MessagePattern(cmd) — request/response",
            },
            {
              id: "event-pattern",
              title: "@EventPattern('event') — fire-and-forget events",
            },
            { id: "client-proxy", title: "ClientProxy — send() vs emit()" },
            {
              id: "client-proxy-factory",
              title: "ClientsModule.register() & @InjectClient()",
            },
            {
              id: "hybrid-app",
              title: "Hybrid application — HTTP + microservice in one process",
            },
            {
              id: "exception-microservice",
              title: "RpcException & RpcExceptionFilter",
            },
          ],
        },
        {
          id: "websockets-nestjs",
          title: "Real-time — WebSockets & Gateways",
          description: "WebSocket gateways in NestJS.",
          subtopics: [
            {
              id: "websocket-install",
              title: "@nestjs/websockets & @nestjs/platform-socket.io",
            },
            {
              id: "websocketgateway-decorator",
              title: "@WebSocketGateway(port, { namespace, cors })",
            },
            {
              id: "subscribeMessage-decorator",
              title: "@SubscribeMessage('event') — handling events",
            },
            {
              id: "websocket-server",
              title: "@WebSocketServer() — accessing Socket.io server",
            },
            {
              id: "gateway-lifecycle",
              title: "OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect",
            },
            {
              id: "emit-from-service",
              title: "Emitting from service — injecting Server or gateway",
            },
            {
              id: "rooms-namespaces",
              title: "Rooms and namespaces in Socket.io with NestJS",
            },
            {
              id: "guards-gateways",
              title: "Guards & exception filters on WebSocket gateways",
            },
            {
              id: "ws-adapter",
              title: "WsAdapter — using native ws instead of Socket.io",
            },
          ],
        },
        {
          id: "graphql-nestjs",
          title: "GraphQL with @nestjs/graphql",
          description: "Building GraphQL APIs in NestJS.",
          subtopics: [
            {
              id: "graphql-install-nest",
              title: "@nestjs/graphql, graphql, @nestjs/apollo — install",
            },
            {
              id: "graphqlmodule-forroot",
              title: "GraphQLModule.forRoot ({ autoSchemaFile, playground })",
            },
            {
              id: "code-first-approach",
              title: "Code-first approach — schema generated from decorators",
            },
            {
              id: "objecttype-field",
              title: "@ObjectType() & @Field() — defining GraphQL types",
            },
            { id: "resolver-decorator", title: "@Resolver() — resolver class" },
            {
              id: "query-resolver",
              title: "@Query(() => [User]) — query resolver method",
            },
            {
              id: "mutation-resolver",
              title: "@Mutation(() => User) — mutation resolver method",
            },
            {
              id: "inputtype-argstype",
              title: "@InputType() for mutations, @ArgsType() for queries",
            },
            { id: "resolver-args", title: "@Args('id') — resolver arguments" },
            {
              id: "subscriptions-graphql",
              title: "@Subscription() — real-time subscriptions with PubSub",
            },
            {
              id: "dataloader-nest",
              title: "DataLoader to solve N+1 — @nestjs/dataloader",
            },
            {
              id: "context-graphql",
              title: "GraphQL context — passing request/user to resolvers",
            },
            {
              id: "schema-first-approach",
              title: "Schema-first approach — .graphql files + typePaths",
            },
          ],
        },
        {
          id: "cqrs-nestjs",
          title: "CQRS Pattern with @nestjs/cqrs",
          description: "Command Query Responsibility Segregation in NestJS.",
          subtopics: [
            {
              id: "cqrs-install",
              title: "@nestjs/cqrs — CqrsModule.forRoot()",
            },
            {
              id: "command-handler",
              title: "@CommandHandler(CreateUserCommand) — ICommandHandler",
            },
            {
              id: "command-bus",
              title: "CommandBus.execute(new CreateUserCommand(dto))",
            },
            {
              id: "query-handler",
              title: "@QueryHandler(GetUsersQuery) — IQueryHandler",
            },
            { id: "query-bus", title: "QueryBus.execute(new GetUsersQuery())" },
            {
              id: "event-handler-cqrs",
              title: "@EventsHandler(UserCreatedEvent) — IEventHandler",
            },
            {
              id: "event-bus-cqrs",
              title: "EventBus.publish(new UserCreatedEvent())",
            },
            {
              id: "saga-nestjs",
              title: "@Saga() — long-running processes with Observables",
            },
            {
              id: "cqrs-when-to-use",
              title: "When to use CQRS — trade-offs and use cases",
            },
          ],
        },
        {
          id: "scheduling-nestjs",
          title: "Scheduling — @nestjs/schedule",
          description: "Cron jobs and recurring tasks in NestJS.",
          subtopics: [
            {
              id: "schedule-module",
              title: "ScheduleModule.forRoot() — setup",
            },
            {
              id: "cron-decorator",
              title: "@Cron('0 * * * *') — cron expression",
            },
            {
              id: "cron-expression-enum",
              title: "CronExpression enum — EVERY_HOUR, EVERY_DAY_AT_MIDNIGHT",
            },
            {
              id: "interval-decorator",
              title: "@Interval(5000) — every N milliseconds",
            },
            {
              id: "timeout-decorator-schedule",
              title: "@Timeout(1000) — run once after delay",
            },
            {
              id: "dynamic-cron",
              title: "SchedulerRegistry — add/delete/getCronJob dynamically",
            },
            {
              id: "cron-timezone",
              title: "Cron timezone option — { name, timeZone }",
            },
          ],
        },
        {
          id: "events-nestjs",
          title: "Event Emitter — @nestjs/event-emitter",
          description: "In-process events with EventEmitter2.",
          subtopics: [
            {
              id: "event-emitter-module",
              title: "EventEmitterModule.forRoot() — wildcard, delimiter",
            },
            {
              id: "on-event-handler",
              title: "@OnEvent('user.created') — event listener",
            },
            {
              id: "event-emitter-emit",
              title: "EventEmitter2.emit('user.created', payload)",
            },
            {
              id: "async-event-handler",
              title: "Async event handlers — { async: true }",
            },
            {
              id: "event-emitter-once",
              title: "@OnEvent with once option — single execution",
            },
            {
              id: "event-vs-cqrs",
              title: "EventEmitter vs CQRS EventBus — when to use each",
            },
          ],
        },
        {
          id: "health-checks-nestjs",
          title: "Health Checks — @nestjs/terminus",
          description: "Readiness and liveness probes in NestJS.",
          subtopics: [
            {
              id: "terminus-install",
              title: "@nestjs/terminus — TerminusModule setup",
            },
            {
              id: "health-controller",
              title: "HealthController with /health endpoint",
            },
            {
              id: "healthcheck-service",
              title: "HealthCheckService.check([indicator fns])",
            },
            {
              id: "typeorm-health",
              title: "TypeOrmHealthIndicator — database check",
            },
            {
              id: "mongoose-health",
              title: "MongooseHealthIndicator — MongoDB ping",
            },
            {
              id: "http-health",
              title: "HttpHealthIndicator — external service check",
            },
            {
              id: "disk-memory-health",
              title: "DiskHealthIndicator & MemoryHealthIndicator",
            },
            {
              id: "custom-health-indicator",
              title: "Custom health indicator — HealthIndicator base class",
            },
          ],
        },
        {
          id: "queues-bullmq-nestjs",
          title: "Queues — @nestjs/bullmq / @nestjs/bull",
          description: "Background jobs with BullMQ in NestJS.",
          subtopics: [
            {
              id: "bullmq-install-nest",
              title: "@nestjs/bullmq & bullmq — BullModule.forRoot()",
            },
            {
              id: "bullmq-register-queue",
              title: "BullModule.registerQueue({ name: 'email' })",
            },
            {
              id: "bullmq-inject-queue",
              title: "@InjectQueue('email') — injecting queue",
            },
            {
              id: "bullmq-add-job",
              title: "queue.add('send-email', data, { delay, attempts })",
            },
            {
              id: "bullmq-processor",
              title:
                "@Processor('email') & @Process('send-email') — job handler",
            },
            {
              id: "bullmq-job-events",
              title: "Bull events: completed, failed, progress, stalled",
            },
            {
              id: "bullmq-concurrency",
              title: "Concurrency — { concurrency: 5 } option",
            },
            {
              id: "bullboard-nest",
              title: "Bull Board — @bull-board/nestjs UI for queue monitoring",
            },
          ],
        },
        {
          id: "caching-nestjs",
          title: "Caching — @nestjs/cache-manager",
          description: "Cache layer in NestJS with cache-manager.",
          subtopics: [
            {
              id: "cache-module-setup",
              title: "CacheModule.register({ ttl, max }) — in-memory cache",
            },
            {
              id: "redis-cache-nestjs",
              title: "CacheModule with Redis — cache-manager-redis-store",
            },
            {
              id: "cache-interceptor-nest",
              title: "CacheInterceptor — automatic response caching",
            },
            {
              id: "cache-key-decorator",
              title: "@CacheKey('all-users') — custom cache key",
            },
            {
              id: "cache-ttl-decorator",
              title: "@CacheTTL(30) — per-route TTL",
            },
            {
              id: "cachemanager-inject",
              title:
                "@Inject(CACHE_MANAGER) CacheManager — manual cache.get/set/del",
            },
            {
              id: "cache-invalidation-nest",
              title: "Cache invalidation patterns — TTL vs event-driven",
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
      description: "Senior NestJS interview questions.",
      topics: [
        {
          id: "microservices-ws-qa",
          title: "Microservices & WebSockets Q&A",
          description: "Advanced architecture interview questions.",
          subtopics: [
            {
              id: "microservice-transport-qa",
              title:
                "What NestJS microservice transports have you used and when?",
            },
            {
              id: "message-vs-event-nest-qa",
              title: "@MessagePattern vs @EventPattern — when to use each?",
            },
            {
              id: "hybrid-app-qa",
              title: "How do you create a hybrid NestJS application?",
            },
            {
              id: "rpc-exception-qa",
              title: "How does error handling differ in microservices vs HTTP?",
            },
            {
              id: "websocket-gateway-qa",
              title: "How do you set up a WebSocket gateway in NestJS?",
            },
            {
              id: "emit-service-qa",
              title: "How do you emit events to clients from a NestJS service?",
            },
            {
              id: "scalability-ws-qa",
              title:
                "How do you scale WebSocket connections across multiple instances?",
            },
            {
              id: "kafka-nest-qa",
              title: "How do you connect NestJS to Kafka?",
            },
          ],
        },
        {
          id: "graphql-cqrs-qa",
          title: "GraphQL & CQRS Q&A",
          description: "GraphQL and CQRS pattern interview questions.",
          subtopics: [
            {
              id: "graphql-code-first-qa",
              title: "Explain code-first vs schema-first in NestJS GraphQL",
            },
            {
              id: "resolver-vs-controller-qa",
              title:
                "What is the difference between a resolver and a controller?",
            },
            {
              id: "n-plus-one-qa",
              title:
                "What is the N+1 problem in GraphQL and how do you solve it?",
            },
            {
              id: "graphql-auth-qa",
              title: "How do you protect GraphQL resolvers with guards?",
            },
            {
              id: "cqrs-why-qa",
              title: "Why would you use CQRS in a NestJS app?",
            },
            {
              id: "command-vs-query-qa",
              title:
                "What is the difference between a Command and a Query in CQRS?",
            },
            {
              id: "saga-cqrs-qa",
              title: "What is a Saga in CQRS and when do you use it?",
            },
            {
              id: "event-sourcing-intro-qa",
              title: "What is Event Sourcing and how does it relate to CQRS?",
            },
          ],
        },
        {
          id: "async-patterns-nestjs-qa",
          title: "Async Patterns Q&A",
          description: "Queues, events, caching interview questions.",
          subtopics: [
            {
              id: "bull-queue-qa",
              title: "How do you add and process background jobs in NestJS?",
            },
            {
              id: "job-retry-qa",
              title: "How do you configure job retries with BullMQ?",
            },
            {
              id: "cache-manager-qa",
              title: "How does the CacheInterceptor work in NestJS?",
            },
            {
              id: "cache-invalidation-qa",
              title: "How do you invalidate cache in NestJS?",
            },
            {
              id: "terminus-qa",
              title: "How do you set up health checks in NestJS?",
            },
            {
              id: "event-emitter-nest-qa",
              title:
                "@OnEvent vs @MessagePattern vs CQRS EventBus — which to use?",
            },
            {
              id: "schedule-qa",
              title: "How do you dynamically start/stop cron jobs in NestJS?",
            },
            {
              id: "redis-pub-sub-qa",
              title: "How do you implement Redis pub/sub in NestJS?",
            },
          ],
        },
      ],
    },
  ],
};
