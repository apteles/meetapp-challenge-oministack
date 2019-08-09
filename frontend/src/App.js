import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import './config/ReactotronConfig';
import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <GlobalStyle />
                    <Routes />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
