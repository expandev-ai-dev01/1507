# TODO List - Backend API

Sistema de gerenciamento de tarefas - API REST

## Descrição

Backend API para sistema de gerenciamento de tarefas com suporte a múltiplas funcionalidades incluindo criação, categorização, priorização, compartilhamento e sincronização de tarefas.

## Tecnologias

- Node.js
- TypeScript
- Express.js
- Zod (validação)

## Estrutura do Projeto

```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── types/                  # TypeScript type definitions
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Configurar variáveis de ambiente no arquivo .env
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm start

# Testes
npm test
npm run test:watch

# Linting
npm run lint
npm run lint:fix
```

## Configuração

Configure as seguintes variáveis de ambiente no arquivo `.env`:

- `NODE_ENV`: Ambiente de execução (development/production)
- `PORT`: Porta do servidor (padrão: 3000)
- `API_VERSION`: Versão da API (padrão: v1)
- `CORS_ORIGINS`: Origens permitidas para CORS

## API Endpoints

### Health Check
- `GET /health` - Verifica status da API

### API v1
- Base URL: `/api/v1`
- External routes: `/api/v1/external/*`
- Internal routes: `/api/v1/internal/*`

## Desenvolvimento

### Padrões de Código

- TypeScript strict mode habilitado
- ESLint para qualidade de código
- Indentação: 2 espaços
- Aspas simples para strings
- Ponto e vírgula obrigatório
- Máximo 120 caracteres por linha

### Estrutura de Arquivos

- Um arquivo por módulo/funcionalidade
- Testes colocados junto aos arquivos fonte (`.test.ts`)
- Exports centralizados em `index.ts`
- Nomenclatura em camelCase para arquivos TypeScript

## Licença

ISC