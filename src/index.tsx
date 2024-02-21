import React from 'react';
import { createRoot } from 'react-dom/client';

import App from '@pages/app';

import 'antd/dist/antd.css';
import 'normalize.css';
import './styles/styles.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
