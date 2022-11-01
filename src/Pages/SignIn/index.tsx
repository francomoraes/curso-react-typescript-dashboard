//react
import React from 'react'

//assets
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

//styles
import {
    Container,
    Logo,
    Form,
    FormTitle,
} from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
        <Logo>
            <img src={logoImg} alt="Logo Minha Carteira" />
            <h3>Minha Carteira</h3>
        </Logo>

        <Form onSubmit={() => {}}>
            <FormTitle>Entrar</FormTitle>
            <Input type="email" placeholder="Email" required/>
            <Input type="password" placeholder="Senha" required/>
            <Button type="submit">Acessar</Button>
        </Form>
    </Container>
  )
}

export default SignIn;