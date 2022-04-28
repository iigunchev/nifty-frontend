import React, { useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
// formik
import { Formik, Form } from 'formik';
// router
import { useNavigate, Link } from 'react-router-dom';
// redux actions
import { Waveform } from '@uiball/loaders';
import { setUser } from '../../../redux/User/userSlice';

import { HOME, SIGN_UP, RESET_PASSWORD } from '../../../routes';
// formik schema
import schemas from '../../../utils/schemas';
// components
import Input from '../../molecules/Input/Input';
// auth
import { signInEmailAndPassword } from '../../../services/auth/auth';
// styles
import './LoginForm.scss';
// utils
import apiAuth from '../../../utils/fetchAuthApi';
import handleAuthErrors from '../../../utils/handleAuthErrors';
// icons
import emailIcon from '../../../assets/img/email-svg.svg';
import passwordIcon from '../../../assets/img/password-svg.svg';
import googleIcon from '../../../assets/svg/googleIcon.svg';
// components
import ErrorContainer from '../../molecules/ErrorContainer/ErrorContainer';

function LoginForm() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
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
              icon={emailIcon}
              error={errors.email}
              name="email"
              label="Email"
              placeholder="Type your email"
            />
            <Input
              id="password"
              icon={passwordIcon}
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

            <div className="loginBgButton" />
            <button disabled={isLoading} className="loginbutton" type="submit">
              {isLoading ? (
                <Waveform size={40} lineWeight={3.5} speed={1} color="white" />
              ) : (
                'LOGIN'
              )}
            </button>
            <ErrorContainer error={error} />

            <div className="flexBottomText">
              <button
                disabled={isLoading}
                className="googleLoginbutton"
                type="submit"
              >
                {isLoading ? (
                  <Waveform
                    size={40}
                    lineWeight={3.5}
                    speed={1}
                    color="white"
                  />
                ) : (
                  <>
                    <img src={googleIcon} alt="google icon" />
                    <span>Continue with google</span>
                  </>
                )}
              </button>
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
