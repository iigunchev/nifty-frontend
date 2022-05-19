import React, { useState } from 'react';
// styles
import './ResetPasswordForm.scss';
import { Formik, Form } from 'formik';

// i18n
import { useTranslation } from 'react-i18next';

import { useNavigate, Link } from 'react-router-dom';

import { LOGIN, HOME } from '../../../routes';

import Input from '../../molecules/Input/Input';

import { sendResetEmail } from '../../../services/auth/auth';
// icons
import { resetPasswordSchema } from '../../../utils/schemas';
import handleAuthErrors from '../../../utils/handleAuthErrors';
import ErrorContainer from '../../molecules/ErrorContainer/ErrorContainer';
import Button from '../../molecules/Button/Button';

function ResetPasswordForm() {
  const navigate = useNavigate();
  // i18
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  return (
    <>
      <h1 className="authHeading">{t('changePassword.title')}</h1>
      <p>{t('changePassword.p')}</p>

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
        validationSchema={resetPasswordSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              icon="email"
              id="email"
              name="email"
              label={t('changePassword.email.label')}
              error={errors.email}
              touched={touched.email}
              placeholder={t('changePassword.email.placeholder')}
            />

            <Button type="submit" size="xl">
              {t('changePassword.resetPassword')}
            </Button>

            <div className="loginLink">
              <Link to={LOGIN}>{t('changePassword.backToLogin')}</Link>
            </div>
          </Form>
        )}
      </Formik>
      <ErrorContainer error={error} />
    </>
  );
}

export default ResetPasswordForm;
