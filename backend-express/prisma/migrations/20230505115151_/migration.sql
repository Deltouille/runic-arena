-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CapacitePassive" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "competence_id" INTEGER NOT NULL,
    CONSTRAINT "CapacitePassive_competence_id_fkey" FOREIGN KEY ("competence_id") REFERENCES "Competence" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CapacitePassive" ("competence_id", "id") SELECT "competence_id", "id" FROM "CapacitePassive";
DROP TABLE "CapacitePassive";
ALTER TABLE "new_CapacitePassive" RENAME TO "CapacitePassive";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
