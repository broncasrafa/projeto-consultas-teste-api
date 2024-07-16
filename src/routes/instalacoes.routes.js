var express = require('express');
var router = express.Router();
var instalacoesData = require('../data/instalacoes.data.js');

router.get('/', (req, res) => {
    try {
        res.status(200).json(instalacoesData.instalacoes);
    } catch (error) {
        res.status(400).json(err.message);
    }
})

router.get('/:instalacao/dados-cadastrais', (req, res) => {
    try {        
        const data = instalacoesData.dados_cadastrais_instalacao;
        if (!data) {
            res.status(404).json({ message: `Dados não encontrados para a UC: '${req.params.instalacao}'` });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(err.message);
    }
})

router.get('/consulta-instalacao', (req, res) => {
    try {
        res.status(200).json(instalacoesData.consulta_instalacao);
    } catch (error) {
        res.status(400).json(err.message);
    }
})



module.exports = router;