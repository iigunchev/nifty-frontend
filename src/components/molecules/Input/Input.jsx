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
      <div
        className={
          error && touched ? `inputWrapper inputWrapperError` : `inputWrapper`
        }
      >
        {icon && <img src={icon} alt="input icon" className="inputIcon" />}
        <label htmlFor={`${name}Input`}>
          {label}
          <Field
            type={password ? 'password' : 'text'}
            name={name}
            id={`${name}Input`}
            placeholder={placeholder}
          />
        </label>
      </div>
      <div className="inputError">{error && touched ? `${error}` : ''}</div>
    </div>
  );
}

export default Input;
