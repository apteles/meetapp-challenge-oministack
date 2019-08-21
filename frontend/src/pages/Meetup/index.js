import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

    const { id, title, description, location, date, banner } = meetup;
    return (
        <Container>
            <header>
                <h1>{title}</h1>

                <Actions>
                    <Link to={`/meetup/${id}/edit`}>
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
                <img src={banner ? banner.url : ''} alt={title} />
                <p>{description}</p>

                <div>
                    <span>
                        <MdEvent size="20" color="#fff" />
                        {date}
                    </span>
                    <span>
                        <MdLocationOn size="20" color="#fff" />
                        {location}
                    </span>
                </div>
            </section>
        </Container>
    );
}
