import React from "react";

interface ProgressProp {
  progress: number;
  showProgress: boolean;
}

const ProgressBar: React.FC<ProgressProp> = ({ progress, showProgress }) => {
  //NOTE: Progress percentage is not full centered :\
  return (
    <div className="relative h-full w-full rounded-lg bg-gray-300">
      {showProgress && (
        <span className="absolute left-1/2 z-10 text-center">{`${progress * 100}%`}</span>
      )}
      <div
        className="absolute top-0 left-0 h-full rounded-lg bg-green-500"
        style={{ width: `${progress * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
