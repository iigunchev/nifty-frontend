import { Field } from 'formik';
import React from 'react';

function Input({ label = 'field-1', name = 'field-1', error, touched }) {
  return (
    <>
      <label htmlFor={`${name}Input`}>
        {label}
        <Field name={name} id={`${name}Input`} />
      </label>
      {error && touched ? <div>{error}</div> : null}
    </>
  );
}

export default Input;
