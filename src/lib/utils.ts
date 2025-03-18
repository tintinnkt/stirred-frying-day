import Student, { IStudent } from "@/models/Student";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs));
}

export async function handlePromise<T>(
  promise: Promise<T>,
): Promise<[T | null, any]> {
  try {
    const data: T = await promise;
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export const isAdmin = async (query: {
  email?: string;
  studentId?: string;
}) => {
  const student = (await Student.findOne(query).exec()) as IStudent;

  if (!student) return false;

  //NOTE: isAdmin can be null
  if (student.isAdmin) return true;
  return false;
};
