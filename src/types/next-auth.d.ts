// next-auth.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    name: string | null; 
  }

  interface Session {
    user: User & {
      name: string | null; 
    };
  }

  interface JWT {
    name: string | null;
  }
}

