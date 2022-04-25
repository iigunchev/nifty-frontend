import { getCurrentUserToken } from '../services/auth/auth';

const fetchApiAuth = async (firstName = '', lastName = '') => {
  try {
    const token = await getCurrentUserToken();
    // const authHeader = `bearer ${token}`;
    return new Promise((res) => {
      setTimeout(() => {
        res({
          token,
          id: '13',
          email: 'emailreceived@dmai.com',
          firstName,
          lastName
        });
      }, 500);
    });
  } catch (e) {
    return e.message;
  }
};

export default fetchApiAuth;
