import React from 'react';
import {useState} from 'react';



function App3 () {
    const [name, setName] = useState('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    return (
        <div>
           Nome:
           <input type="text" value={name} onChange={handleInput} />
           <hr/>
           seu nome é: {name}
        </div>


    );

}

export default App3;