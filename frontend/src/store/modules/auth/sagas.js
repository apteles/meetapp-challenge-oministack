import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '~/services/history';
import { signInSuccess, signFailure } from './action';
import api from '~/services/api';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'session', {
            email,
            password,
        });

        const { token, user } = response.data;

        yield put(signInSuccess(token, user));

        history.push('/dashboard');
    } catch (error) {
        yield put(signFailure());
        console.tron.log('erro ao logar');
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
