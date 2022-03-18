import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsusarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsusarioService) {}

  @Get(':nomeDeUsuario')
  public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
    const usuarioEncontrado =
      this.usuarioService.buscaPorNomeDoUsuario(nomeDeUsuario);
    return usuarioEncontrado;
  }

  @Post()
  public cria(@Body() usuario: Usuario): Usuario {
    const usuarioCriado = this.usuarioService.cria(usuario);

    return usuarioCriado;
  }
}
