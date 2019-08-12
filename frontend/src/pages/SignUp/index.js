import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/action';

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
        .email('Insira um e-mail valido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'Nome minimo 6 caracteres')
        .required('A senha é obrigatória'),
});

export default function SignUp() {
    const dispatch = useDispatch();

    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="Meetup" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Seu nome" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                />

                <button type="submit">
                    {loading ? 'Carregando' : 'Cadastrar'}
                </button>
                <Link to="/">Já tenho conta</Link>
            </Form>
        </>
    );
}
