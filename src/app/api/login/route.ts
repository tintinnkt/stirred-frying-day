import connectDB from "@/lib/database";
import { handlePromise } from "@/lib/utils";
import Student from "@/models/Student";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const [body, body_error] = await handlePromise(request.json());
  const [, conn_error] = await handlePromise(connectDB());

  if (body_error)
    return NextResponse.json({ message: "Body is invalid" }, { status: 400 });

  if (conn_error)
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );

  console.log("BODY HERE: ");
  console.log(body);

  const { studentId, password } = body;

  if (!studentId || !password) {
    return NextResponse.json(
      { error: "Didn't provide student ID or password" },
      { status: 401 },
    );
  }

  const [student] = await handlePromise(Student.findOne({ studentId }).exec());

  if (!student) {
    return NextResponse.json(
      { error: "Wrong student ID or password" },
      { status: 402 },
    );
  }

  //TODO: add encryption
  if (student.password !== password) {
    return NextResponse.json(
      { error: "Wrong student ID or password" },
      { status: 403 },
    );
  }

  return NextResponse.json(student, { status: 200 });
}
