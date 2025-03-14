import { getServerSession } from "next-auth";
import nextAuthOptions from "./authOptions";

export async function getUserSession() {
  const session = await getServerSession(nextAuthOptions);
  return session;
}
