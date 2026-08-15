import { sampleLessons } from "@/data/sampleLessons";
import LessonClient from "./LessonClient";

export function generateStaticParams() {
  return sampleLessons.map((lesson) => ({ lessonId: lesson.id }));
}

export default function LessonPage() {
  return <LessonClient />;
}
