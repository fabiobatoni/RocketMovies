import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR_400};

    display: flex;
    justify-content: space-between;

    padding: 18px 200px;


`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    padding: 30px;

    font-size: 14px;
    color: ${({theme}) => theme.COLORS.TEXT_COLOR_RED};

`;


export const Profile = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border-color: '#FFFFFF';
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 18px;

        span {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.TEXT_COLOR_GRAY_300};
            text-align: end;
            margin-right: 10px
        }

        strong {
            white-space: nowrap;
            font-size: 12px;
            color: ${({theme}) => theme.COLORS.TEXT_COLOR_GRAY_200};
            margin-right: 10px;
        }
    }
`

export const SignOut = styled.button`
    border: none;
    font-size: 14px;
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.TEXT_COLOR_GRAY_300};
    text-align: end;
    margin-right: 10px

`
