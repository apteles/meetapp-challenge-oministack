import React, { useEffect, useState } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from '~/pages/Meetup/Create/styles';
import BannerInput from '~/pages/Meetup/BannerInput';
import api from '~/services/api';

export default function Edit({ match }) {
    const [meetup, setMeetup] = useState({});
    const { params } = match;

    useEffect(() => {
        async function loadMeetup() {
            const response = await api.get(`/meetups/${params.id}`);

            setMeetup(response.data);
        }

        loadMeetup();
    }, []); // eslint-disable-line

    return (
        <Container>
            <Form initialData={meetup}>
                <BannerInput name="banner" />
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
