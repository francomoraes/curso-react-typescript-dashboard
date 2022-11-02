import styled from "styled-components";

export const CadastroContainer = styled.div`
    align-content: center;
    background-color: ${props => props.theme.color.primary};
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100%;
`;

export const CadastroContent = styled.div`
    align-self: center;
    background-color: ${props => props.theme.color.tertiary};
    border-radius: 15px;
    color: ${props => props.theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    padding: 20px;
    width: 400px;
`;

export const Header = styled.div`
    display: flex;
    position: relative;
    height: 50px;

    > h2 {
        align-self: center;
    }
`;
export const CloseButtonContainer = styled.div`
    width: 30px;
    position: absolute;
    right: 0;
`;
export const InputsContainer = styled.div``;