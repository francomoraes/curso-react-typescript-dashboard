//react
import React from 'react';

import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'

//styles
import {
    Container,
    ChartContainer,
    Header,
    LegendContainer,
    Legend
} from './styles';

//functions
import formatCurrency from '../../../utils/formatCurrency';

//interfaces
interface IHistoryBoxProps {
    data: {
        month: string;
        amountGains: number;
        amountExpenses: number;
    }[],
    lineColorGains: string;
    lineColorExpenses: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ( { data, lineColorGains, lineColorExpenses } ) => {
    return (
        <Container>
            <Header>
                <h2>Histórico de saldo</h2>
                <LegendContainer>
                    <Legend color={lineColorGains}>
                        <div></div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color={lineColorExpenses}>
                        <div></div>
                        <span>Saídas</span>
                    </Legend>
                </LegendContainer>
            </Header>

            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                        <XAxis dataKey="month" stroke="#cecece" />
                        <Tooltip formatter={(value) => formatCurrency(Number(value)) }/>
                        <Line
                            type="monotone"
                            dataKey="amountGains"
                            name="Entradas"
                            stroke={lineColorGains}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="amountExpenses"
                            name="Saídas"
                            stroke={lineColorExpenses}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>

                </ResponsiveContainer>
            </ChartContainer>
        </Container>
    );
};

export default HistoryBox;