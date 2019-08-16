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

        api.defaults.headers.Authorization = `Bearer ${token}`;

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

function setTokenDefaultHeaders({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}
function signOut() {
    history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setTokenDefaultHeaders),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
