//TODO : Ajouter les vérifications

var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

router.get('/', async function(req, res, next) {
    const cartes = await prisma.carte.findMany();
    res.send(cartes);
});

router.get('/:id', async function(req, res){
    const carte = await prisma.carte.findUnique({
        where: {
            id: parseInt(req.params.id)
        },include: {
            competences_active: true,
            competence_passive: true,
        }
    });

    res.send(carte);
});

router.delete('/:id', async function(req, res) {
    try {
        const carte = await prisma.carte.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });

        res.status(200).json({ message: `La carte avec l'ID ${req.params.id} a été supprimé.` });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/', async function(req, res){
    const competences_actives = [];

    if(req.body.comp1){
        const competence1 = {
            competence: {
                connect: {
                    id: parseInt(req.body.comp1)
                }
            }
        }

        competences_actives.push(competence1);
    }

    if(req.body.comp2){
        const competence2 = {
            competence: {
                connect: {
                    id: parseInt(req.body.comp2)
                }
            }
        }

        competences_actives.push(competence2);
    }


    const carte = await prisma.carte.create({
        data: {
            nom: req.body.nom,
            illustration: req.body.illustration,
            puissance: req.body.puissance,
            type_id: req.body.type,
            classe: req.body.classe,
            competences_active: {
                create: competences_actives
            },
            competence_passive: {
                connect: {
                    id: req.body.competence_passive
                }
            }

        }
    });

    res.status(200).json({ message: 'Carte bien créer.'})
});

router.put('/', async function(req, res){
    const competences_actives = [];

    if(req.body.comp1){
        const competence1 = {
            competence: {
                connect: {
                    id: parseInt(req.body.comp1)
                }
            }
        }

        competences_actives.push(competence1);
    }

    if(req.body.comp2){
        const competence2 = {
            competence: {
                connect: {
                    id: parseInt(req.body.comp2)
                }
            }
        }

        competences_actives.push(competence2);
    }

    const carte = await prisma.carte.update({
        where: {
            id: parseInt(req.body.id)
        },
        data: {
            nom: req.body.nom,
            illustration: req.body.illustration,
            puissance: req.body.puissance,
            type_id: req.body.type,
            classe: req.body.classe,
            competences_active: {
                create: competences_actives
            },
            competence_passive: {
                connect: {
                    id: req.body.competence_passive
                }
            }

        }
    })

    res.status(200).json({ message: 'Auteur bien modifié.'})
});

module.exports = router;