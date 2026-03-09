import { Level } from "@/types";

export const l0Level: Level = {
  id: "entry",
  title: "NestJS Foundations",
  description: "Beginner",
  color: "#4ade80",
  modules: [
    // ── NestJS ───────────────────────────────────────────
    {
      id: "nestjs",
      title: "NestJS",
      icon: "sparkles",
      color: "#e0234e",
      description: "NestJS absolute basics.",
      topics: [
        {
          id: "what-is-nestjs",
          title: "What is NestJS?",
          description: "Introduction to NestJS and its design philosophy.",
          subtopics: [
            {
              id: "nestjs-definition",
              title:
                "NestJS — progressive Node.js framework for building efficient, scalable server-side apps",
            },
            {
              id: "nestjs-angular-inspired",
              title: "Angular-inspired architecture (modules, DI, decorators)",
            },
            {
              id: "nestjs-typescript-first",
              title: "TypeScript-first — fully typed by design",
            },
            {
              id: "nestjs-under-the-hood",
              title: "Runs on Express (default) or Fastify under the hood",
            },
            {
              id: "nestjs-vs-express",
              title: "NestJS vs Express — structure, opinionated vs flexible",
            },
            {
              id: "nestjs-vs-spring",
              title: "NestJS vs Spring Boot — similar pattern (DI, decorators)",
            },
            {
              id: "nestjs-use-cases",
              title:
                "Use cases — REST APIs, microservices, GraphQL, WebSockets",
            },
            {
              id: "nestjs-creator",
              title: "Created by Kamil Mysliwiec (2017)",
            },
          ],
        },
        {
          id: "installation-cli",
          title: "Installation & NestJS CLI",
          description: "Setting up a NestJS development environment.",
          subtopics: [
            { id: "nest-cli-install", title: "npm install -g @nestjs/cli" },
            {
              id: "nest-new",
              title: "nest new project-name — scaffold a project",
            },
            {
              id: "package-manager-choice",
              title: "Choosing npm / yarn / pnpm during scaffold",
            },
            {
              id: "nest-generate",
              title: "nest generate (nest g) — generate resources",
            },
            {
              id: "nest-g-module",
              title: "nest g module <name> — generate a module",
            },
            {
              id: "nest-g-controller",
              title: "nest g controller <name> — generate a controller",
            },
            {
              id: "nest-g-service",
              title: "nest g service <name> — generate a service",
            },
            {
              id: "nest-g-resource",
              title: "nest g resource <name> — full CRUD scaffold",
            },
            {
              id: "nest-build-start",
              title: "nest build, nest start, nest start --watch",
            },
            { id: "nest-info", title: "nest info — environment information" },
          ],
        },
        {
          id: "project-structure",
          title: "Project Structure",
          description: "Understanding the default NestJS project layout.",
          subtopics: [
            {
              id: "main-ts",
              title: "main.ts — entry point, NestFactory.create()",
            },
            { id: "app-module", title: "app.module.ts — root module" },
            {
              id: "app-controller",
              title: "app.controller.ts — root controller",
            },
            { id: "app-service", title: "app.service.ts — root service" },
            {
              id: "app-controller-spec",
              title: "app.controller.spec.ts — unit test file",
            },
            {
              id: "tsconfig-nest",
              title:
                "tsconfig.json (experimentalDecorators, emitDecoratorMetadata)",
            },
            { id: "nest-cli-json", title: "nest-cli.json — CLI configuration" },
            { id: "dist-folder", title: "dist/ folder — compiled output" },
            { id: "src-folder-layout", title: "src/ folder layout convention" },
          ],
        },
        {
          id: "decorators-intro",
          title: "TypeScript Decorators — NestJS Foundation",
          description:
            "Understanding the decorator pattern used throughout NestJS.",
          subtopics: [
            {
              id: "what-are-decorators",
              title: "What are decorators? (metadata annotations)",
            },
            {
              id: "class-decorators",
              title: "Class decorators — @Controller, @Module, @Injectable",
            },
            {
              id: "method-decorators",
              title: "Method decorators — @Get, @Post, @Put, @Delete, @Patch",
            },
            {
              id: "parameter-decorators",
              title: "Parameter decorators — @Param, @Body, @Query",
            },
            {
              id: "reflect-metadata",
              title: "reflect-metadata — reading/writing metadata",
            },
            {
              id: "emitDecoratorMetadata",
              title: "emitDecoratorMetadata tsconfig flag",
            },
            {
              id: "decorator-factories",
              title: "Decorator factories (decorators with arguments)",
            },
            {
              id: "stacking-decorators",
              title: "Stacking multiple decorators on a class/method",
            },
          ],
        },
        {
          id: "first-module",
          title: "Modules — @Module Decorator",
          description: "Organizing application with NestJS modules.",
          subtopics: [
            {
              id: "module-decorator",
              title: "@Module({ imports, controllers, providers, exports })",
            },
            {
              id: "root-app-module",
              title: "AppModule — root module that boots the app",
            },
            {
              id: "feature-modules",
              title: "Feature modules (UsersModule, ProductsModule)",
            },
            {
              id: "module-imports",
              title: "imports — bringing in other modules",
            },
            {
              id: "module-exports",
              title: "exports — sharing providers with other modules",
            },
            {
              id: "module-controllers",
              title: "controllers — registering route handlers",
            },
            {
              id: "module-providers",
              title: "providers — registering services & DI tokens",
            },
            {
              id: "module-encapsulation",
              title: "Module encapsulation — private by default",
            },
          ],
        },
        {
          id: "first-controller",
          title: "Controllers — @Controller & Route Decorators",
          description: "Handling HTTP requests with controllers.",
          subtopics: [
            {
              id: "controller-decorator",
              title: "@Controller('prefix') — route prefix",
            },
            { id: "get-decorator", title: "@Get(), @Get(':id') — GET routes" },
            { id: "post-decorator", title: "@Post() — POST routes" },
            {
              id: "put-patch-delete",
              title: "@Put(), @Patch(), @Delete() — update/delete routes",
            },
            {
              id: "param-decorator",
              title: "@Param('id') — route parameter extraction",
            },
            {
              id: "query-decorator",
              title: "@Query('page') — query string extraction",
            },
            {
              id: "body-decorator",
              title: "@Body() — request body extraction",
            },
            {
              id: "httpcode-decorator",
              title: "@HttpCode(201) — set response status code",
            },
            {
              id: "header-decorator",
              title: "@Header('key', 'value') — set response header",
            },
            {
              id: "redirect-decorator",
              title: "@Redirect(url, statusCode) — redirect response",
            },
          ],
        },
        {
          id: "first-service",
          title: "Providers & Services — @Injectable",
          description: "Business logic layer with injectable services.",
          subtopics: [
            {
              id: "injectable-decorator",
              title: "@Injectable() — marks class as a provider",
            },
            {
              id: "constructor-injection",
              title: "Constructor injection — inject via constructor param",
            },
            {
              id: "service-logic",
              title: "Placing business logic in services, not controllers",
            },
            {
              id: "provider-scope",
              title: "Provider scope: DEFAULT, REQUEST, TRANSIENT",
            },
            {
              id: "in-memory-data",
              title: "In-memory data arrays before adding a database",
            },
            {
              id: "service-methods",
              title: "findAll(), findOne(id), create(), update(), remove()",
            },
          ],
        },
        {
          id: "nestfactory",
          title: "Application Bootstrap — NestFactory",
          description: "Bootstrapping the NestJS application.",
          subtopics: [
            {
              id: "nestfactory-create",
              title: "NestFactory.create(AppModule)",
            },
            { id: "app-listen", title: "await app.listen(3000)" },
            { id: "global-prefix", title: "app.setGlobalPrefix('api')" },
            { id: "enable-cors", title: "app.enableCors() — enabling CORS" },
            { id: "app-use", title: "app.use() — mounting Express middleware" },
            { id: "app-get-env", title: "ConfigService / process.env.PORT" },
            { id: "app-logger", title: "Logger — built-in NestJS logger" },
            {
              id: "shutdown-hooks",
              title: "app.enableShutdownHooks() — graceful shutdown",
            },
          ],
        },
        {
          id: "response-handling",
          title: "Request & Response Handling",
          description: "Sending responses from NestJS controllers.",
          subtopics: [
            {
              id: "standard-response",
              title:
                "Standard (recommended) response — return value auto-serialized",
            },
            {
              id: "library-specific-response",
              title: "Library-specific response — @Res() Express/Fastify res",
            },
            {
              id: "res-passthrough",
              title: "@Res({ passthrough: true }) — mix standard + express",
            },
            {
              id: "req-decorator",
              title: "@Req() — access raw request object",
            },
            {
              id: "headers-decorator",
              title: "@Headers() — access all request headers",
            },
            { id: "ip-decorator", title: "@Ip() — client IP address" },
            {
              id: "host-decorator",
              title: "@HostParam() — dynamic subdomain routing",
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
      description: "Entry-level NestJS interview questions.",
      topics: [
        {
          id: "nestjs-fundamentals-qa",
          title: "NestJS Fundamentals Q&A",
          description: "Core conceptual questions about NestJS.",
          subtopics: [
            {
              id: "what-is-nestjs-qa",
              title: "What is NestJS and why would you choose it over Express?",
            },
            {
              id: "angular-inspired-qa",
              title: "How is NestJS inspired by Angular?",
            },
            {
              id: "typescript-first-qa",
              title: "Why is NestJS TypeScript-first?",
            },
            {
              id: "nestjs-express-qa",
              title: "Does NestJS replace Express? How do they relate?",
            },
            {
              id: "module-pattern-qa",
              title: "What is the module pattern in NestJS?",
            },
            {
              id: "di-intro-qa",
              title:
                "What is Dependency Injection? How does NestJS implement it?",
            },
            { id: "injectable-qa", title: "What does @Injectable() do?" },
            {
              id: "controller-service-qa",
              title:
                "What is the difference between a Controller and a Service?",
            },
          ],
        },
        {
          id: "cli-structure-qa",
          title: "CLI & Project Structure Q&A",
          description: "Questions about NestJS project setup.",
          subtopics: [
            { id: "nest-new-qa", title: "What does nest new do?" },
            {
              id: "nest-generate-qa",
              title: "What does nest g resource generate?",
            },
            { id: "main-ts-qa", title: "What is main.ts responsible for?" },
            { id: "app-module-qa", title: "What is the AppModule?" },
            {
              id: "decorators-enable-qa",
              title: "Which tsconfig options are needed for NestJS decorators?",
            },
            { id: "nestfactory-qa", title: "What is NestFactory.create()?" },
            {
              id: "global-prefix-qa",
              title: "How do you set a global route prefix?",
            },
            { id: "dist-folder-qa", title: "What is in the dist/ folder?" },
          ],
        },
        {
          id: "routing-basics-qa",
          title: "Routing & Decorators Q&A",
          description: "Routing and decorator questions.",
          subtopics: [
            {
              id: "controller-prefix-qa",
              title: "@Controller('users') — what does the prefix do?",
            },
            {
              id: "route-param-qa",
              title: "How do you read a route parameter in NestJS?",
            },
            {
              id: "body-decorator-qa",
              title: "How do you access the request body in NestJS?",
            },
            {
              id: "query-decorator-qa",
              title: "How do you read query strings in NestJS?",
            },
            {
              id: "httpcode-qa",
              title: "How do you change the default response status code?",
            },
            {
              id: "res-passthrough-qa",
              title: "What is @Res({ passthrough: true }) used for?",
            },
            {
              id: "standard-vs-library-qa",
              title:
                "Standard response vs library-specific response — difference?",
            },
            {
              id: "redirect-decorator-qa",
              title: "How do you redirect in NestJS?",
            },
          ],
        },
      ],
    },
  ],
};
