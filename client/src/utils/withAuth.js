import React from 'react'
import { Query } from '@apollo/client/react/components';
import { ME } from '../Resolvers/Me';
import LoginPage from '../Pages/LoginPage';

const WithAuth = (Component) => props => (

  <Query query={ME} fetchPolicy="network-only">
    {({ data, networkStatus, refetch }) => {
      if (networkStatus < 7) { return null;}
      return (data && data.me) ? (<Component {...props} />) : ( <LoginPage/>);
    }}
  </Query>
);

export default WithAuth;
