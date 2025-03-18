export const getTopicProgress = (
  topicsCovered: Array<{ name: string; complete: boolean }>,
) => {
  const totalTopics = topicsCovered.length;
  const completedTopics = topicsCovered.filter(
    (topic) => topic.complete,
  ).length;
  return Math.round((completedTopics / totalTopics) * 100);
};
