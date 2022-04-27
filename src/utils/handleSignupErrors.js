const handleSignupErrors = (message) => {
  // ask 4 this
  if (message === 'Firebase: Error (auth/email-already-in-use).') {
    return 'Email address already exist!';
  }
  return 'An error has ocurred, please, try later.';
};

export default handleSignupErrors;
