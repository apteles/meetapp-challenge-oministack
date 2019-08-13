import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

export default function Profile() {
    return (
        <Container>
            <Form>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" placeholder="Seu endereço de e-mail" />
                <hr />

                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha atual"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirme sua senha atual"
                />

                <button type="submit">
                    <MdAddCircleOutline size={22} color="#fff" />
                    Atualizar perfil
                </button>
            </Form>
        </Container>
    );
}
