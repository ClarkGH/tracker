import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../trpc';

export const noteRouter = createTRPCRouter({
  getAll: protectedProcedure
    .input(z.object({ sectionId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.note.findMany({
        where: {
          sectionId: input.sectionId,
        },
      });
    }),
  
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        sectionId: z.string(),
    }))
    .mutation(({ctx, input}) => {
      return ctx.prisma.note.create({
        data: {
          title: input.title,
          sectionId: input.sectionId,
          content: input.content,
        }
      })
    }),
  
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ctx, input}) => {
      return ctx.prisma.note.delete({
        where: {
          id: input.id,
        },
      });
    }),
});