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
import { Progress } from "@/components/ui/progress";
import { mockData } from "@/mocks/SubjectPlannerMock";
import { LibraryBig } from "lucide-react";
import { useParams } from "next/navigation";

const Page = () => {
  const { subject_id } = useParams();

  const subject = mockData.find((s) => s.subject_id === subject_id);

  if (!subject) return <p>Not Found</p>;

  return (
    <main className="w-4/5">
      <section className="flex items-center justify-center text-center">
        <div className="flex-col px-2">
          <h2>{subject.subject_name}</h2>
          <p>Right now you have complete</p>
        </div>
        <span className="flex items-center">
          <NumberTicker value={70} />%
        </span>
      </section>
      <ul className="space-y-3">
        {subject.topics.map((topic, idx) => (
          <li key={idx}>
            <Card className="bg-componentBackground px-4">
              <CardHeader className="flex flex-col">
                <section className="flex items-center text-lg">
                  <CardTitle className="py-2 pr-2">{topic.title}</CardTitle>
                  <Badge className="text-primary bg-orange-100">
                    {topic.hoursNeeded} hr{topic.hoursNeeded > 1 ? "s" : null}{" "}
                    needed
                  </Badge>
                </section>
                <CardDescription className="flex w-full items-center justify-between text-xs font-light">
                  <div className="flex text-blue-500">
                    <LibraryBig size={15} />
                    50% of exam
                  </div>
                  <Progress
                    value={80}
                    className="w-2/3 bg-gray-400 text-orange-300"
                  />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc">
                  {topic.topicsCovered.map(({ name }, idx) => (
                    <li key={idx}>{name}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="space-x-1 text-sm">
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
