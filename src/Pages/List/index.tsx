import React, { useMemo, useState, useEffect } from 'react'
import ContentHeader from '../../components/ContentHeader'
import { Container, Filters } from './styles'
import SelectInput from '../../components/SelectInput';
import Content from '../../components/Content';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { useParams } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatDate from '../../utils/formatDate';

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {

    const [ monthSelected, setMonthSelected ] = useState<number>(new Date().getMonth() + 1);
    const [ yearSelected, setYearSelected ] = useState<number>(new Date().getFullYear());

    const [data, setData] = useState<IData[]>([]);

    const { type } = useParams();

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas';
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
    }, [type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type]);

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

    const years = [
        {value: 2022, label: 2022},
        {value: 2021, label: 2021},
        {value: 2020, label: 2020},
        {value: 2019, label: 2019},
        {value: 2018, label: 2018},
    ];

    useEffect(() => {
        const filteredData = listData.filter(item => {
            const date = new Date(item.date)
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected;
        });

        const formattedData = filteredData.map(item => {

            return {
                id: String(new Date().getTime() + Math.random()),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(String(item.date)),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        });
        setData(formattedData);
    }, [data.length, listData, monthSelected, yearSelected]);

  return (
    <Container>
        <ContentHeader title={title} lineColor={lineColor} >
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

        <Filters>
            <button type='button' className='tag-filter tag-filter-recurrent'>Recorrentes</button>
            <button type='button' className='tag-filter tag-filter-eventual'>Eventuais</button>
        </Filters>

        <Content>
            {
                data.map((item, index) => (
                    <HistoryFinanceCard
                        key={index}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        amount={item.amountFormatted}
                    ></HistoryFinanceCard>
                ))
            }
        </Content>
    </Container>
  )
}

export default List