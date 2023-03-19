export class Configurations {
  public APP: any;
  public FIREBASE: any;
  public EMAIL: any;
  public MONGO: string;

  constructor() {
    this.APP = {
      name: process.env.APP_NAME || 'Defina um nome para a aplicação',
      logoUrl: process.env.APP_LOGO_URL,
      port: process.env.PORT,
      clients: process.env.CLIENTS,
    };

    this.EMAIL = { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS };
    this.MONGO = process.env.MONGO_DB_URI || '';
  }
}
