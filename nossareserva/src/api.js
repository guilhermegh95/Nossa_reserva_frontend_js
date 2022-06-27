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

  export function USER_POST(body) {
    console.log(JSON.stringify(body));
    return {
      url: API_URL + '/api/v2/usuarios/',
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    };
}

export function LOCACAO_POST(body) {
  console.log(JSON.stringify(body));
  return {
    url: API_URL + '/api/v2/arealocacoes/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function AREACOMUM_POST(body) {
  console.log(JSON.stringify(body));
  return {
    url: API_URL + '/api/v2/areascomuns/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}


export function CONDOMINIO_POST(body) {
  console.log(JSON.stringify(body));
  return {
    url: API_URL + '/api/v2/condominio/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function CONDOMINIO_GET(body) {
  console.log(JSON.stringify(body));
  return {
    url: API_URL + '/api/v2/condominio/',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}


export function CONDOMINIO_DELETE(id) {
  console.log(id)
  return {
    url: `${API_URL}/api/v2/condominio/${id}/`,
    options: {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}


