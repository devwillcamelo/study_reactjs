import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    background-color: blue;
    color: white;
    height: 70px;
    display: flex;
    
   

    span {
        font-weight: bold;
        color: white;
        padding: 10px;
        align-items: center;
        justify-content: center;
        
    }


`;

type ButtonProps = {
    small?: boolean;
}

export const Button = styled.button<ButtonProps>`
    font-size: ${props => props.small ? '15px' : '40px'}
    background-color: yellow;
    color: black;
`;