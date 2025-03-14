// import { responseDefault } from "@/constants";
import { handleCreateCourse } from "@/controller/v1/course/create";
// import { CreateCourseResponse } from "@/types/api/course";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const response = await handleCreateCourse(request);
    return response;
  } catch (error) {
    console.error("Error creating course:", error);
    // return NextResponse.json<CreateCourseResponse>({
    //   message: responseDefault.UNKNOW_ERROR,
    //   created_course: undefined,
    // });
  }
}
