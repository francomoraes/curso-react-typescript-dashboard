import styled from 'styled-components' ;

export const Container = styled.div`
    background-color: ${props => props.theme.color.tertiary};
    border-radius: 7px;
    color: ${props => props.theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 260px;
    margin: 10px 0;
    padding: 30px 20px;
    width: 48%;

    > header img {
        width: 35px;
        margin-left: 7px;
    }

    > header p {
        font-size: 18px;
    }
`;