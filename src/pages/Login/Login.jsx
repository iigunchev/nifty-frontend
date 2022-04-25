import React, { useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
// formik
import { Formik, Form } from 'formik';
// router
import { useNavigate, Link } from 'react-router-dom';
// redux actions
import { setUser } from '../../redux/User/userSlice';

import { HOME, SIGN_UP } from '../../routes';
// formik schema
import schemas from '../../utils/schemas';
// components
import Input from '../../components/molecules/Input/Input';
// auth
import { signInEmailAndPassword } from '../../services/auth/auth';
// styles
import './Login.scss';
// utils
import fetchApiAuth from '../../utils/fetchApiAuth';

function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = async (values) => {
    try {
      setIsLoading(true);
      await signInEmailAndPassword(values.email, values.password);
      const apiUser = await fetchApiAuth();
      dispatch(setUser(apiUser));
      navigate(HOME);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="row">
      <h1>Login</h1>
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
            <div className="">
              <div className="">
                <Input
                  id="email"
                  touched={touched.email}
                  error={errors.email}
                  name="email"
                  label="E-mail"
                  placeholder="example@example.com"
                />
              </div>
              <div className="">
                <Input
                  id="password"
                  name="password"
                  touched={touched.password}
                  error={errors.password}
                  label="Password"
                  placeholder="Password"
                  password
                />
              </div>

              <div className="">
                <button disabled={isLoading} className="" type="submit">
                  Sign in
                </button>
              </div>
              <div className="">
                <Link to={SIGN_UP}>
                  <button className="" type="button">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {error && error}
    </div>
  );
}

export default Login;
