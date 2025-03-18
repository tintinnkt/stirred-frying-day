import { getTopicProgress } from "./getTopicProgress";

export interface TopicProps {
  id: string;
  title: string;
  examWeight: number;
  hoursNeeded: number;
  topicsCovered: Array<{
    name: string;
    complete: boolean;
  }>;
  schedule: {
    day: string;
    time: string;
    location: string;
  };
}

const getSubjectProgress = ({ topics }: { topics: Array<TopicProps> }) => {
  let count = 0;
  if (Array.isArray(topics))
    topics.forEach(({ topicsCovered, examWeight }) => {
      const topicProgress = getTopicProgress(topicsCovered);
      count += (topicProgress / 100) * examWeight;
    });

  return count;
};

export default getSubjectProgress;
