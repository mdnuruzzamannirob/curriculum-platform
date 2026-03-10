import { Course, SearchItem } from "@/types";

/** Flatten all courses into a searchable list. */
export function buildSearchIndex(courses: Course[]): SearchItem[] {
  const items: SearchItem[] = [];

  for (const course of courses) {
    items.push({
      type: "course",
      title: course.title,
      breadcrumb: course.title,
      href: `/course/${course.id}`,
    });

    for (const level of course.levels) {
      const levelHref = `/course/${course.id}/${level.id}`;

      items.push({
        type: "level",
        title: level.title,
        breadcrumb: `${course.title} › ${level.title}`,
        href: levelHref,
      });

      for (const mod of level.modules) {
        const moduleAnchor = `module-${mod.id}`;

        items.push({
          type: "module",
          title: mod.title,
          breadcrumb: `${course.title} › ${level.title} › ${mod.title}`,
          href: `${levelHref}#${moduleAnchor}`,
        });

        for (const topic of mod.topics) {
          const topicAnchor = `topic-${mod.id}-${topic.id}`;
          const topicHref = `${levelHref}#${topicAnchor}`;
          items.push({
            type: "topic",
            title: topic.title,
            breadcrumb: `${course.title} › ${level.title} › ${mod.title} › ${topic.title}`,
            href: topicHref,
          });

          for (const sub of topic.subtopics) {
            const subtopicAnchor = `subtopic-${mod.id}-${topic.id}-${sub.id}`;
            items.push({
              type: "subtopic",
              title: sub.title,
              breadcrumb: `${course.title} › ${level.title} › ${mod.title} › ${topic.title} › ${sub.title}`,
              href: `${levelHref}#${subtopicAnchor}`,
            });
          }
        }
      }
    }
  }

  return items;
}

/** Filter search index by a query string. */
export function searchItems(items: SearchItem[], query: string): SearchItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return items
    .filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.breadcrumb.toLowerCase().includes(q),
    )
    .slice(0, 20);
}

