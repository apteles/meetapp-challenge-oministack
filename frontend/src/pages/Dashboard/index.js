import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdKeyboardArrowRight, MdAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, MeetupList, MeetupItem } from './styles';
import { meetupsRequest } from '~/store/modules/meetup/actions';

export default function DashBoard() {
    // const [meetups, setMeetups] = useState([]);
    const dispatch = useDispatch();
    const loading = useSelector(state => state.meetup.loading);
    const meetups = useSelector(state => state.meetup.meetups);

    useEffect(() => {
        dispatch(meetupsRequest());
    }, [dispatch]);

    return (
        <Container>
            <header>
                <h1>Meus meetups</h1>
                <Link to="meetup/create">
                    <MdAddCircleOutline size="22" color="#fff" />
                    Novo meetup
                </Link>
            </header>

            {loading ? (
                'Carregando...'
            ) : (
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
                                    <MdKeyboardArrowRight
                                        size="22"
                                        color="#fff"
                                    />
                                </Link>
                            </div>
                        </MeetupItem>
                    ))}
                </MeetupList>
            )}
        </Container>
    );
}
