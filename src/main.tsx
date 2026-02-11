// ================================================
// main - Application entry point
// Purpose: Mounts React app to DOM
// Contains: ReactDOM render, StrictMode wrapper
// NOTE: DO NOT MODIFY THIS FILE!
// ================================================

// React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// App
import App from './App.tsx';

// Styles
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);