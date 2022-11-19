import React from 'react';
import {useState} from 'react';
import { Header } from './components/Header';



function App2 () {
    const [numero, setNumero] = useState(0);

    const handleClick = () => {
        setNumero(9);
    }


    return (
        <div>
            <Header title="Assim eu edito meu Header"/>

            <button onClick={handleClick}> Clique aqui</button>
            O número é {numero}
        
    
        </div>


    );

}

export default App2;