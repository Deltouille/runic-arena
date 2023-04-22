//TODO : Ajouter les vérifications

var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

router.get('/', async function(req, res, next) {
    const classe = await prisma.classe.findMany();
    res.send(classe);
});

router.get('/:id', async function(req, res){
    const classe = await prisma.classe.findUnique({
        where: {
            id: parseInt(req.params.id)
        },include: {
            carte: true,
            condition: true,
        }
    });

    res.send(classe);
});

router.delete('/:id', async function(req, res) {
    try {
        const classe = await prisma.classe.delete({
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

    const classe = await prisma.classe.create({
        data: {
            nom: req.body.name
        }
    });

    res.status(200).json({ message: 'Carte bien créer.'})
});

router.put('/', async function(req, res){

    const classe = await prisma.classe.update({
        where: {
            id: req.body.classe_id,
        },
        data: {
            nom: req.body.new_classe_name
        }
    })

    res.status(200).json({ message: 'Classe bien modifié.'})
});

module.exports = router;
