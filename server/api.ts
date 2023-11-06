import express from "express";
import cors from "cors";
import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const app = express();
app.use(cors({ origin: "http://localhost:5177" }));

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
});

//@ts-ignore
app.use("/trpc", createExpressMiddleware({ router: appRouter }));

app.listen(3000);

export type AppRouter = typeof appRouter;
