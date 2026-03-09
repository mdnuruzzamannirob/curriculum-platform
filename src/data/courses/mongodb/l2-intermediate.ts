import { Level } from "@/types";

export const l2Level: Level = {
  id: "mid",
  title: "Aggregation & Data Modelling",
  description: "Mid-level Dev",
  color: "#fb923c",
  modules: [
    // ── MongoDB ──────────────────────────────────────────
    {
      id: "mongodb",
      title: "MongoDB",
      icon: "layers",
      color: "#47a248",
      description:
        "Aggregation pipeline, indexing strategies, and schema patterns.",
      topics: [
        {
          id: "aggregation-pipeline-intro",
          title: "Aggregation Pipeline — Core Concepts",
          description: "Understanding the aggregation pipeline model.",
          subtopics: [
            {
              id: "pipeline-concept",
              title:
                "Pipeline concept — stages transform documents sequentially",
            },
            {
              id: "aggregate-method",
              title: "db.collection.aggregate([stage1, stage2, ...])",
            },
            {
              id: "stage-match",
              title:
                "$match — filter documents early in pipeline (use first for performance)",
            },
            {
              id: "stage-project",
              title:
                "$project — include/exclude/reshape fields, computed fields",
            },
            { id: "stage-sort", title: "$sort — sort pipeline results" },
            {
              id: "stage-limit-skip",
              title: "$limit and $skip — pagination within pipeline",
            },
            {
              id: "stage-count",
              title: "$count — count remaining documents in pipeline",
            },
            {
              id: "pipeline-performance",
              title:
                "Pipeline performance — $match and $sort should precede $project",
            },
          ],
        },
        {
          id: "aggregation-group",
          title: "Aggregation — $group & Accumulators",
          description: "Grouping documents and computing aggregate values.",
          subtopics: [
            {
              id: "stage-group",
              title: "$group — group documents by _id expression",
            },
            {
              id: "acc-sum",
              title: "$sum — total of field values or count with $sum: 1",
            },
            { id: "acc-avg", title: "$avg — average of field values" },
            {
              id: "acc-min-max",
              title: "$min, $max — minimum and maximum values",
            },
            {
              id: "acc-push",
              title: "$push — collect field values into array per group",
            },
            {
              id: "acc-addtoset",
              title: "$addToSet — collect unique values per group",
            },
            {
              id: "acc-first-last",
              title:
                "$first, $last — first/last document value per group (after $sort)",
            },
            {
              id: "acc-count-group",
              title:
                "$count (in $group) vs $sum: 1 — counting grouped documents",
            },
            {
              id: "group-by-null",
              title:
                "Group by null — { _id: null } to calculate totals across all documents",
            },
            {
              id: "group-computed-id",
              title: "Computed _id — { _id: { year: { $year: '$date' } } }",
            },
          ],
        },
        {
          id: "aggregation-lookup",
          title: "Aggregation — $lookup (Joins)",
          description: "Joining documents from multiple collections.",
          subtopics: [
            {
              id: "lookup-basic",
              title: "$lookup basic — from, localField, foreignField, as",
            },
            {
              id: "lookup-array-result",
              title: "$lookup result — always an array (empty if no match)",
            },
            {
              id: "lookup-unwind-pattern",
              title: "$lookup + $unwind pattern — flatten joined array",
            },
            {
              id: "lookup-pipeline",
              title:
                "$lookup with pipeline — custom join conditions and sub-pipeline",
            },
            {
              id: "lookup-let",
              title:
                "$lookup let — expose local fields to pipeline: { let: { uid: '$userId' } }",
            },
            {
              id: "lookup-multiple",
              title:
                "Multiple $lookup stages — joining more than two collections",
            },
            {
              id: "lookup-vs-embedding",
              title:
                "$lookup trade-offs vs embedding — when joins are acceptable",
            },
          ],
        },
        {
          id: "aggregation-unwind",
          title: "Aggregation — $unwind",
          description: "Deconstructing array fields in pipelines.",
          subtopics: [
            {
              id: "unwind-basic",
              title: "$unwind — produces one document per array element",
            },
            {
              id: "unwind-preservenull",
              title:
                "preserveNullAndEmptyArrays — keep docs with missing/empty array",
            },
            {
              id: "unwind-index",
              title: "includeArrayIndex — add array position to output",
            },
            {
              id: "unwind-then-group",
              title:
                "$unwind then $group — common pattern for array aggregations",
            },
            {
              id: "unwind-nested",
              title: "Unwinding nested arrays — multiple $unwind stages",
            },
          ],
        },
        {
          id: "aggregation-reshaping",
          title: "Aggregation — Reshaping Stages",
          description: "Transforming document structure in pipelines.",
          subtopics: [
            {
              id: "stage-addfields",
              title:
                "$addFields — add computed fields without removing existing ones",
            },
            {
              id: "stage-replaceroot",
              title: "$replaceRoot — promote embedded document to top level",
            },
            {
              id: "stage-replaceWith",
              title: "$replaceWith — alias for $replaceRoot newRoot",
            },
            {
              id: "stage-set-unset",
              title:
                "$set / $unset — pipeline aliases for $addFields / $project exclusion",
            },
            {
              id: "stage-facet",
              title:
                "$facet — run multiple sub-pipelines on same input documents",
            },
            {
              id: "stage-bucket",
              title:
                "$bucket — group into ranges: { boundaries: [0, 18, 65, 100] }",
            },
            {
              id: "stage-bucketauto",
              title: "$bucketAuto — automatic N equal-distribution buckets",
            },
            {
              id: "stage-out",
              title:
                "$out — write pipeline results to a new/existing collection",
            },
            {
              id: "stage-merge",
              title:
                "$merge — merge pipeline results into existing collection (upsert/replace)",
            },
          ],
        },
        {
          id: "aggregation-expressions",
          title: "Aggregation Expressions & Operators",
          description: "Using expression operators in pipelines.",
          subtopics: [
            {
              id: "expr-arithmetic",
              title: "Arithmetic — $add, $subtract, $multiply, $divide, $mod",
            },
            {
              id: "expr-string",
              title:
                "String — $concat, $toLower, $toUpper, $substr, $trim, $split",
            },
            {
              id: "expr-conditional",
              title: "Conditional — $cond, $ifNull, $switch",
            },
            {
              id: "expr-comparison",
              title: "Comparison in expr — $eq, $ne, $gt, $lt, $gte, $lte",
            },
            {
              id: "expr-date",
              title: "Date — $year, $month, $dayOfMonth, $hour, $dateToString",
            },
            {
              id: "expr-array",
              title:
                "Array — $size, $slice, $arrayElemAt, $filter, $map, $reduce",
            },
            {
              id: "expr-type-conversion",
              title: "Type conversion — $toString, $toInt, $toDate, $convert",
            },
            {
              id: "expr-object",
              title: "Object — $objectToArray, $arrayToObject, $mergeObjects",
            },
          ],
        },
        {
          id: "index-types",
          title: "Index Types",
          description: "Specialized MongoDB index types.",
          subtopics: [
            {
              id: "single-field-index",
              title:
                "Single field index — { age: 1 } ascending, { age: -1 } descending",
            },
            {
              id: "compound-index-detail",
              title: "Compound index — field order, prefix rule, ESR rule",
            },
            {
              id: "multikey-index-detail",
              title: "Multikey index — automatically created for array fields",
            },
            {
              id: "text-index",
              title: "Text index — full-text search, weights, language support",
            },
            {
              id: "geospatial-2dsphere",
              title: "2dsphere index — GeoJSON geometry, sphere calculations",
            },
            {
              id: "geospatial-2d",
              title: "2d index — legacy flat-coordinate grid",
            },
            {
              id: "hashed-index",
              title:
                "Hashed index — { _id: 'hashed' } for range-based shard key equality",
            },
            {
              id: "ttl-index",
              title:
                "TTL index — expireAfterSeconds, auto-delete old documents",
            },
            {
              id: "unique-index-detail",
              title: "Unique index — enforce field uniqueness, partial unique",
            },
            {
              id: "partial-index",
              title:
                "Partial index — partialFilterExpression (index subset of docs)",
            },
            {
              id: "sparse-index",
              title: "Sparse index — only index documents where field exists",
            },
            {
              id: "wildcard-index",
              title:
                "Wildcard index — { '$**': 1 } index all or specific nested fields",
            },
          ],
        },
        {
          id: "compound-index-esr",
          title: "Compound Index & ESR Rule",
          description: "Optimising multi-field indexes.",
          subtopics: [
            {
              id: "esr-rule",
              title:
                "ESR rule — Equality fields first, then Sort fields, then Range fields",
            },
            {
              id: "index-prefix",
              title:
                "Index prefix rule — compound index supports prefix queries",
            },
            {
              id: "covered-query",
              title:
                "Covered query — all queried and projected fields in index",
            },
            {
              id: "index-selectivity",
              title: "Index selectivity — high cardinality fields first",
            },
            {
              id: "sort-with-index",
              title:
                "Using index for sort — avoiding in-memory sort (SORT stage)",
            },
            {
              id: "index-intersection",
              title: "Index intersection — MongoDB using multiple indexes",
            },
            {
              id: "redundant-indexes",
              title: "Avoiding redundant indexes — compound covers single",
            },
          ],
        },
        {
          id: "text-search",
          title: "Text Search",
          description: "Full-text search with MongoDB text indexes.",
          subtopics: [
            {
              id: "create-text-index",
              title: "createIndex({ desc: 'text', name: 'text' }) — text index",
            },
            {
              id: "text-query",
              title: "$text: { $search: 'keyword' } — full-text search",
            },
            {
              id: "text-phrase",
              title: "Phrase search — { $search: '\"exact phrase\"' }",
            },
            {
              id: "text-exclude",
              title: "Excludes — { $search: 'nosql -relational' }",
            },
            {
              id: "text-score",
              title:
                "textScore — { score: { $meta: 'textScore' } } relevance ranking",
            },
            {
              id: "text-language",
              title: "Language option — { $language: 'english' } for stemming",
            },
            {
              id: "text-weights",
              title:
                "Index weights — { name: 10, desc: 5 } boost specific fields",
            },
            {
              id: "one-text-index",
              title: "One text index per collection limitation",
            },
          ],
        },
        {
          id: "schema-design-patterns",
          title: "Advanced Schema Design Patterns",
          description: "Industry-standard schema design patterns.",
          subtopics: [
            {
              id: "subset-pattern",
              title:
                "Subset pattern — store hot data in main doc, rest in linked doc",
            },
            {
              id: "extended-reference-pattern",
              title:
                "Extended reference — duplicate frequently-read fields from referenced doc",
            },
            {
              id: "computed-pattern",
              title:
                "Computed pattern — pre-compute frequently needed aggregations",
            },
            {
              id: "bucket-pattern",
              title: "Bucket pattern — group time-series into document buckets",
            },
            {
              id: "outlier-pattern",
              title:
                "Outlier pattern — handle exceptional documents separately",
            },
            {
              id: "versioning-pattern",
              title: "Document versioning pattern — track document history",
            },
            {
              id: "tree-patterns",
              title:
                "Tree patterns — parent reference, child reference, materialized path, nested sets",
            },
            {
              id: "polymorphic-pattern",
              title:
                "Polymorphic pattern — different document shapes in same collection",
            },
          ],
        },
        {
          id: "transactions-basics",
          title: "Transactions",
          description: "Multi-document ACID transactions in MongoDB.",
          subtopics: [
            {
              id: "acid-mongodb",
              title:
                "ACID in MongoDB — Atomicity, Consistency, Isolation, Durability",
            },
            {
              id: "single-doc-atomic",
              title:
                "Single document atomicity — always atomic without transactions",
            },
            {
              id: "session-create",
              title: "client.startSession() — creating a session",
            },
            {
              id: "start-transaction",
              title: "session.startTransaction() — begin transaction",
            },
            {
              id: "commit-abort",
              title: "session.commitTransaction() / abortTransaction()",
            },
            {
              id: "transaction-writeconcern",
              title: "Transaction write concern — majority for durability",
            },
            {
              id: "distributed-transactions",
              title:
                "Distributed transactions — across shards (requires replica set)",
            },
            {
              id: "transaction-perf-cost",
              title: "Transaction performance cost — use only when needed",
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
      description: "Mid-level MongoDB interview questions.",
      topics: [
        {
          id: "aggregation-qa",
          title: "Aggregation Pipeline Q&A",
          description: "Aggregation pipeline interview questions.",
          subtopics: [
            {
              id: "pipeline-vs-query-qa",
              title:
                "What is the aggregation pipeline and how is it different from a regular query?",
            },
            {
              id: "match-first-qa",
              title: "Why should $match come first in an aggregation pipeline?",
            },
            {
              id: "group-sum-qa",
              title: "How do you count documents per category using $group?",
            },
            {
              id: "lookup-join-qa",
              title: "How does $lookup work? What is the result shape?",
            },
            {
              id: "unwind-qa",
              title: "What does $unwind do and when would you use it?",
            },
            { id: "facet-qa", title: "What is $facet and when is it useful?" },
            {
              id: "bucket-qa",
              title: "What is $bucket used for? Give a real-world example.",
            },
            {
              id: "out-vs-merge-qa",
              title: "What is the difference between $out and $merge?",
            },
          ],
        },
        {
          id: "indexes-deep-qa",
          title: "Indexes Q&A",
          description: "Intermediate indexing interview questions.",
          subtopics: [
            {
              id: "text-index-qa",
              title: "How do you implement full-text search in MongoDB?",
            },
            {
              id: "ttl-index-qa",
              title: "What is a TTL index and when would you use it?",
            },
            {
              id: "partial-index-qa",
              title:
                "What is a partial index and when is it better than a regular index?",
            },
            {
              id: "wildcard-index-qa",
              title: "What is a wildcard index and what problem does it solve?",
            },
            {
              id: "esr-rule-qa",
              title: "Explain the ESR rule for compound index field ordering",
            },
            { id: "covered-query-qa", title: "What is a covered query?" },
            {
              id: "hashed-index-qa",
              title: "When would you use a hashed index?",
            },
            {
              id: "sparse-index-qa",
              title:
                "What is a sparse index? How is it different from a partial index?",
            },
          ],
        },
        {
          id: "schema-transactions-qa",
          title: "Schema Design & Transactions Q&A",
          description: "Schema design and transaction interview questions.",
          subtopics: [
            {
              id: "extended-reference-qa",
              title: "What is the extended reference pattern? Give an example.",
            },
            {
              id: "bucket-pattern-qa",
              title: "Explain the bucket pattern for time-series data.",
            },
            {
              id: "computed-pattern-qa",
              title:
                "What is the computed pattern and what problem does it solve?",
            },
            { id: "subset-pattern-qa", title: "What is the subset pattern?" },
            {
              id: "tree-pattern-qa",
              title: "How would you model a category tree in MongoDB?",
            },
            {
              id: "acid-mongodb-qa",
              title: "Is MongoDB ACID compliant? Explain.",
            },
            {
              id: "when-transactions-qa",
              title:
                "When would you use multi-document transactions in MongoDB?",
            },
            {
              id: "transaction-cost-qa",
              title:
                "What are the performance implications of MongoDB transactions?",
            },
          ],
        },
      ],
    },
  ],
};
