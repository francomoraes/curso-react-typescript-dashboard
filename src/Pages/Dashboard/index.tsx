//react
import React, { useMemo, useState } from 'react'

//assets
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'

//components
import SelectInput from '../../components/SelectInput';
import ContentHeader from '../../components/ContentHeader'

//databases
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

//styles
import { Container, Content } from './styles'
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

//Component
const Dashboard: React.FC = () => {

    const [ monthSelected, setMonthSelected ] = useState<number>(new Date().getMonth() + 1);
    const [ yearSelected, setYearSelected ] = useState<number>(new Date().getFullYear());
    
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

        [...expenses, ...gains].forEach(item => {
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
    }, []);

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

        <Content>
            <WalletBox
                title='Saldo'
                amount={150}
                footerLabel='atualizado com base nas entradas e saídas'
                icon='dolar'
                color='#4E41F0'
            />
            <WalletBox
                title='Entradas'
                amount={5000}
                footerLabel='atualizado com base nas entradas e saídas'
                icon='arrowUp'
                color='#F7931B'
            />
            <WalletBox
                title='Saídas'
                amount={4850}
                footerLabel='atualizado com base nas entradas e saídas'
                icon='arrowDown'
                color='#E44C4E'
            />

            <MessageBox 
                title='Muito bem!'
                description='Sua carteira está positiva'
                footerText='Continue assim. Considere investir o seu saldo.'
                icon={happyImg}
            />
        </Content>
    </Container>
)
}

export default Dashboard