import { Level } from "@/types";

export const l4Level: Level = {
  id: "professional",
  title: "TypeScript in Practice",
  description: "Staff Engineer",
  color: "#38bdf8",
  modules: [
    // ── TS ───────────────────────────────────────────────
    {
      id: "ts",
      title: "TS",
      icon: "binary",
      color: "#3178c6",
      description: "TypeScript in real-world applications.",
      topics: [
        {
          id: "ts-with-react",
          title: "TypeScript with React",
          description: "Full type safety in React applications.",
          subtopics: [
            { id: "tsx-files", title: ".tsx files & JSX type-checking" },
            {
              id: "fc-type",
              title: "React.FC<Props> & ReactNode, ReactElement",
            },
            { id: "props-types", title: "Typing Component Props" },
            { id: "props-with-children", title: "PropsWithChildren<P>" },
            { id: "usestate-typed", title: "useState<T> with explicit type" },
            { id: "useref-typed", title: "useRef<T> for DOM elements" },
            { id: "usereducer-typed", title: "useReducer<Reducer<S, A>>" },
            { id: "usecontext-typed", title: "useContext with typed Context" },
            { id: "usecallback-typed", title: "useCallback & useMemo typing" },
            {
              id: "event-types-react",
              title: "Event Types (MouseEvent, ChangeEvent, FormEvent)",
            },
            { id: "forwardref-typed", title: "forwardRef<T, P> typing" },
            { id: "higher-order-components", title: "HOC types with generics" },
            { id: "render-props-typed", title: "Render Props pattern typing" },
            {
              id: "custom-hooks-typed",
              title: "Custom Hook return type (readonly tuple)",
            },
            { id: "generic-components", title: "Generic React Components" },
          ],
        },
        {
          id: "ts-with-nodejs",
          title: "TypeScript with Node.js",
          description: "Backend development with TypeScript.",
          subtopics: [
            { id: "at-types-node", title: "@types/node installation" },
            { id: "fs-path-typed", title: "fs & path module types" },
            {
              id: "streams-typed",
              title: "Readable, Writable, Transform stream types",
            },
            {
              id: "event-emitter-typed",
              title: "EventEmitter with typed events",
            },
            { id: "process-typed", title: "process.env typing (env.d.ts)" },
            {
              id: "http-typed",
              title: "http.IncomingMessage & ServerResponse types",
            },
            { id: "buffer-typed", title: "Buffer type annotations" },
            { id: "child-process-typed", title: "child_process & exec types" },
          ],
        },
        {
          id: "ts-with-express",
          title: "TypeScript with Express",
          description: "Typed HTTP APIs with Express.",
          subtopics: [
            { id: "at-types-express", title: "@types/express & setup" },
            {
              id: "request-response-typed",
              title: "Request<Params, ResBody, ReqBody, Query> generic",
            },
            { id: "route-params-typed", title: "Typed Route Parameters" },
            { id: "request-body-typed", title: "Typed Request Body" },
            {
              id: "middleware-typed",
              title: "Typed Middleware (RequestHandler type)",
            },
            {
              id: "error-middleware-typed",
              title: "Error Handling Middleware types",
            },
            {
              id: "express-augmentation",
              title: "Augmenting Express Request (module augmentation)",
            },
            { id: "router-typed", title: "Typed Router & Route Groups" },
          ],
        },
        {
          id: "ts-with-databases",
          title: "TypeScript with Databases & ORMs",
          description: "Type-safe database access.",
          subtopics: [
            {
              id: "prisma-types",
              title: "Prisma — generated types & Prisma.UserCreateInput",
            },
            { id: "prisma-client-types", title: "PrismaClient type utilities" },
            {
              id: "typeorm-entities",
              title: "TypeORM — @Entity, @Column decorators with types",
            },
            {
              id: "typeorm-repository",
              title: "TypeORM Repository<Entity> typed",
            },
            {
              id: "drizzle-schema",
              title: "Drizzle ORM — type-safe schema definition",
            },
            { id: "knex-typed", title: "Knex.js with TypeScript" },
            { id: "zod-db-validation", title: "Zod for DB input validation" },
          ],
        },
        {
          id: "runtime-validation",
          title: "Runtime Validation — Zod, Valibot & io-ts",
          description: "Schema validation with TypeScript type inference.",
          subtopics: [
            { id: "zod-basics", title: "Zod — z.object, z.string, z.number" },
            {
              id: "zod-infer",
              title: "z.infer<typeof schema> — extract TS type",
            },
            { id: "zod-transforms", title: "Zod Transforms & Preprocessing" },
            {
              id: "zod-refinements",
              title: "Zod Refinements & custom validations",
            },
            { id: "zod-error-handling", title: "ZodError & safe parsing" },
            { id: "valibot-intro", title: "Valibot — lighter Zod alternative" },
            { id: "io-ts-intro", title: "io-ts — fp-ts based validation" },
            {
              id: "type-provider-pattern",
              title: "Type Provider pattern (tRPC style)",
            },
          ],
        },
        {
          id: "ts-with-testing",
          title: "TypeScript with Testing",
          description: "Type-safe testing strategies.",
          subtopics: [
            { id: "jest-types", title: "Jest with @types/jest" },
            { id: "vitest-types", title: "Vitest type utilities" },
            {
              id: "mock-fn-types",
              title: "Typed Mock Functions (jest.fn<R, Args>)",
            },
            { id: "spyon-typed", title: "jest.spyOn with type safety" },
            {
              id: "type-testing",
              title: "Type Testing (expectType, @type-challenges)",
            },
            {
              id: "testing-library-typed",
              title: "@testing-library/react TypeScript setup",
            },
            { id: "e2e-playwright-typed", title: "Playwright with TypeScript" },
          ],
        },
        {
          id: "strict-lint-ts",
          title: "Strict Mode & TypeScript ESLint",
          description: "Enforcing type safety across the codebase.",
          subtopics: [
            {
              id: "strict-true-all",
              title: "strict: true — all flags it enables",
            },
            { id: "no-implicit-any", title: "noImplicitAny in practice" },
            { id: "strict-null-checks", title: "strictNullChecks patterns" },
            { id: "no-unchecked-indexed", title: "noUncheckedIndexedAccess" },
            { id: "exact-optional-types", title: "exactOptionalPropertyTypes" },
            {
              id: "typescript-eslint",
              title: "@typescript-eslint/eslint-plugin rules",
            },
            {
              id: "eslint-recommended-ts",
              title: "@typescript-eslint/recommended config",
            },
            {
              id: "no-explicit-any-rule",
              title: "@typescript-eslint/no-explicit-any rule",
            },
          ],
        },
        {
          id: "build-tools-ts",
          title: "Build Tools & Bundlers with TypeScript",
          description: "Compilation and bundling TypeScript projects.",
          subtopics: [
            { id: "tsc-only", title: "tsc — full type-checking build" },
            {
              id: "transpile-only",
              title: "Transpile-only mode (no type-check)",
            },
            { id: "esbuild-ts", title: "esbuild TypeScript support" },
            { id: "swc-ts", title: "SWC TypeScript transpilation" },
            { id: "vite-ts", title: "Vite with TypeScript" },
            {
              id: "webpack-ts-loader",
              title: "ts-loader & babel-loader for TypeScript",
            },
            { id: "tsup-intro", title: "tsup — TypeScript library bundler" },
            { id: "tsc-watch", title: "tsc --watch & incremental rebuild" },
          ],
        },
        {
          id: "error-handling-patterns",
          title: "Error Handling Patterns in TypeScript",
          description: "Type-safe error handling strategies.",
          subtopics: [
            { id: "result-type-pattern", title: "Result<T, E> type pattern" },
            { id: "either-monad", title: "Either<L, R> monad pattern" },
            { id: "neverthrow-lib", title: "neverthrow library" },
            { id: "typed-error-union", title: "Typed Error Union Pattern" },
            {
              id: "error-class-hierarchy",
              title: "Error Class Hierarchy with types",
            },
            { id: "async-error-typed", title: "Typed Async Error Handling" },
            {
              id: "error-boundary-typed",
              title: "React Error Boundary with TypeScript",
            },
          ],
        },
        {
          id: "monorepo-ts",
          title: "Monorepo & Large-Scale TypeScript",
          description: "Managing TypeScript in monorepos.",
          subtopics: [
            {
              id: "project-references-mono",
              title: "Project References in Monorepo",
            },
            {
              id: "tsconfig-extends-mono",
              title: "tsconfig extends chain in Monorepo",
            },
            {
              id: "npm-workspaces-ts",
              title: "npm/yarn/pnpm Workspaces with TS",
            },
            { id: "turborepo-ts", title: "Turborepo with TypeScript" },
            { id: "nx-ts", title: "Nx with TypeScript plugins" },
            {
              id: "shared-types-package",
              title: "Shared Types Package pattern",
            },
            {
              id: "internal-packages",
              title: "Internal Packages — just-in-time vs compiled",
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
      description: "Real-world typed data patterns.",
      topics: [
        {
          id: "typed-api-client",
          title: "Type-Safe API Client",
          description: "Typed HTTP client patterns.",
          subtopics: [
            {
              id: "typed-fetch-wrapper",
              title: "Typed fetch wrapper (Result<T, E>)",
            },
            {
              id: "api-schema-types",
              title: "API Schema with TypeScript types",
            },
            {
              id: "query-params-typed",
              title: "Query Params type-safe serialization",
            },
            {
              id: "openapi-codegen",
              title: "OpenAPI → TypeScript type generation",
            },
            {
              id: "axios-typed",
              title: "Axios with TypeScript (AxiosResponse<T>)",
            },
          ],
        },
        {
          id: "repository-pattern-typed",
          title: "Repository Pattern with TypeScript",
          description: "Typed data access layer.",
          subtopics: [
            { id: "repo-interface", title: "IRepository<T> interface" },
            {
              id: "generic-repo",
              title: "GenericRepository<T> implementation",
            },
            {
              id: "typed-query-builder",
              title: "Type-safe Query Builder pattern",
            },
            { id: "unit-of-work-typed", title: "Unit of Work pattern (typed)" },
          ],
        },
        {
          id: "typed-event-system",
          title: "Fully Typed Event System",
          description: "Type-safe publish/subscribe pattern.",
          subtopics: [
            { id: "event-map-type", title: "EventMap type definition" },
            {
              id: "typed-event-emitter-impl",
              title: "TypedEventEmitter<EventMap> implementation",
            },
            { id: "typed-pub-sub", title: "Type-safe Pub/Sub pattern" },
            { id: "typed-bus", title: "Typed Event Bus (singleton)" },
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
      description: "Professional-level TypeScript interview prep.",
      topics: [
        {
          id: "react-ts-qa",
          title: "TypeScript with React Q&A",
          description: "Interview questions about React + TypeScript.",
          subtopics: [
            {
              id: "react-fc-qa",
              title: "React.FC vs plain function component typing",
            },
            {
              id: "react-event-qa",
              title: "How to type React event handlers?",
            },
            {
              id: "useref-html-qa",
              title: "How to type useRef for a DOM element?",
            },
            {
              id: "generic-component-qa",
              title: "Write a generic Select<T> component",
            },
            {
              id: "context-typed-qa",
              title: "How to create a fully typed React Context?",
            },
            {
              id: "custom-hook-return-qa",
              title: "Best way to type a custom hook return?",
            },
            {
              id: "forwardref-qa",
              title: "How to type a component with forwardRef?",
            },
          ],
        },
        {
          id: "node-express-ts-qa",
          title: "TypeScript with Node.js & Express Q&A",
          description: "Backend TypeScript interview questions.",
          subtopics: [
            {
              id: "env-types-qa",
              title: "How to type process.env in TypeScript?",
            },
            {
              id: "express-request-qa",
              title: "How to extend the Express Request type?",
            },
            {
              id: "middleware-type-qa",
              title: "How do you type Express middleware?",
            },
            {
              id: "async-route-typed-qa",
              title: "How to type an async Express route handler?",
            },
            {
              id: "prisma-types-qa",
              title: "How does Prisma generate TypeScript types?",
            },
          ],
        },
        {
          id: "runtime-validation-qa",
          title: "Runtime Validation Q&A",
          description: "Questions about validation libraries.",
          subtopics: [
            {
              id: "zod-vs-ts-qa",
              title: "Why use Zod if we already have TypeScript?",
            },
            { id: "zod-infer-qa", title: "Explain z.infer<typeof schema>" },
            {
              id: "validation-library-compare-qa",
              title: "Zod vs io-ts vs Valibot",
            },
            { id: "safe-parse-qa", title: "safeParse vs parse in Zod" },
            {
              id: "api-validation-pattern-qa",
              title: "Where should you validate API responses?",
            },
          ],
        },
        {
          id: "build-tooling-ts-qa",
          title: "Build & Tooling Q&A",
          description: "TypeScript build configuration questions.",
          subtopics: [
            {
              id: "tsc-vs-babel-qa",
              title: "tsc vs Babel vs SWC for TypeScript",
            },
            {
              id: "esbuild-no-typecheck-qa",
              title: "Does esbuild type-check TypeScript?",
            },
            { id: "tsup-vs-tsc-qa", title: "tsup vs tsc for libraries" },
            {
              id: "composite-build-qa",
              title: "What is composite: true in tsconfig?",
            },
            {
              id: "declaration-emit-qa",
              title: "How to emit .d.ts files with tsc?",
            },
          ],
        },
        {
          id: "architecture-ts-qa",
          title: "Architecture & Real-World Q&A",
          description: "Architecture questions for senior roles.",
          subtopics: [
            {
              id: "result-pattern-qa",
              title: "Explain the Result<T,E> error handling pattern",
            },
            {
              id: "typed-di-qa",
              title: "How to implement typed Dependency Injection in TS?",
            },
            {
              id: "shared-types-mono-qa",
              title: "How do you share types in a monorepo?",
            },
            {
              id: "api-contract-qa",
              title: "tRPC vs OpenAPI for API type safety",
            },
            {
              id: "gradual-adoption-qa",
              title: "How do you gradually adopt TypeScript in a JS project?",
            },
          ],
        },
      ],
    },
  ],
};
