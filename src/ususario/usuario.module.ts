import { Module } from '@nestjs/common';
import { UsusarioService } from './usuario.service';
import { UsuarioController } from './ususario.controller';
import { IsNomeDeUsuarioUnicoConstraint } from './is-nome-de-usuario-unico.validator';
@Module({
  controllers: [UsuarioController],
  providers: [UsusarioService, IsNomeDeUsuarioUnicoConstraint],
})
export class UsuarioModule {}
