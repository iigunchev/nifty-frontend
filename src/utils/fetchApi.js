const fetchApi = async (route, authToken, bodyContent, method = 'GET') => {
  const body = method !== 'GET' ? JSON.stringify(bodyContent) : null;

  return fetch(`${process.env.REACT_APP_NODE_SERVER}${route}`, {
    headers: {
      Authorization: authToken,
      'Content-Type': 'application/json'
    },
    method,
    body
  })
    .then((res) => {
      if (!res.ok) {
        throw Error('error fetching response');
      }
      return res.json();
    })
    .then((data) => data.data);
};

export default fetchApi;
