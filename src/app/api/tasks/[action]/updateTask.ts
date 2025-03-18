import { handlePromise } from "@/lib/utils";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export const updateTask = async (taskId: string, state: boolean) => {
  const task = await Task.findOne({ _id: taskId }).exec();

  if (!task)
    return NextResponse.json({ error: "Invalid task ID" }, { status: 400 });

  task.isDone = state;
  const [, error] = await handlePromise(task.save());

  if (error) return NextResponse.json({ error }, { status: 500 });

  return NextResponse.json(
    { message: "Successfully update task " },
    { status: 200 },
  );
};
