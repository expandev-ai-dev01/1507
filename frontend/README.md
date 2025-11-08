# TODO List - Sistema de Gerenciamento de Tarefas

## Descrição

Sistema completo de gerenciamento de tarefas com funcionalidades avançadas de organização, priorização e sincronização.

## Tecnologias

- **React 18.3.1** - Framework frontend
- **TypeScript 5.6.3** - Tipagem estática
- **Vite 5.4.11** - Build tool e dev server
- **React Router DOM 6.26.2** - Roteamento
- **TanStack Query 5.59.20** - Gerenciamento de estado servidor
- **Zustand 5.0.1** - Gerenciamento de estado cliente
- **React Hook Form 7.53.1** - Gerenciamento de formulários
- **Zod 3.23.8** - Validação de schemas
- **Tailwind CSS 3.4.14** - Framework CSS
- **Axios 1.7.7** - Cliente HTTP

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   └── router.tsx         # Configuração de rotas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
├── core/                  # Recursos compartilhados
│   ├── components/       # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── types/            # Tipos globais
│   ├── utils/            # Funções utilitárias
│   └── constants/        # Constantes globais
├── domain/               # Domínios de negócio (a serem criados)
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:5173

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Funcionalidades Planejadas

1. **Criação de Tarefas** - Criar tarefas com título, descrição, data e prioridade
2. **Categorização** - Organizar tarefas em categorias personalizadas
3. **Prioridades** - Classificar por importância (alta, média, baixa)
4. **Prazos** - Definir datas limite para conclusão
5. **Marcação de Conclusão** - Marcar tarefas como concluídas
6. **Busca** - Encontrar tarefas por título, descrição ou categoria
7. **Notificações** - Alertas sobre tarefas próximas do vencimento
8. **Compartilhamento** - Compartilhar listas com outros usuários
9. **Visualização em Calendário** - Exibir tarefas em formato de calendário
10. **Sincronização** - Acesso em diferentes dispositivos

## Arquitetura

### Padrões de Código

- **Componentes**: Estrutura modular com `main.tsx`, `types.ts`, `variants.ts`, `index.ts`
- **Hooks**: Custom hooks para lógica reutilizável
- **Services**: Camada de serviços para comunicação com API
- **Types**: TypeScript para tipagem forte
- **Styling**: Tailwind CSS com classes utilitárias

### Gerenciamento de Estado

- **TanStack Query**: Estado do servidor (cache, sincronização)
- **Zustand**: Estado do cliente (preferências, UI)
- **React Hook Form**: Estado de formulários

### Roteamento

- **React Router DOM**: Roteamento client-side
- **Lazy Loading**: Carregamento sob demanda de páginas
- **Layouts**: Estrutura hierárquica de layouts

## Convenções

### Nomenclatura

- **Componentes**: PascalCase (ex: `TaskList`)
- **Hooks**: camelCase com prefixo `use` (ex: `useTaskList`)
- **Arquivos**: Seguir nome do componente/hook
- **Diretórios**: PascalCase para componentes, camelCase para domínios

### Estrutura de Arquivos

```
ComponentName/
├── main.tsx      # Implementação
├── types.ts      # Tipos TypeScript
├── variants.ts   # Variantes de estilo
└── index.ts      # Exports
```

## Próximos Passos

1. Implementar autenticação de usuários
2. Criar domínio de tarefas (task)
3. Criar domínio de categorias (category)
4. Implementar CRUD de tarefas
5. Adicionar sistema de notificações
6. Implementar visualização em calendário
7. Adicionar funcionalidade de compartilhamento

## Licença

MIT