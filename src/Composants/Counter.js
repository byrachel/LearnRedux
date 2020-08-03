// REDUX AVEC LES HOOKS

import React from 'react';
import './counter.css';

// Méthodes pour partager les states et fonctions du STORE
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {

    //Utiliser le STATE du STORE
    // const count = useSelector(state => state.count)

    // Utiliser plusieurs STATES de plusieurs REDUCERS
    const { count, name } = useSelector(state => ({
        ...state.counterReducer,
        ...state.nameReducer
    }))

    // Changer le STATE
    const dispatch = useDispatch();

    const incrementCount = () => {
        dispatch({
            type: 'INCR'
        })
    }

    const decrementCount = () => {
        dispatch({
            type: 'DECR'
        })
    }

    return (
        <div>
            <h2>Compteur : {count}</h2>
            <div className="bloc-btn">
                <button onClick={incrementCount}> + </button>
                <button onClick={decrementCount}> - </button>
            </div>
            <p>input : {name}</p>
        </div>
    )
}
