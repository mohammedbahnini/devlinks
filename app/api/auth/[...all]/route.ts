import { auth } from "@/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";
import { toNodeHandler } from 'better-auth/node';


export const { GET, POST } = toNextJsHandler(auth.handler);