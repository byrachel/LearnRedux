import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import du provider qui va autoriser le store à injecter du state vers nos composants
import { Provider } from 'react-redux';


// Création du store REDUX
import { createStore, combineReducers } from 'redux';

// Import du Reducer
// import reducer from './Store/reducer';
// AVEC LES HOOKS
import counterReducer from './Store/counterReducer';
import nameReducer from './Store/nameReducer';

// Quand j'ai plusieurs fichiers de reducers :
const rootReducer = combineReducers({
    counterReducer,
    nameReducer
})

// Le reducer est ce qui va permettre de modifier le state
// const store = createStore(reducer);
// AVEC LES HOOKS
// const store = createStore(counterReducer)
// AVEC PLUSIEURS REDUCERS
const store = createStore(rootReducer)

// J'entoure mon App du Provider afin qu'il soit accessible partout
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
