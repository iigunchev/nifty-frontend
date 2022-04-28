import { Form, Formik } from 'formik';
import React, { useState } from 'react';
// styles
import './SignUpForm.scss';
// redux
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// components

import ErrorContainer from '../../molecules/ErrorContainer/ErrorContainer';
import Input from '../../molecules/Input/Input';
// actions
import { setUser } from '../../../redux/User/userSlice';
import { HOME } from '../../../routes';
// auth
import { signUpEmailAndPassword } from '../../../services/auth/auth';
import apiAuth from '../../../utils/fetchAuthApi';
import handleAuthErrors from '../../../utils/handleAuthErrors';
// icons
import userIcon from '../../../assets/img/userIcon.svg';
import emailIcon from '../../../assets/img/email-svg.svg';
import passwordIcon from '../../../assets/img/password-svg.svg';
// schema
import schemas from '../../../utils/schemas';

function SignUpForm() {
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
      // auth in firebase and api
      await signUpEmailAndPassword(email, password);
      const apiUser = await apiAuth.signupWithApi(firstName, lastName);
      // set user in redux
      dispatch(setUser(apiUser));
      navigate(HOME);
    } catch (e) {
      const message = handleAuthErrors(e.message);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="authHeading">Sign up</h1>
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
              icon={userIcon}
              name="firstName"
              label="First Name"
              placeholder="Introduce your first name"
            />
            <Input
              error={errors.lastName}
              touched={touched.lastName}
              icon={userIcon}
              name="lastName"
              label="Last Name"
              placeholder="Introduce your last name"
            />
            <Input
              error={errors.email}
              touched={touched.email}
              icon={emailIcon}
              name="email"
              label="Email"
              placeholder="Introduce your email"
            />
            <Input
              error={errors.password}
              touched={touched.password}
              icon={passwordIcon}
              password
              name="password"
              label="Password"
              placeholder="Introduce your password"
            />

            <button disabled={isLoading} type="submit">
              Sign up
            </button>
          </Form>
        )}
      </Formik>
      <ErrorContainer error={error} />
    </>
  );
}

export default SignUpForm;
