import { Formik } from 'formik';
import React from 'react';
import schemas from '../../utils/schemas';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

function SignUp() {
  return (
    <main className="signupWrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={schemas.signupSchema}
      >
        {() => {}}
        <form />
      </Formik>
    </main>
  );
}

export default SignUp;
