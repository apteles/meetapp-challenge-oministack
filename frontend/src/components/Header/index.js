import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import logo from '~/assets/logo.svg';
import { signOut } from '~/store/modules/auth/action';

export default function Header() {
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/dashboard">
                        <img src={logo} alt="meetup" />
                    </Link>
                </nav>
                <aside>
                    <div>
                        <strong>{profile.name}</strong>
                        <Link to="/profile">Meu Perfil</Link>
                    </div>
                    <button type="button" onClick={handleSignOut}>
                        Sair
                    </button>
                </aside>
            </Content>
        </Container>
    );
}
