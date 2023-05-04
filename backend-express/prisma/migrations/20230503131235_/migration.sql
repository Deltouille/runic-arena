-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CartesCapacictesActive" (
    "competence_id" INTEGER NOT NULL,
    "carte_id" INTEGER NOT NULL,
    "cout_mana" INTEGER NOT NULL,

    PRIMARY KEY ("competence_id", "carte_id"),
    CONSTRAINT "CartesCapacictesActive_competence_id_fkey" FOREIGN KEY ("competence_id") REFERENCES "Competence" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CartesCapacictesActive_carte_id_fkey" FOREIGN KEY ("carte_id") REFERENCES "Carte" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CartesCapacictesActive" ("carte_id", "competence_id", "cout_mana") SELECT "carte_id", "competence_id", "cout_mana" FROM "CartesCapacictesActive";
DROP TABLE "CartesCapacictesActive";
ALTER TABLE "new_CartesCapacictesActive" RENAME TO "CartesCapacictesActive";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
