// import { useState } from 'react';
// import './App.css';
// import * as React from 'react';
// import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
// import { AppRouter } from '../../server/api';

// function App() {
//   const client = createTRPCProxyClient<AppRouter>({
//     links: [httpBatchLink({ url: 'http://localhost:3000/trpc' })],
//   });

//   async function main() {
//     const result = await client.sayHi.query();
//     console.log('result==>', result);
//   }
//   main();
//   return <></>;
// }

//export default App;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { trpc } from "./utils/trpc";
import Hi from "./Hi";

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",

      // You can pass any HTTP headers you wish here
      // async headers() {
      //   return {
      //     authorization: getAuthCookie(),
      //   };
      // },
    }),
  ],
});

function App() {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Hi />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
