/*
  Warnings:

  - A unique constraint covering the columns `[Title]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Recipe_Title_key" ON "Recipe"("Title");
