import { trpc } from "./utils/trpc";

function Hi() {
  // const userQuery = trpc.getUser.useQuery({ id: 'id_bilbo' });
  // const userCreator = trpc.createUser.useMutation();
  async function main() {
    try {
      const recipes = await trpc.findRecipes.useQuery({
        1: 22,
        2: "mushroom",
      });

      console.log("recipes==>", recipes);
      return;

      if (recipes.error) {
        console.log("recipes.error?.data==>", recipes.error);
        return;
      }

      console.log("recipes==>", recipes.data);
    } catch {
      (e: Error) => {
        console.log("error==>", e);
      };
    }
  }
  main();

  return <div className="bg-red-200  md:bg-blue-300">abc</div>;
}

export default Hi;
