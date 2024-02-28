import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import { history, store } from '@redux/configure-store';

import { HistoryRouter } from 'redux-first-history/rr6';
import Loader from '@components/loader';
import Routes from '../routes/routes';



const App = () => {

  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes />
        <Loader />
      </HistoryRouter>

    </Provider >
  )
}

export default App
