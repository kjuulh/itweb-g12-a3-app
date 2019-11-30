export class Config {
  public static isProduction = process.env.NODE_ENV;
  public static serverUrl = process.env.BACKEND_URL
    ? process.env.BACKEND_URL
    : Config.isProduction == 'production'
    ? 'https://itweb-g12-a3-api.herokuapp.com/'
    : 'http://localhost:8080';
}
