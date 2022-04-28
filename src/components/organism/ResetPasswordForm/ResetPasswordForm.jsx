import React, { useState } from 'react';
// styles
import './ResetPasswordForm.scss';
import { Formik, Form } from 'formik';

import { useNavigate, Link } from 'react-router-dom';

import { LOGIN, HOME } from '../../../routes';

import Input from '../../molecules/Input/Input';

import { sendResetEmail } from '../../../services/auth/auth';
// icons
import emailIcon from '../../../assets/img/email-svg.svg';
import schemas from '../../../utils/schemas';
import handleAuthErrors from '../../../utils/handleAuthErrors';
import ErrorContainer from '../../molecules/ErrorContainer/ErrorContainer';
import ButtonSubmit from '../../molecules/ButtonSubmit/ButtonSubmit';

function ResetPasswordForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  return (
    <>
      <h1 className="authHeading">Trouble Logging In?</h1>
      <p>
        Enter your email and we&apos;ll send you a link to get back into your
        account.
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
            <Input
              icon={emailIcon}
              id="email"
              name="email"
              label="E-mail"
              error={errors.email}
              touched={touched.email}
              placeholder="example@example.com"
            />

            <ButtonSubmit>Reset Password</ButtonSubmit>

            <div className="loginLink">
              <Link to={LOGIN}>Back to Login</Link>
            </div>
          </Form>
        )}
      </Formik>
      <ErrorContainer error={error} />
    </>
  );
}

export default ResetPasswordForm;
