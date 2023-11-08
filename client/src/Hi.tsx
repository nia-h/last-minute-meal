import { trpc } from "./utils/trpc";
// import React from "react";
// import { z } from "zod";

function Hi() {
  async function main() {
    try {
      const response = await trpc.findRecipes.useQuery({
        1: 22,
        2: "mushroom",
      });

      if (response.error?.data?.zodError) {
        const errorMessage = JSON.stringify(
          response.error.data.zodError,
          null,
          2,
        );
        console.log("errorMessage==>", errorMessage);
      }

      console.log("response.data==>", response.data);
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
