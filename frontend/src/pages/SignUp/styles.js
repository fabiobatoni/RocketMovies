import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.TEXT_COLOR_RED};    
    }

    > h2 {
        margin-right: 150px;
        font-size: 24px;
        margin-top: 84px;
        margin-bottom: 24px;
    }

    p {
        margin-right: 20px;
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.TEXT_COLOR_GRAY_100};    
    }

    > a {

        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 42px;
        color: ${({theme}) => theme.COLORS.TEXT_COLOR_RED};
    }
`
export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;