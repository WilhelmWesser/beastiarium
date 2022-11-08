/*
  Warnings:

  - You are about to drop the column `beastClassId` on the `beasts` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `beasts` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `beasts` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `beasts_classes` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `beasts_classes` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `drops` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `drops` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `locations` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `locations` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `weaknesses` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `weaknesses` table. All the data in the column will be lost.
  - Added the required column `beast_class_id` to the `beasts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "beasts" DROP CONSTRAINT "beasts_beastClassId_fkey";

-- DropIndex
DROP INDEX "beasts_beastClassId_key";

-- AlterTable
ALTER TABLE "beasts" DROP COLUMN "beastClassId",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "beast_class_id" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "beasts_classes" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "drops" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "locations" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "weaknesses" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "beasts_details" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "in_game_description" TEXT NOT NULL,
    "img_link" TEXT NOT NULL,
    "tactic_description" TEXT NOT NULL,
    "beast_id" INTEGER NOT NULL,

    CONSTRAINT "beasts_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beast_details_to_drops" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "beast_details_id" INTEGER NOT NULL,
    "drop_id" INTEGER NOT NULL,

    CONSTRAINT "beast_details_to_drops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beast_details_to_weaknesses" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "beast_details_id" INTEGER NOT NULL,
    "weakness_id" INTEGER NOT NULL,

    CONSTRAINT "beast_details_to_weaknesses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beast_details_to_locations" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "beast_details_id" INTEGER NOT NULL,
    "location_id" INTEGER NOT NULL,

    CONSTRAINT "beast_details_to_locations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "beasts_details_beast_id_key" ON "beasts_details"("beast_id");

-- AddForeignKey
ALTER TABLE "beasts" ADD CONSTRAINT "beasts_beast_class_id_fkey" FOREIGN KEY ("beast_class_id") REFERENCES "beasts_classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beasts_details" ADD CONSTRAINT "beasts_details_beast_id_fkey" FOREIGN KEY ("beast_id") REFERENCES "beasts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beast_details_to_drops" ADD CONSTRAINT "beast_details_to_drops_beast_details_id_fkey" FOREIGN KEY ("beast_details_id") REFERENCES "beasts_details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beast_details_to_drops" ADD CONSTRAINT "beast_details_to_drops_drop_id_fkey" FOREIGN KEY ("drop_id") REFERENCES "drops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beast_details_to_weaknesses" ADD CONSTRAINT "beast_details_to_weaknesses_beast_details_id_fkey" FOREIGN KEY ("beast_details_id") REFERENCES "beasts_details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beast_details_to_weaknesses" ADD CONSTRAINT "beast_details_to_weaknesses_weakness_id_fkey" FOREIGN KEY ("weakness_id") REFERENCES "weaknesses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beast_details_to_locations" ADD CONSTRAINT "beast_details_to_locations_beast_details_id_fkey" FOREIGN KEY ("beast_details_id") REFERENCES "beasts_details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beast_details_to_locations" ADD CONSTRAINT "beast_details_to_locations_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
