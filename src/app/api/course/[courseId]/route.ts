import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ courseId: string }> },
) {
  const { courseId } = await params;
  const courseIdNumber = Number(courseId);

  if (isNaN(courseIdNumber))
    return NextResponse.json({ error: "Invalid course ID" }, { status: 500 });

  const course = await Course.findOne({ courseId: courseIdNumber }).exec();

  if (!course)
    return NextResponse.json(
      { error: "Course not found with this ID" },
      { status: 404 },
    );

  return NextResponse.json(course, { status: 200 });
}
