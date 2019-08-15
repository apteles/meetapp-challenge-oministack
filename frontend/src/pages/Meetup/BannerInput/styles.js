import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    align-self: center;
    margin: 30px 0;
    label {
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

        input {
            display: none;
        }
    }
`;

export const ImageWrapper = styled.div`
    height: 300px;
    background: rgba(0, 0, 0, 0.1);
    color: rgba(255, 255, 255, 0.7);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
