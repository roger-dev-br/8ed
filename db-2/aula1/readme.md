# Acesso ao DB PostgreSQL

1 -> Instalou a biblioteca do "pg" / "mysql"
2 -> Criei a pasta DB que permite a conexão ao Servidor
3 -> Criei o model -> que representa a entidade aqui no NODE
4 -> Criei um Repositorio para o Growdever
    * Tudo que for acessar o Banco de dados referente ao Growdever
        deve passar por aqui
5 -> Criamos o controller para processa a requisição
    * O controller recebe a requisição
    * Envia para o banco dados
    * Recebe uma resposta
    * processa e devolve pro cliente
6 -> Criamos uma rota para receber a requisição e encaminhar para o Controller

PASSOS PARA UM NOVO CRUD
1 -> CRIAR UM MODEL PARA A NOVA ENTIDADE ( MENTORES )
2 -> CRIAR UM NOVO REPOSITORIO
3 -> CRIAR UM NOVO CONTROLLER
4 -> ALTERAR O ARQUIVO DE ROTAS