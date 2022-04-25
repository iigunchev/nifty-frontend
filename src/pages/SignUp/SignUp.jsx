import { Field, Form, Formik } from 'formik';
import React from 'react';
import schemas from '../../utils/schemas';

function SignUp() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  return (
    <main className="signupWrapper">
      <h1>Sign up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schemas.signupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="firstName">
              First name
              <Field name="firstName" id="firstName" />
            </label>

            {errors.firstName && touched.lastName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <label htmlFor="lastName">
              Last name
              <Field name="lastName" id="firstName" />
            </label>

            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <label htmlFor="email">
              Email
              <Field name="email" id="email" />
            </label>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label htmlFor="password">
              Password
              <Field type="password" name="password" id="password" />
            </label>
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Sign up</button>
          </Form>
        )}
      </Formik>
    </main>
  );
}

export default SignUp;
