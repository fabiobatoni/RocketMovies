import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Heading = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 230px;
    

    > h1 {
        font-size:32px;
        width: 480%;
    }
`;

export const Content = styled.div `
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;
`;