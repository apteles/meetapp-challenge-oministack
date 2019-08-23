import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Container,
    Meetup,
    Banner,
    Info,
    Title,
    Time,
    Location,
    Person
} from './styles';

export default function Appointment() {
    return (
        <Container>
            <Banner
                source={{
                    uri: 'https://picsum.photos/id/237/200/300'
                }}
            />
            <Info>
                <Title>John Doe</Title>
                <Time>
                    <Icon name="event" size={20} color="#ccc" />
                    <Text>24 de Junho, às 20h</Text>
                </Time>
                <Location>
                    <Icon name="location-on" size={20} color="#ccc" />
                    <Text>Av 24 de Outubro, 2658</Text>
                </Location>
                <Person>
                    <Icon name="person" size={20} color="#ccc" />
                    <Text>Organizador: Mary Doe</Text>
                </Person>
            </Info>
        </Container>
    );
}
