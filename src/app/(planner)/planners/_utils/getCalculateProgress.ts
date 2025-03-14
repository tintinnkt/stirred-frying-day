export const getCalculateProgress = (
  topicsCovered: Array<{ name: string; complete: boolean }>,
) => {
  const totalTopics = topicsCovered.length;
  const completedTopics = topicsCovered.filter(
    (topic) => topic.complete,
  ).length;
  return totalTopics === 0
    ? 0
    : Math.round((completedTopics / totalTopics) * 100);
};
