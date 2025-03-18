import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import { handlePromise } from "@/lib/utils";
import Course from "@/models/Course";
import Student from "@/models/Student";
import Task from "@/models/Task";
import { NextResponse } from "next/server";
import { createTasksFromCourseSyllabus } from "./fromCourse";
import { updateTask } from "./updateTask";

/**
 * /api/task/<action>
 *
 * /finish -> mark certain task as finish
 * /add -> task
 * /from_course -> add tasks from course
 *
 * */
export async function POST(
  request: Request,
  { params }: { params: Promise<{ action: string }> },
) {
  const session = await auth();
  const { action } = await params;
  const [body, body_error] = await handlePromise(request.json());
  const [, conn_error] = await handlePromise(connectDB());

  if (body_error)
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });

  if (conn_error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );

  if (!session)
    return NextResponse.json({ error: "No session" }, { status: 401 });

  const student = await Student.findOne({ email: session?.user?.email }).exec();

  if (!student)
    return NextResponse.json({ error: "Invalid session" }, { status: 400 });

  const { taskId } = body;

  switch (action) {
    case "add":
      const { title, detail, deadline } = body;
      const task = new Task({
        owner: student,
        title,
        detail,
        deadline,
        isDone: false,
      });

      const [, error] = await handlePromise(task.save());

      if (error) return NextResponse.json({ error }, { status: 500 });

      return NextResponse.json(
        { message: "Sucessfully add task" },
        { status: 200 },
      );
    case "finish":
      if (!taskId)
        return NextResponse.json(
          { error: "Did not provide task ID" },
          { status: 400 },
        );

      return updateTask(taskId, true);
    case "unfinish":
      if (!taskId)
        return NextResponse.json(
          { error: "Did not provide task ID" },
          { status: 400 },
        );

      return updateTask(taskId, false);
    case "from_course":
      const { courseId } = body;

      if (!courseId)
        return NextResponse.json(
          { error: "No course provided" },
          { status: 400 },
        );

      let courseIdNum = Number(courseId);

      if (isNaN(courseIdNum))
        return NextResponse.json(
          { error: "Invalid course ID" },
          { status: 400 },
        );

      const courseObj = await Course.findOne({ courseId: courseIdNum }).exec();

      if (!courseObj)
        return NextResponse.json(
          { error: "Invalid course ID" },
          { status: 400 },
        );

      return createTasksFromCourseSyllabus(student, courseObj);
  }

  return NextResponse.json({}, { status: 200 });
}
