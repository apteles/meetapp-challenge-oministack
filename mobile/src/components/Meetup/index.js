import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Container,
    Banner,
    Info,
    Title,
    Time,
    Location,
    Person,
    Subscription
} from './styles';

export default function Appointment({ data }) {
    const dateParsed = parseISO(data.date);
    const dateFormatted = useMemo(
        () => format(dateParsed, "d 'de' MMMM ', às' h'h'", { locale: pt }),
        [dateParsed]
    );
    return (
        <Container>
            <Banner
                source={{
                    uri: 'https://picsum.photos/id/237/200/300'
                }}
            />
            <Info>
                <Title>{data.title}</Title>
                <Time>
                    <Icon name="event" size={20} color="#ccc" />
                    <Text>{dateFormatted}</Text>
                </Time>
                <Location>
                    <Icon name="location-on" size={20} color="#ccc" />
                    <Text>{data.location}</Text>
                </Location>
                <Person>
                    <Icon name="person" size={20} color="#ccc" />
                    <Text>Organizador: {data.user.name}</Text>
                </Person>
                <Subscription onPress={() => {}}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                        Realizar inscrição
                    </Text>
                </Subscription>
            </Info>
        </Container>
    );
}
