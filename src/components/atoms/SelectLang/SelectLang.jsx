import React from 'react';
// sass
import './SelectLang.scss';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import { setLanguage } from '../../../redux/User/userSlice';
// cookies
function SelectLang() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const changeLanguageHandler = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
    dispatch(setLanguage(language));
    Cookie.set('i18next', language);
  };
  return (
    <select
      className="selectLanguage"
      name="language"
      onChange={changeLanguageHandler}
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}

export default SelectLang;
