import React from 'react';
import ResetPasswordForm from '../../components/organism/ResetPasswordForm/ResetPasswordForm';
import AuthTemplate from '../../components/template/AuthTemplate/AuthTemplate';

function ResetPassword() {
  return (
    <AuthTemplate>
      <ResetPasswordForm />
    </AuthTemplate>
  );
}

export default ResetPassword;
