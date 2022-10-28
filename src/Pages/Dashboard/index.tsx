import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import { Container } from './styles'
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {
    
    const options = [
        {value: 'value1', label: 'label1'},
        {value: 'value2', label: 'label2'},
        {value: 'value3', label: 'label3'},
    ];

    return (
    <Container>
        <ContentHeader title='Dashboard' lineColor='#F7931B' >
            <SelectInput options={options} onChange={() => {}}/>
        </ContentHeader>
    </Container>
)
}

export default Dashboard