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
