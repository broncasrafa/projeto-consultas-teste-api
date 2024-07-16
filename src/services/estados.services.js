var Promise = require('bluebird');
var request = require('request');

module.exports.getEstados = function() {
  return new Promise((resolve, reject) => {
    var options = {
      url: 'https://api-candidato.vagas.com.br/v1/dominios/v1/paises/31/estados',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
      }
    };

    request.get(options, (error, response, body) => {
      if (error) {
        return reject(new Error(error.message));
      }

      if (body == null) {
        return reject(new Error('Body is empty'));
      }

      try {
        var json = JSON.parse(body);

        if (!json) {
            return reject(new Error('No data provided from api'));
        }

        return resolve(json);
      } catch(e) {
          return reject(new Error(e.message));
      }

    })

  });
}
module.exports.getCidadesByIdEstado = function(idEstado) {
  return new Promise((resolve, reject) => {
    var options = {
      url: `https://api-candidato.vagas.com.br/v1/dominios/v1/paises/31/estados/${idEstado}/cidades`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
      }
    };

    request.get(options, (error, response, body) => {
      if (error) {
        return reject(new Error(error.message));
      }

      if (body == null) {
        return reject(new Error('Body is empty'));
      }

      try {
        var json = JSON.parse(body);

        if (!json) {
            return reject(new Error('No data provided from api'));
        }

        return resolve(json);
      } catch(e) {
          return reject(new Error(e.message));
      }

    })

  });
}
