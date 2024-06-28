/*
  Warnings:

  - The primary key for the `PRODUCTS` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "PRODUCTS" DROP CONSTRAINT "PRODUCTS_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "PRODUCTS_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "PRODUCTS_id_seq";
