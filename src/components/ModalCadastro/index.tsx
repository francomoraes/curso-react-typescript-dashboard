import React from 'react';
import Button from '../Button';
import Input from '../Input';

import { CadastroContent, CadastroContainer, InputsContainer, Header, CloseButtonContainer } from './styles';

interface IModalProps {
    modalOpened: boolean;
    closeModal: (arg0: boolean) => void;
}

const ModalCadastro: React.FC<IModalProps> = ({modalOpened, closeModal}) => {
    return (
        <>
            {modalOpened && (
                <CadastroContainer onClick={() => closeModal(false)}>
                    <CadastroContent onClick={(e) => e.stopPropagation()}>
                        <Header>
                            <h2>Cadastro</h2>
                            <CloseButtonContainer>
                                <Button type="button" onClick={() => closeModal(false)} >X</Button>
                            </CloseButtonContainer>
                        </Header>
                        <InputsContainer>
                            <Input type="text" placeholder="Nome" />
                            <Input type="text" placeholder="Email" />
                            <Input type="text" placeholder="Senha" />
                        </InputsContainer>
                        <Button type="button" onClick={() => alert("Ainda não é possível efetuar cadastros. Implementação futura.")}>Cadastrar</Button>
                    </CadastroContent>
                </CadastroContainer>
            )}
        </>
    );
};

export {ModalCadastro};