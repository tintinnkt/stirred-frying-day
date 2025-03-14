import Image from "next/image";
import DailyProgress from "@/components/dailyprogress";
import CourseProgress, { CourseProgressData } from "@/components/courseprogress";
import Suggestion from "@/components/suggestion";

const dummyData = [
	{subject: "Calculus II", progress: 0.8},
	{subject: "Physics II" , progress: 0.3},
	{subject: "Exp Eng II" , progress: 0.1},
] as CourseProgressData[];

export default function Home() {
	return (
		// TODO: Make this a component?
		<div className="flex flex-col h-screen">
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

					className="flex-auto rounded-lg p-2 bg-gray-200 drop-shadow-md"
				/>
			</div>
			<DailyProgress />
			<CourseProgress 
				datas={dummyData}
			/>
			<Suggestion />		
		</div>
	);
}
