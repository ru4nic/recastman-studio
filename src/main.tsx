import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
// import ScrollToTop from './components/layout/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      {/* <ScrollToTop /> */}
      <App />
    </Router>
  </React.StrictMode>
);
