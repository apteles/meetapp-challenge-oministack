import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import api from '~/services/api';
import logo from '~/assets/logo.png';

import { Container, Header, List } from './styles';

export default function Subscription({ navigation }) {
    const [subscriptions, setSubscriptions] = useState([]);

    async function loadSubscriptions() {
        const response = await api.get('subscriptions');
        setSubscriptions(response.data);
    }

    async function handleSubscription(id) {
        const subscription = subscriptions.filter(
            item => item.Meetup.id === id
        );
        await api.delete(`subscriptions/${subscription[0].id}`);
    }

    useEffect(() => {
        loadSubscriptions();

        const listener = navigation.addListener('didFocus', () => {
            loadSubscriptions();
        });

        return () => {
            listener.remove();
        };
    }, [navigation]);

    return (
        <Background>
            <Container>
                <Header>
                    <Image source={logo} />
                </Header>

                <List
                    data={subscriptions}
                    keyExtractor={key => String(key.id)}
                    renderItem={({ item }) => (
                        <Meetup
                            label="Cancelar inscrição"
                            data={item.Meetup}
                            onSubmit={handleSubscription}
                        />
                    )}
                />
            </Container>
        </Background>
    );
}

Subscription.navigationOptions = {
    tabBarLabel: 'Inscrições',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="tag" size={20} color={tintColor} />
    )
};
