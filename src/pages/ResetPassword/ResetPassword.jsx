import React, { useState } from 'react';

import { Formik, Form } from 'formik';

import { useNavigate, Link } from 'react-router-dom';

import { LOGIN, SIGN_UP, HOME } from '../../routes';

import Input from '../../components/molecules/Input/Input';

import { sendResetEmail } from '../../services/auth/auth';
import schemas from '../../utils/schemas';
import handleAuthErrors from '../../utils/handleAuthErrors';
import ErrorContainer from '../../components/molecules/ErrorContainer/ErrorContainer';

function ResetPassword() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  return (
    <div className="">
      <h1>Trouble Logging In?</h1>
      <p>
        Enter your email and well send you a link to get back into your account.
      </p>

      <Formik
        initialValues={{
          email: ''
        }}
        onSubmit={async (values) => {
          try {
            await sendResetEmail(values.email);

            navigate(HOME);
          } catch (e) {
            const message = handleAuthErrors(e.message);
            setError(message);
          }
        }}
        validationSchema={schemas.resetPasswordSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <div className="">
              <div className="">
                <Input
                  id="email"
                  name="email"
                  label="E-mail"
                  error={errors.email}
                  touched={touched.email}
                  placeholder="example@example.com"
                />
              </div>

              <div className="">
                <button className="" type="submit">
                  Restart Password
                </button>
              </div>
              <div className="">
                <Link to={SIGN_UP}>
                  <button className="" type="button">
                    create new account
                  </button>
                </Link>
                <Link to={LOGIN}>
                  <button className="" type="button">
                    back to login
                  </button>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <ErrorContainer error={error} />
    </div>
  );
}

export default ResetPassword;
