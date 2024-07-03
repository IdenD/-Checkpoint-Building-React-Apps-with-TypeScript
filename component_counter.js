// Étape 1: Importer React et Component depuis 'react'
import React, { Component } from 'react';

// Étape 2: Définir une interface pour l'état
interface CounterState {
    count: number;
}

// Étape 3: Définir la classe Counter comme un composant de classe
class Counter extends Component<{}, CounterState> {
    state: CounterState = {
        count: 0
    };

    // Étape 4: Définir la méthode increment pour mettre à jour l'état
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // Étape 5: Méthode render avec JSX
    render() {
        return (
            <div>
                <p>Compte : {this.state.count}</p>
                <button onClick={this.increment}>Incrément</button>
            </div>
        );
    }
}

// Étape 6: Exporter le composant Counter par défaut
export default Counter;
