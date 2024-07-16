/* importar as configurações do servidor */
var app = require('./server');

/* parametrizar a porta de escuta */
var porta = process.env.PORT || 3005;
app.listen(porta, function(){
	console.log(`Servidor online => http://localhost:${porta}`);
})