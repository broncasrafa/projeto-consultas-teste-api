const express = require('express');
const bodyParser = require('body-parser');
const estadosRoutes = require('./src/routes/estados.routes');

const app = express();
const port = process.env.PORT || 8080;

// Middleware para processar o corpo das requisições
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

app.get('/', function(req, res) {
    res.send('Seja bem-vindo a api de testes para projetos POC');
})

// Rotas
app.use('/api', estadosRoutes);

// Exporta o app para ser usado no app.js
module.exports = app;