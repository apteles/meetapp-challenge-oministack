import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from '~/pages/Meetup/Create/styles';
import BannerInput from '~/pages/Meetup/BannerInput';
import {
    meetupRequest,
    updateMeetupRequest,
} from '~/store/modules/meetup/actions';

export default function Edit({ match }) {
    const loading = useSelector(state => state.meetup.loading);
    const meetup = useSelector(state => state.meetup.meetup);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(meetupRequest(match.params.id));
    }, []); // eslint-disable-line

    function handleSubmit({ title, description, location, date, banner_id }) {
        const { id } = match.params;
        dispatch(
            updateMeetupRequest({
                id,
                title,
                description,
                location,
                date,
                banner_id,
            })
        );
    }

    return (
        <Container>
            {loading ? (
                'Carregando'
            ) : (
                <Form initialData={meetup} onSubmit={handleSubmit}>
                    <BannerInput name="banner_id" />
                    <Input name="title" placeholder="Titulo do Meetup" />
                    <Input
                        name="description"
                        multiline
                        placeholder="Descrição completa"
                    />
                    <Input name="date" placeholder="Data do meetup" />
                    <Input name="location" placeholder="Localização" />
                    <button type="submit">
                        <MdAddCircleOutline size={22} color="#fff" />
                        Salvar meetup
                    </button>
                </Form>
            )}
        </Container>
    );
}
