import { createTRPCRouter } from "~/server/api/trpc";
import { sectionRouter } from "~/server/api/routers/section";
import { noteRouter } from "./routers/note";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  section: sectionRouter,
  note: noteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
