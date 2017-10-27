// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  token_auth_config: {
    apiBase:      'http://v1.myapp.local:3000',
    apiPath:      'v1',
    signInPath:   'auth/sign_in',

    oAuthBase: 'http://v1.myapp.local:3000/v1',
    oAuthPaths: {
      facebook: 'auth/facebook'
    },
    oAuthCallbackPath: 'oauth_callback',
    oAuthWindowType: 'sameWindow',
    oAuthWindowOptions: null,

    globalOptions: {
        headers: {
            'Content-Type':     'application/vnd.api+json',
            'Accept':           'application/vnd.api+json'
        }
    }
  }
};
