import React from 'react';
import SignUpForm from '../../components/organism/SignUp/SignUpForm';
import AuthTemplate from '../../components/template/AuthTemplate';

function Signup() {
  return (
    <AuthTemplate>
      <SignUpForm />
    </AuthTemplate>
  );
}

export default Signup;
