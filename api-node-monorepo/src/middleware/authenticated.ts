import { Request, Response, NextFunction } from 'express';

import UnauthorizedException from '../exceptions/UnauthorizedException';

export async function isAuthenticated(req: Request, res: Response, next: NextFunction): Promise<any> {
  const { authorization } = req.headers;

  if (!authorization) throw new UnauthorizedException('Sem autorização');

  if (!authorization.startsWith('Bearer')) throw new UnauthorizedException('Credencial de acesso inválida');

  const split = authorization.split('Bearer ');
  if (split.length !== 2) throw new UnauthorizedException('Não foi possivel identificar a credencial de acesso');

  const token = split[1];
}
