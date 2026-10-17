import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider } from './context/RouterContext';
import { getVisitorIntel } from './utils/visitorTelemetry';
import './index.css';
import '@designcodeio/threeui/style.css';

// Initialize session intelligence and UTM attribution
getVisitorIntel();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
