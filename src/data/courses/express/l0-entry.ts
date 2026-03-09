import { Level } from "@/types";

export const l0Level: Level = {
  id: "entry",
  title: "Express.js Foundations",
  description: "Beginner",
  color: "#4ade80",
  modules: [
    // ── Express ──────────────────────────────────────────
    {
      id: "express",
      title: "Express",
      icon: "layers",
      color: "#e67e22",
      description: "Express.js absolute basics.",
      topics: [
        {
          id: "what-is-express",
          title: "What is Express.js?",
          description: "Introduction to Express.js framework.",
          subtopics: [
            {
              id: "express-definition",
              title: "Express.js — minimal Node.js web framework",
            },
            {
              id: "express-history",
              title: "History — TJ Holowaychuk, created 2010",
            },
            { id: "express-why", title: "Why Express? (vs raw http module)" },
            {
              id: "express-features",
              title: "Key features: routing, middleware, views",
            },
            {
              id: "express-vs-node-http",
              title: "Express vs Node.js http module",
            },
            { id: "express-ecosystem", title: "Express ecosystem & community" },
            {
              id: "express-versions",
              title: "Express 4 vs Express 5 (differences)",
            },
            {
              id: "express-install",
              title: "Installing Express (npm install express)",
            },
          ],
        },
        {
          id: "first-server",
          title: "Creating Your First Server",
          description: "Hello World with Express.",
          subtopics: [
            {
              id: "require-express",
              title: "const express = require('express')",
            },
            {
              id: "app-instance",
              title: "const app = express() — creating the app",
            },
            { id: "app-listen", title: "app.listen(port, callback)" },
            { id: "port-declaration", title: "PORT from env or default 3000" },
            {
              id: "hello-world-route",
              title: "First GET route — res.send('Hello World')",
            },
            {
              id: "running-with-node",
              title: "Running with node index.js vs nodemon",
            },
            {
              id: "nodemon-setup",
              title: "nodemon — auto restart on file change",
            },
            {
              id: "esm-vs-cjs-express",
              title: "ESM vs CommonJS in Express projects",
            },
          ],
        },
        {
          id: "routing-basics",
          title: "Routing Basics",
          description: "Defining routes in Express.",
          subtopics: [
            { id: "app-get", title: "app.get(path, handler) — GET routes" },
            { id: "app-post", title: "app.post(path, handler) — POST routes" },
            { id: "app-put", title: "app.put(path, handler) — PUT routes" },
            {
              id: "app-delete",
              title: "app.delete(path, handler) — DELETE routes",
            },
            {
              id: "app-patch",
              title: "app.patch(path, handler) — PATCH routes",
            },
            { id: "app-all", title: "app.all() — match all HTTP methods" },
            {
              id: "route-path-strings",
              title: "Route path strings, patterns & regex",
            },
            {
              id: "multiple-handlers",
              title: "Multiple route handlers (chaining)",
            },
          ],
        },
        {
          id: "request-object",
          title: "Request Object (req)",
          description: "Understanding the req object.",
          subtopics: [
            { id: "req-params", title: "req.params — URL route parameters" },
            {
              id: "req-query",
              title: "req.query — URL query string parameters",
            },
            { id: "req-body", title: "req.body — request body (needs parser)" },
            { id: "req-headers", title: "req.headers — incoming HTTP headers" },
            { id: "req-method", title: "req.method — HTTP method string" },
            { id: "req-url-path", title: "req.url, req.path, req.originalUrl" },
            { id: "req-ip", title: "req.ip — client IP address" },
            {
              id: "req-cookies",
              title: "req.cookies — parsed cookies (needs parser)",
            },
          ],
        },
        {
          id: "response-object",
          title: "Response Object (res)",
          description: "Sending responses with res.",
          subtopics: [
            { id: "res-send", title: "res.send() — generic response" },
            {
              id: "res-json",
              title: "res.json() — JSON response with correct headers",
            },
            {
              id: "res-status",
              title: "res.status(code) — set HTTP status code",
            },
            { id: "res-redirect", title: "res.redirect([status], url)" },
            { id: "res-end", title: "res.end() — end response without data" },
            {
              id: "res-set-header",
              title: "res.set() / res.header() — set headers",
            },
            {
              id: "res-download",
              title: "res.download() — trigger file download",
            },
            { id: "res-sendfile", title: "res.sendFile() — serve a file" },
            {
              id: "res-render",
              title: "res.render() — render template (intro)",
            },
          ],
        },
        {
          id: "middleware-basics",
          title: "Middleware — Concept & Basics",
          description: "What middleware is and how to use it.",
          subtopics: [
            {
              id: "middleware-definition",
              title: "What is middleware? (req, res, next)",
            },
            {
              id: "middleware-order",
              title: "Middleware execution order matters",
            },
            {
              id: "app-use",
              title: "app.use() — register middleware globally",
            },
            {
              id: "next-function",
              title: "next() — passing control to next middleware",
            },
            { id: "next-err", title: "next(err) — passing to error handler" },
            {
              id: "built-in-middleware",
              title: "Built-in middleware: express.json, express.urlencoded",
            },
            {
              id: "third-party-middleware",
              title: "Third-party middleware (morgan, cors, helmet)",
            },
            {
              id: "route-specific-middleware",
              title: "Route-specific middleware",
            },
          ],
        },
        {
          id: "static-files",
          title: "Static File Serving",
          description: "Serving HTML, CSS, images with Express.",
          subtopics: [
            { id: "express-static", title: "express.static() middleware" },
            { id: "public-folder", title: "public/ directory convention" },
            {
              id: "static-virtual-path",
              title: "Virtual path prefix for static files",
            },
            {
              id: "multiple-static-dirs",
              title: "Serving from multiple directories",
            },
            {
              id: "static-options",
              title: "Options: maxAge, etag, index, dotfiles",
            },
            { id: "serving-html-file", title: "Serving index.html as default" },
          ],
        },
        {
          id: "env-config",
          title: "Environment Configuration",
          description: "Managing environment variables in Express.",
          subtopics: [
            {
              id: "dotenv-setup",
              title: "dotenv — require('dotenv').config()",
            },
            { id: "process-env", title: "process.env.VARIABLE_NAME usage" },
            { id: "env-file", title: ".env file structure & .gitignore" },
            { id: "node-env", title: "NODE_ENV — development vs production" },
            { id: "port-from-env", title: "PORT from environment variable" },
            {
              id: "env-validation",
              title: "Validating required env vars on startup",
            },
          ],
        },
        {
          id: "basic-error-handling",
          title: "Error Handling Basics",
          description: "Handling errors in Express apps.",
          subtopics: [
            { id: "try-catch-route", title: "try/catch inside route handlers" },
            {
              id: "error-middleware",
              title: "Error-handling middleware (4 parameters)",
            },
            { id: "404-handler", title: "404 Not Found handler (catch-all)" },
            {
              id: "error-status-codes",
              title: "Sending proper HTTP error status codes",
            },
            { id: "error-json-response", title: "JSON error response format" },
            {
              id: "express-error-object",
              title: "Error object in Express (err.message, err.status)",
            },
          ],
        },
        {
          id: "project-structure",
          title: "Project Structure & Setup",
          description: "Organizing an Express project.",
          subtopics: [
            {
              id: "package-json-scripts",
              title: "package.json scripts: start, dev, test",
            },
            {
              id: "folder-structure",
              title: "Basic folder structure (routes/, controllers/, models/)",
            },
            {
              id: "entry-point",
              title: "Entry point: app.js vs server.js vs index.js",
            },
            {
              id: "separation-app-server",
              title: "Separating app.js and server.js",
            },
            {
              id: "gitignore-express",
              title: ".gitignore for Node/Express projects",
            },
            {
              id: "npm-init-setup",
              title: "npm init — initializing a new project",
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
      description: "Entry-level Express interview questions.",
      topics: [
        {
          id: "express-fundamentals-qa",
          title: "Express.js Fundamentals Q&A",
          description: "Core conceptual questions about Express.",
          subtopics: [
            {
              id: "what-is-express-qa",
              title: "What is Express.js and why use it?",
            },
            {
              id: "express-vs-node-qa",
              title: "Express vs raw Node.js http module",
            },
            {
              id: "express-vs-others-qa",
              title: "Express vs Fastify vs Koa vs NestJS",
            },
            {
              id: "is-express-opinionated",
              title: "Is Express opinionated or un-opinionated?",
            },
            {
              id: "express-minimalist-qa",
              title: "What does 'minimalist' mean in Express?",
            },
            {
              id: "middleware-definition-qa",
              title: "What is middleware in Express?",
            },
            {
              id: "app-use-vs-app-get-qa",
              title: "app.use() vs app.get() — difference?",
            },
            {
              id: "express-request-lifecycle",
              title: "Describe the Express request lifecycle",
            },
          ],
        },
        {
          id: "http-routing-qa",
          title: "HTTP & Routing Q&A",
          description: "HTTP methods and routing questions.",
          subtopics: [
            {
              id: "http-methods-qa",
              title:
                "HTTP methods: GET, POST, PUT, PATCH, DELETE — when to use each?",
            },
            {
              id: "req-res-qa",
              title: "What is the req object? What is the res object?",
            },
            {
              id: "route-params-vs-query-qa",
              title: "Route params vs query strings — difference?",
            },
            {
              id: "http-status-codes-qa",
              title:
                "Common HTTP status codes (200, 201, 400, 401, 403, 404, 500)",
            },
            {
              id: "res-send-vs-json-qa",
              title: "res.send() vs res.json() — difference?",
            },
            {
              id: "next-function-qa",
              title: "What does next() do in middleware?",
            },
            {
              id: "why-order-matters-qa",
              title: "Why does middleware order matter in Express?",
            },
            {
              id: "404-handling-qa",
              title: "How do you handle 404 in Express?",
            },
          ],
        },
        {
          id: "setup-basics-qa",
          title: "Setup & Basics Q&A",
          description: "Questions about Express project setup.",
          subtopics: [
            {
              id: "express-static-qa",
              title: "How does express.static() work?",
            },
            {
              id: "dotenv-express-qa",
              title: "How do you use dotenv in Express?",
            },
            { id: "nodemon-qa", title: "What is nodemon and why use it?" },
            {
              id: "error-middleware-qa",
              title: "How do you define an error-handling middleware?",
            },
            {
              id: "app-listen-qa",
              title: "What is app.listen()? What does it return?",
            },
            {
              id: "cjs-esm-express-qa",
              title: "How do you use ESM with Express?",
            },
            {
              id: "body-parser-qa",
              title: "What is body-parser? Is it still needed?",
            },
            {
              id: "app-settings-qa",
              title: "What are Express app settings? (app.set, app.get)",
            },
          ],
        },
      ],
    },
  ],
};
