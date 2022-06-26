export const API_URL = 'http://127.0.0.1:8000';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/api/v2/token/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}


export function USER_GET(token) {
  return {
    url: API_URL + '/api/v2/usuarios/',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}
