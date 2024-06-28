import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Create an Apollo Client instance for making GraphQL requests
const client = new ApolloClient({
  // Specify the URI for the GraphQL server
  uri: 'http://localhost:4000',
  // Initialize an in-memory cache for caching GraphQL data 
  cache: new InMemoryCache(),
});

// Render the main App component wrapped in ApolloProvider and StrictMode
root.render(
  <React.StrictMode>
    {/* Provide the Apollo Client instance to the entire application */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
