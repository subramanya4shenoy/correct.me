import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ThemeConfig from './theme';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://localhost:8080/',
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
