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
          // console.log(user);
          return user;
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 10 * 60,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      // console.log("token");
      // console.log(token);
      return token;
    },
    session: async ({ session, token }) => {
      session.user.id = token.id as string;
      session.user.email = token.email as string;

      // console.log("session");
      // console.log(session);
      return session;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
