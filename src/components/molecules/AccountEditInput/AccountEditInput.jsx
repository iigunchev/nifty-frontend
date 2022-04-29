import React, { useState } from 'react';
import { Field } from 'formik';
import { InputError } from '../Input/Input';

// styles
import './AccountEditInput.scss';
// icon
import openEye from '../../../assets/svg/openEye.svg';
import closedEye from '../../../assets/svg/closedEye.svg';

function AccountEditInput({
  label = 'field-1',
  name = 'field-1',
  error,
  touched,
  placeholder = '',
  type
}) {
  const [isVisible, setIsVisible] = useState(type !== 'password');

  const icons = {
    showPassword: openEye,
    hidePassword: closedEye
  };
  return (
    <div className="accountEditInputWrapper">
      <label htmlFor={`${name}Input`} className="accountEditInputLabel">
        {label}
        <Field
          type={isVisible ? 'text' : 'password'}
          name={name}
          id={`${name}Input`}
          placeholder={placeholder}
          className={
            error && touched
              ? `inputError accountEditInput`
              : 'accountEditInput'
          }
        />
      </label>
      {type === 'password' && (
        <button
          type="button"
          className="togglePasswordVisibility"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          <img
            src={isVisible ? icons.hidePassword : icons.showPassword}
            alt="input icon"
          />
        </button>
      )}
      <InputError error={error} touched={touched} />
    </div>
  );
}

export default AccountEditInput;
