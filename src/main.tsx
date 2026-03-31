import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <--- 1. Add this import
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. Wrap App and add the basename matching your repo name */}
    <BrowserRouter basename="/no_j_website">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
