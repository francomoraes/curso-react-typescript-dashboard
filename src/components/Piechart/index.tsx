//react
import React from 'react';

//styles
import {
    Container,
    SideLeft,
    Legend,
    LegendContainer,
    SideRight
} from './styles';

//bilbiotecas
//yarn add recharts
//yarn add @types/recharts
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

//interfaces
interface IPiechartProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[];
}

const PieChartComponent: React.FC<IPiechartProps> = ({ data }) => {
    return (
        <Container>
            <SideLeft>
                <h2>Relação</h2>
                <LegendContainer>
                    {
                        data.map((indicator, index) => (
                            <Legend key={index} color={indicator.color} >
                                <div>{indicator.percent}%</div>
                                <span>{indicator.name}</span>
                            </Legend>
                        ))
                    }
                </LegendContainer>
            </SideLeft>

            <SideRight>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} dataKey="percent">
                            {data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    );
};

export default PieChartComponent;