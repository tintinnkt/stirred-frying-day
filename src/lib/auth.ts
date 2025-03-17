import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const config: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        studentId: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await fetch(process.env.AUTH_URL + "/api/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const user = await res.json();

        if (res.ok && user) {
          console.log(user);
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
        },
      };
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
