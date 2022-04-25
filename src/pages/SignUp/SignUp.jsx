import { Field, Form, Formik } from 'formik';
import React from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../components/Input/Input';
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
            <Input
              error={errors.firstName}
              touched={touched.firstName}
              name="firstName"
              label="First Name"
            />
            <Input
              error={errors.lastName}
              touched={touched.lastName}
              name="lastName"
              label="Last Name"
            />
            <Input
              error={errors.email}
              touched={touched.email}
              name="email"
              label="Email"
            />
            <Input
              error={errors.password}
              touched={touched.password}
              name="password"
              label="Password"
            />
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
