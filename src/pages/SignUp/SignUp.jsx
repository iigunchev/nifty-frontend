import { Formik } from 'formik';
import React from 'react';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  artist: false
};

function SignUp() {
  return (
    <main className="signupWrapper">
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {() => {}}
        <form />
      </Formik>
    </main>
  );
}

export default SignUp;
