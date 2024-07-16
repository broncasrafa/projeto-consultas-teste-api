var express = require('express');
var router = express.Router();
var solicitacoesAtendimentoData = require('../data/solicitacao-atendimento.data.js');

router.get('/', (req, res) => {
    try {
        res.status(200).json(solicitacoesAtendimentoData.solicitacoes_atendimento);
    } catch (error) {
        res.status(500).json(err.message);
    }
})

router.get('/:sa', (req, res) => {
    try {
        const data = solicitacoesAtendimentoData.solicitacoes_atendimento.find(c => c.sa === +req.params.sa);
        if (!data) {
            res.status(404).json({ message: `Dados não encontrados para a SA: '${req.params.sa}'` });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(err.message);
    }
})

router.get('/:sa/instalacao', (req, res) => {
    try {
        const data = solicitacoesAtendimentoData.instalacao;
        if (!data) {
            res.status(404).json({ message: `Dados não encontrados para a SA: '${req.params.sa}'` });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(err.message);
    }
})

router.get('/:sa/dados-adicionais-perfil', (req, res) => {
    try {
        const data = solicitacoesAtendimentoData.dados_adicionais_perfil
        if (!data) {
            res.status(404).json({ message: `Dados não encontrados para a SA: '${req.params.sa}'` });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(err.message);
    }
})

router.get('/:sa/dados-solicitacao', (req, res) => {
    try {
        const data = solicitacoesAtendimentoData.solicitacao_atendimento;
        if (!data) {
            res.status(404).json({ message: `Dados não encontrados para a SA: '${req.params.sa}'` });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(err.message);
    }
})


module.exports = router;
