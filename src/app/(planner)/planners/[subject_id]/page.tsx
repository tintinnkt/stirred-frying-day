"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import { mockData } from "@/mocks/SubjectPlannerMock";
import { useParams } from "next/navigation";

const Page = () => {
  const { subject_id } = useParams();

  const subject = mockData.find((s) => s.subject_id === subject_id);

  if (!subject) return <p>Not Found</p>;

  return (
    <main className="w-full justify-self-center text-black">
      <div className="flex items-center justify-center text-center">
        <div className="flex-col px-2">
          <h2>{subject.subject_name}</h2>
          <p>Right now you have complete</p>
        </div>
        <span className="flex items-center">
          <NumberTicker value={70} />%
        </span>
      </div>
    </main>
  );
};

export default Page;
