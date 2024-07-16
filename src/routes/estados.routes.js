var express = require('express');
var router = express.Router();
var estadoService = require('../services/estados.services');
var cidadeService = require('../services/cidades.services');


router.get('/', (req, res) => {
  estadoService.getEstados().then(function(result) {
    res.status(200).json(result);
  })
  .catch(err => {
    res.status(400).json(err.message);
  });
})

router.get('/:id/cidades', (req, res) => {
  cidadeService.getCidadesByIdEstado(req.params.id).then(function(result) {
    res.status(200).json(result);
  })
  .catch(err => {
    res.status(400).json(err.message);
  });
})


module.exports = router;
