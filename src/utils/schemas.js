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
    .matches(/^(?=.{8,})/, 'Must Contain 8 Characters')
    .matches(/^(?=.*[a-z])/, 'Must Contain One Lowercase')
    .matches(/^(?=.*[A-Z])/, 'Must Contain One Uppercase')
    .matches(/^(?=.*[0-9])/, 'Must Contain One Number')
    .matches(/^(?=.*[!@#$%^&*])/, 'Must Contain One Special Case Character')
});

export default {
  signupSchema
};
