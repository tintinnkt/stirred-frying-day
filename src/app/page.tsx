import CourseProgress from "@/components/CourseProgress";
import DailyProgress from "@/components/DailyProgress";
import Suggestion from "@/components/Suggestion";

import {
  dummyCourseProgressData,
  dummyTodayTaskData,
} from "@/mocks/HomePageMock";

//TODO: Move this page somewhere else?
export default function Home() {
  return (
    <div className="flex w-full flex-col">
      {/*
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
		  */}
      <DailyProgress />
      <Suggestion datas={dummyTodayTaskData} />
      <CourseProgress datas={dummyCourseProgressData} />
    </div>
  );
}
