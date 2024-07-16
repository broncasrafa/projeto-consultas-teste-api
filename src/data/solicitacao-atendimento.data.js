module.exports.solicitacoes_atendimento = [
    {
        "sa": "98745320",
        "os": "1353344186",
        "servico": "Atualização cadastral",
        "estado": "EN",
        "abertura": "17/01/2023, 11:21",
        "fechamento": "17/01/2023, 11:21"
      },
      {
        "sa": "457890001",
        "os": "000124578",
        "servico": "CCS - Vistoria e Ligação Nova BT",
        "estado": "FE",
        "abertura": "17/01/2023, 11:21",
        "fechamento": "17/01/2023, 11:21"
      },
      {
        "sa": "776888486",
        "os": "144724329",
        "servico": "CCS - Vistoria e Ligação Nova BT",
        "estado": "FE",
        "abertura": "17/01/2023, 11:21",
        "fechamento": "17/01/2023, 11:21"
      },
      {
        "sa": "701245785",
        "os": "177451230",
        "servico": "CCS - Vistoria e Ligação Nova BT",
        "estado": "FE",
        "abertura": "17/01/2023, 11:21",
        "fechamento": "17/01/2023, 11:21"
      }
]

module.exports.solicitacao_atendimento = {
    "sa": "98745320",
    "servico": "CCS - Substituição de Medidor/Equipamento",
    "os": "1353344186",
    "estado": "EN - Encerrada, Procedente",
    "ca": "CA, Bauru",
    "centro_trabalho": "KSJ480,centro de trabalho",
    "sistema_gerador": "sistema_gerador",
    "sa_vinculo": "sa_vinculo",
    "sat_s": "1465465454",
    "localizacao": {
      "endereco": "Avenida Belmira Marin",
      "complemento": "casa 1",
      "numero": "91",
      "bairro": "Jd. Grajaú",
      "municipio": "São Paulo",
      "referencia": "Pagan Tratores"
    },
    "atendimento": {
      "emitente": "466787 - Rosemary Missio",
      "registro": "13/09/2023, 18h:21",
      "previsao_atendimento": "14/09/2023, 00h:47",
      "custo_previsto": "custo_previsto",
      "observacoes": "Telefone: 1812356678, Sistema Gerador URA, Sistema Gerador: URA"
    },
    "cancelamento": {
      "responsavel": "4784540000 - Rafael Santiago dos Santos",
      "data": "10/12/2021, 08h:38"
    },
    "encerramento": {
      "responsavel": "20100811 - Jean Adrian Rodrigues de Castro",
      "data": "16/12/2021, 08h:38"
    },
    "retorno": {
      "previsao": "20/12/2021, 18h:38",
      "termino": "20/12/2021, 18h:40",
      "informacoes": "Telefone: 1812356678, Sistema Gerador URA, Sistema Gerador: URA"
    },
    "vinculacoes": [
      {
        "sa": "457890001",
        "os": "000124578",
        "tipo": "Pai",
        "descricao": "SA Pai: 457890001 - CCS - Vistoria e Ligação Nova BT OS: 000124578"
      },
      {
        "sa": "776888486",
        "os": "144724329",
        "tipo": "Filho",
        "descricao": "SA: 776888486 - CCS - Vistoria e Ligação Nova BT OS: 144724329"
      },
      {
        "sa": "701245785",
        "os": "177451230",
        "tipo": "Filho",
        "descricao": "SA: 701245785 - CCS - Vistoria e Ligação Nova BT OS: 177451230"
      },
      {
        "sa": "98745320",
        "os": "1353344186",
        "tipo": "Filho",
        "descricao": "SA: 98745320 - CCS - Vistoria e Ligação Nova BT OS: 1353344186"
      }
    ]
}

module.exports.instalacao = {
    "informacoes": {
      "sa": "98745320",
      "instalacao": "249186357",
      "parceiro_negocio": "12345678",
      "nome_pn": "713494727",
      "grupo": "B",
      "mru": "ARTBU113",
      "consumidor": "Marka Veículos Ltda",
      "nome_fantasia": "Marka Veículos Ltda",
      "telefone": "1836318800",
      "situacao": "Ativo",
      "prioridade": "valor prioridade",
      "optante": true
    },
    "localizacao": {
      "endereco": "R. Atlantica",
      "complemento": "casa 1",
      "numero": "91",
      "bairro": "Jd. Guanabara",
      "municipio": "Araçatuba",
      "referencia": "Pagan Tratores",
      "irregularidade": "Consultar no CC",
      "inadimplencia": "Consultar no CC",
      "impedimento": "Consultar no CC"
    },
    "dados_comerciais": {
      "classe": "Comercial",
      "subclasse": "Serviço de irrigação",
      "esp_subclasse": "Não há",
      "cpa": "Não há",
      "ligacao": "Trifásico",
      "categoria_atendimento": "14/09/2023, 00h:47",
      "potencia_gerada": "35",
      "potencia_vigente": "0",
      "atividade": "Serviços de manutenção e reparação mecânica"
    },
    "dados_eletricos": {
      "prodadis": {
        "subestacao": "Comercial",
        "alimentador": "Serviço de irrigação",
        "chave": "Não há",
        "bloco": "Não há",
        "trafo": "Não há",
        "coordenada": "Não há"
      },
      "gis": {
        "subestacao": "IP0",
        "alimentador": "IP0-15",
        "chave": "0091033",
        "trafo": "032485",
        "nu_optativo": "326437"
      },
      "sa": {
        "subestacao": null,
        "alimentador": null,
        "chave": null,
        "bloco": null,
        "trafo": null,
        "coordenada": null
      }
    },
    "correspondencia": {
      "endereco": null,
      "complemento": null,
      "numero": null,
      "bairro": null,
      "municipio": null,
      "local_entrega": null
    }
}

module.exports.dados_adicionais_perfil = {
    "sa": "98745320",
    "nome_consumidor": "Marka Veículos Ltda",
    "rg_uc": "470741752",
    "inscricao_estadual": "010461000649",
    "dt_vig_insc_estadual": "12/12/2000",
    "nova_fase": "Trifasico+",
    "nova_classe": "Trifasico-",
    "pot_est_w": "220",
    "categoria_atend": "Classe A",
    "atividade": "Atividade A",
    "cpa": "1234567",
    "local_entrega_conta": "São Bernardo do Campo",
    "perfil": "Perfil Normal",
    "responsabilidade": "Publica",
    "isencao_icms": false,
    "micro_empresa": true,
    "imposto_simples": true,
    "dia_pagamento_conta": "04/07/2024",
    "data_solicitacao": "01/07/2024",
    "data_descadastramento": "04/07/2024",
    "local_endereco_entrega_conta": "Avenida das Nações Unidas, 1234",
    "aparelhos_eletricos": [
      {
        "aparelho": "Geladeira Eletrolux",
        "potencia": "550W",
        "qtd": "1"
      },
      {
        "aparelho": "Lavadora Secadora Samsung",
        "potencia": "1500W",
        "qtd": "1"
      },
      {
        "aparelho": "Microondas Eletrolux",
        "potencia": "300W",
        "qtd": "1"
      },
      {
        "aparelho": "SmartTV Samsung",
        "potencia": "450W",
        "qtd": "4"
      },
      {
        "aparelho": "Ar-Condicionado",
        "potencia": "12000 BTUs",
        "qtd": "3"
      }
    ]
}