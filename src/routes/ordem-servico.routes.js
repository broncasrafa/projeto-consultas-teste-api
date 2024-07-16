var express = require('express');
var router = express.Router();
var ordemServicoData = require('../data/ordem-servico.data');

router.get('/', (req, res) => {
    try {
        res.status(200).json(ordemServicoData.ordems_servico);
    } catch (error) {
        res.status(500).json(err.message);
    }
})

router.get('/:os', (req, res) => {
    try {
        const data = ordemServicoData.ordems_servico.find(c => c.os === +req.params.os);
        if (!data) {
            res.status(404).json({ message: `Dados não encontrados para a OS: '${req.params.os}'` });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(err.message);
    }
})

module.exports = router;