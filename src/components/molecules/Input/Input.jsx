import { Field } from 'formik';
import React from 'react';

import './input.scss';

function Input({
  label = 'field-1',
  name = 'field-1',
  icon = null,
  error,
  touched,
  placeholder = '',
  password = false
}) {
  return (
    <div className="inputContainer">
      <div className="inputWrapper">
        {icon && <img src={icon} alt="input icon" className="inputIcon" />}
        <label htmlFor={`${name}Input`}>
          {label}
          <Field
            type={password ? 'password' : 'text'}
            name={name}
            id={`${name}Input`}
            placeholder={placeholder}
            className={error && touched ? `${'inputError'}` : ''}
          />
        </label>
      </div>
      <div style={password ? { fontSize: '10px' } : null} className="errorText">
        {error && touched ? `${error}` : ''}
      </div>
    </div>
  );
}

export default Input;
