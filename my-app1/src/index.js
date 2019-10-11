import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
const Root = (
    <Provider store={store} >
        <App></App>
    </Provider>
)
ReactDOM.render(Root, document.getElementById('root'));