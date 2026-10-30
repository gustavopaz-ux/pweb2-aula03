# Atividade 04 - Autenticação com JWT + cookie httpOnly

Backend NestJS com cadastro, login e logout. O token JWT fica em um cookie httpOnly e as rotas de tarefas e projetos são protegidas por guard.

## Como rodar
1. `cd Atividade04 && docker compose up -d --build`
2. `cd backend && npm install && npm run migration:run && npm run start:dev`
3. Abrir http://localhost:5173
