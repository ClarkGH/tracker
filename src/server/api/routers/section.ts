import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const sectionRouter = createTRPCRouter({
  getAll: protectedProcedure
    .query(({ ctx }) => {
      return ctx.prisma.section.findMany({
        where: {
          userId: ctx.session.user.id,
        }
    })
  });
});
