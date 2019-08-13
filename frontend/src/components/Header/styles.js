import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.6);
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 70px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;
    }

    aside {
        display: flex;

        div {
            display: flex;
            flex-direction: column;
            margin-right: 20px;

            strong {
                font-weight: bold;
                color: #fff;
                margin-bottom: 5px;
            }

            a {
                font-size: 12px;
                color: rgba(255, 255, 255, 0.7);
            }
        }

        button {
            width: 71px;
            height: 42px;
            background: #d44059;
            color: #fff;
            border: 0;
            border-radius: 4px;
        }
    }
`;
