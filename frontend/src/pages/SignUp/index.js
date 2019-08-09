import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

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
    function handleSubmit(data) {
        console.tron.log('Formulário enviado', data);
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

                <button type="submit">Cadastrar</button>
                <Link to="/">Já tenho conta</Link>
            </Form>
        </>
    );
}
