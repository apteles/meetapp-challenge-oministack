import React from 'react';
import { MdKeyboardArrowRight, MdAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, MeetupList, MeetupItem } from './styles';

export default function DashBoard() {
    return (
        <Container>
            <header>
                <h1>Meus meetups</h1>
                <Link to="meetups/new">
                    <MdAddCircleOutline size="22" color="#fff" />
                    Novo meetup
                </Link>
            </header>
            <MeetupList>
                <MeetupItem>
                    <p>Meetup #01</p>
                    <div>
                        <span>27 de Agosto, às 20h</span>
                        <Link to="/">
                            <MdKeyboardArrowRight size="22" color="#fff" />
                        </Link>
                    </div>
                </MeetupItem>
                <MeetupItem>
                    <p>Meetup #01</p>
                    <div>
                        <span>27 de Agosto, às 20h</span>
                        <Link to="/">
                            <MdKeyboardArrowRight size="22" color="#fff" />
                        </Link>
                    </div>
                </MeetupItem>
                <MeetupItem>
                    <p>Meetup #01</p>
                    <div>
                        <span>27 de Agosto, às 20h</span>
                        <Link to="/">
                            <MdKeyboardArrowRight size="22" color="#fff" />
                        </Link>
                    </div>
                </MeetupItem>
                <MeetupItem>
                    <p>Meetup #01</p>
                    <div>
                        <span>27 de Agosto, às 20h</span>
                        <Link to="/">
                            <MdKeyboardArrowRight size="22" color="#fff" />
                        </Link>
                    </div>
                </MeetupItem>
            </MeetupList>
        </Container>
    );
}
