import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ThemeConfig from './theme';
import { setContext } from '@apollo/client/link/context';

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink, 
  ApolloProvider
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeConfig>
    <ApolloProvider client={client}>
      <App/>
      </ApolloProvider>
    </ThemeConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
