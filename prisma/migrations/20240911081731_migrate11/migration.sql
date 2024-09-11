/*
  Warnings:

  - Added the required column `hilang_barang` to the `kehilangan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hilang_dari` to the `kehilangan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hilang_hari` to the `kehilangan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hilang_ke` to the `kehilangan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `kehilangan` ADD COLUMN `hilang_barang` VARCHAR(191) NOT NULL,
    ADD COLUMN `hilang_dari` VARCHAR(191) NOT NULL,
    ADD COLUMN `hilang_hari` VARCHAR(191) NOT NULL,
    ADD COLUMN `hilang_ke` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `pengumuman` (
    `pengumuman_id` INTEGER NOT NULL AUTO_INCREMENT,
    `pengumuman_judul` VARCHAR(191) NOT NULL,
    `pengumuman_isi` VARCHAR(191) NOT NULL,
    `pengumuman_createdBy` INTEGER NULL,
    `pengumuman_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `pengumuman_updated` DATETIME(3) NOT NULL,
    `pengumuman_deleted` DATETIME(3) NULL,

    PRIMARY KEY (`pengumuman_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pengumuman` ADD CONSTRAINT `pengumuman_pengumuman_createdBy_fkey` FOREIGN KEY (`pengumuman_createdBy`) REFERENCES `users`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;
