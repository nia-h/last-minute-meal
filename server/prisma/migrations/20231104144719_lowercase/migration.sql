/*
  Warnings:

  - You are about to drop the column `image_Name` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `ingredients` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `instructions` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `Ingredients` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Instructions` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Title` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "image_Name",
DROP COLUMN "ingredients",
DROP COLUMN "instructions",
DROP COLUMN "title",
ADD COLUMN     "Image_Name" TEXT,
ADD COLUMN     "Ingredients" TEXT NOT NULL,
ADD COLUMN     "Instructions" TEXT NOT NULL,
ADD COLUMN     "Title" TEXT NOT NULL;
