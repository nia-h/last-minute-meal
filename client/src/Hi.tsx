import { trpc } from './utils/trpc';

function Hi() {
  // const userQuery = trpc.getUser.useQuery({ id: 'id_bilbo' });
  // const userCreator = trpc.createUser.useMutation();
  async function main() {
    const result = await trpc.sayHi.useQuery();
    console.log('result.data==>', result.data);
  }
  main();

  return <div>abc</div>;
}

export default Hi;
