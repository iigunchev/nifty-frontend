import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min('2', 'First name too short')
    .max('20', 'First name too long')
    .required('First name is required'),
  lastName: Yup.string()
    .min('2', 'Last name too short')
    .max('30', 'Last name too long')
    .required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
});

const signInSchema = Yup.object().shape({
  password: Yup.string()
    .min(3, 'The password is too short')
    .max(20, 'The password is too long'),
  email: Yup.string().email('This must be a valid email address')
});

export default {
  signupSchema,
  signInSchema
};
