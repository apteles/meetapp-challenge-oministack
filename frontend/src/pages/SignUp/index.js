import React from 'react';
import { Link } from 'react-router-dom';
// import {Component} from 'styles';
import logo from '~/assets/logo.svg';

export default function SignUp() {
    return (
        <>
            <img src={logo} alt="Meetup" />

            <form>
                <input placeholder="Seu nome" />
                <input type="email" placeholder="Seu e-mail" />
                <input type="password" placeholder="Sua senha" />

                <button type="submit">Cadastrar</button>
                <Link to="/">Já tenho conta</Link>
            </form>
        </>
    );
}
