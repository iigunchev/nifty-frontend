const handleAuthErrors = (message) => {
  // ? ask 4 this
  //* login errors
  if (message === 'Firebase: Error (auth/user-not-found).') {
    return 'Oops, these credentials are not valid';
  }
  if (message === 'Firebase: Error (auth/wrong-password).') {
    return 'Wrong password!';
  }
  //* login errors
  //* register errors
  if (message === 'Firebase: Error (auth/email-already-in-use).') {
    return 'Email address already exist!';
  }
  //* register errors
  //* def error
  return 'An error has ocurred, please, try later.';
};

export default handleAuthErrors;
