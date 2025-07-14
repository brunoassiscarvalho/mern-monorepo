import HttpException from './HttpException';

class UnauthorizedException extends HttpException {
  status: number;
  message: string;
  constructor(message: string, info?: any) {
    super(401, message);
    this.status = 401;
    this.message = message;
    this.info = info;
  }
}

export default UnauthorizedException;
