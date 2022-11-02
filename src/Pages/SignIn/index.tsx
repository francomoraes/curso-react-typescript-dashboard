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

//components
import { ModalCadastro } from '../../components/ModalCadastro/index';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const { signIn } = useAuth();

  return (
    <>
        <ModalCadastro 
            modalOpened={modalOpened}
            closeModal={(arg) => setModalOpened(arg)}
        />
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
                <Button type="button" onClick={() => setModalOpened(true)}>Cadastrar</Button>
            </Form>
        </Container>
    </>
  )
}

export default SignIn;