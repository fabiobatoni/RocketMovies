import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    margin: 0 auto;

    > header a {
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 40px 300px;
        color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR_RED};
        font-size: 16px;
    }

    

`

export const Title = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;

    margin: 20px 300px;

    h1 {
        margin-right: 20px;
        font-size: 36px;
    }

    > svg {
        color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR_RED};
        font-size: 20px;
    }

`;



export const Avatar = styled.div`
    position: relative;
    margin: 18px;
    display: flex;
    text-align: center;

    width: 16px;
    height: 16px;
    
    > img {
        border-radius: 50%;
        width: 18px;
        height: 18px;
    }

    > span {
        margin-left: 10px;
        white-space: nowrap;
        font-size: 14px;
    }

`;

export const Main = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 20px 280px;

    overflow-y: auto;

    > svg {
        color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR_RED}; 
        margin-left: 120px;
    }

    > span {
        margin-left: 5px;
        font-size: 14px;
    }
`;

export const Section = styled.div`

    margin: 20px 300px;

    > p {
        margin-top: 48px;
        font-size: 16px;
        text-align: justify;

    }
`

export const Content = styled.div`

    height: 500px;
    overflow-y: auto;
`



