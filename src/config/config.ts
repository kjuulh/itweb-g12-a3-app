export class Config {
  public static environment = process.env.REACT_APP_ENVIRONMENT;
  public static serverUrl =
    Config.environment == 'production'
      ? 'https://itweb-g12-a3-api.herokuapp.com'
      : Config.environment == 'staging'
      ? 'https://itweb-g12-a3-api-staging.herokuapp.com'
      : 'http://localhost:8080';
}
