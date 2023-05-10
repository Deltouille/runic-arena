/*
  Warnings:

  - Made the column `effet` on table `Condition` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Condition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "effet" TEXT NOT NULL,
    "type_id" INTEGER,
    "classe_id" INTEGER,
    "capacite_passive_id" INTEGER,
    CONSTRAINT "Condition_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Condition_classe_id_fkey" FOREIGN KEY ("classe_id") REFERENCES "Classe" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Condition_capacite_passive_id_fkey" FOREIGN KEY ("capacite_passive_id") REFERENCES "CapacitePassive" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Condition" ("capacite_passive_id", "classe_id", "description", "effet", "id", "nom", "type_id") SELECT "capacite_passive_id", "classe_id", "description", "effet", "id", "nom", "type_id" FROM "Condition";
DROP TABLE "Condition";
ALTER TABLE "new_Condition" RENAME TO "Condition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
