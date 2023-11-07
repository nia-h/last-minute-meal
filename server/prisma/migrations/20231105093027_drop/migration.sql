/*
  Warnings:

  - Made the column `Ingredients` on table `Recipe` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Instructions` on table `Recipe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Recipe" ALTER COLUMN "Ingredients" SET NOT NULL,
ALTER COLUMN "Instructions" SET NOT NULL;
