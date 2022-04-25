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
    .password(
      'Pass have to contain at least: 1 minus, 1 cap, 1 special char, 1 num'
    )
    .required('Password required')
});

export default {
  signupSchema
};
