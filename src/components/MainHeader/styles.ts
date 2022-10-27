import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.color.white };
    background-color: ${props => props.theme.color.secondary };
    border-bottom: 1px solid ${props => props.theme.color.gray };
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    grid-area: MH;
`
export const Profile = styled.div`
    color: ${props => props.theme.color.white };
`
export const Welcome = styled.h3`

`
export const UserName = styled.span`

`