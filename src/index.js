import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import rootReducer from './redux/rootReducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

const add = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(add, document.getElementById('root'));

serviceWorker.unregister();
