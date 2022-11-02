import styled from "styled-components";

interface IContainerProps {
    isMenuOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    color: ${props => props.theme.color.white };
    background-color: ${props => props.theme.color.secondary };
    border-right: 1px solid ${props => props.theme.color.gray };
    grid-area: AS;
    padding-left: 20px;

    position: relative;

    @media (max-width: 600px) {
        padding-left: 20px;
        position: fixed;
        z-index: 2;

        height: ${props => props.isMenuOpen ? '100vh' : '70px'};
        overflow: hidden;

        width: 200px;

        ${props => !props.isMenuOpen && 
            `
                border: none;
                border-bottom: 1px solid ${props.theme.color.gray};
            `}
    }
`
export const Header = styled.header`
    align-items: center;
    display: flex;
    height: 70px;
`;
export const LogoImg = styled.img`
    height: 40px;
    width: 40px;

    @media (max-width: 600px) {
        display: none;
    }
`;
export const Title = styled.h3`
    color: ${props => props.theme.color.white };
    margin-left: 10px;

    @media (max-width: 600px) {
        display: none;
    }
`;
export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;
export const MenuItemLink = styled.a`
    color: ${props => props.theme.color.info };
    display: flex;
    align-items: center;
    margin: 7px 0;
    text-decoration: none;
    transition: opacity .3s;

    &:hover {
        opacity: 0.7;
    }

    >svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;
export const MenuItemButton = styled.button`
    align-items: center;
    background: none;
    border: none;
    color: ${props => props.theme.color.info };
    display: flex;
    font-size: 16px;
    margin: 7px 0;
    transition: opacity .3s;

    &:hover {
        opacity: 0.7;
    }

    >svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.color.warning };
    color: ${props => props.theme.color.white };

    transition: opacity .3s;

    &:hover {
        opacity: 0.7;
    }

    display: none;

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

interface IThemeToggleFooterProps {
    menuIsOpen: boolean;
}

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media (max-width: 470px) {
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }
`;