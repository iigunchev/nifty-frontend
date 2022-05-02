import { Form, Formik } from 'formik';
import React, { useState } from 'react';
// styles
import './SignUpForm.scss';
// i18n
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
// redux
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import ErrorContainer from '../../molecules/ErrorContainer/ErrorContainer';
import Input from '../../molecules/Input/Input';
import Button from '../../molecules/Button/Button';
// actions
import { setUser } from '../../../redux/User/userSlice';
import { APP, LOGIN } from '../../../routes';
// auth
import {
  signInWithGoogle,
  signUpEmailAndPassword
} from '../../../services/auth/auth';
import apiAuth from '../../../utils/fetchAuthApi';
import handleAuthErrors from '../../../utils/handleAuthErrors';

// schema
import schemas from '../../../utils/schemas';
import SecondaryButton from '../../molecules/SecondaryButton/SecondaryButton';

// icon
import googleIcon from '../../../assets/svg/googleIcon.svg';

function SignUpForm() {
  // i18
  const { t } = useTranslation();
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

  const changeLanguageHandler = (e) => {
    changeLanguage(e.target.value);
  };

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

  const handleSignup = async ({ firstName, lastName, email, password }) => {
    try {
      setIsLoading(true);
      // auth in firebase and api
      await signUpEmailAndPassword(email, password);
      const apiUser = await apiAuth.signupWithApi(firstName, lastName);
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
      <h1 className="authHeading">{t('signup.title')}</h1>
      <SecondaryButton
        disabled={isLoading}
        handleClick={handleLoginWithGoogle}
        type="button"
      >
        <span>Sign up with</span>
        <img src={googleIcon} alt="google icon" />
      </SecondaryButton>
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
              icon="user"
              name="firstName"
              label="First Name"
              placeholder="Type your Name"
            />
            <Input
              error={errors.lastName}
              touched={touched.lastName}
              icon="user"
              name="lastName"
              label="Last Name"
              placeholder="Type your last name"
            />
            <Input
              error={errors.email}
              touched={touched.email}
              icon="email"
              name="email"
              label="Email"
              placeholder="Type your email"
            />
            <Input
              error={errors.password}
              touched={touched.password}
              signUpPassword
              icon="password"
              password
              name="password"
              label="Password"
              placeholder="Type your password"
            />
            <Button isLoading={isLoading} type="submit" size="xl">
              SIGN UP
            </Button>
          </Form>
        )}
      </Formik>
      <ErrorContainer error={error} />
      <div className="loginLink">
        <Link to={LOGIN}>Back to Login</Link>
      </div>
      <select name="language" onChange={changeLanguageHandler}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </>
  );
}

export default SignUpForm;
