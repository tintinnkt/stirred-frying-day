import React from "react";

interface ProgressProp {
	progress: number,
	showProgress: boolean,
}

const ProgressBar: React.FC<ProgressProp> = ({ progress, showProgress }) => {
	//NOTE: Progress percentage is not full centered :\
	return (
		<div className="w-full h-full bg-gray-300 rounded-lg relative">
			{showProgress && <span className="absolute left-1/2 z-10 text-center">{`${progress * 100}%`}</span>}
			<div 
				className="bg-green-500 h-full absolute left-0 top-0 rounded-lg" 
				style={{width: `${progress * 100}%`}}>
			</div>
		</div>
	);
}

export default ProgressBar;
