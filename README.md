# biblio

## ❓ Para que serve?
Este repositorio se trata de um projeto de Backend desenvolvido em Laravel 12 na estrutura de API e Frontend React.js para Gerenciamento de Livros.

## 🏗️ Arquitetura e Princípios
O projeto segue boas práticas como:
- **SOLID**
- **Clean Code**

## 🔧 Tecnologias e Estrutura

### 🖥️ Backend (Laravel)
O backend foi desenvolvido com Laravel e segue uma estrutura modular para garantir organização e escalabilidade:
- **Handler Global** para tratamento de exceções
- **Repositories** para abstração de acesso aos dados
- **Services** para lógica de negócios
- **Utils** (gerador de **PDF** e gerador de **CSV**)
- **Migrations, Seeders, Factories** para gerenciamento do banco de dados
- **Testes Unitários** para garantir qualidade do código
- **CRUD de APIs** para **Livro, Autor e Assunto** baseado no modelo de dados

### 🎨 Frontend (React)
A interface foi construída utilizando:
- **React.js**
- **Bootstrap**
- **CSS**
- **HTML**

## 💻 Pré-requisitos
Antes de começar, verifique se você atendeu aos seguintes requisitos:
* docker
* docker-compose
* npm

### 💻 Como executar o PROJETO

Baixar repositório
```sh
git clone https://github.com/KelvinSeverino/biblio_challenge.git
```

Acessar diretório do projeto
```sh
cd biblio_challenge
```

Acessar diretório do projeto
```sh
cd ./backend
```

Crie o arquivo .env
```sh
cp .env.example .env
```

Atualize as variáveis de ambiente do arquivo .env
```sh
APP_NAME=Biblio_Challenge
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8080

APP_LOCALE=pt_BR
APP_FALLBACK_LOCALE=pt_BR
APP_FAKER_LOCALE=pt_BR

L5_FORMAT_TO_USE_FOR_DOCS=json
L5_SWAGGER_ROUTE=api/documentation
L5_SWAGGER_GENERATE_ALWAYS=true
L5_SWAGGER_CONST_HOST=http://localhost:8080

DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=biblio
DB_USERNAME=biblio
DB_PASSWORD=biblio
```

Voltar a raiz do projeto
```sh
cd ../
```

Criar link simbólico para o Docker ter acesso as variaveis de ambiente
```sh
ln -s ./backend/.env .env
```

Iniciar os containers
```sh
docker-compose up -d
```

Executar comando composer para realizar download de arquivos necessários
```sh
docker exec -it biblio_app composer update
```

Gerar key do projeto Laravel
```sh
docker exec -it biblio_app php artisan key:generate
```

Criar tabelas no Banco de Dados
```sh
docker exec -it biblio_app php artisan migrate:fresh --seed
```

Feito os processo acima, você poderá acessar e consumir as rotas disponibilizadas abaixo.

* Backend API Laravel - [http://localhost:8080](http://localhost:8080)
* Frontend React - [http://localhost:5173/](http://localhost:5173/)

## 📖 Documentação da API com Swagger
O projeto possui uma documentação interativa da API utilizando Swagger, permitindo visualizar e testar os endpoints facilmente.

📌 **Como acessar a documentação Swagger**
Após iniciar os containers, acesse a documentação da API pelo navegador:

- 🔗 **Swagger UI:** [http://localhost:8080/api/documentation](http://localhost:8080/api/documentation)
- 🔗 **Swagger JSON:** [http://localhost:8080/docs](http://localhost:8080/docs)

🔧 **Gerar e atualizar a documentação**
Se precisar atualizar a documentação, execute:

```sh
docker exec -it biblio_app php artisan l5-swagger:generate
```

### 📂 Arquivos relacionados
O projeto inclui a configuração do Swagger nos seguintes diretórios:
 - Documentação dos endpoints: `backend/app/Docs/Endpoints`
 - Schemas da API: `backend/app/Docs/Schemas`
 - Configuração geral: `backend/app/Docs/ApiInfo.php`
 - Arquivo de configuração: `backend/config/l5-swagger.php`

## 📂 Arquivos Auxiliares
O projeto inclui materiais para facilitar o entendimento da API:

📌 **Consumo da API via Postman**  
📜 Arquivo: `backend/docs/API-Biblio_Challenge.postman_collection.json`  
📜 Como usar: **Importe no Postman para testar as rotas da API.**

## ✅ Testes automatizados
Este projeto possui testes automatizados no backend.

### Como rodar os testes
Para executar os testes, você pode rodar o seguinte comando dentro do container Docker do backend (ou diretamente na máquina local se tiver o ambiente configurado):

```sh
docker exec -it biblio_app php artisan test
```
