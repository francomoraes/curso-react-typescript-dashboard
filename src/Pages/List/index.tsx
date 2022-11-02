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

    const [ data, setData ] = useState<IData[]>([]);
    const [ monthSelected, setMonthSelected ] = useState<number>(() => {
        
        const monthStored = localStorage.getItem('@minha-carteira:monthSelected');
        if(monthStored) {
            return (parseInt(monthStored))
        } else {
            const currentMonth = new Date().getMonth() + 1;
            localStorage.setItem('@minha-carteira:monthSelected', currentMonth.toString());
            return currentMonth;
        }

    });
    const [ yearSelected, setYearSelected ] = useState<number>(new Date().getFullYear());
    const [ selectedFrequency, setSelectedFrequency ] = useState(['recorrente', 'eventual']);


    const { movementType } = useParams();

    const pageData = useMemo(() => {
        return movementType === 'entry-balance' ?
        {
            title: 'Entradas',
            lineColor: '#4E41F0',
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

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency);
        if (alreadySelected >= 0){
            const filtered = selectedFrequency.filter(item => item !== frequency);
            setSelectedFrequency(filtered);
        } else {
            setSelectedFrequency((prev) => [...prev, frequency]);
        }
    }

    useEffect(() => {
        const filteredData = listData.filter(item => {
            const date = new Date(item.date)
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        });

        const formattedData = filteredData.map(item => {

            return {
                //id: solução gambiarra para ter key unico no map
                id: String(new Date().getTime() + Math.random()),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(String(item.date)),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        });
        setData(formattedData);
    }, [data.length, listData, monthSelected, yearSelected, selectedFrequency]);

    const handleMonthSelected = (month: string) => {
        setMonthSelected(Number(month));
        localStorage.setItem('@minha-carteira:monthSelected', month);
    }

  return (
    <Container>
        <ContentHeader title={title} lineColor={lineColor} >
            <SelectInput
                options={months}
                onChange={(e) => handleMonthSelected(e.target.value)}
                defaultValue={monthSelected}
            />
            <SelectInput
                options={years}
                onChange={(e) => setYearSelected(Number(e.target.value))}
                defaultValue={yearSelected}
            />
        </ContentHeader>

        <Filters>
            <button
                type='button'
                className={`
                    tag-filter tag-filter-recurrent
                    ${selectedFrequency.includes('recorrente') && 'tag-actived'}
                `}
                onClick={() => handleFrequencyClick('recorrente')}
            >Recorrentes</button>
            <button
                type='button'
                className={`
                    tag-filter tag-filter-eventual
                    ${selectedFrequency.includes('eventual') && 'tag-actived'}
                `}
                onClick={() => handleFrequencyClick('eventual')}
            >Eventuais</button>
        </Filters>

        <Content>
            {
                data.map((item, index) => (
                    <HistoryFinanceCard
                        key={item.id}
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