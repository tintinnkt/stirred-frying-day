import React from "react";
import ProgressBar from "./ui/custom_progressbar";

export type CourseProgressData = {subject: string, progress: number};

interface CourseProgressProp {
	datas: CourseProgressData[];
}

const CourseProgress: React.FC<CourseProgressProp> = ({ datas }) => {

	const renderSubjectBar = (subject: string, progress: number, id: number) => {
		return	(
			<li key={id} className="flex mt-1 ml-4 mr-4">
				<span className="flex-1/3 ">{subject}</span>
				<div className="flex-2/3 h-ful1">
					<ProgressBar 
						progress={progress}
						showProgress={true}
					/>
				</div>
			</li>
		)

	}

	return (
		<div className="">
			<div className="w-full flex font-bold text-lg border-t-gray-400 border">
				<span className="flex-1/3 text-center">Course</span>
				<span className="flex-2/3 text-center">Progress</span>
			</div>
			<ul>
				{
					datas.map(({subject, progress}, id) => renderSubjectBar(subject, progress, id))
				}	
			</ul>
		</div>
	);
}

export default CourseProgress; 
