import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
    meetupsSuccess,
    meetupSuccess,
    updateMeetupSuccess,
    meetupFailure,
} from './actions';

export function* loadMeetup({ payload }) {
    try {
        const { id } = payload;
        const response = yield call(api.get, `/meetups/${id}`);

        yield put(meetupSuccess(response.data));
    } catch (error) {
        yield put(meetupFailure());
        toast.error('Falha ao carregar o meetup. Tente mais tarde.');
    }
}

export function* loadMeetups() {
    try {
        const response = yield call(api.get, '/meetups');

        yield put(meetupsSuccess(response.data));
    } catch (error) {
        yield put(meetupFailure());
        toast.error('Falha ao carregar o meetup. Tente mais tarde.');
    }
}

export function* updateMeetup({ payload }) {
    try {
        const { id, title, description, location, date, banner_id } = payload;

        const response = yield call(api.put, `/meetups/${id}`, {
            id,
            title,
            description,
            location,
            date,
            banner_id,
        });

        yield put(updateMeetupSuccess(id, response.data));
    } catch (error) {
        yield put(meetupFailure());
        toast.error('Falha ao atualizar o meetup. Tente mais tarde.');
    }
}

export default all([
    takeLatest('@meetup/MEETUP_REQUEST', loadMeetup),
    takeLatest('@meetup/MEETUPS_REQUEST', loadMeetups),
    takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
