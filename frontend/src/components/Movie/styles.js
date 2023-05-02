import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    background: rgb(255, 133, 135, 5%);

    border: none;
    border-radius: 10px;
    
    padding: 22px;
    margin-bottom: 16px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    p {
        margin-top: 15px;
        color:  ${({theme}) => theme.COLORS.TEXT_COLOR_GRAY_400};
        font-size: 16px;
    }

    svg {
        margin-top: 15px;
        color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR_RED};;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;