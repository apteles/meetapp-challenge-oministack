import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import logo from '~/assets/logo.svg';

export default function Header() {
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
                        <strong>John Doe</strong>
                        <Link to="/profile">Meu Perfil</Link>
                    </div>
                    <button type="button">Sair</button>
                </aside>
            </Content>
        </Container>
    );
}
