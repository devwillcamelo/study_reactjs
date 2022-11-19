import React from 'react';


type Props = {
    clickFn: () => void;
}


export const Button = ({clickFn}: Props) => {

    return (
        <button onClick={clickFn}>Clique aqui 1.0</button>
    );
}