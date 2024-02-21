import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from './main-page';
import AuthPage from './authPage';
import { Provider } from 'react-redux';
import { history, store } from '@redux/configure-store';

import { HistoryRouter } from 'redux-first-history/rr6';
// import { routes } from 'src/routes/routes';
import PATHS from "../routes/paths";



const App = () => {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path={PATHS.auth} element={<AuthPage />} />
          <Route path={PATHS.main} element={<MainPage />} />
        </Routes>
      </HistoryRouter>

    </Provider >
  )
}

export default App
