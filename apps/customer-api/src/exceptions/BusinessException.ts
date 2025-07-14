import HttpException from './HttpException';

class BusinessException extends HttpException {
  status: number;
  message: string;
  info: any;
  constructor(message: string, info?: any) {
    super(400, message, info);
    this.status = 400;
    this.message = message;
    this.info = info;
  }
}

export default BusinessException;
