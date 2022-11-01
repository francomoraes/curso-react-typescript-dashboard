import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn( email: string, password: string): void;
    signOut(): void;
}

type AuthProviderProps = {
    children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-carteira:logged');

        //duas exclamações verifica se tem conteúdo. Se tiver, return.
        return !!isLogged;
    });

    const signIn = (email: string, password: string) => {
        if (email === 'joao@email.com' && password === '123'){
            localStorage.setItem('@minha-carteira:logged', 'true');
            setLogged(true);
        } else {
            alert('Senha ou usuário inválido');
        }
    }

    const signOut = () => {
        localStorage.removeItem('@minha-carteira:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    if (!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };