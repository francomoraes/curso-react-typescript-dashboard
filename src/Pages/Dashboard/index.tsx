import React, { useMemo, useState } from 'react'
import ContentHeader from '../../components/ContentHeader'
import { Container } from './styles'
import SelectInput from '../../components/SelectInput';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatDate from '../../utils/formatDate';
import { useParams } from 'react-router-dom';

const Dashboard: React.FC = () => {

    interface IData {
        id: string;
        description: string;
        amountFormatted: string;
        frequency: string;
        dateFormatted: string;
        tagColor: string;
    }

    const [ data, setData ] = useState<IData[]>([]);
    const [ monthSelected, setMonthSelected ] = useState<number>(new Date().getMonth() + 1);
    const [ yearSelected, setYearSelected ] = useState<number>(new Date().getFullYear());
    const [ selectedFrequency, setSelectedFrequency ] = useState(['recorrente', 'eventual']);


    const { movementType } = useParams();

    const pageData = useMemo(() => {
        return movementType === 'entry-balance' ?
        {
            title: 'Entradas',
            lineColor: '#F7931B',
            listData: gains
        } : {
            title: 'Saídas',
            lineColor: '#E44C4E',
            listData: expenses
        }
    }, [movementType]);

    const { title, lineColor, listData } = pageData;
    
    const months = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'},
        {value: 4, label: 'Abril'},
        {value: 5, label: 'Maio'},
        {value: 6, label: 'Junho'},
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
        {value: 10, label: 'Outubro'},
        {value: 11, label: 'Novembro'},
        {value: 12, label: 'Dezembro'}
    ];

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });
        return uniqueYears.map(year => {
            return {
                value: Number(year),
                label: String(year)
            }
        });
    }, [listData]);

    return (
    <Container>
        <ContentHeader title='Dashboard' lineColor='#F7931B' >
            <SelectInput
                    options={months}
                    onChange={(e) => setMonthSelected(Number(e.target.value))}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    options={years}
                    onChange={(e) => setYearSelected(Number(e.target.value))}
                    defaultValue={yearSelected}
                />
        </ContentHeader>
    </Container>
)
}

export default Dashboard