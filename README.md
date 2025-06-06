# biblio_challenge

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

* BackEnd API Laravel - [http://localhost:8080](http://localhost:8080)
* FrontEnd React - [http://localhost:5173/](http://localhost:5173/)

## 📂 Arquivos Auxiliares
O projeto inclui materiais para facilitar o entendimento da API:

📌 **Consumo da API via Postman**  
📜 Arquivo: `backend/docs/API-Biblio_Challenge.postman_collection.json`  
📜 Como usar: **Importe no Postman para testar as rotas da API.**
