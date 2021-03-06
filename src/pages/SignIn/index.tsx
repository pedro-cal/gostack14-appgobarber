import React, { useCallback, useRef } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import { Image, KeyboardAvoidingView, View, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { 
    Container, 
    Title, 
    ForgotPassword, 
    ForgotPasswordText,
    CreateAccountButton,
    CreateAccountButtonText
} from './styles';

const SignIn: React.FC = () => {
    const navigation = useNavigation();
    const formRef = useRef<FormHandles>(null);

    const handleSignIn = useCallback((data: object) => {
        console.log(data);
    },[]);
    
    return (
        <>
        <KeyboardAvoidingView 
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView 
                contentContainerStyle={{ flex: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <Container>
                    <Image source={logoImg} />

                    <View>
                        <Title>Faça seu Logon</Title>
                    </View>

                    <Form ref={formRef} onSubmit={handleSignIn}>
                        <Input name="email" icon="mail" placeholder="E-mail" />
                        <Input name="password" icon="lock" placeholder="Senha" />

                        <Button
                            onPress={() => {
                                formRef.current?.submitForm();
                            }}
                        >Entrar</Button>
                    </Form>

                    <ForgotPassword>
                        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                    </ForgotPassword>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
        <CreateAccountButton>
            <Icon name="log-in" size={20} color="#ff9000" />
            <CreateAccountButtonText onPress={() => navigation.navigate('SignUp')}>Criar uma conta</CreateAccountButtonText>
        </CreateAccountButton>
        </>
    );
};

export default SignIn;