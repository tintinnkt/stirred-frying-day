"use server";

import { signIn } from "@/lib/auth";

export const actionLogin = async (formData: FormData) => {
  await signIn("credentials", formData);
};
