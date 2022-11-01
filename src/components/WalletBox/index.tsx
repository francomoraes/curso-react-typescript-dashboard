//react
import React from 'react';
import CountUp from 'react-countup';

//styles
import { Container } from './styles';

//assets
import dolar from '../../assets/dolar.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';

//Interfaces
interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

//Component
const WalletBox: React.FC<IWalletBoxProps> = ({ title, amount, footerLabel, icon, color}) => {

    const iconSelected = () => {
        switch (icon) {
            case 'arrowUp':
                return arrowUp;
            case 'arrowDown':
                return arrowDown;
            default:
                return dolar;
        }
    }

    return (
        <Container
            color={color}
        >
            {/* react count Up: lib pra animar o número quando
            carregar a página: yarn add react-countup */}
            <span>{title}</span>
            <h1>
                <strong>R$ </strong>
                <CountUp
                    end={Number(amount)}
                    separator='.'
                    decimal=','
                    decimals={2}
                    duration={0.3}
                />
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected()} alt={title} />
        </Container>
    );
};

export default WalletBox;