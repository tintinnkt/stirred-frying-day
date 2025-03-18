import connectDB from "@/lib/database";
import { handlePromise } from "@/lib/utils";
import Student from "@/models/Student";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const [body, body_error] = await handlePromise(request.json());
  const [, conn_error] = await handlePromise(connectDB());

  if (body_error) {
    return NextResponse.json({ message: "Body is invalid " }, { status: 400 });
  }

  if (conn_error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }

  const student = new Student({
    isAdmin: true,
    ...body,
  });
  const [, error] = await handlePromise(student.save());

  if (error) {
    return NextResponse.json(error.message, { status: 500 });
  }

  return NextResponse.json(body, { status: 200 });
}
