import { initTRPC, type inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getSession } from "next-auth/react";
export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getSession({ req: opts.req });
  return {
    session,
  };
};
// const t1 = initTRPC.context<typeof createContext>().create();
// t1.procedure.use(({ ctx }) => {  });

//
// type Context = inferAsyncReturnType<typeof createContext>;
// const t2 = initTRPC.context<Context>().create();
// t2.procedure.use(({ ctx }) => { ... });
