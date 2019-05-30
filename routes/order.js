const express = require('express')
const router = express.Router()
const connection = require('../config')
const bodyParser = require('body-parser');



router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/', (req ,res) =>{
    connection.query('SELECT * FROM mugiwara ORDER BY firstname',(err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la récupération des donées')
        }
        else{
            res.status(200).send("Racine de Order ")
        }
    })

})





router.get('/byasc', (req ,res) =>{
    connection.query('SELECT * FROM mugiwara ORDER BY firstname',(err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la récupération des donées')
        }
        else{
            res.json(results)
        }
    })

})

router.get('/bydesc', (req ,res) =>{
    connection.query('SELECT * FROM mugiwara ORDER BY firstname desc',(err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la récupération des donées')
        }
        else{
            res.json(results)
        }
    })

})


router.post('/', (req ,res) =>{
    const formData = req.body
    connection.query('INSERT INTO mugiwara SET ?', formData, (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la sauvegarde des donées')
        }
        else{
            res.sendStatus(200)
        }
    })

})

router.put('/:id', (req ,res) =>{
    const idMugiwara = req.params.id
    const formData = req.body
    connection.query('UPDATE mugiwara SET ? WHERE id = ?', [formData, idMugiwara], (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la modifiaction des donées')
        }
        else{
            res.sendStatus(200)
        }
    })

})


router.put('/', (req ,res) =>{
    const idMugiwara = req.params.id
    const formData = req.body
    connection.query('UPDATE mugiwara SET ? WHERE devil_fruit_user', [formData, idMugiwara], (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la modifiaction des donées')
        }
        else{
            res.sendStatus(200)
        }
    })

})

module.exports = router