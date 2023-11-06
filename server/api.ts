import express from "express";
import cors from "cors";
import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const expressApp = express();

expressApp.use(cors({ origin: "http://localhost:5177" }));


const t = initTRPC.create();

const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "Hi";
  }),
  logToServer: t.procedure
    .input(v => {
      if (typeof v === "string") return v;
      throw new Error("Invalid input: expected string ");
    })
    .mutation(req => {
      console.log(`client says ${req.input} `);
      return true;
    }),
    findRecipe: t.procedure
    .input(ingreds => {
      if (typeof ingreds === "object") return ingreds;
      throw new Error("Invalid input: expected object ");
    })
    .query(async req => {
      console.log("req.input==>", req.input);
      const recipes = await prisma.recipe.findFirst({
        where: {
          AND:[  {Ingredients: {
            contains: req.input![0],
          }},{  Ingredients: {
            contains: req.input![1],
          },}]
        },
        take: 3,
      });
      return recipes;
    })
  }),

  expressApp.use("/trpc", createExpressMiddleware({ router: appRouter }));

  expressApp.listen(3000);

export type AppRouter = typeof appRouter;