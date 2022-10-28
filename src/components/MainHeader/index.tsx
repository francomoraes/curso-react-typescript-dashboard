import React, { useMemo } from 'react';
import emojis from '../../utils/emojis';
import Toggle from '../Toggle';
import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () => {
    
    //função pra exibir um emoji de cada vez
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    //botão toggle: yarn add react-switch


    return (
        <Container>
            <Toggle/>
            <Profile>
                <Welcome>Olá {emoji}</Welcome>
                <UserName>João</UserName>
            </Profile>
        </Container>
    );
};

export default MainHeader;