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
      items.push({
        type: "level",
        title: level.title,
        breadcrumb: `${course.title} › ${level.title}`,
        href: `/course/${course.id}?level=${level.id}`,
      });

      for (const mod of level.modules) {
        items.push({
          type: "module",
          title: mod.title,
          breadcrumb: `${course.title} › ${level.title} › ${mod.title}`,
          href: `/course/${course.id}?level=${level.id}&module=${mod.id}`,
        });

        for (const topic of mod.topics) {
          // Topic → open within course page (level+module+topic)
          const topicHref = `/course/${course.id}?level=${level.id}&module=${mod.id}&topic=${topic.id}`;
          items.push({
            type: "topic",
            title: topic.title,
            breadcrumb: `${course.title} › ${level.title} › ${mod.title} › ${topic.title}`,
            href: topicHref,
          });

          for (const sub of topic.subtopics) {
            // Subtopic → open course page at right level/module/topic and highlight subtopic
            items.push({
              type: "subtopic",
              title: sub.title,
              breadcrumb: `${course.title} › ${level.title} › ${mod.title} › ${topic.title} › ${sub.title}`,
              href: `/course/${course.id}?level=${level.id}&module=${mod.id}&topic=${topic.id}&subtopic=${sub.id}`,
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
