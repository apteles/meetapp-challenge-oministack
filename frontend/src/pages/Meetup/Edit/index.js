import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from '~/pages/Meetup/Create/styles';
import BannerInput from '~/pages/Meetup/BannerInput';
import api from '~/services/api';

export default function Edit({ match }) {
    const [meetup, setMeetup] = useState({});

    useEffect(() => {
        async function loadMeetup() {
            const response = await api.get(`/meetups/${match.params.id}`);

            setMeetup(response.data);
        }

        loadMeetup();
    }, []); // eslint-disable-line

    return (
        <Container>
            <Form initialData={meetup}>
                <BannerInput name="banner" banner={meetup.banner} />
                <Input name="title" placeholder="Titulo do Meetup" />
                <Input
                    name="description"
                    multiline
                    placeholder="Descrição completa"
                    value={meetup.description}
                    onChange={e =>
                        setMeetup({ ...meetup, description: e.target.value })
                    }
                />
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
