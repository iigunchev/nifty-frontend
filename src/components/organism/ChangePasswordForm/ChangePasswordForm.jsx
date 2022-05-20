import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Form, Formik } from 'formik';

import './ChangePasswordForm.scss';
import { Waveform } from '@uiball/loaders';
// schema
import { changePasswordSchema } from '../../../utils/schemas';
import Button from '../../molecules/Button/Button';
import AccountEditInput from '../../molecules/AccountEditInput/AccountEditInput';
import {
  reauthenticate,
  auth,
  changePassword
} from '../../../services/auth/auth';
import { ACCOUNT, APP } from '../../../routes';

function ChangePasswordForm() {
  const [queryError, setQueryError] = useState('');
  const [queryState, setQueryState] = useState('');

  const initialValues = {
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: ''
  };
  const handleSubmit = async (values) => {
    setQueryState('loading');
    setQueryError('');
    try {
      await reauthenticate(values.oldPassword);
      await changePassword(auth.currentUser, values.newPassword);
    } catch (e) {
      setQueryError(e.message);
    } finally {
      setQueryState('');
    }
  };
  return (
    <section className="changePasswordFormContainer">
      <h1 className="heading1">Change Password</h1>
      <div className="changePasswordFormWrapper">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={changePasswordSchema}
        >
          {({ errors, touched }) => (
            <Form>
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
              <div className="flexWrapper">
                <Link to={`${APP}${ACCOUNT}`} className="backButton">
                  Back
                </Link>
                <Button
                  size="md"
                  disabled={queryState === 'loading'}
                  className="changePasswordFormSubmitButton"
                  type="submit"
                >
                  {queryState === 'loading' ? (
                    <Waveform
                      size={40}
                      lineWeight={3.5}
                      speed={1}
                      color="white"
                    />
                  ) : (
                    'SAVE'
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default ChangePasswordForm;
