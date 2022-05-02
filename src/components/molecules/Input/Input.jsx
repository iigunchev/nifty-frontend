import React from 'react';
import { Field } from 'formik';

// icons
import userIcon from '../../../assets/img/userIcon.svg';
import emailIcon from '../../../assets/img/email-svg.svg';
import passwordIcon from '../../../assets/img/password-svg.svg';

import './input.scss';

function Input({
  label = 'field-1',
  name = 'field-1',
  icon = null,
  error,
  touched,
  signUpPassword = false,
  placeholder = '',
  password = false
}) {
  const icons = {
    email: emailIcon,
    password: passwordIcon,
    user: userIcon
  };
  return (
    <div className="inputContainer">
      <div className="inputWrapper">
        {icon && (
          <img src={icons[icon]} alt="input icon" className="inputIcon" />
        )}
        <label htmlFor={`${name}Input`}>
          {label}
          <Field
            type={password ? 'password' : 'text'}
            name={name}
            id={`${name}Input`}
            placeholder={placeholder}
            className={error && touched ? 'inputError' : ''}
          />
        </label>
      </div>
      <InputError
        error={error}
        touched={touched}
        size={signUpPassword ? '0.65em' : null}
      />
    </div>
  );
}

export function InputError({ error, touched, size = '1em' }) {
  const styles = {
    fontSize: size
  };
  return (
    <div style={styles} className="errorText">
      {error && touched ? `${error}` : ''}
    </div>
  );
}

export default Input;
