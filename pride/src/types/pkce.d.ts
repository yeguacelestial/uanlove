declare module 'react-native-pkce-challenge' {
  export interface PkceChallenge {
    codeChallenge: string;
    codeVerifier: string;
  }
  export function pkceChallenge(): PkceChallenge;
}
