import React, { useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
// formik
import { Formik, Form } from 'formik';
// router
import { useNavigate, Link } from 'react-router-dom';
// redux actions
import { setUser } from '../../redux/User/userSlice';

import { HOME, SIGN_UP, RESET_PASSWORD } from '../../routes';
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

import EMAIL from '../../assets/img/email-svg.svg';
import PASSWORD from '../../assets/img/password-svg.svg';

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
    <div className="bgLogin">
      <div className="wrapLogin">
        <div className="formLogin">
          <h1 className="titleLogin">Login</h1>
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
                    <div className="wrapInput">
                      <Input
                        id="email"
                        touched={touched.email}
                        error={errors.email}
                        name="email"
                        label="Email"
                        placeholder="Type your email"
                      />

                      <svg className="svgimg" src={EMAIL} alt="email-logo" />
                    </div>
                  </div>
                  <div className="wrapInput">
                    <Input
                      id="password"
                      name="password"
                      touched={touched.password}
                      error={errors.password}
                      label="Password"
                      placeholder="Type your password"
                      password
                    />

                    <svg
                      className="svgimg"
                      src={PASSWORD}
                      alt="password-logo"
                    />
                  </div>
                  <div className="textRightLogin">
                    <Link to={RESET_PASSWORD}>Forgot password?</Link>
                  </div>

                  <div className="containerButtonLogin">
                    <div className="wrapButtonLogin">
                      <div className="loginBgButton" />
                      <button
                        disabled={isLoading}
                        className="loginbutton"
                        type="submit"
                      >
                        LOGIN
                      </button>
                    </div>
                  </div>

                  <div className="flexBottomText">
                    <span className="textSignup">Or Sign Up Using</span>

                    <span className="txt2">
                      <Link to={SIGN_UP}>Sign up</Link>
                    </span>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          {error && error}
        </div>
      </div>
    </div>
  );
}

export default Login;
