//TODO : Ajouter les vérifications

var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

router.get('/', async function(req, res, next) {
    const type = await prisma.type.findMany();
    res.send(type);
});

router.get('/:id', async function(req, res){
    const type = await prisma.type.findUnique({
        where: {
            id: parseInt(req.params.id)
        },include: {
            carte: {
                include: {
                    competence_passive: {
                        include: {
                            competence: true
                        }
                    },
                    competences_active: {
                        include: {
                            competence: true
                        }
                    }
                }
            },
            condition: true,
        }
    });

    res.send(type);
});

router.delete('/:id', async function(req, res) {
    try {
        const type = await prisma.type.delete({
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

    const type = await prisma.type.create({
        data: {
            nom: req.body.nom
        }
    });

    res.status(200).json({ message: 'Carte bien créer.'})
});

router.put('/', async function(req, res){
    const type = await prisma.type.update({
        where: {
            id: parseInt(req.body.id),
        },
        data: {
            nom: req.body.nom
        }
    })

    res.status(200).json({ message: 'Auteur bien modifié.'})
});

module.exports = router;
