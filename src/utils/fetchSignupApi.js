import { deleteCurrentUser, getCurrentUserToken } from '../services/auth/auth';

const fetchSignupApi = async (firstName = '', lastName = '') => {
  try {
    const token = await getCurrentUserToken();

    const authHeader = `Bearer ${token}`;

    const response = await fetch(
      `${process.env.REACT_APP_NODE_SERVER}/account/signup`,
      {
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ firstName, lastName })
      }
    );
    if (!response.ok) {
      throw new Error('Failed');
    }
    const apiUser = response.json().then((data) => data.data);
    return apiUser;
  } catch (e) {
    deleteCurrentUser();
    throw new Error('Failed fetching resources to API');
  }
};

export default fetchSignupApi;
