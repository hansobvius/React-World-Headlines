import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './components/App';
import { createStore } from 'redux'
import reducer from './reducer';
import middleware from './middleware';

const mainStore = createStore(reducer, middleware)

console.log('index: ', mainStore.getState());

ReactDOM.render(<App store={mainStore}/>, document.getElementById('root'));
