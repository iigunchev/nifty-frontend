const getUserLangLocalStorage = () => {
  const persist = localStorage.getItem('persist:root');
  if (!persist) {
    return null;
  }
  const { user } = JSON.parse(persist);
  const { language } = JSON.parse(user);
  return language;
};

export default getUserLangLocalStorage;
