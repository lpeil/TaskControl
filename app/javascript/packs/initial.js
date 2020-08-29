import React from 'react';
import { Provider } from 'react-redux';

import store from './config/store'
import App from './app'

const Initial = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Initial;
