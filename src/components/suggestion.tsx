import React from "react";
import { Badge } from "./ui/badge";

export interface SuggestionProp {
	datas: SuggestionItemProp[]
}

export interface SuggestionItemProp {
	isDone: boolean,
	topic: string,
	subject: string,
}

//TODO: Make each subject have different badge color
const SuggestionItem: React.FC<SuggestionItemProp> = ({ isDone, topic, subject }) => {
	return (
		<div className="flex gap-2">
			<input type="checkbox" checked={isDone}/>
			<span className="flex-1/2">{topic}</span>
			<Badge color="#a6e3a1">{subject}</Badge>
		</div>
	);
}

const Suggestion: React.FC<SuggestionProp> = ({ datas }) => {
	return (
		<div className="ml-4 mr-4">
			<h3 className="font-bold text-lg mt-1">Today's Task</h3>
			<div>
				<ul>
					{
						datas.map(({isDone, topic, subject}, idx) => (
							<li key={idx} className="mt-1 mb-1">
								<SuggestionItem 
									isDone ={isDone}	
									topic  ={topic}	
									subject={subject}	
								/>
							</li>
						))
					}
				</ul>
			</div>
		</div>	
	);
}

export default Suggestion;
