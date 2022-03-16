import { Body, Controller, Post } from '@nestjs/common';
import { UsusarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsusarioService) {}

  @Post()
  public cria(@Body() usuario) {
    const usuarioCriado = this.usuarioService.cria(usuario);

    return usuarioCriado;
  }
}
