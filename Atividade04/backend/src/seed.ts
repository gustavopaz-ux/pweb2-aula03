import dataSource from './data-source';
import { Tarefa } from './tarefas/entities/tarefa.entity';
import { Projeto } from './projetos/entities/projeto.entity';

async function seed() {
  await dataSource.initialize();
  const tarefaRepo = dataSource.getRepository(Tarefa);
  const projetoRepo = dataSource.getRepository(Projeto);

  await dataSource.query('TRUNCATE TABLE "tarefas", "projetos" RESTART IDENTITY');

  await tarefaRepo.save([
    { titulo: 'Estudar ORM', descricao: 'TypeORM + PostgreSQL', concluida: false },
    { titulo: 'Preparar a aula de hoje', concluida: true },
  ]);

  await projetoRepo.save([
    { nome: 'Faculdade', descricao: 'Trabalhos e provas do semestre', cor: 'azul' },
    { nome: 'Pessoal', cor: 'verde' },
  ]);

  console.log('Seed concluído!');
  await dataSource.destroy();
}

seed();
