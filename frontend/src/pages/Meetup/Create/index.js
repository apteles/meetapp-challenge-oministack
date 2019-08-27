import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import BannerInput from '../BannerInput';
import { Container } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Create() {
    const token = useSelector(state => state.auth.token);
    const { profile: userLogged } = useSelector(state => state.user);
    async function handleSubmit({
        title,
        description,
        date,
        location,
        banner_id,
    }) {
        await api.post(
            'meetups',
            {
                title,
                description,
                date,
                location,
                banner_id,
                user_id: userLogged.id,
            },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        history.push('/dashboard');
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <BannerInput name="banner" />
                <Input name="title" placeholder="Titulo do Meetup" />
                <Textarea name="description" placeholder="Descrição completa" />
                <Input name="date" type="date" placeholder="Data do meetup" />
                <Input name="location" placeholder="Localização" />
                <button type="submit">
                    <MdAddCircleOutline size={22} color="#fff" />
                    Criar meetup
                </button>
            </Form>
        </Container>
    );
}
