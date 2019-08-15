import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Dashboard from '../pages/Dashboard';
import Meetup from '../pages/Meetup';
import MeetupCreate from '../pages/Meetup/Create';
import MeetupEdit from '../pages/Meetup/Edit';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />

            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/meetup" exact component={Meetup} isPrivate />
            <Route path="/meetup/create" component={MeetupCreate} isPrivate />
            <Route path="/meetup/:id/edit" component={MeetupEdit} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />
        </Switch>
    );
}
