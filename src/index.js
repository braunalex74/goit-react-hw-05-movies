import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div>Loading...</div>}>
    <React.StrictMode>
      <BrowserRouter basename="goit-react-hw-05-movies">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);
