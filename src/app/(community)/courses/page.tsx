import { Input } from "@/components/ui/input";
import React from "react";

const CourseSearch: React.FC = () => {
  return (
    <main className="bg-background w-full min-w-screen px-4 py-10">
      <div className="w-full">
        <span>Course Search lorem2</span>
        <section className="flex flex-col gap-y-6 md:col-span-8 md:flex-row md:justify-between">
          <h1 className="align-baseline font-semibold">ค้นหาวิชาเรียน</h1>
          <Input placeholder="ค้นหาชื่อวิชา" />
        </section>
        <div>My courses</div>
        <ul>
          <li>{/* <CourseCard course={} /> */}</li>
        </ul>
      </div>
    </main>
  );
};

export default CourseSearch;
