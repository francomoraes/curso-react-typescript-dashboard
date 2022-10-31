//react
import React, { useMemo, useState } from 'react'

//assets
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import ufaImg from '../../assets/ufa.png'

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
import PieChartComponent from '../../components/Piechart';

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

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('Invalid amount! Amount must be a number.');
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('Invalid amount! Amount must be a number.');
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalGains, totalExpenses]);

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;

        const gainsPercent = Number(((totalGains / total) * 100).toFixed(1));
        const expensesPercent = Number(((totalExpenses / total) * 100).toFixed(1));

        const data = [
            {
                name: 'Entradas',
                value: totalGains,
                percent: gainsPercent || 0,
                color: '#F7931B'
            },
            {
                name: 'Saídas',
                value: totalExpenses,
                percent: expensesPercent || 0,
                color: '#E44C4E'
            }
        ];

        return data;
    }, [totalGains, totalExpenses]);

    const message = useMemo(() => {
        if (totalBalance < 0) {
            return {
                title: 'Que triste!',
                description: 'Neste mês, você gastou mais do que deveria.',
                footerText: 'Verifique seus gastos e tente cortar algumas coisas desnecessárias.',
                icon: sadImg
            }
        } else if (totalBalance === 0) {
            return {
                title: 'Ufaa!',
                description: 'Neste mês, você gastou exatamente o que ganhou.',
                footerText: 'Tenha cuidado. No próximo tente poupar o seu dinheiro.',
                icon: ufaImg
            }
        } else {
            return {
                title: 'Muito bem!',
                description: 'Sua carteira está positiva!',
                footerText: 'Continue assim. Considere investir o seu saldo.',
                icon: happyImg
            }
        }
    }, [totalBalance]);

    const { title, description, footerText, icon } = message;

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
                amount={totalBalance}
                footerLabel='atualizado com base nas entradas e saídas'
                icon='dolar'
                color='#4E41F0'
            />
            <WalletBox
                title='Entradas'
                amount={totalGains}
                footerLabel='atualizado com base nas entradas e saídas'
                icon='arrowUp'
                color='#F7931B'
            />
            <WalletBox
                title='Saídas'
                amount={totalExpenses}
                footerLabel='atualizado com base nas entradas e saídas'
                icon='arrowDown'
                color='#E44C4E'
            />

            <MessageBox 
                title={title}
                description={description}
                footerText={footerText}
                icon={icon}
            />
            <PieChartComponent data={relationExpensesVersusGains} />
        </Content>
    </Container>
)
}

export default Dashboard