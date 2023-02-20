import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { sectionRouter } from "~/server/api/routers/section";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  section: sectionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
