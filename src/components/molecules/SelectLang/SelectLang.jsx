import React from 'react';
import { changeLanguage } from 'i18next';

// sass
import './SelectLang.scss';

function SelectLang() {
  const changeLanguageHandler = (e) => {
    changeLanguage(e.target.value);
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
