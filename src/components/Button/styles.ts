import styled from "styled-components";

export const Container = styled.button`
    border-radius: 5px;
    margin: 7px 0;
    padding: 10px;
    width: 100%;

    font-weight: bold;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.warning};

    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }
`;