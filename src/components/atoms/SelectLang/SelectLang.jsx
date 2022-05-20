import React from 'react';
// sass

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../../redux/User/userSlice';
import getUserLangLocalStorage from '../../../utils/getUserLangLocalStorage';

function SelectLang() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguageHandler = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
    dispatch(setLanguage(language));
  };
  return (
    <select
      className="selectLanguage"
      name="language"
      defaultValue={getUserLangLocalStorage()}
      onChange={changeLanguageHandler}
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="cat">CAT</option>
    </select>
  );
}

export default SelectLang;
