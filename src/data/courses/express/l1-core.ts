import { Level } from "@/types";

export const l1Level: Level = {
  id: "junior",
  title: "Core Express.js",
  description: "Junior Dev",
  color: "#facc15",
  modules: [
    // ── Express ──────────────────────────────────────────
    {
      id: "express",
      title: "Express",
      icon: "layers",
      color: "#e67e22",
      description: "Core Express.js patterns.",
      topics: [
        {
          id: "express-router",
          title: "Express Router — Modular Routing",
          description: "Organizing routes with express.Router.",
          subtopics: [
            {
              id: "router-create",
              title: "express.Router() — creating a router instance",
            },
            {
              id: "router-mount",
              title: "app.use('/path', router) — mounting routers",
            },
            {
              id: "router-files",
              title: "Separate route files (routes/users.js)",
            },
            {
              id: "router-chaining",
              title: "router.route() — chaining HTTP methods",
            },
            {
              id: "router-params",
              title: "router.param() — param pre-processing",
            },
            { id: "nested-routers", title: "Nested routers for sub-routes" },
            { id: "router-middleware", title: "Router-level middleware" },
            { id: "index-router", title: "index.js router aggregator pattern" },
          ],
        },
        {
          id: "body-parsing",
          title: "Body Parsing — JSON, URL-Encoded & Raw",
          description: "Parsing request bodies.",
          subtopics: [
            {
              id: "express-json-parser",
              title: "express.json() — JSON body parser",
            },
            {
              id: "express-urlencoded",
              title: "express.urlencoded({ extended }) — form data",
            },
            { id: "express-raw", title: "express.raw() — raw buffer body" },
            { id: "express-text", title: "express.text() — plain text body" },
            {
              id: "body-parser-legacy",
              title: "body-parser package (legacy vs built-in)",
            },
            {
              id: "content-type-header",
              title: "Content-Type header importance",
            },
            {
              id: "request-size-limit",
              title: "Limiting request size (limit option)",
            },
            {
              id: "multipart-intro",
              title: "Multipart data (intro — needs multer)",
            },
          ],
        },
        {
          id: "url-params-query",
          title: "URL Parameters & Query Strings",
          description: "Extracting data from the URL.",
          subtopics: [
            {
              id: "named-params",
              title: "Named route parameters (:id, :userId)",
            },
            { id: "optional-params", title: "Optional parameters (:id?)" },
            {
              id: "multiple-params",
              title: "Multiple params (/users/:userId/posts/:postId)",
            },
            { id: "wildcard-routes", title: "Wildcard routes (*)" },
            {
              id: "query-string-parsing",
              title: "req.query auto-parsed by Express",
            },
            {
              id: "query-string-arrays",
              title: "Array query params (?tags[]=a&tags[]=b)",
            },
            {
              id: "query-string-objects",
              title: "Nested objects in query strings",
            },
            {
              id: "qs-library",
              title: "qs library — advanced query string parsing",
            },
          ],
        },
        {
          id: "http-status-headers",
          title: "HTTP Status Codes & Response Headers",
          description: "Correct HTTP status codes and headers.",
          subtopics: [
            {
              id: "1xx-informational",
              title: "1xx — Informational (100 Continue, 101 Switching)",
            },
            {
              id: "2xx-success",
              title: "2xx — Success (200 OK, 201 Created, 204 No Content)",
            },
            {
              id: "3xx-redirect",
              title: "3xx — Redirection (301, 302, 304 Not Modified)",
            },
            {
              id: "4xx-client",
              title: "4xx — Client Error (400, 401, 403, 404, 409, 422, 429)",
            },
            {
              id: "5xx-server",
              title: "5xx — Server Error (500, 502, 503, 504)",
            },
            { id: "res-set-headers", title: "Setting custom response headers" },
            { id: "content-type-res", title: "Content-Type response header" },
            { id: "cache-control-basic", title: "Cache-Control header basics" },
          ],
        },
        {
          id: "error-handling-core",
          title: "Error Handling — Middleware & Custom Errors",
          description: "Robust error handling in Express.",
          subtopics: [
            {
              id: "error-handler-4params",
              title: "Error middleware: (err, req, res, next)",
            },
            {
              id: "custom-error-class",
              title: "Custom AppError class (message, statusCode)",
            },
            {
              id: "operational-vs-programmer",
              title: "Operational vs Programmer errors",
            },
            {
              id: "async-try-catch",
              title: "try/catch in async route handlers",
            },
            {
              id: "asynchandler-wrapper",
              title: "asyncHandler wrapper to avoid try/catch",
            },
            {
              id: "express-async-errors",
              title: "express-async-errors package",
            },
            {
              id: "global-error-controller",
              title: "Centralized error controller pattern",
            },
            {
              id: "error-in-development",
              title: "Sending error stack in development only",
            },
          ],
        },
        {
          id: "template-engines",
          title: "Template Engines — EJS, Pug & Handlebars",
          description: "Server-side rendering with template engines.",
          subtopics: [
            { id: "view-engine-setup", title: "app.set('view engine', 'ejs')" },
            {
              id: "views-directory",
              title: "app.set('views', path) — views directory",
            },
            { id: "ejs-basics", title: "EJS — <% %>, <%= %>, <%- %> tags" },
            {
              id: "ejs-partials",
              title: "EJS partials — <%- include('partial') %>",
            },
            {
              id: "pug-basics",
              title: "Pug (Jade) — indentation-based syntax",
            },
            {
              id: "handlebars-basics",
              title: "express-handlebars — {{variable}} syntax",
            },
            {
              id: "res-render-data",
              title: "res.render('view', { data }) — passing data",
            },
            { id: "template-vs-api", title: "SSR templates vs pure JSON APIs" },
          ],
        },
        {
          id: "cookies-sessions",
          title: "Cookies & Sessions",
          description: "Stateful HTTP with cookies and sessions.",
          subtopics: [
            {
              id: "cookie-parser-setup",
              title: "cookie-parser middleware setup",
            },
            { id: "res-cookie", title: "res.cookie(name, value, options)" },
            { id: "req-cookies", title: "req.cookies & req.signedCookies" },
            {
              id: "cookie-options",
              title: "Cookie options: httpOnly, secure, maxAge, sameSite",
            },
            {
              id: "express-session-setup",
              title: "express-session middleware",
            },
            {
              id: "session-store",
              title: "Session stores: memory (dev), Redis (prod)",
            },
            {
              id: "req-session",
              title: "req.session — reading & writing session data",
            },
            { id: "session-destroy", title: "req.session.destroy() — logout" },
          ],
        },
        {
          id: "cors-basics",
          title: "CORS — Cross-Origin Resource Sharing",
          description: "Enabling CORS in Express APIs.",
          subtopics: [
            {
              id: "what-is-cors",
              title: "What is CORS and the Same-Origin Policy?",
            },
            {
              id: "cors-headers",
              title: "Access-Control-Allow-Origin, Allow-Methods headers",
            },
            { id: "cors-package", title: "cors npm package — basic setup" },
            {
              id: "cors-origin-whitelist",
              title: "Whitelisting specific origins",
            },
            {
              id: "cors-methods-headers",
              title: "Allowed methods and headers",
            },
            {
              id: "cors-credentials",
              title: "credentials: true — cookies cross-origin",
            },
            { id: "cors-preflight", title: "Preflight OPTIONS request" },
            {
              id: "cors-single-route",
              title: "Applying CORS to specific routes only",
            },
          ],
        },
        {
          id: "logging-morgan",
          title: "HTTP Logging with Morgan",
          description: "Request logging in development and production.",
          subtopics: [
            {
              id: "morgan-setup",
              title: "morgan middleware — npm install morgan",
            },
            {
              id: "morgan-formats",
              title: "Morgan formats: dev, combined, common, tiny",
            },
            {
              id: "morgan-dev-format",
              title: "morgan('dev') — colored output for dev",
            },
            {
              id: "morgan-custom-format",
              title: "Custom morgan format tokens",
            },
            {
              id: "morgan-to-file",
              title: "Logging to a file using fs.createWriteStream",
            },
            {
              id: "morgan-conditional",
              title: "Conditional logging (skip in test)",
            },
          ],
        },
        {
          id: "middleware-patterns",
          title: "Middleware Patterns",
          description: "Common middleware patterns in Express.",
          subtopics: [
            {
              id: "middleware-composition",
              title: "Middleware composition and order",
            },
            {
              id: "application-middleware",
              title: "Application-level vs router-level middleware",
            },
            {
              id: "third-party-list",
              title: "Popular third-party middleware list",
            },
            {
              id: "request-id-middleware",
              title: "Request ID middleware (uuid)",
            },
            { id: "timing-middleware", title: "Request timing middleware" },
            {
              id: "middleware-factory",
              title: "Middleware factory functions (returns middleware)",
            },
            {
              id: "conditional-middleware",
              title: "Conditional middleware execution",
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
      description: "Junior-level Express interview questions.",
      topics: [
        {
          id: "routing-middleware-qa",
          title: "Routing & Middleware Q&A",
          description: "Routing and middleware interview questions.",
          subtopics: [
            {
              id: "express-router-qa",
              title: "What is express.Router() and why use it?",
            },
            {
              id: "middleware-chain-qa",
              title: "How does the middleware chain work?",
            },
            {
              id: "route-params-qa",
              title: "How do you define and read route parameters?",
            },
            {
              id: "app-use-path-qa",
              title: "What does app.use('/api', router) do?",
            },
            {
              id: "error-handler-signature-qa",
              title: "Why does error middleware need 4 arguments?",
            },
            {
              id: "router-param-qa",
              title: "What is router.param() used for?",
            },
            {
              id: "order-routes-qa",
              title: "What happens if wildcard route is defined first?",
            },
            {
              id: "route-chaining-qa",
              title: "How do you chain route methods with router.route()?",
            },
          ],
        },
        {
          id: "http-fundamentals-qa",
          title: "HTTP & Request/Response Q&A",
          description: "HTTP fundamentals for Express devs.",
          subtopics: [
            { id: "get-vs-post-qa", title: "GET vs POST — when to use?" },
            { id: "put-vs-patch-qa", title: "PUT vs PATCH — difference?" },
            {
              id: "idempotent-qa",
              title: "What is an idempotent HTTP method?",
            },
            { id: "status-201-qa", title: "When to return 201 vs 200?" },
            {
              id: "status-400-401-403-qa",
              title: "400 vs 401 vs 403 — explain each",
            },
            {
              id: "content-type-qa",
              title: "What Content-Type header do you set for JSON?",
            },
            {
              id: "cors-preflight-qa",
              title: "What is a CORS preflight request?",
            },
            {
              id: "headers-immutable-qa",
              title: "Can you set headers after res.send()?",
            },
          ],
        },
        {
          id: "session-auth-basics-qa",
          title: "Sessions, Cookies & Auth Basics Q&A",
          description: "Questions about state management in HTTP.",
          subtopics: [
            {
              id: "cookie-vs-session-qa",
              title: "Cookie vs Session — difference?",
            },
            { id: "httponly-qa", title: "What does httpOnly cookie flag do?" },
            {
              id: "secure-cookie-qa",
              title: "What does the secure cookie flag mean?",
            },
            {
              id: "samesite-cookie-qa",
              title: "What is the SameSite cookie attribute?",
            },
            {
              id: "session-store-qa",
              title: "Why is in-memory session store bad for production?",
            },
            {
              id: "express-session-secret-qa",
              title: "What is the session secret used for?",
            },
            {
              id: "cors-credentials-qa",
              title: "How do you send cookies cross-origin?",
            },
            {
              id: "body-parser-qa-2",
              title: "Why do you need express.json() middleware?",
            },
          ],
        },
      ],
    },
  ],
};
