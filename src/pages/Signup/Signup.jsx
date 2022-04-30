import React from 'react';
import SignUpForm from '../../components/organism/SignUpForm/SignUpForm';
import AuthTemplate from '../../components/template/AuthTemplate';

function Signup() {
  return (
    <AuthTemplate>
      <SignUpForm />
    </AuthTemplate>
  );
}

export default Signup;
