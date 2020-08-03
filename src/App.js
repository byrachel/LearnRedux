import React from 'react';
import './App.css';
// import Compteur from "./Compteur/Compteur";
import Counter from './Composants/Counter';
import Name from './Composants/Name';
function App() {
  return (
    <div className="App">
        <h2>Avec les hooks</h2>
        <Counter />
        <h3>Partager le store dans un nouveau composant</h3>
        <Name />

        {/* <Compteur /> */}

    </div>
  );
}

export default App;
