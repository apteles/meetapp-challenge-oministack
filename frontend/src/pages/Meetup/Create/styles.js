import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    form {
        display: flex;
        flex-direction: column;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        textarea {
            height: 200px;
            border: 0;
            border-radius: 4px;
            padding: 15px;
            margin: 0 0 10px;
            background: rgba(0, 0, 0, 0.1);
            color: rgba(255, 255, 255, 0.7);
            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }
        button {
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
            align-self: flex-end;
            font-weight: normal;
            border: none;
        }
    }
`;
