import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import { Image } from 'react-native';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Image source={logoImg} />

            <Title>Faça seu Logon</Title>

            <Input />
            <Input />

            <Button>Entrar</Button>
        </Container>
    );
};

export default SignIn;