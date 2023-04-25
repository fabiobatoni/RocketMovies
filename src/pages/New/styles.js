import styled from 'styled-components'

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
`;

export const Main = styled.div`
    height: 700px;
    overflow-y: auto;
    margin: 0 auto;
    width: 76%;

    > h1 {
        margin-bottom: 48px;
    }

    > textarea {
       height: 300px;
       margin-bottom: 48px;
    }

    > span {
        color: ${({theme}) => theme.COLORS.TEXT_COLOR_GRAY_400}; 
    }

    .tags {
        margin-top: 30px;
        height: 88px;
        display: flex;
        align-items: center;
        background: ${({theme}) => theme.COLORS.BLACK};
        border-radius: 10px;

        > div{
            margin: 10px;
        }
    }
`;

export const Inputs = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    > button {
        margin: 10px;
    }

    button:nth-child(1) {
        color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR_RED}; 
        background: ${({theme}) => theme.COLORS.BLACK}; 
    }
`;