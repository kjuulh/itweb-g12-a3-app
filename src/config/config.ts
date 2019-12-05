export class Config {
  public static environment = process.env.REACT_APP_ENVIRONMENT;
  public static serverUrl =
    Config.environment == 'production'
      ? 'https://itweb-g12-a3-api.herokuapp.com'
      : Config.environment == 'staging'
      ? 'https://itweb-g12-a3-api-staging.herokuapp.com'
      : 'http://localhost:8080';

  public static socketUrl =
    Config.environment == 'production'
      ? 'ws://itweb-g12-a3-api.herokuapp.com'
      : Config.environment == 'staging'
      ? 'ws://itweb-g12-a3-api-staging.herokuapp.com'
      : 'ws://localhost:8080';
}
