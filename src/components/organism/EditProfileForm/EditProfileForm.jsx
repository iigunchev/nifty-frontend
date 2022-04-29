import React, { useState } from 'react';
// formik
import { Field, Form, Formik } from 'formik';
// styles
import './EditProfileForm.scss';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../redux/User/userSlice';
// schemas
import schemas from '../../../utils/schemas';
// components
import ButtonSubmit from '../../molecules/ButtonSubmit/ButtonSubmit';
import {
  changeCurrentUserEmail,
  reauthenticate
} from '../../../services/auth/auth';
// API utils
import api from '../../../utils/fetchEditAccount';

function EditProfileForm() {
  // state confirm with pass
  const [togglePassword, setTogglePassword] = useState();
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user.email);
  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  };

  const handleSubmit = async ({ password }) => {
    try {
      await reauthenticate(password);
      await changeCurrentUserEmail(formValues.email);
      const apiUser = await api.fetchEditProfile(formValues, user.id);
      dispatch(setUser(apiUser));
    } catch (e) {
      console.log(e.message);
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
            <label htmlFor="email">
              Email
              <Field type="text" id="email" name="email" />
            </label>
            {errors.email && touched.email && errors.email}
            <ButtonSubmit>Save profile</ButtonSubmit>
          </Form>
        )}
      </Formik>

      {togglePassword && (
        <Formik
          initialValues={{
            password: ''
          }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <label htmlFor="password">
                Password
                <Field type="password" id="password" name="password" />
              </label>
              <ButtonSubmit>Confirm password</ButtonSubmit>
            </Form>
          )}
        </Formik>
      )}
    </section>
  );
}

export default EditProfileForm;
