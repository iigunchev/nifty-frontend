import React, { useState } from 'react';
// styles
import './LoginForm.scss';

// redux
import { useDispatch } from 'react-redux';
// formik
import { Formik, Form } from 'formik';
// router
import { useNavigate, Link } from 'react-router-dom';

// i18n
import { useTranslation } from 'react-i18next';
// components
import Input from '../../molecules/Input/Input';
// redux actions
import { setUser } from '../../../redux/User/userSlice';

import { SIGN_UP, RESET_PASSWORD, APP } from '../../../routes';
// formik schema
import { signInSchema } from '../../../utils/schemas';
// auth
import {
  signInEmailAndPassword,
  signInWithGoogle
} from '../../../services/auth/auth';
// utils
import apiAuth from '../../../utils/api/fetchAuthApi';
import handleAuthErrors from '../../../utils/handleAuthErrors';

// icons
import googleIcon from '../../../assets/svg/googleIcon.svg';
// components
import ErrorContainer from '../../molecules/ErrorContainer/ErrorContainer';

import Button from '../../molecules/Button/Button';
import SecondaryButton from '../../molecules/SecondaryButton/SecondaryButton';

function LoginForm() {
  const navigate = useNavigate();
  // i18
  const { t } = useTranslation();

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
      navigate(APP);
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
      navigate(APP);
    } catch (e) {
      const message = handleAuthErrors(e.message);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <h1 className="authHeading">{t('login.title')}</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={signInSchema}
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
              label={t('login.email.label')}
              placeholder={t('login.email.placeholder')}
            />
            <Input
              id="password"
              icon="password"
              name="password"
              touched={touched.password}
              error={errors.password}
              label={t('login.password.label')}
              placeholder={t('login.password.placeholder')}
              password
            />
            <div className="textRightLogin">
              <Link to={RESET_PASSWORD}>{t('login.forgotPassword')}</Link>
            </div>

            <Button
              className="loginButton"
              isLoading={isLoading}
              type="submit"
              size="xl"
            >
              {t('login.login')}
            </Button>
            <SecondaryButton
              disabled={isLoading}
              handleClick={handleLoginWithGoogle}
              type
            >
              <span>{t('login.loginGoogle')}</span>
              <img src={googleIcon} alt="google icon" />
            </SecondaryButton>
            <ErrorContainer error={error} />
            <div className="flexBottomText">
              <span className="textSignup">{t('login.dontHaveAnAccount')}</span>

              <span className="signupLink">
                <Link to={SIGN_UP}>{t('login.signUp')}</Link>
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
