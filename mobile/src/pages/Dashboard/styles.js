import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    background: #1e0e21;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { padding: 30 },
    showsVerticalScrollIndicator: false
})``;
