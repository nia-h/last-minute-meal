import { trpc } from "./utils/trpc";

function Hi() {
  // const userQuery = trpc.getUser.useQuery({ id: 'id_bilbo' });
  // const userCreator = trpc.createUser.useMutation();
  async function main() {
    const recipes = await trpc.findRecipes.useQuery({
      1: "chicken",
      2: "mushroom",
    });
    console.log("result.data==>", recipes.data);
  }
  main();

  return <div className="bg-red-200  md:bg-blue-300">abc</div>;
}

export default Hi;
