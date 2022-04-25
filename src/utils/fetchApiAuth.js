import { getCurrentUserToken } from '../services/auth/auth';

const fetchApiAuth = async () => {
  try {
    const token = await getCurrentUserToken();
    // const authHeader = `bearer ${token}`;
    return new Promise((res, _rej) => {
      setTimeout(() => {
        res({
          token,
          id: '13',
          email: 'emailreceived@dmai.com'
        });
      }, 500);
    });
  } catch (e) {
    return e.message;
  }
};

export default fetchApiAuth;
