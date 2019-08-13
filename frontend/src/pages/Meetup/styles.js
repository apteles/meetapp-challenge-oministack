import styled from 'styled-components';
import { darken } from 'polished';

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
            background: #4dbaf9;
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

    section {
        font-weight: normal;
        p {
            padding: 30px 0;
            font-size: 18px;
            color: #fff;

            line-height: 2;
        }

        div {
            color: rgba(255, 255, 255, 0.7);
            font-weight: normal;

            span {
                margin-right: 20px;

                svg {
                    margin-right: 10px;
                }
            }
        }
    }
`;

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        background: #d44059;
        width: 162px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-end;

        margin-left: 5px;
        height: 42px;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.3s;

        &:hover {
            background: ${darken(0.03, '#d44059')};
        }
    }
`;
