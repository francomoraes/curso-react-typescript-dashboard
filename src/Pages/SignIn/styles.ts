import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.primary};
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    justify-content: center;
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    > h3 {
        color: ${props => props.theme.color.white};
        margin-left: 7px;
    }

    > img {
        width: 50px;
        height: 50px;
    }
`;
export const Form = styled.form`
    background-color: ${props => props.theme.color.tertiary};
    border-radius: 10px;
    height: 300px;
    padding: 30px;
    width: 300px;
`;
export const FormTitle = styled.h1`
    color: ${props => props.theme.color.white};
    margin-bottom: 40px;

    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.color.warning};
    }
`;