import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import { Container, Header, List } from './styles';
import logo from '~/assets/logo.png';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
    return (
        <Background>
            <Container>
                <Header>
                    <Image source={logo} />
                </Header>
                <List
                    data={data}
                    keyExtractor={key => String(key)}
                    renderItem={({ item }) => <Meetup data={item} />}
                />
            </Container>
        </Background>
    );
}

Dashboard.navigationOptions = {
    tabBarLabel: 'Meetups',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="format-list-bulleted" size={20} color={tintColor} />
    )
};
