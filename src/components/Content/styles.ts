import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.color.white };
    background-color: ${props => props.theme.color.primary };
    height: calc(100vh - 70px);
    grid-area: CT;
    overflow-y: scroll;
    padding: 25px;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.color.secondary };
    }
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.color.tertiary };
    }
`