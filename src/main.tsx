import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import App from './components/App/App';
import '/src/index.css';

const rootElement = document.getElementById('root') as HTMLElement | null;

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <>
      <App />
    </>
  );
} else {
  console.error('Root element not found');
}
