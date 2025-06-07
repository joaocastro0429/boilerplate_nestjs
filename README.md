# Boilerplate


# 🛒 Projeto CRUD de Produtos

CRUD completo de produtos usando **Node.js**, **TypeScript**, **Prisma ORM**, **PostgreSQL** e **Docker**.

## 🚀 Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL


## 📦 Funcionalidades

- ✅ Criar produto
- ✅ Listar todos os produtos
- ✅ Buscar produto por ID
- ✅ Atualizar produto
- ✅ Deletar produto

## 🛠️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

DATABASE_URL="postgresql://postgres:postgres@db:5432/produtosdb"

3. Instalar dependências

npm install

4. Gerar o cliente Prisma

npx prisma generate

5. Rodar as migrações

npx prisma migrate dev --name init

6. Iniciar o servidor

npm run dev

