import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { Form, Formik } from 'formik';

import './ChangePasswordForm.scss';
import { Waveform } from '@uiball/loaders';
// schema
import schemas from '../../../utils/schemas';
import Button from '../../molecules/Button/Button';
import AccountEditInput from '../../molecules/AccountEditInput/AccountEditInput';
import {
  reauthenticate,
  auth,
  changePassword
} from '../../../services/auth/auth';
import SecondaryButton from '../../molecules/SecondaryButton/SecondaryButton';

function ChangePasswordForm() {
  const [queryError, setQueryError] = useState('');
  const [queryState, setQueryState] = useState('');

  const navigate = useNavigate();
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
      console.log('password successfully changed'); // implement toast
    } catch (e) {
      setQueryError(e.message);
      console.log(e.message); // implement toast
    } finally {
      setQueryState('');
    }
  };
  return (
    <section className="changePasswordFormContainer">
      <h1 className="authHeading">Change Password</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={schemas.changePasswordSchema}
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
            <div className="flex-wrapper">
              <SecondaryButton
                disabled={queryState === 'loading'}
                size="sm"
                type="button"
                handleClick={() => navigate('/account')}
              >
                Back
              </SecondaryButton>
              <Button
                size="sm"
                disabled={queryState === 'loading'}
                className="changePasswordFormSubmitButton"
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
    </section>
  );
}

export default ChangePasswordForm;
