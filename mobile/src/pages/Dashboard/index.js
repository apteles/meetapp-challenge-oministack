import React, { useEffect, useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import { Container, Header, List, SelectionDate } from './styles';
import logo from '~/assets/logo.png';
import api from '~/services/api';

export default function Dashboard() {
    const [meetups, setMeetups] = useState([]);
    const [date, setDate] = useState(new Date());

    const dateFormatted = useMemo(
        () => format(date, "d 'de' MMMM", { locale: pt }),
        [date]
    );

    useEffect(() => {
        async function loadMeetups() {
            const response = await api.get('meetups', {
                params: { date }
            });

            setMeetups(response.data);
        }

        loadMeetups();
    }, [date]);

    function handlePrevDay() {
        setDate(subDays(date, 1));
    }
    function handleNextDay() {
        setDate(addDays(date, 1));
    }

    return (
        <Background>
            <Container>
                <Header>
                    <Image source={logo} />
                </Header>
                <SelectionDate>
                    <TouchableOpacity type="button" onClick={handlePrevDay}>
                        <Icon name="chevron-left" size={36} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, color: '#fff' }}>
                        {dateFormatted}
                    </Text>
                    <TouchableOpacity type="button" onClick={handleNextDay}>
                        <Icon name="chevron-right" size={36} color="#fff" />
                    </TouchableOpacity>
                </SelectionDate>

                <List
                    data={meetups}
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
