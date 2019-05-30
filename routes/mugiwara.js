const express = require('express')
const router = express.Router()
const connection = require('../config')





router.get('/', (req, res) => {
    connection.query('SELECT * FROM mugiwara',(err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la recupération des donées')
        }
        else{
            res.json(results)
        }
    })
})


router.get('/birthday', (req, res) => {
    connection.query('SELECT firstname, birthday, age FROM mugiwara',(err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la recupération des donées')
        }
        else{
            res.json(results)
        }
    })
})

router.get('/firstnamecontain-u', (req, res) => {
    connection.query('SELECT firstname from mugiwara WHERE firstname LIKE "%u%"',(err , results) => {
        if(err){
            res.status(500).send('Erreur lors de la recupération de donéess')
        }
        else{
            res.json(results)
        }
    })
})

router.get('/pirate-name', (req, res) => {
    connection.query('SELECT * from mugiwara WHERE pirate_name LIKE "Straw%"',(err , results) => {
        if(err){
            res.status(500).send('Erreur lors de la recupération de donéess')
        }
        else{
            res.json(results)
        }
    })
})

router.get('/age', (req, res) => {
    connection.query('SELECT * from mugiwara WHERE age >= 20',(err , results) => {
        if(err){
            res.status(500).send('Erreur lors de la recupération de donéess')
        }
        else{
            res.json(results)
        }
    })
})

router.delete('/:id', (req, res) => {
    const idMugiwara = req.params.id
        connection.query('DELETE FROM mugiwara WHERE id = ?', idMugiwara, (err , results) => {
            if(err){
                res.status(500).send('Erreur lors de la supression de donéess')
            }
            else{
                res.sendStatus(200)
            }
    })
})


router.delete('/', (req, res) => {
    connection.query('DELETE FROM mugiwara WHERE is not devil_fruit_user',(err , results) => {
        if(err){
            res.status(500).send('Erreur lors de la supression de donéess')
        }
        else{
            res.sendStatus(200)
        }
    })
})


module.exports = router;