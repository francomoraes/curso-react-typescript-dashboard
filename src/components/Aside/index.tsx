import React from 'react';
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink, MenuItemButton } from './styles';
import logoImg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

//biblioteca para criar ícones yarn add react-icons
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from "react-icons/md"

const Aside: React.FC = () => {
    const { signOut } = useAuth();

    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo Cifrão" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowDownward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowUpward/>
                    Saídas
                </MenuItemLink>
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>
            </MenuContainer>
        </Container>
    );
};

export default Aside;