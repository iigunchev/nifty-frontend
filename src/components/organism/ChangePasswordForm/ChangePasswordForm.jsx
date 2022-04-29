import React, { useState } from 'react';
import { Form, Formik } from 'formik';

import './ChangePasswordForm.scss';
import { Waveform } from '@uiball/loaders';
// schema
import schemas from '../../../utils/schemas';
import ButtonSubmit from '../../molecules/ButtonSubmit/ButtonSubmit';
import AccountEditInput from '../../molecules/AccountEditInput/AccountEditInput';

function ChangePasswordForm() {
  const [queryError, setQueryError] = useState('');
  const [queryState, setQueryState] = useState('');

  const initialValues = {
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: ''
  };
  const handleSubmit = (values) => {
    setQueryState('loading');
    setQueryError('');
    console.log(values);
    setQueryState('');
  };
  return (
    <section className="changePasswordFormContainer">
      <h1 className="authHeading">Change Password</h1>
      <Formik
        style={{ width: '100%' }}
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={schemas.changePasswordSchema}
      >
        {({ errors, touched }) => (
          <Form style={{ width: '100%' }}>
            <AccountEditInput
              name="oldPassword"
              error={queryError}
              touched={touched.oldPassword}
              label="Old Password"
              placeholder=""
              type="password"
            />
            <AccountEditInput
              name="newPassword"
              error={errors.newPassword}
              touched={touched.newPassword}
              label="New Password"
              placeholder=""
              type="password"
            />
            <AccountEditInput
              name="repeatNewPassword"
              error={errors.repeatNewPassword}
              touched={touched.repeatNewPassword}
              label="Repeat New Password"
              placeholder=""
              type="password"
            />
            <ButtonSubmit
              size="200px"
              disabled={queryState === 'loading'}
              className="changePasswordFormSubmitButton"
            >
              {queryState === 'loading' ? (
                <Waveform size={40} lineWeight={3.5} speed={1} color="white" />
              ) : (
                'SAVE'
              )}
            </ButtonSubmit>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default ChangePasswordForm;
