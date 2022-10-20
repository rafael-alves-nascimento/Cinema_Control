//Importar bibliotecas
const express = require('express')
const router = express.Router()

//Importar módulos
const cinemaControl = require('../Controllers/Controller')

//Definir as rotas
router
    .post('/verDados', cinemaControl.VerFilme)
    .get('/verSalas', cinemaControl.salas)
    .put('/Atualizar', cinemaControl.faturamento)

module.exports = router;