import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 50px 0;
        font-size: 32px;
        font-weight: bold;
        color: #fff;

        a {
            width: 172px;
            height: 42px;
            background: #d44059;
            color: #fff;
            font-size: 16px;
            border-radius: 4px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: normal;
        }
    }
`;

export const MeetupList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MeetupItem = styled.div`
    height: 62px;
    padding: 0 30px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
    color: #fff;
    font-weight: bold;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            color: rgba(255, 255, 255, 0.7);
            font-weight: normal;
        }
        a {
            margin-left: 20px;
        }
    }
`;
