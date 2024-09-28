# Sigma Games - Website de Vendas Simuladas de Jogos

## Visão Geral

Este projeto é um **Website de Vendas Simuladas de Jogos**, projetado para imitar a funcionalidade de uma loja de jogos real. Os usuários podem navegar, pesquisar e "comprar" jogos (não são realizadas transações reais). O projeto serve como uma plataforma para fins acadêmicos ou de treinamento, permitindo que os colaboradores adquiram experiência tanto no desenvolvimento **frontend** quanto **backend**, utilizando diversas tecnologias modernas.

O site **não envolve transações financeiras reais** e é puramente um ambiente simulado para demonstrar funcionalidades de e-commerce.

---

## Funcionalidades do Projeto

- **Listagem de Jogos**: Os usuários podem visualizar uma ampla gama de ofertas de jogos para diferentes plataformas (PC, Xbox, PlayStation e Nintendo).
- **Autenticação de Usuário**: Funcionalidade de login e registro com alternância de visibilidade da senha para melhorar a experiência do usuário.
- **Funcionalidade de Busca**: Os usuários podem buscar jogos por nome ou categoria.
- **Compras Simuladas**: Os usuários podem adicionar jogos ao carrinho e prosseguir com um processo de checkout fictício.
- **Integração com API Backend**: Todas as ações, como busca de jogos e gerenciamento de sessões de usuário, são tratadas pelo backend.

---

## Tecnologias Utilizadas

### Frontend:
- **React**: Gerencia a interface do usuário com design dinâmico e responsivo.
- **JavaScript**: Proporciona elementos interativos no site.
- **HTML/CSS**: Estrutura e estilização para a aparência e usabilidade do site.
- **Axios**: Para realizar requisições HTTP para a API do backend.

### Backend:
- **Java**: Responsável pela lógica do lado do servidor e pela funcionalidade da API.
- **XAMPP**: Usado para configurar um servidor Apache e banco de dados MySQL localmente.
- **SQL**: Para gerenciamento de banco de dados, armazenando dados de usuários, inventário de jogos e histórico de transações.
- **Postman**: Ferramenta para testar e depurar APIs.
- **IntelliJ IDEA**: IDE utilizada para o desenvolvimento e depuração do backend.

---

## Configuração do Projeto

### Pré-requisitos

- **Node.js**: Instale o Node.js para rodar o frontend usando React.
- **XAMPP**: Configure o Apache e o MySQL para gerenciar o servidor local e o banco de dados.
- **IntelliJ IDEA**: Instale para o desenvolvimento do backend em Java.
- **Postman**: Opcional, para teste de API.

### Clonar o Repositório

```bash
git clone https://github.com/seuusuario/game-sales-simulated.git
cd game-sales-simulated
```

### Configuração do Frontend

1. Navegue até a pasta `frontend`:
   ```bash
   cd sigma-games
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor do frontend:
   ```bash
   npm start
   ```

O servidor do frontend deverá estar rodando em `http://localhost:3000`.
