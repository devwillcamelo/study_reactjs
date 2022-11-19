import { Link } from 'react-router-dom';

import { useContext } from 'react-router-dom';
import { Context } from "./contexts/context";

export const ShowData = () => {
    const { state, dispatch } = useContext(Context);


    return (
        <div>
            <h1>Tela ShowData</h1> 
            <hr />
            <br/>
                {state.user.name && 
                    <>
                    Meu nome é: {state.user.name} <br/>
                    E tenho {state.user.age} anos.
                    <br/>
                    </>
                }
                {!state.user.name &&  'Não temos informações'}
            <br/>

            <Link to="/">Voltar para SignUp</Link>
        </div>
    );
}