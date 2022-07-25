import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";

export default NextAuth(authOptions);
