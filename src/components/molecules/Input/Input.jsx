import { Field } from 'formik';
import React from 'react';

function Input({
  label = 'field-1',
  name = 'field-1',
  error,
  touched,
  placeholder = '',
  password = false
}) {
  return (
    <>
      <label htmlFor={`${name}Input`}>
        {label}
        <Field
          type={password ? 'password' : 'text'}
          name={name}
          id={`${name}Input`}
          placeholder={placeholder}
        />
      </label>
      {error && touched ? <div>{error}</div> : null}
    </>
  );
}

export default Input;
