import styled from 'styled-components'

interface IContainerProps {
    color: string
}

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    border-radius: 7px;
    color: ${props => props.theme.color.white};
    height: 150px;
    margin: 10px 0;
    overflow: hidden;
    padding: 10px 20px;
    position: relative;
    width: 32%;

    > img {
        height: 110%;
        right: -30px;
        opacity: .3;
        position: absolute;
        top: -10px;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 14px;
        position: absolute;
        bottom: 10px;
    }
`;