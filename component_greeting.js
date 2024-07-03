// Étape 1: Importer React et définir une interface pour les props
import React from 'react';
import React, { FC } from 'react';


// Étape 2: Définir une interface pour les props
interface GreetingProps {
    name: string;
}

// Étape 3: Définir le composant fonctionnel Greeting avec une annotation de type pour les props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Bonjour, {name}!</div>;
};

// Étape 4: Exporter le composant Greeting par défaut
export default Greeting;
