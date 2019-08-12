import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
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
        toast.error('Falha na autenticação, verifique seus dados.');
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;

        yield call(api.post, 'users', {
            name,
            email,
            password,
        });

        history.push('/');
    } catch (error) {
        toast.error('Falha ao cadastrar usuário, verifique seus dados.');
        yield put(signFailure());
    }
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
