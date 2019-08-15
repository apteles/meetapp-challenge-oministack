import React from 'react';
import { Link } from 'react-router-dom';
import {
    MdModeEdit,
    MdDeleteForever,
    MdEvent,
    MdLocationOn,
} from 'react-icons/md';
import { Container, Actions } from './styles';

export default function Meetup() {
    return (
        <Container>
            <header>
                <h1>Meetup #01</h1>

                <Actions>
                    <Link to="/meetups/new">
                        <MdModeEdit size="22" color="#fff" />
                        Editar
                    </Link>
                    <button type="button">
                        <MdDeleteForever size="22" color="#fff" />
                        Deletar
                    </button>
                </Actions>
            </header>
            <section>
                <img
                    src="https://via.placeholder.com/1200x300.png"
                    alt="meetup"
                />
                <p>
                    É um fato conhecido de todos que um leitor se distrairá com
                    o conteúdo de texto legível de uma página quando estiver
                    examinando sua diagramação. A vantagem de usar Lorem Ipsum é
                    que ele tem uma distribuição normal de letras, ao contrário
                    de Conteúdo aqui, conteúdo aqui, fazendo com que ele tenha
                    uma aparência similar a de um texto legível.
                </p>

                <div>
                    <span>
                        <MdEvent size="20" color="#fff" />
                        28 de Agosto, às 20h
                    </span>
                    <span>
                        <MdLocationOn size="20" color="#fff" />
                        Av 24 de Outubro, 260
                    </span>
                </div>
            </section>
        </Container>
    );
}
