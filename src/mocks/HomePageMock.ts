import { CourseProgressData } from "@/components/CourseProgress";

export const dummyCourseProgressData = [
  { subject: "Calculus II", progress: 0.8 },
  { subject: "Physics II", progress: 0.3 },
  { subject: "Exp Eng II", progress: 0.1 },
] as Array<CourseProgressData>;

export const dummyTodayTaskData = [
  { isDone: false, topic: "Integration by parts", subject: "Calculus II" },
  { isDone: false, topic: "Wave & Optics", subject: "Physics II" },
  { isDone: false, topic: "Quantum Mechanics", subject: "Physics II" },
  { isDone: false, topic: "Cause-Effect essay", subject: "Exp Eng II" },
];
