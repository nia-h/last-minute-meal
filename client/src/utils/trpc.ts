import type { AppRouter } from "../../../server/api";
import { createTRPCReact } from "@trpc/react-query";
// createTRPCReact is a generic function (a function that is declared with type parameters.)

export const trpc = createTRPCReact<AppRouter>(); // When called, actual types are used instead of the type parameters.
//  trpc (the returned value) will be of type AppRouter
