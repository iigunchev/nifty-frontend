import { Field, Form, Formik } from 'formik';
import React from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
// actions
import { setUser } from '../../redux/User/userSlice';
// auth
import {
  signUpEmailAndPassword,
  useAuth,
  logOut
} from '../../services/auth/auth';
import fetchApiAuth from '../../utils/fetchApiAuth';
// schema
import schemas from '../../utils/schemas';

function SignUp() {
  // custom hook of auth firebase
  const currentUser = useAuth();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  console.log(user);
  const handleSignup = async ({ firstName, lastName, email, password }) => {
    try {
      await signUpEmailAndPassword(email, password);
      const apiUser = await fetchApiAuth();
      dispatch(setUser(apiUser));
      console.log(firstName, lastName);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <main className="signupWrapper">
      <h1>Sign up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schemas.signupSchema}
        onSubmit={(values) => handleSignup(values)}
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
      <button type="submit" onClick={() => logOut()}>
        sign out
      </button>
    </main>
  );
}

export default SignUp;
