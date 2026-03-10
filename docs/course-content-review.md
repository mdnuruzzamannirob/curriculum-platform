# Course Content Review (Official Docs Aligned)

This note documents the review approach used for `src/data/courses` and the primary official documentation sources used for verification.

## Primary Sources

- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- TypeScript: https://www.typescriptlang.org/docs/
- Node.js: https://nodejs.org/docs/latest/api/
- Express.js: https://expressjs.com/
- NestJS: https://docs.nestjs.com/
- MongoDB: https://www.mongodb.com/docs/
- PostgreSQL: https://www.postgresql.org/docs/

## Review Method

1. Structural validation
   - Run `npm run validate:courses` to detect duplicate IDs, empty titles, and invalid course shapes.
2. High-risk terminology scan
   - Scan for legacy/deprecated API mentions and ensure they are explicitly marked as legacy/deprecated when needed.
3. Official docs spot-check
   - For ambiguous or frequently misunderstood topics, confirm wording against official docs.
4. Targeted correction
   - Apply wording fixes that reduce misinformation risk while keeping roadmap scope intact.

## Latest Corrections Applied

- Node.js event-loop phase wording clarified:
  - `src/data/courses/nodejs/l2-intermediate.ts`
- Node.js `process.nextTick()` wording corrected:
  - `src/data/courses/nodejs/l1-core.ts`
- Node.js HTTP/2 Server Push topic clarified as limited in real-world usage:
  - `src/data/courses/nodejs/l2-intermediate.ts`

## Why this approach

The roadmap contains thousands of topics/subtopics. A repeatable validation + docs-backed correction workflow is safer and more maintainable than ad-hoc manual edits.
