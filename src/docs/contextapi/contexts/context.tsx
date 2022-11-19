import { createContext } from 'react';

type ContextType ={
    name: string;
    age: number;
}

const initialState = {
    name: 'Bonieky',
    age: 90
}

export const context = createContext<ContextType>(initialState);

export const ContextProvider: React.FC = ({ children }) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    );
}