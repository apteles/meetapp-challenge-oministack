import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 20px;
    border-radius: 4px;
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Banner = styled.Image`
    width: 100%;
    height: 200px;
`;
export const Info = styled.View`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: flex-start;
`;
export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`;
export const Time = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    color: #ccc;
`;
export const Location = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const Person = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const Subscription = styled.TouchableOpacity`
    width: 100%;
    margin-top: 15px;
    padding: 15px;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
    background: #f94d6a;
    display: flex;
    align-items: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #ccc;
    margin-left: 10px;
`;
