import React, { Component } from 'react'
import './Compteur.css';
import Resultat from '../Composants/Resultat/Resultat.js';
import IncrBtn from '../Composants/IncrBtn/IncrBtn.js';


// Me connecter au store
import { connect } from 'react-redux';


class Compteur extends Component {

    // state = {
    //     compteur : 0
    // }

    //  calcul = (action) => {
    //     if(action === "plus1"){
    //         this.setState( ( statePrec ) => { return { compteur: statePrec.compteur + 1 } } )
    //     } 
    //     if(action === "moins1"){
    //         this.setState( ( statePrec ) => { return { compteur: statePrec.compteur - 1 } } )
    //     } 
    // }
    
    render() {
        return (
            <div className="cont">
            <div className="blocConmpt">
                <Resultat valeur={this.props.ctr} />
            </div>
            <div className="contBtn">
                {/* <IncrBtn txt="Incremente" clicked={() => this.calcul("plus1")} /> */}
                <IncrBtn txt="Incremente" clicked={this.props.incremente} />

                {/* <IncrBtn txt="Decremente" clicked={() => this.calcul("moins1")} /> */}
                <IncrBtn txt="Decremente" clicked={this.props.decremente} />

            </div>
        </div>
        )
    }
}

// Je crée les méthodes qui vont envoyer le state + action au reducer

// Il s'agit ici du compteur contenu dans le STORE > Reducer.js 
const mapStateToProps = state => {
    return {
        ctr : state.compteur
    }

}

// Création des ACTIONS
const mapDispatchToProps = dispatch => {
    return {
        incremente : () => dispatch({ type: 'INCREMENTE'}),
        decremente : () => dispatch({ type: 'DECREMENTE'})
    }
}

// La méthode connect prend 2 paramètres : le state + l'action à envoyer au reducer
export default connect(mapStateToProps, mapDispatchToProps)(Compteur);
