import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR_RED};
    color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR_300};

    display: flex;
    justify-content: center;
    align-items: center;


    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }

`;