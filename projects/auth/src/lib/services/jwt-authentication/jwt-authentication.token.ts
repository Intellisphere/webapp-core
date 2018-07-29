const TOKEN_NAME : string = 'jwt_access';

export function getJWT(): string{
  return localStorage.getItem(TOKEN_NAME)
}

export function setJWT(value : string) {
  if (value) {
    localStorage.setItem(TOKEN_NAME, value );
  } else {
    localStorage.removeItem(TOKEN_NAME);
  }
}
