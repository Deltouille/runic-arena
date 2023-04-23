//TODO : Ajouter les vérifications

var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

router.get('/', async function(req, res, next) {
    const competence = await prisma.competence.findMany();
    res.send(competence);
});

router.get('/:id', async function(req, res){
    const competence = await prisma.competence.findUnique({
        where: {
            id: parseInt(req.params.id)
        },include: {
            cartes: true,
            capacite_passive: true,
        }
    });

    res.send(competence);
});

router.delete('/:id', async function(req, res) {
    try {
        const competence = await prisma.competence.delete({
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
    try{
        const competence = await prisma.competence.create({
            data: {
                nom: req.body.nom,
                description: req.body.description,
                type: req.body.type,
                effet: req.body.effet,
                valeur: parseInt(req.body.valeur)
            }
        });

        res.status(200).json({ message: 'Carte bien créer.'})
    }catch (e) {
        console.log(e);
        res.status(500).json({ message: e})
    }
});

router.put('/', async function(req, res){

    const competence = await prisma.competence.update({
        where: {
            id: parseInt(req.body.type_id),
        },
        data: {
            nom: req.body.new_type_name
        }
    })

    res.status(200).json({ message: 'Auteur bien modifié.'})
});

module.exports = router;
