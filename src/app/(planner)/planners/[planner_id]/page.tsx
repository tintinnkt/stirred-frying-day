"use client";

import { CustomButton } from "@/components/actions/CustomButton";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { mockData } from "@/mocks/SubjectPlannerMock";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { LibraryBigIcon } from "lucide-react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { twJoin } from "tailwind-merge";
import getSubjectProgress from "../_utils/getSubjectProgress";
import { getTopicProgress } from "../_utils/getTopicProgress";

const Page = () => {
  const { planner_id } = useParams();
  if (!planner_id) {
    return <p>Planner ID is missing</p>; // Handle missing planner_id
  }

  const subject = mockData.find((s) => s.planner_id === planner_id);

  if (!subject) return <p>Not Found</p>;

  const queryClient = useQueryClient();

  const { mutate: toggleMarked } = useMutation<
    void,
    unknown,
    {
      plannerId: string;
      topicId: string;
      topicCoveredId: string;
      isComplete: boolean;
    }
  >({
    mutationFn: async ({ plannerId, topicId, topicCoveredId, isComplete }) => {
      axios.post("/api/update-topic-status", { //add backendRoutes
        plannerId,
        topicId,
        topicCoveredId,
        complete: isComplete,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["topics"] });
      toast.success("checked");
    },
  });

  return (
    <main className="w-full px-7 py-4">
      <section className="flex items-center justify-center p-3 text-center text-3xl font-bold">
        <div className="flex-col px-2">
          <h2>{subject.subject_name}</h2>
          <p>Right now you have complete</p>
        </div>
        <span className="flex items-center p-3 text-7xl">
          <NumberTicker
            value={getSubjectProgress({ topics: subject.topics })}
          />
          %
        </span>
      </section>
      <ul className="space-y-5">
        {subject.topics.map((topic) => (
          <li key={topic.id}>
            <Card className="bg-card px-4">
              <CardHeader className="flex flex-col">
                <section className="flex items-center py-3 pr-10 text-center text-lg">
                  <CardTitle className="pr-3 text-xl font-extrabold">
                    {topic.title}
                  </CardTitle>
                  <Badge className="text-secondary rounded-xl bg-orange-200 font-bold">
                    {topic.hoursNeeded} hr{topic.hoursNeeded > 1 ? "s" : null}{" "}
                    needed
                  </Badge>
                </section>
                <CardDescription className="flex w-full items-center justify-between space-x-3 text-xs font-light">
                  <div className="text-secondary flex w-2/5 items-center space-x-1 text-sm font-medium">
                    <LibraryBigIcon size={25} />
                    <p>{topic.examWeight}% of exam</p>
                  </div>
                  <Progress
                    value={getTopicProgress(topic.topicsCovered)}
                    className="w-3/5 text-black"
                  />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  {topic.topicsCovered.map(({ id, name, complete }) => (
                    <li
                      key={id}
                      className={twJoin(
                        complete && "text-green-700 line-through",
                        "space-x-4",
                      )}
                    >
                      <Checkbox
                        checked={complete}
                        onClick={() =>
                          toggleMarked({
                            plannerId: subject.planner_id, // from useParams()
                            topicId: topic.id, // from topic object
                            topicCoveredId: id, // from topicCovered object
                            isComplete: !complete, // toggle status
                          })
                        }
                      />
                      <label htmlFor={id}>{name}</label>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="space-x-1 pr-5 text-sm text-wrap">
                  <span>{topic.schedule.day}</span>
                  <span>{topic.schedule.time}</span>
                  <span> {topic.schedule.location}</span>
                </p>
                <CustomButton useFor="seeResources" hideTextOnMobile={false} />
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
