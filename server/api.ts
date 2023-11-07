import express from "express";
import cors from "cors";
import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const RecipeQuery = z.object({
  1: z.string(),
  2: z.string(),
});

const prisma = new PrismaClient();

const app = express();
app.use(cors({ origin: "http://localhost:5177" }));

const t = initTRPC.create();

const appRouter = t.router({
  findRecipes: t.procedure.input(RecipeQuery).query(({ input }) => {
    const name = input[1];

    return {
      greeting: `Hello ${name}`,
    };
    // findRecipes: t.procedure.input(RecipeQuery).query(async ({ input }) => {
    //   const recipes = await prisma.recipe.findMany({
    //     where: {
    //       AND: [
    //         {
    //           Ingredients: {
    //             contains: input[0],
    //           },
    //         },
    //         {
    //           Ingredients: {
    //             contains: input[1],
    //           },
    //         },
    //       ],
    //     },
    //     take: 3,
    //   });
    return "zod test";
  }),
});

app.use("/trpc", createExpressMiddleware({ router: appRouter }));

app.listen(3000);

export type AppRouter = typeof appRouter;
