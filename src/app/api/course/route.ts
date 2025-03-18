import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import { handlePromise } from "@/lib/utils";
import Course from "@/models/Course";
import Student from "@/models/Student";
import { NextResponse } from "next/server";

export const POST = auth(async (req) => {
  const { auth } = req;
  const [body, body_error] = await handlePromise(req.json());
  const [, db_error] = await handlePromise(connectDB());

  if (body_error)
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });

  if (db_error)
    return NextResponse.json(
      { error: "Interal server error" },
      { status: 500 },
    );

  if (!auth) return NextResponse.json({ error: "No session" }, { status: 401 });

  const student = await Student.findOne({ email: auth?.user?.email }).exec();

  if (!student)
    return NextResponse.json({ error: "Invalid session" }, { status: 401 });

  if (!student.isAdmin)
    return NextResponse.json(
      { error: "You don't have permission" },
      { status: 401 },
    );

  const course = new Course(body);
  const [, error] = await handlePromise(course.save());

  if (error) {
    return NextResponse.json(error.message, { status: 500 });
  }

  return NextResponse.json(course, { status: 200 });
});
