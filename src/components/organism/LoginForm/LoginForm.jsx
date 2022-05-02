import React, { useState } from 'react';
// styles
import './LoginForm.scss';

// redux
import { useDispatch } from 'react-redux';
// formik
import { Formik, Form } from 'formik';
// router
import { useNavigate, Link } from 'react-router-dom';
// redux actions
import { setUser } from '../../../redux/User/userSlice';

import { HOME, SIGN_UP, RESET_PASSWORD } from '../../../routes';
// formik schema
import schemas from '../../../utils/schemas';
// components
import Input from '../../molecules/Input/Input';
// auth
import {
  signInEmailAndPassword,
  signInWithGoogle
} from '../../../services/auth/auth';
// utils
import apiAuth from '../../../utils/fetchAuthApi';
import handleAuthErrors from '../../../utils/handleAuthErrors';
// icons
import googleIcon from '../../../assets/svg/googleIcon.svg';
// components
import ErrorContainer from '../../molecules/ErrorContainer/ErrorContainer';

import Button from '../../molecules/Button/Button';
import SecondaryButton from '../../molecules/SecondaryButton/SecondaryButton';

function LoginForm() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLoginWithGoogle = async () => {
    try {
      setIsLoading(true);
      setError(null);
      // auth in firebase and api
      await signInWithGoogle();
      const apiUser = await apiAuth.signUpWithGoogle();
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

  const handleLogin = async (values) => {
    try {
      setIsLoading(true);
      setError(null);
      // auth in firebase and api
      await signInEmailAndPassword(values.email, values.password);
      const apiUser = await apiAuth.loginWithApi();
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
      <h1 className="authHeading">Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={schemas.signInSchema}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              id="email"
              touched={touched.email}
              icon="email"
              error={errors.email}
              name="email"
              label="Email"
              placeholder="Type your email"
            />
            <Input
              id="password"
              icon="password"
              name="password"
              touched={touched.password}
              error={errors.password}
              label="Password"
              placeholder="Type your password"
              password
            />
            <div className="textRightLogin">
              <Link to={RESET_PASSWORD}>Forgot password?</Link>
            </div>

            <Button
              className="loginButton"
              isLoading={isLoading}
              type="submit"
              size="xl"
            >
              LOG IN
            </Button>
            <SecondaryButton
              disabled={isLoading}
              handleClick={handleLoginWithGoogle}
              type
            >
              <span>Continue with</span>
              <img src={googleIcon} alt="google icon" />
            </SecondaryButton>
            <ErrorContainer error={error} />
            <div className="flexBottomText">
              <span className="textSignup">Don&apos;t have an account?</span>

              <span className="signupLink">
                <Link to={SIGN_UP}>Sign up</Link>
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
