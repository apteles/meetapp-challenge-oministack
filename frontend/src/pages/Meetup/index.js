import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
    MdModeEdit,
    MdDeleteForever,
    MdEvent,
    MdLocationOn,
} from 'react-icons/md';
import { Container, Actions } from './styles';
import api from '~/services/api';

export default function Meetup({ match }) {
    const [meetup, setMeetup] = useState({});
    const { params } = match;

    useEffect(() => {
        async function loadMeetup() {
            const response = await api.get(`/meetups/${params.id}`);

            setMeetup(response.data);
        }

        loadMeetup();
    }, [params.id]);

    async function handleDelete() {}

    return (
        <Container>
            <header>
                <h1>{meetup.title}</h1>

                <Actions>
                    <Link to={`/meetup/${meetup.id}/edit`}>
                        <MdModeEdit size="22" color="#fff" />
                        Editar
                    </Link>
                    <button type="button" onClick={handleDelete}>
                        <MdDeleteForever size="22" color="#fff" />
                        Deletar
                    </button>
                </Actions>
            </header>
            <section>
                <img
                    src={meetup.banner ? meetup.banner.url : ''}
                    alt={meetup.title}
                />
                <p>{meetup.description}</p>

                <div>
                    <span>
                        <MdEvent size="20" color="#fff" />
                        {meetup.date}
                    </span>
                    <span>
                        <MdLocationOn size="20" color="#fff" />
                        {meetup.location}
                    </span>
                </div>
            </section>
        </Container>
    );
}
