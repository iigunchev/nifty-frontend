import React from 'react';
import { Formik } from 'formik';

import { useNavigate, Link } from 'react-router-dom';

import { HOME, SIGN_UP } from '../../routes';
import schemas from '../../utils/schemas';

import { signInEmailAndPassword } from '../../services/auth/auth';

import './Login.scss';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="row">
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={schemas.signInSchema}
        onSubmit={async (values) => {
          try {
            await signInEmailAndPassword(values.email, values.password);

            navigate(HOME);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleBlur, handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="">
                <input
                  id="email"
                  type="email"
                  label="E-mail"
                  placeholder="example@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <div className="">
                <input
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>

              <div className="">
                <button className="" type="submit">
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
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
