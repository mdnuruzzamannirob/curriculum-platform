import { Level } from "@/types";

export const l1Level: Level = {
  id: "junior",
  title: "Core NestJS",
  description: "Junior Dev",
  color: "#facc15",
  modules: [
    // ── NestJS ───────────────────────────────────────────
    {
      id: "nestjs",
      title: "NestJS",
      icon: "sparkles",
      color: "#e0234e",
      description: "Core NestJS building blocks.",
      topics: [
        {
          id: "dependency-injection",
          title: "Dependency Injection — IoC Container",
          description: "NestJS DI system in depth.",
          subtopics: [
            { id: "ioc-concept", title: "Inversion of Control (IoC) concept" },
            {
              id: "di-vs-instantiation",
              title: "DI vs manual instantiation — benefits",
            },
            {
              id: "constructor-di",
              title: "Constructor injection — standard pattern",
            },
            {
              id: "injection-token",
              title: "Injection tokens — string, symbol, class",
            },
            { id: "property-injection", title: "@Inject() property injection" },
            {
              id: "circular-dependency",
              title: "Circular dependency — forwardRef()",
            },
            {
              id: "provider-registration",
              title: "Registering providers in @Module providers array",
            },
            {
              id: "token-based-injection",
              title: "@Inject('TOKEN') — token-based injection",
            },
            {
              id: "custom-providers-intro",
              title: "Custom providers intro: useValue, useClass, useFactory",
            },
          ],
        },
        {
          id: "pipes",
          title: "Pipes — Validation & Transformation",
          description: "Validating and transforming incoming data.",
          subtopics: [
            {
              id: "what-is-pipe",
              title: "What is a pipe? (transform, validate before handler)",
            },
            {
              id: "built-in-pipes",
              title:
                "Built-in pipes: ValidationPipe, ParseIntPipe, ParseUUIDPipe, ParseBoolPipe, ParseArrayPipe, ParseEnumPipe, DefaultValuePipe",
            },
            {
              id: "validation-pipe-global",
              title: "app.useGlobalPipes(new ValidationPipe())",
            },
            {
              id: "validation-pipe-options",
              title:
                "ValidationPipe options: whitelist, forbidNonWhitelisted, transform",
            },
            {
              id: "class-validator-intro",
              title:
                "class-validator decorators: @IsString, @IsInt, @IsEmail, @IsNotEmpty, @Min, @Max",
            },
            {
              id: "class-transformer-intro",
              title: "class-transformer — @Transform, @Type, plainToInstance",
            },
            {
              id: "dto-with-validation",
              title: "DTO + class-validator integration",
            },
            {
              id: "custom-pipe",
              title:
                "Custom pipe — implements PipeTransform, transform(value, metadata)",
            },
            {
              id: "pipe-scope",
              title: "Pipe scope: global, controller, route, param-level",
            },
          ],
        },
        {
          id: "guards",
          title: "Guards — Authorization",
          description: "Protecting routes with guards.",
          subtopics: [
            {
              id: "what-is-guard",
              title: "What is a guard? (CanActivate interface)",
            },
            {
              id: "canactivate-method",
              title:
                "canActivate(context: ExecutionContext): boolean | Observable",
            },
            {
              id: "execution-context",
              title:
                "ExecutionContext — switchToHttp(), switchToWs(), switchToRpc()",
            },
            {
              id: "auth-guard-basic",
              title: "Basic auth guard — check header presence",
            },
            {
              id: "use-guards-decorator",
              title:
                "@UseGuards(AuthGuard) — applied at controller/method/global",
            },
            {
              id: "global-guard",
              title: "app.useGlobalGuards() — apply guard globally",
            },
            {
              id: "reflector-metadata",
              title: "Reflector — reading metadata set by custom decorators",
            },
            {
              id: "roles-guard",
              title: "RolesGuard pattern — Reflector + @Roles() decorator",
            },
            {
              id: "guard-vs-middleware",
              title: "Guard vs Middleware — difference and when to use each",
            },
          ],
        },
        {
          id: "interceptors",
          title: "Interceptors",
          description: "Transforming requests and responses with interceptors.",
          subtopics: [
            {
              id: "what-is-interceptor",
              title: "What is an interceptor? (NestInterceptor, intercept())",
            },
            {
              id: "rxjs-observable",
              title:
                "RxJS Observable — intercept uses next.handle() Observable",
            },
            {
              id: "interceptor-before-after",
              title: "Before and after handler execution",
            },
            {
              id: "logging-interceptor",
              title: "LoggingInterceptor — timing and logging requests",
            },
            {
              id: "transform-interceptor",
              title:
                "TransformInterceptor — wrap response in { data } envelope",
            },
            {
              id: "timeout-interceptor",
              title: "TimeoutInterceptor — RxJS timeout operator",
            },
            {
              id: "cache-interceptor",
              title: "CacheInterceptor — caching responses",
            },
            {
              id: "use-interceptors-dec",
              title:
                "@UseInterceptors() — applied per controller/method/global",
            },
            {
              id: "global-interceptor",
              title: "app.useGlobalInterceptors() — global interceptor",
            },
          ],
        },
        {
          id: "exception-filters",
          title: "Exception Filters",
          description: "Centralizing error handling in NestJS.",
          subtopics: [
            {
              id: "what-is-filter",
              title: "What is an exception filter? (ExceptionFilter interface)",
            },
            {
              id: "catch-decorator",
              title: "@Catch(HttpException) — specify exception types to catch",
            },
            {
              id: "catch-all-filter",
              title: "@Catch() — catch all exceptions",
            },
            {
              id: "http-exception",
              title: "HttpException — base class for HTTP errors",
            },
            {
              id: "built-in-exceptions",
              title:
                "Built-in HTTP exceptions: NotFoundException, BadRequestException, UnauthorizedException, ForbiddenException, ConflictException, InternalServerErrorException",
            },
            {
              id: "custom-exception",
              title: "Custom exception class extending HttpException",
            },
            {
              id: "use-filters-dec",
              title: "@UseFilters() — method/controller scope",
            },
            {
              id: "global-filter",
              title: "app.useGlobalFilters() — global exception filter",
            },
            {
              id: "filter-response-format",
              title: "Formatting error response JSON in filter",
            },
          ],
        },
        {
          id: "middleware-nest",
          title: "Middleware in NestJS",
          description: "Request preprocessing with NestJS middleware.",
          subtopics: [
            {
              id: "nest-middleware-interface",
              title: "NestMiddleware interface — use(req, res, next)",
            },
            {
              id: "injectable-middleware",
              title: "@Injectable() on middleware classes",
            },
            {
              id: "configure-method",
              title: "configure(consumer: MiddlewareConsumer) in AppModule",
            },
            {
              id: "apply-forroutes",
              title: "consumer.apply(Middleware).forRoutes(UsersController)",
            },
            {
              id: "forroutes-options",
              title: "forRoutes with path and method exclusion",
            },
            {
              id: "exclude-routes",
              title: ".exclude({ path: 'users', method: RequestMethod.GET })",
            },
            {
              id: "functional-middleware",
              title: "Functional middleware (stateless, just a function)",
            },
            {
              id: "global-express-middleware",
              title: "app.use() — applying Express middleware globally",
            },
            {
              id: "middleware-vs-guard",
              title: "Middleware vs Guard vs Interceptor — execution order",
            },
          ],
        },
        {
          id: "dtos-validation",
          title: "DTOs, Validation & Transformation",
          description: "Data Transfer Objects and class-based validation.",
          subtopics: [
            {
              id: "dto-concept",
              title:
                "DTO (Data Transfer Object) — purpose and naming (CreateUserDto, UpdateUserDto)",
            },
            {
              id: "class-validator-all",
              title:
                "class-validator: @IsString, @IsInt, @IsEmail, @IsOptional, @IsEnum, @IsArray, @ValidateNested, @IsUUID, @Length, @Matches",
            },
            {
              id: "nested-dto",
              title: "Nested DTO validation with @ValidateNested() + @Type()",
            },
            {
              id: "partial-type",
              title:
                "PartialType(CreateUserDto) — all fields optional (from @nestjs/mapped-types)",
            },
            { id: "omit-type", title: "OmitType(CreateUserDto, ['password'])" },
            {
              id: "pick-type",
              title: "PickType(CreateUserDto, ['email', 'name'])",
            },
            {
              id: "intersection-type",
              title: "IntersectionType — merge two DTOs",
            },
            {
              id: "class-transformer-transform",
              title: "@Transform(() => value.trim()) — sanitizing input",
            },
            {
              id: "exclude-expose",
              title:
                "@Exclude() & @Expose() — ClassSerializerInterceptor integration",
            },
          ],
        },
        {
          id: "config-nestjs",
          title: "Configuration — @nestjs/config",
          description: "Managing environment variables in NestJS.",
          subtopics: [
            {
              id: "config-module-setup",
              title:
                "ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' })",
            },
            {
              id: "config-service",
              title: "ConfigService.get<string>('DATABASE_URL')",
            },
            {
              id: "config-schema-validation",
              title: "Schema validation with Joi (validationSchema)",
            },
            {
              id: "custom-config-file",
              title: "Custom config file: configuration.ts returning object",
            },
            {
              id: "config-namespace",
              title:
                "Namespaced config: ConfigModule.forFeature(databaseConfig)",
            },
            {
              id: "config-forroot-async",
              title: "ConfigModule.forRootAsync — async config loading",
            },
            {
              id: "env-variables-best",
              title: "ENV best practices in NestJS (never hardcode secrets)",
            },
            {
              id: "process-env-vs-config-service",
              title: "process.env vs ConfigService — prefer ConfigService",
            },
          ],
        },
        {
          id: "request-lifecycle",
          title: "NestJS Request Lifecycle",
          description: "The full lifecycle of a request in NestJS.",
          subtopics: [
            {
              id: "lifecycle-overview",
              title:
                "Full order: Middleware → Guards → Interceptors (pre) → Pipes → Route Handler → Interceptors (post) → Exception Filters",
            },
            {
              id: "middleware-phase",
              title: "Middleware — runs first, no access to NestJS context",
            },
            {
              id: "guard-phase",
              title: "Guard — authorization check, can reject with 403",
            },
            {
              id: "interceptor-pre-phase",
              title: "Interceptor (before) — transforms incoming request",
            },
            {
              id: "pipe-phase",
              title: "Pipe — validates and transforms params/body",
            },
            {
              id: "handler-phase",
              title: "Route handler — the controller method executes",
            },
            {
              id: "interceptor-post-phase",
              title: "Interceptor (after) — transforms outgoing response",
            },
            {
              id: "exception-filter-phase",
              title:
                "Exception filter — catches thrown exceptions at any phase",
            },
          ],
        },
        {
          id: "module-patterns",
          title: "Module Patterns",
          description: "Organizing large NestJS apps with modules.",
          subtopics: [
            {
              id: "shared-module",
              title: "SharedModule — exporting reusable providers",
            },
            {
              id: "global-module",
              title: "@Global() — module available everywhere without import",
            },
            {
              id: "dynamic-module-intro",
              title: "Dynamic modules intro — forRoot, forFeature patterns",
            },
            {
              id: "feature-module-pattern",
              title: "Feature module pattern — one module per domain",
            },
            {
              id: "barrel-modules",
              title: "Barrel index.ts for clean module exports",
            },
            {
              id: "core-module",
              title: "CoreModule — app-wide singleton providers",
            },
            {
              id: "lazy-modules",
              title: "Lazy-loaded modules — LazyModuleLoader",
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
      description: "Junior-level NestJS interview questions.",
      topics: [
        {
          id: "core-building-blocks-qa",
          title: "Core Building Blocks Q&A",
          description: "Pipes, guards, interceptors, filters — core questions.",
          subtopics: [
            {
              id: "pipe-purpose-qa",
              title: "What is a pipe and when do you use it?",
            },
            {
              id: "validation-pipe-qa",
              title: "What does ValidationPipe do with whitelist: true?",
            },
            {
              id: "class-validator-qa",
              title:
                "How do class-validator and class-transformer work together?",
            },
            {
              id: "guard-canactivate-qa",
              title: "What does canActivate return? What types?",
            },
            {
              id: "interceptor-rxjs-qa",
              title: "Why do interceptors use RxJS Observables?",
            },
            {
              id: "exception-filter-qa",
              title: "How do you create a custom exception filter?",
            },
            {
              id: "built-in-exceptions-qa",
              title: "Name 5 built-in NestJS HTTP exceptions",
            },
            {
              id: "filter-vs-interceptor-qa",
              title: "Exception filter vs Interceptor — key difference?",
            },
          ],
        },
        {
          id: "di-modules-qa",
          title: "DI & Modules Q&A",
          description: "Dependency injection and modules interview questions.",
          subtopics: [
            { id: "di-benefit-qa", title: "Why is DI beneficial for testing?" },
            {
              id: "circular-dep-qa",
              title:
                "What causes circular dependencies and how do you fix them?",
            },
            {
              id: "provider-scope-qa",
              title: "Explain DEFAULT, REQUEST, and TRANSIENT provider scopes",
            },
            { id: "global-module-qa", title: "What does @Global() module do?" },
            {
              id: "forroot-vs-forfeature-qa",
              title: "forRoot() vs forFeature() — when to use each?",
            },
            {
              id: "module-exports-qa",
              title: "What happens if you forget to export a provider?",
            },
            { id: "injection-token-qa", title: "What is an injection token?" },
            {
              id: "reflector-qa",
              title: "What is the Reflector service used for?",
            },
          ],
        },
        {
          id: "lifecycle-config-qa",
          title: "Lifecycle & Config Q&A",
          description: "Request lifecycle and configuration questions.",
          subtopics: [
            {
              id: "request-lifecycle-qa",
              title: "Describe the full NestJS request lifecycle in order",
            },
            {
              id: "middleware-vs-guard-qa",
              title: "Middleware vs Guard — key differences?",
            },
            {
              id: "middleware-configure-qa",
              title: "How do you register middleware in NestJS?",
            },
            { id: "config-module-qa", title: "How does ConfigModule work?" },
            {
              id: "config-service-inject-qa",
              title: "How do you inject ConfigService into a service?",
            },
            {
              id: "env-validation-qa",
              title: "How do you validate .env variables on startup?",
            },
            {
              id: "global-prefix-qa",
              title:
                "How do you apply a global pipes/guards/filters vs per-controller?",
            },
            {
              id: "dto-partial-type-qa",
              title: "What does PartialType() do and why is it useful?",
            },
          ],
        },
      ],
    },
  ],
};
