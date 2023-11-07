import { trpc } from "./utils/trpc";
// import React from "react";
// import { z } from "zod";

function Hi() {
  async function main() {
    try {
      const recipes = await trpc.findRecipes.useQuery({
        1: 22,
        2: "mushroom",
      });

      if (recipes.error?.message) {
        const errorMessage = JSON.parse(recipes.error.message)[0].message;
        console.log("errorMessage==>", errorMessage);
      }

      // console.log("recipes.data==>", recipes.data);
    } catch {
      (e: Error) => {
        console.log("catch block==>", e);
      };
    }
  }
  main();

  return <div className="bg-red-200  md:bg-blue-300">abc</div>;
}

export default Hi;
