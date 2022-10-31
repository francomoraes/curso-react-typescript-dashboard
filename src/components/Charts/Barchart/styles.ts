import styled from "styled-components";

//interfaces
interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    background-color: ${(props) => props.theme.color.tertiary};
    border-radius: 7px;
    color: ${(props) => props.theme.color.white};
    display: flex;
    margin: 10px 0;
    min-height: 260px;
    width: 48%;
`;
export const SideLeft = styled.div`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
        padding-left: 16px;
    }
`;
export const SideRight = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    min-height: 150px;
    padding: 35px 5px 20px 0;
`;

export const LegendContainer = styled.ul`
    list-style: none;
    max-height: 160px;
    overflow-y: scroll;
    padding-right: 15px;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.color.secondary };
    }
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.color.tertiary };
    }
`;
export const Legend = styled.li<ILegendProps>`
    align-items: center;
    display: flex;
    margin-bottom: 7px;
    padding-left: 16px;

    > div {
        background-color: ${props => props.color};
        border-radius: 5px;
        font-size: 14px;
        line-height: 40px;
        height: 40px;
        text-align: center;
        width: 40px;
    }

    >span {
        margin-left: 5px;
    }
`;