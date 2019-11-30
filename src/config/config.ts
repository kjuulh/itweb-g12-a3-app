export class Config {
  public static environment = process.env.REACT_APP_ENVIRONMENT;
  public static serverUrl =
    Config.environment == 'production'
      ? 'https://itweb-g12-a3-app.herokuapp.com'
      : Config.environment == 'staging'
      ? 'https://itweb-g12-a3-app-staging.herokuapp.com'
      : 'http://localhost:8080';
}
