import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import App from './App';
import { AppProvider } from './context/store';

import './index.scss';

library.add(fab);

const TheJob = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

ReactDOM.render(<TheJob />, document.getElementById('root'));
