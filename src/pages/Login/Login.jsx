import React from 'react';
import { Formik, Form } from 'formik';

import { useNavigate, Link } from 'react-router-dom';

import { HOME, SIGN_UP } from '../../routes';
import schemas from '../../utils/schemas';

import Input from '../../components/molecule/Input/Input';

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
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="">
              <div className="">
                <Input
                  id="email"
                  name="email"
                  label="E-mail"
                  placeholder="example@example.com"
                />
              </div>
              <div className="">
                <Input
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  password
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
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
