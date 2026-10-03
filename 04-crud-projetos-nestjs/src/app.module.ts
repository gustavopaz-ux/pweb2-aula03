import { Module } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';

@Module({
  imports: [TarefasModule],
})
export class AppModule {}
