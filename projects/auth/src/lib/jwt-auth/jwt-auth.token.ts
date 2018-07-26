const TOKEN_NAME : string = 'access_token';

export function getAccessToken(): string{
  return localStorage.getItem('access_token')
}

export function setAccessToken(value : string) {
  if (value) {
    localStorage.setItem('access_token', value );
  } else {
    localStorage.removeItem('access_token');
  }
}
