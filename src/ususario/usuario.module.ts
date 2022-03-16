import { Module } from '@nestjs/common';
import { UsusarioService } from './usuario.service';
import { UsuarioController } from './ususario.controller';

@Module({
  controllers: [UsuarioController],
  providers: [UsusarioService],
})
export class UsuarioModule {}
