var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

router.get('/', async function(req, res){
    let conditions = await prisma.condition.findMany({});
    res.send(conditions);
});


router.get('/:id', async function(req, res){
    const condition = await prisma.condition.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.send(condition);
});

router.delete('/:id', async function(req, res){
    try {
        const condition = await prisma.condition.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });

        res.status(200).json({ message: `La condition avec l'ID ${req.params.id} a été supprimé.` });

    }catch (err){
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async function(req, res){
    try {
        const condition = await prisma.condition.create({
            data: {
                nom: req.body.nom,
                description: req.body.description,
                effet: req.body.effet,
                type: {
                    connect: {
                        id: parseInt(req.body.type_id)
                    }
                },
                classe: {
                    connect: {
                        id: parseInt(req.body.classe_id)
                    }
                },

            }
        })
    }catch (err){
        res.status(500).json({ message: err.message });
    }
});

router.put('/', async function(req, res){
    try {
        const condition = await prisma.condition.update({
            where: {
              id: parseInt(req.body.id)
            },
            data: {
                nom: req.body.nom,
                description: req.body.description,
                effet: req.body.effet,
                type: {
                    connect: {
                        id: parseInt(req.body.type_id)
                    }
                },
                classe: {
                    connect: {
                        id: parseInt(req.body.classe_id)
                    }
                },
                capacite_passive: {
                    connect: {
                        id: parseInt(req.body.capacite_passive_id)
                    }
                }
            },
        })
    }catch (err){
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
