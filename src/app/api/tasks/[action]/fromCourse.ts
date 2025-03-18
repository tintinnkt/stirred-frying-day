import { handlePromise } from "@/lib/utils";
import { ICourse } from "@/models/Course";
import { IStudent } from "@/models/Student";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export const createTasksFromCourseSyllabus = async (
  owner: IStudent,
  course: ICourse,
) => {
  const tasks: Array<typeof Task> = [];

  course.syllabus.forEach(({ topic, description }) => {
    const task = new Task({
      owner: owner._id,
      course: course._id,
      title: topic,
      detail: description,
      isDone: false,
    });

    tasks.push(task);
  });

  const [, error] = await handlePromise(Task.insertMany(tasks));

  if (error)
    return NextResponse.json(
      { error: "Internal Server Error " },
      { status: 200 },
    );

  return NextResponse.json({}, { status: 200 });
};
