module.exports.instalacoes = [
    {
        "consumidor": "Telecomunicações",
        "endereco": "R. Geraldo Araújo Bacelar",
        "complemento": "Armário",
        "bairro": "Jd. São José",
        "uc": "249186357",
        "medidor": null
    },
    {
        "consumidor": "Diego Henrique Silva",
        "endereco": "R. Geraldo Araújo Bacelar",
        "complemento": null,
        "bairro": "Jd. São José",
        "uc": "12345678",
        "medidor": null
    },
    {
        "consumidor": "Mario Anderson Santos",
        "endereco": "R. Geraldo Araújo Bacelar",
        "complemento": "Car",
        "bairro": "Jd. São José",
        "uc": "87456321",
        "medidor": "12345678"
    },
    {
        "consumidor": "Rafael Santiago dos Santos",
        "endereco": "R. Geraldo Araújo Bacelar",
        "complemento": null,
        "bairro": "Dubai",
        "uc": "98745632",
        "medidor": "12345678"
    }
];

module.exports.consulta_instalacao = {
    "uc": "22432868",
    "cliente": "",
    "lista": [
        {
            "os": "000124578",
            "abertura": "17/01/2023, 11:21",
            "estado": "Fechada",
            "sa": "457890001",
            "servico":"CCS - Desligar definitivo",
            "uc": "12345678",
            "fechamento":"17/01/2023, 11:21",
            "sa_pai": "123456789",
            "nota_servico": "123456789",
            "atividade_crm": "123456789",
            "evento_is": "123456789",
            "evento_adms": "123456789"
        },
        {
            "os": "144724329",
            "abertura": "17/01/2023, 11:21",
            "estado": "Fechada",
            "sa": "776888486",
            "servico":"CCS - Desligar definitivo",
            "uc": "12345678",
            "fechamento":"17/01/2023, 11:21",
            "sa_pai": "123456789",
            "nota_servico": "123456789",
            "atividade_crm": "123456789",
            "evento_is": "123456789",
            "evento_adms": "123456789"
        },
        {
            "os": "177451230",
            "abertura": "17/01/2023, 11:21",
            "estado": "Encerrada",
            "sa": "701245785",
            "servico":"Atualização cadastral",
            "uc": "12345678",
            "fechamento":"17/01/2023, 11:21",
            "sa_pai": "123456789",
            "nota_servico": "123456789",
            "atividade_crm": "123456789",
            "evento_is": "123456789",
            "evento_adms": "123456789"
        },
        {
            "os": "1353344186",
            "abertura": "17/01/2023, 11:21",
            "estado": "Encerrada",
            "sa": "98745320",
            "servico":"Atualização cadastral",
            "uc": "12345678",
            "fechamento":"17/01/2023, 11:21",
            "sa_pai": "123456789",
            "nota_servico": "123456789",
            "atividade_crm": "123456789",
            "evento_is": "123456789",
            "evento_adms": "123456789"
        }
    ]   
}

module.exports.dados_cadastrais_instalacao = {
    "instalacao": "249186357",
    "parceiro_negocio": "123456789",
    "parceiro_negocio_compl": "AT Hoteis Ltda",
    "pn_varejo": "123456789",
    "pn_externo": "123456789",
    "informacoes_gerais": {
      "tipo_servico": "tipo_servico",
      "contrato": "123456789",
      "conta_contrato": "123456789",
      "instalacao": "AMT Hoteis Ltda",
      "nome_fantasia": "nome_fantasia"
    },
    "localizacao": {
      "endereco": "Rua dos Pinheiros",
      "complemento": "Casa 2",
      "numero": "91",
      "bairro": "Jd. dos Testes",
      "municipio": "São Paulo",
      "referencia": "Próximo ao Hotel Vila Flor",
      "ea_atendimento": "São Paulo",
      "ca_atendimento": "Região Leste"
    },
    "dados_complementares": {
      "instalacao_principal": "instalacao_principal",
      "local_consumo": "60606069603",
      "objeto_ligacao": "60606069603",
      "situacao": "Ativo",
      "optante": false,
      "tarifa_branca": true,
      "grupo": "B",
      "irregularidade": "irregularidade",
      "inadimplencia": "60606069603",
      "impedimento": "60606069603",
      "rota_roteiro": "Ativo",
      "nru": "N0PBU009",
      "ul": "ORIT",
      "telefone": "(11) 40662020",
      "mdm": true
    },
    "dados_comerciais": {
      "classe": "",
      "cnae": "",
      "sistema_setorial": "",
      "tipo_geracao": "",
      "tipo_fonte_geracao": "",
      "potencia_instalada_gerador": "",
      "ligacao": "",
      "data_inicio_ativ": "",
      "data_termino_ativ": "",
      "data_referencia_cn": "",
      "pot_vigente": "",
      "pot_gerada": "",
      "eusd": "",
      "data_pag_cla": "",
      "perfil_consr": "",
      "tensao_fornecimento": "",
      "tensao_mediacao": ""
    },
    "dados_medidores_eletrica": {
      "gis": {
        "subestacao": "NPA",
        "alimentador": "NPA-24",
        "chave": "0709709",
        "trafo": "70970",
        "nu_operativo": "709710"
      },
      "medidores_instalados": [
        {
          "medidor": "002",
          "funcao": "12345689",
          "ultima_leitura": "03",
          "data_instalacao": "27/07/2023 11h00",
          "medicao": "",
          "demais_itens": "015C0200"
        },
        {
          "medidor": "002",
          "funcao": "12345689",
          "ultima_leitura": "03",
          "data_instalacao": "18/07/2023 17h30",
          "medicao": "",
          "demais_itens": "015C0200"
        }
      ],
      "equipamentos_instalados": [
        {
          "demais_itens": ""
        },
        {
          "demais_itens": ""
        },
        {
          "demais_itens": ""
        }
      ]
    }
}