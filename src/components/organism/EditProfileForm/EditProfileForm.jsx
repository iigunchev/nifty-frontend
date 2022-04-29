import React, { useState } from 'react';
// formik
import { Form, Formik } from 'formik';
// styles
import './EditProfileForm.scss';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../redux/User/userSlice';
// schemas
import schemas from '../../../utils/schemas';
// components
import ButtonSubmit from '../../molecules/ButtonSubmit/ButtonSubmit';
import {
  changeCurrentUserEmail,
  getCurrentUserProviderId,
  reauthenticate
} from '../../../services/auth/auth';
// API utils
import api from '../../../utils/fetchEditAccount';
import AccountEditInput from '../../molecules/AccountEditInput/AccountEditInput';
import handleAuthErrors from '../../../utils/handleAuthErrors';
import ErrorContainer from '../../molecules/ErrorContainer/ErrorContainer';
import { ACCOUNT } from '../../../routes';

function EditProfileForm() {
  // router navigate
  const navigate = useNavigate();

  // state confirm with pass
  const [togglePassword, setTogglePassword] = useState();

  // state error manage
  const [error, setError] = useState(null);

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName ? user.lastName : '',
    email: user.email
  };

  const handleSubmit = async ({ password }) => {
    setError(null);
    try {
      // if provider comes from email and pass
      if (getCurrentUserProviderId() === 'password') {
        console.log('no paso je');
        await reauthenticate(password);
        await changeCurrentUserEmail(formValues.email);
      }

      const apiUser = await api.fetchEditProfile(formValues, user.id);
      dispatch(setUser(apiUser));
    } catch (e) {
      navigate(ACCOUNT);
      const message = handleAuthErrors(e.message);
      setError(message);
    }
  };

  return (
    <section className="profileSection">
      <h1>Edit your profile</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          setTogglePassword(true);
          setFormValues(values);
        }}
        validationSchema={schemas.editProfileSchema}
      >
        {({ errors, touched }) => (
          <Form>
            {/* //? Padding problems */}
            {/* //!GetCurrentUserProviderId not working at all, refresh when true and see */}
            {getCurrentUserProviderId() === 'password' && (
              <AccountEditInput
                error={errors.email}
                touched={touched.email}
                label="Email"
                name="email"
                type="text"
              />
            )}
            <AccountEditInput
              error={errors.firstName}
              touched={touched.firstName}
              label="First name"
              name="firstName"
            />
            <AccountEditInput
              error={errors.lastName}
              touched={touched.lastName}
              label="Last name"
              name="lastName"
            />
            <ButtonSubmit size="md">Save profile</ButtonSubmit>
          </Form>
        )}
      </Formik>
      <ErrorContainer error={error} />
      {togglePassword && (
        <Formik
          initialValues={{
            password: ''
          }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <AccountEditInput
                type="password"
                label="Password"
                name="password"
              />
              <ButtonSubmit size="md">Confirm password</ButtonSubmit>
            </Form>
          )}
        </Formik>
      )}
    </section>
  );
}

export default EditProfileForm;
