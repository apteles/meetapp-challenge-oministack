import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from './styles';

export default function Profile() {
    return <Container />;
}

Profile.navigationOptions = {
    tabBarLabel: 'Meu Perfil',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="person" size={20} color={tintColor} />
    )
};
