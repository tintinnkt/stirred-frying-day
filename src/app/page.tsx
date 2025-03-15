import CourseProgress, {
  CourseProgressData,
} from "@/components/courseprogress";
import DailyProgress from "@/components/dailyprogress";
import Suggestion from "@/components/suggestion";
import Image from "next/image";

const dummyData = [
  { subject: "Calculus II", progress: 0.8 },
  { subject: "Physics II", progress: 0.3 },
  { subject: "Exp Eng II", progress: 0.1 },
] as Array<CourseProgressData>;

const todayTaskDummyData = [
  { isDone: false, topic: "Integration by parts", subject: "Calculus II" },
  { isDone: false, topic: "Wave & Optics", subject: "Physics II" },
  { isDone: false, topic: "Quantum Mechanics", subject: "Physics II" },
  { isDone: false, topic: "Cause-Effect essay", subject: "Exp Eng II" },
];

//TODO: Move this page somewhere else?
export default function Home() {
  return (
    // TODO: Make this a component?
    <div className="flex h-screen flex-col">
      <div className="m-4 flex gap-4">
        <Image
          src="/temp_profile_picture.png"
          width={64}
          height={64}
          alt="Profile Picture"
          className="rounded-4xl border border-black"
        />
        <input
          type="text"
          placeholder="Search Course"
          className="flex-auto rounded-lg bg-gray-200 p-2 drop-shadow-md"
        />
      </div>
      <DailyProgress />
      <Suggestion datas={todayTaskDummyData} />
      <CourseProgress datas={dummyData} />
    </div>
  );
}
