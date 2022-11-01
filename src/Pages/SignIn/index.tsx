//react
import React, { useState } from 'react'

//assets
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';

//styles
import {
    Container,
    Logo,
    Form,
    FormTitle,
} from './styles'

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();

  return (
    <Container>
        <Logo>
            <img src={logoImg} alt="Logo Minha Carteira" />
            <h3>Minha Carteira</h3>
        </Logo>

        <Form onSubmit={() => signIn(email, password)}>
            <FormTitle>Entrar</FormTitle>
            <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
            <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required/>
            <Button type="submit">Acessar</Button>
        </Form>
    </Container>
  )
}

export default SignIn;