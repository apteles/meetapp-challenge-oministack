import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdKeyboardArrowRight, MdAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, MeetupList, MeetupItem } from './styles';
import api from '~/services/api';

export default function DashBoard() {
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        async function loadMeetups() {
            const response = await api.get('meetups');

            setMeetups(response.data);
        }

        loadMeetups();
    }, []);

    return (
        <Container>
            <header>
                <h1>Meus meetups</h1>
                <Link to="meetup/create">
                    <MdAddCircleOutline size="22" color="#fff" />
                    Novo meetup
                </Link>
            </header>
            <MeetupList>
                {meetups.map(meetup => (
                    <MeetupItem key={meetup.id}>
                        <p>{meetup.title}</p>
                        <div>
                            <span>
                                {format(
                                    parseISO(meetup.date),
                                    "d 'de' MMMM ', às' h'h'",
                                    { locale: pt }
                                )}
                            </span>
                            <Link to={`/meetup/${meetup.id}`}>
                                <MdKeyboardArrowRight size="22" color="#fff" />
                            </Link>
                        </div>
                    </MeetupItem>
                ))}
            </MeetupList>
        </Container>
    );
}
