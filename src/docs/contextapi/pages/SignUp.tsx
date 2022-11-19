import { Link } from 'react-router-dom';
import { useContext } from 'react-router-dom';

import { Context } from "./contexts/context";
import { useState, useState } from "react"

export const SignUp = () => {
    const { state, dispatch } = useContext(Context);
    const [nameInput, setNameInput] = useState('');
    const [ageInput, setAgeInput] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
    }

    const handleAgehange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgeInput(parseInt(e.target.value));
    }

    const handleSaveInfo = () => {
        dispatch({
            type: "CHANGE_NAME",
            payload: {
                name: nameInput
            }
        });
        dispatch({
            type: "CHANGE_AGE",
            payload: {
                age: ageInput
            }
        });
    }

    return (
        <div>
            Tela SignUp de {state.user.name} que tem {state.user.age} anos.
            <br />
            <br />
            Tema: {state.theme.status}

            <input type="text" 
                placeholder="Digite seu nome"
                value={nameInput}
                onchange={handleNameChange}
            />
            <input type="text" 
                placeholder="Digite sua idade"
                value={ageInput}
                onchange={handleAgehange}
            />
            <button onClick={handleSaveInfo} > Salvar </button>
            <Link to="/exibir">Ir para ShowData</Link>
        </div>
    );
}