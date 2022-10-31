import styled from "styled-components";

//interfaces
interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    background-color: ${props => props.theme.color.tertiary};
    border-radius: 7px;
    color: ${props => props.theme.color.white};
    height: 340px;
    margin: 10px 0;
    padding: 30px 20px;
    width: 100%;

    > h2 {
        margin-bottom: 25px;
        padding-left: 16px;
    }
`;

export const ChartContainer = styled.div`
    flex: 1;
    height: 260px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;

    > h2 {
        margin-bottom: 20px;
        padding-left: 16px;
    }
`;
export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 16px;
`;
export const Legend = styled.li<ILegendProps>`
    align-items: center;
    display: flex;
    margin-bottom: 7px;
    margin-left: 7px;

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