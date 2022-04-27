import { Form, Formik } from 'formik';
import React, { useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/molecules/Input/Input';
// actions
import { setUser } from '../../redux/User/userSlice';
import { HOME } from '../../routes';
// auth
import { signUpEmailAndPassword } from '../../services/auth/auth';
import fetchSignupApi from '../../utils/fetchSignupApi';
import handleSignupErrors from '../../utils/handleSignupErrors';
// schema
import schemas from '../../utils/schemas';

function SignUp() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // navigatings
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  const handleSignup = async ({ firstName, lastName, email, password }) => {
    try {
      setIsLoading(true);
      await signUpEmailAndPassword(email, password);
      const apiUser = await fetchSignupApi(firstName, lastName);
      dispatch(setUser(apiUser));
      navigate(HOME);
    } catch (e) {
      const message = handleSignupErrors(e.message);
      setError(message);
    } finally {
      setIsLoading(false);
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
              password
              name="password"
              label="Password"
            />
            <button disabled={isLoading} type="submit">
              Sign up
            </button>
          </Form>
        )}
      </Formik>
      {error && error}
    </main>
  );
}

export default SignUp;
