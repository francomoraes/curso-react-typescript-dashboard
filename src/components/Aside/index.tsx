import React from 'react';
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from './styles';
import logoImg from '../../assets/logo.svg';
//biblioteca para criar ícones yarn add react-icons
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from "react-icons/md"

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo Cifrão" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/">
                    <MdArrowDownward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/">
                    <MdArrowUpward/>
                    Saídas
                </MenuItemLink>
                <MenuItemLink href="/">
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
};

export default Aside;