import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { SearchProvider } from './components/SearchContext/SearchContext';
import App from './components/App';

ReactDOM.render(
  <Router>
    <SearchProvider>
      <App />
    </SearchProvider>
  </Router>,
  document.getElementById('root')
);
