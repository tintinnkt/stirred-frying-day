"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import { mockData } from "@/mocks/SubjectPlannerMock";
import { useParams } from "next/navigation";
import TopicCard from "../_components/TopicCard";
import getSubjectProgress from "../_utils/getSubjectProgress";

const Page = () => {
  const { subject_id } = useParams();

  const subject = mockData.find((s) => s.subject_id === subject_id);

  if (!subject) return <p>Not Found</p>;

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
        {subject.topics.map((topic, idx) => (
          <li key={idx}>
            <TopicCard topic={topic} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
