import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

try {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('Root element not found!');
    document.body.innerHTML = '<div style="color:red; padding: 20px;">Root element not found, check HTML</div>';
  } else {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
} catch (error) {
  console.error('Error rendering React app:', error);
  document.body.innerHTML = '<div style="color:red; padding: 20px;">Error rendering: ' + error.message + '</div>';
}
