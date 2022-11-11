import React, { useState } from 'react';
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink, MenuItemButton, ToggleMenu, ThemeToggleFooter } from './styles';
import logoImg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/themes';

//biblioteca para criar ícones yarn add react-icons
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdClose, MdMenu } from "react-icons/md"
import Toggle from '../Toggle';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();
    const [ darkTheme, setDarkTheme ] = useState(() => theme.title === 'dark' ? true : false);
    
    const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenuIsOpen(!toggleMenuIsOpen);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return (
        <Container isMenuOpen={toggleMenuIsOpen}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu} >
                    { toggleMenuIsOpen ? <MdClose/> : <MdMenu/> }
                </ToggleMenu>
                <LogoImg src={logoImg} alt="Logo Cifrão" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard-minha-carteira/#/dashboard">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/dashboard-minha-carteira/#/list/entry-balance">
                    <MdArrowDownward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/dashboard-minha-carteira/#/list/exit-balance">
                    <MdArrowUpward/>
                    Saídas
                </MenuItemLink>
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpen}>
                <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
};

export default Aside;