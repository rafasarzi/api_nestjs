import { Injectable } from '@nestjs/common';

@Injectable()
export class UsusarioService {
  private usuarios = [];

  public cria(usuario) {
    this.usuarios.push(usuario);

    return usuario;
  }
}
