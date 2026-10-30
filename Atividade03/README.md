# Projeto 3: persistência com PostgreSQL e TypeORM

Continuação do Projeto 2. Os módulos de Tarefas e de Projetos deixaram de guardar os dados em um array na memória e passaram a usar tabelas no PostgreSQL, através do TypeORM.

## Como rodar

Subir o banco:

```
docker compose up -d db
```

Instalar as dependências, criar as tabelas e popular com dados iniciais:

```
npm install
npm run migration:run
npm run seed
```

Iniciar a API:

```
npm run start:dev
```

A API sobe em `http://localhost:3000/api`. Os dados ficam no banco, então continuam lá depois de reiniciar o servidor.

## Banco de dados

A conexão usa por padrão usuário, senha e banco `todo`, em `localhost:5432`. Dá para trocar com as variáveis `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS` e `DB_NAME`.

| Tabela | Colunas |
| ------ | ------- |
| tarefas | id, titulo, descricao, concluida |
| projetos | id, nome, descricao, cor |

## Migrations e seed

```
npm run migration:run
npm run migration:revert
npm run seed
```

O `migration:revert` desfaz a última migration. O seed apaga os dados das duas tabelas, reinicia os ids e insere dois registros em cada uma.

## Rotas

| Método | Rota | Sucesso |
| ------ | ---- | ------- |
| GET | /api/tarefas | 200 |
| GET | /api/tarefas/:id | 200 (404 se não existir) |
| POST | /api/tarefas | 201 |
| PUT | /api/tarefas/:id | 200 |
| DELETE | /api/tarefas/:id | 204 |

As rotas de `/api/projetos` seguem o mesmo padrão. A validação dos campos continua igual à do Projeto 2.
