import { CustomButton } from "@/components/actions/CustomButton";
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
import { LibraryBig } from "lucide-react";
import { twJoin } from "tailwind-merge";
import { getTopicProgress } from "../_utils/getTopicProgress";
export interface TopicProps {
  id: string;
  title: string;
  examWeight: number;
  hoursNeeded: number;
  topicsCovered: {
    name: string;
    complete: boolean;
  }[];
  schedule: {
    day: string;
    time: string;
    location: string;
  };
}

const TopicCard = ({ topic }: { topic: TopicProps }) => {
  return (
    <Card className="bg-card px-4">
      <CardHeader className="flex flex-col">
        <section className="flex items-center py-3 pr-10 text-center text-lg">
          <CardTitle className="pr-3 text-xl font-extrabold">
            {topic.title}
          </CardTitle>
          <Badge className="text-secondary rounded-xl bg-orange-200 font-bold">
            {topic.hoursNeeded} hr{topic.hoursNeeded > 1 ? "s" : null} needed
          </Badge>
        </section>
        <CardDescription className="flex w-full items-center justify-between space-x-3 text-xs font-light">
          <div className="text-secondary flex w-2/5 items-center space-x-1 text-sm font-medium">
            <LibraryBig size={25} />
            <p>{topic.examWeight}% of exam</p>
          </div>
          <Progress
            value={getTopicProgress(topic.topicsCovered)}
            className="w-3/5 text-black"
          />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className={"list-disc"}>
          {topic.topicsCovered.map(({ name, complete }, idx) => (
            <li
              key={idx}
              className={twJoin(complete && "text-green-700 line-through")}
            >
              {name}
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
  );
};

export default TopicCard;
