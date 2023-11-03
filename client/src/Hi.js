import { trpc } from "./utils/trpc";

function Hi() {
  // const userQuery = trpc.getUser.useQuery({ id: 'id_bilbo' });
  // const userCreator = trpc.createUser.useMutation();
  async function main() {
    const result = await trpc.sayHi.useQuery();
    console.log("result.data==>", result.data);
  }
  main();

  return <div className="bg-red-200  md:bg-blue-300">abc</div>;
}

export default Hi;
