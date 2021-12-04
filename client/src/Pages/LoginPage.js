import React from 'react';
import DocumentTitle from 'react-document-title';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <DocumentTitle title='Login'>
      <div>
        <Login />
      </div>
    </DocumentTitle>
  );
};

export default LoginPage;
