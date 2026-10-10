import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root')!;

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production HTML is prerendered (scripts/prerender.mjs) → hydrate it.
// Exceptions rendered fresh instead: the dev server (empty #root) and dist/404.html, which
// Netlify serves for any unknown URL — that URL can't match the prerendered one, so hydrating
// it could mismatch (e.g. the active nav link on /services/<unknown>).
if (container.hasChildNodes() && container.dataset.prerender !== 'not-found') {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
