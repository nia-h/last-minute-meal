import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../../server/api';

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

console.log('abcdefg');

async function main() {
  const result = await client.sayHi.query();
  console.log('result==>', result);
}

main();
