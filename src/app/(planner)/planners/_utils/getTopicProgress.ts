export const getTopicProgress = (
  topicsCovered: Array<{ name: string; complete: boolean }>,
) => {
  const totalTopics = topicsCovered.length;
  const completedTopics = topicsCovered.filter(
    (topic) => topic.complete,
  ).length;
  console.log((completedTopics / totalTopics) * 100);
  return Math.round((completedTopics / totalTopics) * 100);
};
