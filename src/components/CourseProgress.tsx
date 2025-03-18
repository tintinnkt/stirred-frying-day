import React from "react";
import ProgressBar from "./ui/custom_progressbar";

export interface CourseProgressData {
  subject: string;
  progress: number;
}

interface CourseProgressProp {
  datas: Array<CourseProgressData>;
}

const CourseProgress: React.FC<CourseProgressProp> = ({ datas }) => {
  const renderSubjectBar = (subject: string, progress: number, id: number) => {
    return (
      <li key={id} className="mt-1 mr-4 ml-4 flex">
        <span className="flex-1/3">{subject}</span>
        <div className="h-ful1 flex-2/3">
          <ProgressBar progress={progress} showProgress={true} />
        </div>
      </li>
    );
  };

  return (
    <div className="">
      <div className="flex w-full border border-t-gray-400 text-lg font-bold">
        <span className="flex-1/3 text-center">Course</span>
        <span className="flex-2/3 text-center">Progress</span>
      </div>
      <ul>
        {datas.map(({ subject, progress }, id) =>
          renderSubjectBar(subject, progress, id),
        )}
      </ul>
    </div>
  );
};

export default CourseProgress;
