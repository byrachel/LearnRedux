
// Création du state initial
const initialeState = {
    compteur : 0
}

//Création du reducer avec 2 paramétres : state initial + action (= fonction)
const reducer = (state = initialeState, action) => {
    if(action.type === 'INCREMENTE') {
        return {
            compteur : state.compteur +1
        }
    }
    else if(action.type === 'DECREMENTE') {
        return {
            compteur: state.compteur -1
        }
    }
    return state;
}

export default reducer;