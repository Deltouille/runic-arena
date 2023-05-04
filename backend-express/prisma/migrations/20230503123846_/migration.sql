-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Carte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "illustration" TEXT NOT NULL,
    "puissance" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "classe_id" INTEGER NOT NULL,
    "competence_passive_id" INTEGER NOT NULL,
    CONSTRAINT "Carte_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Carte_classe_id_fkey" FOREIGN KEY ("classe_id") REFERENCES "Classe" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Carte_competence_passive_id_fkey" FOREIGN KEY ("competence_passive_id") REFERENCES "CapacitePassive" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Carte" ("classe_id", "competence_passive_id", "id", "illustration", "nom", "puissance", "type_id") SELECT "classe_id", "competence_passive_id", "id", "illustration", "nom", "puissance", "type_id" FROM "Carte";
DROP TABLE "Carte";
ALTER TABLE "new_Carte" RENAME TO "Carte";
CREATE TABLE "new_Condition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type_id" INTEGER NOT NULL,
    "classe_id" INTEGER NOT NULL,
    CONSTRAINT "Condition_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Condition_classe_id_fkey" FOREIGN KEY ("classe_id") REFERENCES "Classe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Condition" ("classe_id", "description", "id", "nom", "type_id") SELECT "classe_id", "description", "id", "nom", "type_id" FROM "Condition";
DROP TABLE "Condition";
ALTER TABLE "new_Condition" RENAME TO "Condition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
