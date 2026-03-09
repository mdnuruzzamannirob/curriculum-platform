import { Level } from "@/types";

export const l1Level: Level = {
  id: "junior",
  title: "Core MongoDB",
  description: "Junior Dev",
  color: "#facc15",
  modules: [
    // ── MongoDB ──────────────────────────────────────────
    {
      id: "mongodb",
      title: "MongoDB",
      icon: "layers",
      color: "#47a248",
      description:
        "Core MongoDB — query operators, indexes, and schema design.",
      topics: [
        {
          id: "comparison-operators",
          title: "Comparison Query Operators",
          description: "Filtering documents with comparison operators.",
          subtopics: [
            { id: "op-eq", title: "$eq — exact equality match" },
            { id: "op-ne", title: "$ne — not equal" },
            {
              id: "op-gt-gte",
              title: "$gt, $gte — greater than / greater than or equal",
            },
            {
              id: "op-lt-lte",
              title: "$lt, $lte — less than / less than or equal",
            },
            {
              id: "op-in",
              title:
                "$in — field value matches any in array: { age: { $in: [25, 30] } }",
            },
            { id: "op-nin", title: "$nin — field value not in array" },
            {
              id: "comparison-chaining",
              title: "Chaining comparisons — { age: { $gt: 18, $lt: 65 } }",
            },
          ],
        },
        {
          id: "logical-operators",
          title: "Logical Query Operators",
          description: "Combining multiple conditions.",
          subtopics: [
            { id: "op-and", title: "$and — all conditions must match" },
            { id: "op-or", title: "$or — at least one condition must match" },
            {
              id: "op-not",
              title: "$not — inverts condition: { age: { $not: { $gt: 18 } } }",
            },
            { id: "op-nor", title: "$nor — none of the conditions match" },
            {
              id: "implicit-and",
              title: "Implicit $and — multiple keys in same object",
            },
            {
              id: "nested-logical",
              title: "Nested logical operators — $and within $or",
            },
          ],
        },
        {
          id: "element-operators",
          title: "Element & Evaluation Operators",
          description: "Matching by field existence and type.",
          subtopics: [
            {
              id: "op-exists",
              title:
                "$exists — { field: { $exists: true } } — field presence check",
            },
            {
              id: "op-type",
              title:
                "$type — match documents where field is of specific BSON type",
            },
            {
              id: "type-numbers",
              title:
                "BSON type numbers and aliases — 2 (string), 16 (int), 8 (bool)",
            },
            {
              id: "op-regex",
              title: "$regex — pattern match: { name: { $regex: /^John/i } }",
            },
            {
              id: "op-expr",
              title:
                "$expr — compare two fields: { $expr: { $gt: ['$spent', '$budget'] } }",
            },
            {
              id: "op-mod",
              title: "$mod — modulo operator: { qty: { $mod: [4, 0] } }",
            },
            {
              id: "op-where",
              title: "$where — JavaScript expression (avoid in production)",
            },
          ],
        },
        {
          id: "array-operators",
          title: "Array Query Operators",
          description: "Querying documents with array fields.",
          subtopics: [
            {
              id: "array-equality",
              title: "Array equality — exact array match vs element match",
            },
            {
              id: "op-all",
              title: "$all — array contains all specified elements",
            },
            {
              id: "op-elemmatch-query",
              title: "$elemMatch (query) — element satisfies all conditions",
            },
            {
              id: "op-size",
              title: "$size — array has exact number of elements",
            },
            {
              id: "array-index-query",
              title: "Array index query — { 'tags.0': 'mongodb' }",
            },
            {
              id: "array-of-objects",
              title: "Querying arrays of embedded documents — dot notation",
            },
          ],
        },
        {
          id: "update-operators",
          title: "Update Operators",
          description: "Modifying document fields with update operators.",
          subtopics: [
            {
              id: "op-set",
              title: "$set — set/add field: { $set: { name: 'Alice' } }",
            },
            {
              id: "op-unset",
              title: "$unset — remove field: { $unset: { tempField: '' } }",
            },
            {
              id: "op-inc",
              title: "$inc — increment/decrement: { $inc: { count: 1 } }",
            },
            { id: "op-mul", title: "$mul — multiply field value" },
            { id: "op-rename", title: "$rename — rename a field" },
            {
              id: "op-min-max",
              title: "$min, $max — update only if new value is smaller/larger",
            },
            {
              id: "op-currentdate",
              title: "$currentDate — set field to current date or timestamp",
            },
            {
              id: "op-setoninsert",
              title: "$setOnInsert — set fields only on upsert insert",
            },
          ],
        },
        {
          id: "array-update-operators",
          title: "Array Update Operators",
          description: "Modifying array fields in documents.",
          subtopics: [
            { id: "op-push", title: "$push — append element to array" },
            {
              id: "op-push-each",
              title: "$push with $each — push multiple values at once",
            },
            {
              id: "op-push-slice",
              title: "$push with $slice — keep only last N elements",
            },
            {
              id: "op-push-sort",
              title: "$push with $sort — sort array after push",
            },
            {
              id: "op-push-position",
              title: "$push with $position — insert at specific index",
            },
            {
              id: "op-pull",
              title: "$pull — remove elements matching condition",
            },
            {
              id: "op-pullall",
              title: "$pullAll — remove all matching values from array",
            },
            {
              id: "op-addtoset",
              title: "$addToSet — add element only if not already present",
            },
            {
              id: "op-pop",
              title: "$pop — remove first (-1) or last (1) element from array",
            },
            {
              id: "op-positional",
              title:
                "Positional operator $ — update first matching array element",
            },
            {
              id: "op-positional-all",
              title: "$[] — update all array elements",
            },
            {
              id: "op-positional-filtered",
              title:
                "$[identifier] with arrayFilters — update matching elements",
            },
          ],
        },
        {
          id: "projections",
          title: "Projections",
          description: "Shaping the fields returned by queries.",
          subtopics: [
            {
              id: "include-projection",
              title: "Inclusion projection — { name: 1, email: 1 }",
            },
            {
              id: "exclude-projection",
              title: "Exclusion projection — { password: 0 }",
            },
            {
              id: "mixing-projection",
              title: "Mixing include/exclude — _id is the exception",
            },
            {
              id: "projected-slice",
              title: "$slice in projection — return subset of array elements",
            },
            {
              id: "elemmatch-projection",
              title:
                "$elemMatch in projection — return first matching array element",
            },
            {
              id: "meta-projection",
              title: "$meta textScore projection — for text search ranking",
            },
          ],
        },
        {
          id: "cursor-methods",
          title: "Cursor Methods",
          description: "Controlling query result cursors.",
          subtopics: [
            {
              id: "cursor-sort",
              title: "cursor.sort({ field: 1 }) — ascending; -1 descending",
            },
            {
              id: "cursor-limit",
              title: "cursor.limit(n) — cap number of returned documents",
            },
            {
              id: "cursor-skip",
              title:
                "cursor.skip(n) — skip first n documents (offset pagination)",
            },
            {
              id: "cursor-count-deprecated",
              title: "cursor.count() — deprecated, use countDocuments()",
            },
            {
              id: "cursor-toarray",
              title: "cursor.toArray() — materialize all results into array",
            },
            {
              id: "cursor-foreach",
              title: "cursor.forEach(fn) — iterate documents one-by-one",
            },
            {
              id: "cursor-hasNext-next",
              title: "cursor.hasNext() / cursor.next() — manual iteration",
            },
            {
              id: "cursor-hint",
              title: "cursor.hint({ field: 1 }) — force index usage",
            },
            {
              id: "cursor-explain",
              title: "cursor.explain() — query plan analysis",
            },
          ],
        },
        {
          id: "indexes-basics",
          title: "Indexes — Basics",
          description: "Understanding and creating MongoDB indexes.",
          subtopics: [
            {
              id: "why-indexes",
              title: "Why indexes? — COLLSCAN vs IXSCAN, B-tree data structure",
            },
            {
              id: "default-id-index",
              title: "Default _id index — automatically created, unique",
            },
            {
              id: "createindex-single",
              title: "createIndex({ field: 1 }) — single field ascending index",
            },
            {
              id: "createindex-compound",
              title: "createIndex({ a: 1, b: -1 }) — compound index",
            },
            {
              id: "index-options",
              title: "Index options — unique, sparse, name, expireAfterSeconds",
            },
            {
              id: "getindexes",
              title: "getIndexes() — list all indexes on a collection",
            },
            {
              id: "dropindex",
              title: "dropIndex() / dropIndexes() — removing indexes",
            },
            {
              id: "index-on-embedded",
              title: "Indexing embedded fields — { 'address.city': 1 }",
            },
            {
              id: "multikey-index-intro",
              title: "Multikey index — auto-created when indexing array field",
            },
          ],
        },
        {
          id: "upsert-findandmodify",
          title: "Upsert & findAndModify Patterns",
          description: "Atomic read-modify-write operations.",
          subtopics: [
            {
              id: "upsert-option",
              title: "upsert: true — insert if no match, update if match",
            },
            {
              id: "findoneandupdate",
              title: "findOneAndUpdate() — return doc before or after update",
            },
            {
              id: "findoneandreplace",
              title: "findOneAndReplace() — atomic replace with return",
            },
            {
              id: "findoneanddelete",
              title: "findOneAndDelete() — atomic fetch-then-delete",
            },
            {
              id: "returndocument-option",
              title: "returnDocument: 'after' | 'before' option",
            },
            {
              id: "writeconcern-basics",
              title: "Write concern basics — w: 1, w: 'majority', j: true",
            },
          ],
        },
        {
          id: "schema-design-basics",
          title: "Schema Design Basics",
          description: "Thinking about data modelling in MongoDB.",
          subtopics: [
            {
              id: "embedding-vs-referencing",
              title: "Embedding vs referencing — trade-offs and rules of thumb",
            },
            {
              id: "one-to-few-embed",
              title: "One-to-few — embed the child documents (address in user)",
            },
            {
              id: "one-to-many-reference",
              title: "One-to-many — reference with foreign ObjectId",
            },
            {
              id: "many-to-many-design",
              title:
                "Many-to-many — reference arrays in both sides or link collection",
            },
            {
              id: "data-locality",
              title: "Data locality — read what you need in one query",
            },
            {
              id: "document-size-growth",
              title: "Document growth — consider unbounded arrays",
            },
            {
              id: "atomic-updates-design",
              title: "Atomic updates — keep related data together",
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
      description: "Junior MongoDB developer interview questions.",
      topics: [
        {
          id: "query-operators-qa",
          title: "Query Operators Q&A",
          description: "Query operator interview questions.",
          subtopics: [
            {
              id: "in-vs-or-qa",
              title: "What is the difference between $in and $or?",
            },
            {
              id: "and-vs-implicit-qa",
              title:
                "What is the difference between explicit $and and implicit and?",
            },
            {
              id: "exists-qa",
              title:
                "How do you find all documents where a field does not exist?",
            },
            {
              id: "regex-qa",
              title:
                "How do you do a case-insensitive regex search in MongoDB?",
            },
            {
              id: "elemmatch-qa",
              title:
                "When do you need $elemMatch instead of a simple array query?",
            },
            {
              id: "expr-qa",
              title:
                "What does $expr allow you to do that a regular filter cannot?",
            },
            {
              id: "array-size-qa",
              title:
                "How do you query for documents where an array has exactly 3 elements?",
            },
            {
              id: "nested-query-qa",
              title: "How do you query a field inside an embedded document?",
            },
          ],
        },
        {
          id: "update-operators-qa",
          title: "Update Operators Q&A",
          description: "Update operator interview questions.",
          subtopics: [
            {
              id: "set-vs-replace-qa",
              title: "What is the difference between $set and replaceOne?",
            },
            {
              id: "inc-qa",
              title: "How do you atomically increment a counter in MongoDB?",
            },
            {
              id: "push-vs-addtoset-qa",
              title: "What is the difference between $push and $addToSet?",
            },
            {
              id: "pull-vs-pop-qa",
              title: "What is the difference between $pull and $pop?",
            },
            { id: "upsert-qa", title: "What does the upsert option do?" },
            { id: "setoninsert-qa", title: "When would you use $setOnInsert?" },
            {
              id: "positional-op-qa",
              title: "What does the positional operator $ do in an update?",
            },
            {
              id: "arrayfilters-qa",
              title:
                "How do you update specific elements of an array with arrayFilters?",
            },
          ],
        },
        {
          id: "indexes-schema-qa",
          title: "Indexes & Schema Q&A",
          description: "Indexing and data modelling interview questions.",
          subtopics: [
            {
              id: "why-index-qa",
              title: "Why would you create an index in MongoDB?",
            },
            {
              id: "collscan-ixscan-qa",
              title: "What is a COLLSCAN and why is it bad?",
            },
            {
              id: "compound-index-order-qa",
              title: "Does the order of fields in a compound index matter?",
            },
            {
              id: "unique-index-qa",
              title: "How do you enforce uniqueness on a field in MongoDB?",
            },
            {
              id: "embed-vs-reference-qa",
              title: "When would you embed a document vs reference it?",
            },
            {
              id: "unbounded-array-qa",
              title:
                "What is the problem with an unbounded array in a document?",
            },
            { id: "multikey-index-qa", title: "What is a multikey index?" },
            {
              id: "findoneandupdate-qa",
              title: "What is findOneAndUpdate and when would you use it?",
            },
          ],
        },
      ],
    },
  ],
};
