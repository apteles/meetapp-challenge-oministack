import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import Background from '~/components/Background';

import logo from '~/assets/logo.png';
import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText
} from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function Signin({ navigation }) {
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loading = useSelector(state => state.auth.login);
    function handleSubmit() {
        dispatch(signInRequest(email, password));
    }

    return (
        <Background>
            <Container>
                <Image source={logo} />
                <Form>
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <SubmitButton loading={loading} onPress={handleSubmit}>
                        Entrar
                    </SubmitButton>
                </Form>
                <SignLink onPress={() => navigation.navigate('SignUp')}>
                    <SignLinkText>Criar conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
