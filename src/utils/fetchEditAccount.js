import { getCurrentUserToken } from '../services/auth/auth';

const fetchEditProfile = async (values, id) => {
  try {
    const token = await getCurrentUserToken();
    const authHeader = `Bearer ${token}`;
    const response = await fetch(
      `${process.env.REACT_APP_NODE_SERVER}/account/${id}`,
      {
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(values)
      }
    );
    if (!response.ok) {
      throw Error();
    }
    const apiUser = response.json().then((data) => data.data);
    return apiUser;
  } catch (e) {
    throw Error('Something went wrong in API');
  }
};

const fetchChangePassword = () => {};

export default {
  fetchEditProfile,
  fetchChangePassword
};
