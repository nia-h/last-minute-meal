import express from "express";
import cors from "cors";
import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(cors({ origin: "http://localhost:5177" }));

const t = initTRPC.create();

const appRouter = t.router({
  // sayHi: t.procedure.query(() => {
  //   return "Hi";
  // }),
  // logToServer: t.procedure
  //   .input(v => {
  //     if (typeof v === "string") return v;
  //     throw new Error("Invalid input: expected string ");
  //   })
  //   .mutation(req => {
  //     console.log(`client says ${req.input} `);
  //     return true;
  //   }),
  findRecipes: t.procedure
    .input(ingreds => {
      if (typeof ingreds === "object") return ingreds;
      throw new Error("Invalid input: expected object ");
    })
    .query(async ({ input }) => {
      const recipes = await prisma.recipe.findMany({
        where: {
          AND: [
            {
              Ingredients: {
                contains: input![0],
              },
            },
            {
              Ingredients: {
                contains: input![1],
              },
            },
          ],
        },
        take: 3,
      });
      return recipes;
    }),
});

app.use("/trpc", createExpressMiddleware({ router: appRouter }));

app.listen(3000);

export type AppRouter = typeof appRouter;
