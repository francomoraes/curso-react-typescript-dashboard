import styled from 'styled-components'

interface ITitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    width: 100%;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;
export const TitleContainer = styled.div<ITitleContainerProps>`
    > h1 {
        color: ${props => props.theme.color.white};

        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.lineColor};
        }

        @media (max-width: 600px) {
            width: 100%;
        }
    }
`;
export const Controllers = styled.div`
    display: flex;

    @media (max-width: 600px) {
        width: 100%;
        justify-content: space-between;
        margin-top: 25px;

        > div {
            width: 48%;
        }
    }
`;