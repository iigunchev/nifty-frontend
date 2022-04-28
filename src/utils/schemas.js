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
    .required('Password required')
    .matches(
      /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Must Contain 8 Characters,One Lowercase, One Uppercase, One Number and One Special Case Character'
    )
});

const signInSchema = Yup.object().shape({
  password: Yup.string()
    .min(3, 'The password is too short')
    .max(20, 'The password is too long')
    .required('Password is required'),
  email: Yup.string()
    .email('This must be a valid email address')
    .required('Email is required')
});

const resetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('This must be a valid email address')
    .required('Email is required')
});

export default {
  signupSchema,
  signInSchema,
  resetPasswordSchema
};
