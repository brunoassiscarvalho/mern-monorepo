class HttpException extends Error {
  status: number;
  message: string;
  info: any;
  constructor(status: number, message: string, info?: any) {
    super(message);
    this.status = status;
    this.message = message;
    this.info = info;
  }
}

export default HttpException;
