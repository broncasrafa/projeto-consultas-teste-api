const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const estadosRoutes = require('./src/routes/estados.routes');

const app = express();
const port = process.env.PORT || 3005;

// Middleware para processar o corpo das requisições
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

// Configurações do CORS
const corsOptions = {
    origin: 'https://ambitious-water-0664a3d10.5.azurestaticapps.net', // URL do seu frontend Angular
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  };
  
  app.use(cors(corsOptions));

// for logs
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

app.get('/', function(req, res) {
    res.send('Seja bem-vindo a api de testes para projetos POC');
})

// Rotas
app.use('/api', estadosRoutes);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor online`);
});

module.exports = app;
