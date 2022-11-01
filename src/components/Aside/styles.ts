import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.color.white };
    background-color: ${props => props.theme.color.secondary };
    border-right: 1px solid ${props => props.theme.color.gray };
    grid-area: AS;
    padding-left: 20px;
`
export const Header = styled.header`
    align-items: center;
    display: flex;
    height: 70px;
`;
export const LogoImg = styled.img`
    height: 40px;
    width: 40px;
`;
export const Title = styled.h3`
    color: ${props => props.theme.color.white };
    margin-left: 10px;
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