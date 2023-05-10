-- CreateTable
CREATE TABLE "Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Classe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Competence" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "effet" TEXT NOT NULL,
    "valeur" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "CartesCapacictesActive" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "competence_id" INTEGER NOT NULL,
    "carte_id" INTEGER NOT NULL,
    "cout_mana" INTEGER NOT NULL,
    CONSTRAINT "CartesCapacictesActive_competence_id_fkey" FOREIGN KEY ("competence_id") REFERENCES "Competence" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CartesCapacictesActive_carte_id_fkey" FOREIGN KEY ("carte_id") REFERENCES "Carte" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CapacitePassive" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "competence_id" INTEGER NOT NULL,
    "condition_id" INTEGER NOT NULL,
    CONSTRAINT "CapacitePassive_competence_id_fkey" FOREIGN KEY ("competence_id") REFERENCES "Competence" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CapacitePassive_condition_id_fkey" FOREIGN KEY ("condition_id") REFERENCES "Condition" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Condition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "effet" TEXT NOT NULL,
    "type_id" INTEGER,
    "classe_id" INTEGER,
    "capacite_passive_id" INTEGER,
    CONSTRAINT "Condition_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Condition_classe_id_fkey" FOREIGN KEY ("classe_id") REFERENCES "Classe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Carte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "illustration" TEXT NOT NULL,
    "puissance" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "classe_id" INTEGER NOT NULL,
    "competence_passive_id" INTEGER NOT NULL,
    CONSTRAINT "Carte_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Carte_classe_id_fkey" FOREIGN KEY ("classe_id") REFERENCES "Classe" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Carte_competence_passive_id_fkey" FOREIGN KEY ("competence_passive_id") REFERENCES "CapacitePassive" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
