import { PassedInitialConfig, LogLevel } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
              authority: 'http://localhost:8888/realms/frigo',
              redirectUrl: window.location.origin,
              postLogoutRedirectUri: window.location.origin,
              clientId: 'frigo-app',
              scope: 'openid profile offline_access ',
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
              logLevel: LogLevel.Debug,
          }
}
