# Course Docs Parity Report

Date: 2026-03-10

## Scope

- Reviewed: `src/data/courses` (all 7 tracks)
- Total inventory: 7 courses, 42 levels, 102 modules, 679 topics, 5085 subtopics
- Validation commands:
  - `npm run validate:courses`
  - `npm run audit:courses`

## Official Sources Used

- JavaScript (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Promise.any: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
- AbortSignal.any: https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/any_static
- Document.write: https://developer.mozilla.org/en-US/docs/Web/API/Document/write
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- TypeScript Namespaces: https://www.typescriptlang.org/docs/handbook/namespaces.html
- Node.js Event Loop: https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
- Node.js process.nextTick: https://nodejs.org/api/process.html#processnexttickcallback-args
- Node.js HTTP/2: https://nodejs.org/api/http2.html
- Node.js URL legacy API: https://nodejs.org/api/url.html
- Node.js Cluster: https://nodejs.org/api/cluster.html
- Express API: https://expressjs.com/en/4x/api.html#express.json
- NestJS Circular Dependency: https://docs.nestjs.com/fundamentals/circular-dependency
- MongoDB cursor.count (deprecated): https://www.mongodb.com/docs/manual/reference/method/cursor.count/
- MongoDB countDocuments: https://www.mongodb.com/docs/manual/reference/method/db.collection.countDocuments/
- PostgreSQL docs: https://www.postgresql.org/docs/

## Per-Course Status

| Course | Status | Result |
|---|---|---|
| JavaScript | Verified | Legacy topics (`var`, `document.write`) are clearly marked; modern APIs like `Promise.any` and `AbortSignal.any` are valid. |
| TypeScript | Verified | Legacy markers (`Angle-bracket syntax`, `Namespaces`) are explicitly labeled; no high-risk misinformation found. |
| Node.js | Updated | Event-loop wording clarified, nextTick semantics aligned, HTTP/2 Server Push wording adjusted for real-world usage. |
| Express.js | Updated | Production scaling guidance widened from only `cluster` to include horizontal scaling / strategy selection. |
| NestJS | Verified | `forwardRef()` and circular dependency guidance aligns with official docs. |
| MongoDB | Verified | Deprecation guidance for `cursor.count()` and migration to `countDocuments()` is correct. |
| PostgreSQL | Verified | Core SQL and advanced topics align with current PostgreSQL documentation structure. |

## Fixes Applied In This Pass

- Node.js event loop phase title clarity:
  - `src/data/courses/nodejs/l2-intermediate.ts`
- Node.js HTTP/2 server push wording updated:
  - `src/data/courses/nodejs/l2-intermediate.ts`
- Express production scaling topic improved:
  - `src/data/courses/express/l4-professional.ts`

## Residual Risks / Next Pass

- No high-severity factual errors detected in this pass.
- Optional next pass (deeper): check topic-by-topic API version boundaries (Node v20+ vs older LTS behavior) and add explicit version notes where needed.
