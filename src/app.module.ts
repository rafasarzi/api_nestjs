import { Module } from '@nestjs/common';
import { UsuarioModule } from './ususario/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
