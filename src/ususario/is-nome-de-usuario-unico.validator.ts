/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsusarioService } from './usuario.service';

@Injectable()
@ValidatorConstraint()
export class IsNomeDeUsuarioUnicoConstraint
  implements ValidatorConstraintInterface
{
  constructor(private usuarioService: UsusarioService) {}

  validate(
    nomeDeUsuario: string,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    return !!!this.usuarioService.buscaPorNomeDoUsuario(nomeDeUsuario);
  }
}

export default function IsNomeDeUsuarioUnico(
  validationOptions?: ValidationOptions,
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNomeDeUsuarioUnicoConstraint,
    });
  };
}
