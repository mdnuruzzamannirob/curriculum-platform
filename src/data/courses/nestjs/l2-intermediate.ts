import { Level } from "@/types";

export const l2Level: Level = {
  id: "mid",
  title: "Intermediate NestJS",
  description: "Mid-level Dev",
  color: "#fb923c",
  modules: [
    // ── NestJS ───────────────────────────────────────────
    {
      id: "nestjs",
      title: "NestJS",
      icon: "sparkles",
      color: "#e0234e",
      description: "Intermediate NestJS — databases, auth, APIs.",
      topics: [
        {
          id: "typeorm-integration",
          title: "Databases — TypeORM with NestJS",
          description: "Integrating TypeORM for relational databases.",
          subtopics: [
            {
              id: "typeorm-install",
              title: "@nestjs/typeorm & typeorm — installation",
            },
            {
              id: "typeormmodule-forroot",
              title: "TypeOrmModule.forRoot() — database connection config",
            },
            {
              id: "typeormmodule-forfeature",
              title: "TypeOrmModule.forFeature([User]) — registering entities",
            },
            {
              id: "entity-decorator",
              title:
                "@Entity(), @Column(), @PrimaryGeneratedColumn() decorators",
            },
            {
              id: "column-types",
              title: "@Column options: type, nullable, unique, default, length",
            },
            {
              id: "entity-relationships",
              title: "@OneToOne, @OneToMany, @ManyToOne, @ManyToMany",
            },
            {
              id: "joincolumn-jointable",
              title: "@JoinColumn() and @JoinTable() — owning side",
            },
            {
              id: "repository-pattern",
              title: "InjectRepository(User) — injecting repository",
            },
            {
              id: "repository-methods",
              title:
                "Repository methods: find, findOne, findOneBy, save, update, delete, remove",
            },
            {
              id: "repository-findoptions",
              title: "FindOptions: where, select, order, take, skip, relations",
            },
            {
              id: "typeorm-migrations",
              title: "TypeORM migrations — generate, run, revert",
            },
            {
              id: "typeorm-transactions",
              title: "Transactions — QueryRunner, DataSource, @Transaction",
            },
          ],
        },
        {
          id: "mongoose-integration",
          title: "Databases — Mongoose with NestJS",
          description: "Integrating MongoDB via Mongoose.",
          subtopics: [
            {
              id: "mongoose-install",
              title: "@nestjs/mongoose & mongoose — installation",
            },
            {
              id: "mongoosemodule-forroot",
              title: "MongooseModule.forRoot(uri) — connection",
            },
            {
              id: "mongoosemodule-forfeature",
              title: "MongooseModule.forFeature([{ name, schema }])",
            },
            {
              id: "schema-decorator-mongoose",
              title: "@Schema() & @Prop() decorators",
            },
            {
              id: "schemafactory",
              title: "SchemaFactory.createForClass(User)",
            },
            {
              id: "injectmodel-decorator",
              title: "@InjectModel(User.name) — injecting model",
            },
            {
              id: "mongoose-document",
              title: "User & UserDocument type extension",
            },
            {
              id: "mongoose-crud-nest",
              title: "CRUD with Mongoose model in NestJS service",
            },
            {
              id: "mongoose-populate-nest",
              title: "populate() with @nestjs/mongoose",
            },
            {
              id: "mongoose-hooks-nest",
              title: "Pre/post hooks in Mongoose schemas",
            },
          ],
        },
        {
          id: "prisma-integration",
          title: "Databases — Prisma with NestJS",
          description: "Using Prisma ORM in NestJS.",
          subtopics: [
            {
              id: "prisma-install-nest",
              title: "Prisma install — npx prisma init",
            },
            {
              id: "prisma-schema",
              title: "schema.prisma — datasource, generator, models",
            },
            {
              id: "prisma-service",
              title: "PrismaService extending PrismaClient",
            },
            {
              id: "prisma-module",
              title: "PrismaModule — exporting PrismaService",
            },
            {
              id: "prisma-generate",
              title: "npx prisma generate — client generation",
            },
            {
              id: "prisma-migrate",
              title: "npx prisma migrate dev — schema migrations",
            },
            {
              id: "prisma-crud-nest",
              title: "CRUD using PrismaService in NestJS services",
            },
            {
              id: "prisma-relations-nest",
              title: "Relation queries — include, select, nested writes",
            },
            {
              id: "prisma-transactions-nest",
              title: "Transactions — prisma.$transaction()",
            },
          ],
        },
        {
          id: "authentication-jwt",
          title: "Authentication — JWT with @nestjs/jwt",
          description: "JWT-based authentication in NestJS.",
          subtopics: [
            {
              id: "jwt-module-setup",
              title:
                "JwtModule.register({ secret, signOptions: { expiresIn } })",
            },
            {
              id: "jwt-module-async",
              title: "JwtModule.registerAsync with ConfigService",
            },
            {
              id: "jwt-service",
              title: "JwtService.sign(payload) & JwtService.verify(token)",
            },
            {
              id: "auth-module",
              title: "AuthModule — AuthService, AuthController",
            },
            {
              id: "auth-service-login",
              title: "AuthService.login() — returning access_token",
            },
            {
              id: "auth-service-register",
              title: "AuthService.register() — hash + save user",
            },
            {
              id: "jwt-guard",
              title: "Custom JwtAuthGuard extracting Bearer token",
            },
            {
              id: "public-decorator",
              title: "@Public() custom decorator — skip auth guard",
            },
            {
              id: "access-refresh-token-nest",
              title: "Access token + refresh token strategy",
            },
            {
              id: "jwt-payload-user",
              title: "Attaching user to request after JWT validation",
            },
          ],
        },
        {
          id: "passport-integration",
          title: "Authentication — @nestjs/passport",
          description: "Passport strategies in NestJS.",
          subtopics: [
            {
              id: "passport-install",
              title: "@nestjs/passport & passport — installation",
            },
            {
              id: "passport-strategy",
              title: "PassportStrategy base class — extends Strategy",
            },
            {
              id: "local-strategy",
              title: "LocalStrategy — validate(username, password)",
            },
            {
              id: "jwt-strategy",
              title: "JwtStrategy — ExtractJwt.fromAuthHeaderAsBearerToken()",
            },
            {
              id: "auth-guard-passport",
              title: "AuthGuard('local') & AuthGuard('jwt') — built-in",
            },
            {
              id: "google-oauth-strategy",
              title: "GoogleStrategy — passport-google-oauth20",
            },
            {
              id: "github-strategy",
              title: "GithubStrategy — passport-github2",
            },
            {
              id: "passport-serialize",
              title: "serializeUser & deserializeUser with sessions",
            },
            {
              id: "passport-vs-custom-guard",
              title: "Passport guards vs custom JwtAuthGuard — trade-offs",
            },
          ],
        },
        {
          id: "rbac-nestjs",
          title: "Roles & Permissions — RBAC",
          description: "Role-based access control in NestJS.",
          subtopics: [
            {
              id: "roles-decorator",
              title:
                "@Roles('admin', 'user') — custom decorator with SetMetadata",
            },
            {
              id: "roles-guard-impl",
              title: "RolesGuard — Reflector.getAllAndOverride(ROLES_KEY)",
            },
            {
              id: "user-roles-entity",
              title: "UserRole enum and relation in database",
            },
            {
              id: "attach-user-request",
              title: "Attaching user with roles to req after JWT guard",
            },
            {
              id: "permissions-approach",
              title: "Permissions-based approach vs roles",
            },
            { id: "abac-nestjs", title: "ABAC with custom guard and metadata" },
            {
              id: "casl-nestjs",
              title:
                "CASL library — subject/action based permissions in NestJS",
            },
          ],
        },
        {
          id: "serialization",
          title: "Response Serialization",
          description: "Controlling what data is sent in responses.",
          subtopics: [
            {
              id: "classserializer-interceptor",
              title:
                "ClassSerializerInterceptor — global response serialization",
            },
            {
              id: "exclude-decorator",
              title: "@Exclude() — hide field from response (e.g., password)",
            },
            {
              id: "expose-decorator",
              title:
                "@Expose() — whitelist fields when excludeExtraneousValues: true",
            },
            {
              id: "transform-decorator",
              title: "@Transform() — custom serialization logic",
            },
            {
              id: "plaintoinstance",
              title: "plainToInstance(UserDto, entity) — manual serialization",
            },
            {
              id: "serializer-options",
              title: "Serializer options: excludeExtraneousValues, groups",
            },
            {
              id: "groups-expose",
              title: "@Expose({ groups: ['admin'] }) — conditional exposure",
            },
            {
              id: "mapped-types-swagger",
              title: "Mapped types integration with @nestjs/swagger",
            },
          ],
        },
        {
          id: "swagger-openapi",
          title: "Swagger / OpenAPI Documentation",
          description: "Auto-generating API docs with @nestjs/swagger.",
          subtopics: [
            {
              id: "swagger-install",
              title: "@nestjs/swagger install and SwaggerModule.setup()",
            },
            {
              id: "document-builder",
              title:
                "DocumentBuilder — title, description, version, addBearerAuth",
            },
            {
              id: "api-property",
              title: "@ApiProperty() — documenting DTO fields",
            },
            {
              id: "api-property-options",
              title:
                "@ApiProperty options: type, description, example, required",
            },
            {
              id: "api-operation",
              title: "@ApiOperation({ summary }) — endpoint description",
            },
            {
              id: "api-response",
              title: "@ApiResponse({ status, description, type })",
            },
            { id: "api-tags", title: "@ApiTags('users') — grouping endpoints" },
            {
              id: "api-bearer-auth",
              title: "@ApiBearerAuth() — mark protected endpoints",
            },
            { id: "api-body", title: "@ApiBody() — document request body" },
            {
              id: "api-param-query",
              title: "@ApiParam(), @ApiQuery() — document params/query",
            },
            {
              id: "partial-type-swagger",
              title: "PartialType from @nestjs/swagger (includes API docs)",
            },
          ],
        },
        {
          id: "file-upload-nest",
          title: "File Uploads with Multer",
          description: "Handling file uploads in NestJS.",
          subtopics: [
            {
              id: "fileinterceptor",
              title: "FileInterceptor('file') — single file upload",
            },
            {
              id: "filesinterceptor",
              title: "FilesInterceptor('files', max) — multiple files",
            },
            {
              id: "filefieldsinterceptor",
              title: "FileFieldsInterceptor — named file fields",
            },
            {
              id: "uploadedfile-decorator",
              title: "@UploadedFile() / @UploadedFiles() — access file(s)",
            },
            {
              id: "multer-options-nest",
              title: "MulterModule.register({ storage, limits })",
            },
            {
              id: "file-validation-pipe",
              title: "ParseFilePipe + MaxFileSizeValidator + FileTypeValidator",
            },
            {
              id: "s3-upload-nest",
              title: "Uploading to S3 from NestJS service",
            },
          ],
        },
        {
          id: "pagination-filtering",
          title: "Pagination & Filtering",
          description: "Implementing pagination in NestJS APIs.",
          subtopics: [
            {
              id: "pagination-dto",
              title: "PaginationDto — page, limit/take, offset/skip",
            },
            {
              id: "typeorm-pagination",
              title: "TypeORM findAndCount() — total + data",
            },
            {
              id: "cursor-pagination-nest",
              title: "Cursor-based pagination with TypeORM",
            },
            {
              id: "filtering-dto",
              title: "FilterDto — optional filter fields",
            },
            {
              id: "query-builder",
              title: "TypeORM QueryBuilder — dynamic WHERE conditions",
            },
            {
              id: "pagination-response",
              title: "Pagination response: { data, total, page, lastPage }",
            },
            {
              id: "nestjs-paginate",
              title: "nestjs-paginate library — config-driven pagination",
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
      description: "Mid-level NestJS interview questions.",
      topics: [
        {
          id: "database-orm-qa",
          title: "Database & ORM Q&A",
          description: "Database integration interview questions.",
          subtopics: [
            {
              id: "typeorm-entity-qa",
              title: "How do you define a TypeORM entity in NestJS?",
            },
            {
              id: "typeorm-forfeature-qa",
              title: "Why is TypeOrmModule.forFeature() needed?",
            },
            {
              id: "repository-inject-qa",
              title: "How do you inject a repository in a NestJS service?",
            },
            {
              id: "typeorm-relations-qa",
              title: "Explain @OneToMany and @ManyToOne with a real example",
            },
            {
              id: "prisma-vs-typeorm-qa",
              title: "Prisma vs TypeORM in NestJS — trade-offs?",
            },
            {
              id: "migrations-qa",
              title: "Why are migrations important? How do you run them?",
            },
            {
              id: "transactions-nest-qa",
              title: "How do you use transactions in TypeORM with NestJS?",
            },
            {
              id: "mongoose-inject-model-qa",
              title: "What does @InjectModel() do in NestJS?",
            },
          ],
        },
        {
          id: "auth-security-nest-qa",
          title: "Authentication & Security Q&A",
          description: "Auth interview questions for NestJS.",
          subtopics: [
            {
              id: "jwtmodule-qa",
              title: "How do you configure JwtModule in NestJS?",
            },
            {
              id: "passport-strategy-qa",
              title: "How does PassportStrategy work with @nestjs/passport?",
            },
            {
              id: "jwt-guard-nest-qa",
              title: "How do you protect a NestJS route with JWT?",
            },
            {
              id: "public-decorator-qa",
              title:
                "How would you make some routes public in an otherwise authenticated app?",
            },
            {
              id: "roles-guard-qa",
              title: "Describe a Roles guard implementation",
            },
            {
              id: "refresh-token-nest-qa",
              title: "How do you implement refresh tokens in NestJS?",
            },
            {
              id: "casl-nest-qa",
              title: "What is CASL and how does it help with auth in NestJS?",
            },
            {
              id: "password-hash-nest-qa",
              title: "How do you hash passwords in a NestJS service?",
            },
          ],
        },
        {
          id: "api-design-nest-qa",
          title: "API Design Q&A",
          description: "API and serialization interview questions.",
          subtopics: [
            {
              id: "classserializer-qa",
              title: "How does ClassSerializerInterceptor work?",
            },
            {
              id: "exclude-password-qa",
              title: "How do you hide the password field from API responses?",
            },
            {
              id: "swagger-setup-qa",
              title: "How do you set up Swagger in NestJS?",
            },
            {
              id: "api-property-qa",
              title: "What is @ApiProperty() and why is it needed?",
            },
            {
              id: "partial-type-swagger-qa",
              title:
                "What is the difference between PartialType from @nestjs/mapped-types vs @nestjs/swagger?",
            },
            {
              id: "pagination-qa",
              title: "How would you implement pagination in a NestJS API?",
            },
            {
              id: "file-upload-nest-qa",
              title: "How do you handle file uploads in NestJS?",
            },
            {
              id: "filter-pipe-qa",
              title:
                "How do you combine filtering and validation in a query DTO?",
            },
          ],
        },
      ],
    },
  ],
};
