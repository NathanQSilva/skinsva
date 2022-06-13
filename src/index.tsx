import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes'
import { RecoilRoot } from 'recoil'

import './styles/global.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>
);
