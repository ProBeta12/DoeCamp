# DoeCamp

O **DoeCamp** é uma aplicação web destinada à criação e gestão de campanhas de doação, com o objetivo de facilitar a captação de recursos para diversas causas. O projeto é composto por duas partes principais:

- **API**: Responsável por fornecer os dados e realizar operações como criação, edição e exclusão de campanhas e doações.
- **DoeCamp Web**: A interface web que os usuários utilizam para interagir com o sistema, como visualizar, apoiar e criar campanhas.

## Estrutura do Projeto

O projeto está dividido em duas subpastas principais:

- `api/`: Contém a API desenvolvida em Node.js, responsável por gerenciar as operações de backend como a comunicacao com mongoDb atlas.
- `doecamp/`: Contém o frontend desenvolvido em Next.js, responsável pela interface visual e pela interação com a API.

### Pasta `api/`

- **Tecnologias Utilizadas**:
  - Node.js
  - Express.js
  - Mongoose (MongoDB Atlas)
  
- **Funções**: A API gerencia as campanhas e doações, permitindo operações como:
  - **GET**: Busca campanhas.
  - **POST**: Criação de novas campanhas.
  - **PUT**: Edição de campanhas existentes.
  - **DELETE**: Remoção de campanhas.

### Pasta `doecamp/`

- **Tecnologias Utilizadas**:
  - Next.js
  - TailwindCSS
  - React.js

- **Funções**: A interface web permite que usuários:
  - Visualizem e naveguem pelas campanhas.
  - Criem novas campanhas.
  - Excluir Campanhas finalizadas.

### Requisitos

- Docker e Docker Compose instalados.
- Cadastro no MongoDB Atlas.

## Como Executar o Projeto

1. **Crie uma conta no MongoDB Atlas**:

   - Cadastre-se no [MongoDB Atlas](https://www.mongodb.com/).
   - Crie um cluster gratuito na plataforma.
   - No cluster, adicione um banco de dados.

2. **Gere uma chave de conexão**:

   - No MongoDB Atlas, vá para a seção de "Database Access" e configure um usuário e senha para acessar o banco.
   - Em "Network Access", adicione o IP de sua máquina ou permita acesso de qualquer lugar (opção `0.0.0.0/0`). Video de referencia [link](https://www.youtube.com/watch?v=zaWFnHagbrM&t=827s).
   - Gere uma URI de conexão para o seu cluster MongoDB Atlas.

3. **Configure a chave de conexão no projeto**:

   - Abra o arquivo `src/index.js` dentro da pasta `api/` do projeto.
   - Substitua a URI de conexão pela gerada no MongoDB Atlas:

   ```javascript
   mongoose.connect(
     "mongodb+srv://<usuario>:<senha>@seu-cluster.mongodb.net/?retryWrites=true&w=majority&appName=ApiDoeCamp"
   )

4. **Clone o repositório**:
   ```bash
   git clone https://github.com/ProBeta12/DoeCamp.git
   cd doecamp

5. **Suba os containers Docker**:
    - No diretório raiz do projeto
   ```bash
   docker-compose up --build
6. **Acesse a aplicação**:
    - A API estará disponível em http://localhost:5000.
    - A interface web estará disponível em http://localhost:3000.
