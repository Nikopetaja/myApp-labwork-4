// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app'; // Import specific function
import 'firebase/auth';
import firebaseConfig from './FirebaseConfig';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

initializeApp(firebaseConfig);
