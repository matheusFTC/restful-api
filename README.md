# restful-api
RESTful API usando Node.js and Express 4

## Resumo
Este projeto foi desenvolvido para a disciplina de Criação de Aplicações Web Apps, da pós-graduação em DESIGN WEB APPS COM TECNOLOGIA FRONT-END, no INSTITUTO BRASILEIRO DE EXPERTISE PROFISSIONAL.

Serão passadas aqui instruções que permitirão obter uma cópia do projeto e executar o mesmo.

### Pré-requisitos
O que você precisa para instalar e rodar o projeto:

1. Git (^2.8.1) - https://git-scm.com/
2. Node.js (^6.9.4) e NPM (^3.10.10) - https://nodejs.org/
3. MongoDB (^3.2.11) - https://www.mongodb.com/

### Instalando
Um passo a passo...

1. Execute o comando git clone para download dos fontes deste repositório;
2. Vá para a pasta do projeto e execute o comando npm install;
3. Vá para a pasta parameters and atribua os valores de configuração desejados para os arquivos authentication.js, database.js, encryption.js e infrastructure.js;
4. Vá para a pasta raiz do projeto e execute o comando npm start.

### API no Heroku
Para facilitar, a API foi hospedada no Hiroku.

Você também pode testar e usar esta API por meio da URL: https://restful-api-dwa.herokuapp.com.

### Rotas
As seguintes rotas estão disponíveis:

#### Autenticação
##### /authentication
Rota para autenticação de usuários. Use o método HTTP POST, passando no body da requisição o email e a senha do usuário. Como resposta, para uma autenticação bem sucedida, será retornado o token de acesso.

#### Produtos
##### /products
Rota para listagem dos produtos. Use o método HTTP GET. Não é necessário passar token da acesso.

Você pode testar com a seguinte URL: https://restful-api-dwa.herokuapp.com/products.

##### /products/{_id}
Rota para consulta de um produto específico. Use o método HTTP GET. Não é necessário passar token da acesso.

#### Itens
##### /items
Rota para listagem dos itens que formam alguns produtos. Use o método HTTP GET. Não é necessário passar token da acesso.

Você pode testar com a seguinte URL: https://restful-api-dwa.herokuapp.com/items.

##### /items/{_id}
Rota para consulta de um item de produto específico. Use o método HTTP GET. Não é necessário passar token da acesso.
