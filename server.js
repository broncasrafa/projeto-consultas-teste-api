const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const estadosRoutes = require('./src/routes/estados.routes');
const instalacaoRoutes = require('./src/routes/instalacoes.routes');
const solicitacoesAtendimentoRoutes = require('./src/routes/solicitacao-atendimento.routes');
const ordemServicoRoutes = require('./src/routes/ordem-servico.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();
const port = process.env.PORT || 3005;

// Middleware para processar o corpo das requisições
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));


// Configurações do CORS
const allowedOrigins = [
  'https://ambitious-water-0664a3d10.5.azurestaticapps.net',
  'http://localhost:4200'
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log('Origin:', origin);  // Adicione este log
      // Permitir solicitações sem origem (ex: mobile apps ou CURL)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
          const msg = 'The CORS policy for this site does not allow access from the specified Origin X.';
          return callback(new Error(msg), false);
      }
      return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));

// Configurações do CORS
// const corsOptions = {
//     origin: 'https://ambitious-water-0664a3d10.5.azurestaticapps.net', // URL do seu frontend Angular
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true
//   };
  
//   app.use(cors(corsOptions));

// for logs
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

app.get('/', function(req, res) {
    res.send('Seja bem-vindo a api de testes para projetos POC');
})

// Rotas
app.use('/api/estados', estadosRoutes);
app.use('/api/instalacao', instalacaoRoutes);
app.use('/api/solicitacao-atendimento', solicitacoesAtendimentoRoutes);
app.use('/api/ordem-servico', ordemServicoRoutes);
app.use('/api/auth/login', authRoutes);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor online`);
});

module.exports = app;
