import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

export default function Edit() {
    return (
        <Container>
            <Form>
                <Input name="title" placeholder="Titulo do Meetup" />
                <Textarea name="description" placeholder="Descrição completa" />
                <Input name="date" placeholder="Data do meetup" />
                <Input name="location" placeholder="Localização" />
                <button type="submit">
                    <MdAddCircleOutline size={22} color="#fff" />
                    Salvar meetup
                </button>
            </Form>
        </Container>
    );
}
