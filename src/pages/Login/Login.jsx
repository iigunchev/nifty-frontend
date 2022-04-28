import React from 'react';
import LoginForm from '../../components/organism/LoginForm/LoginForm';
import AuthTemplate from '../../components/template/AuthTemplate';

function Login() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}

export default Login;
