import styled from 'styled-components';

export const StyledHeader = styled.div`
    position: relative;
    background: black;
    padding: 0 10px;
    box-sizing: border-box;
    
    .header-content {
        min-height: 80px;
        padding: 10px 0px;  
        margin: 0 auto;
        box-sizing: border-box;
        opacity: 0.7;

        @media screen and (max-width: 500px) {
            max-width: 1280px;
            min-height: 0px;
        }
    }

    .sitelogo{
        width: 90px;
        margin-top: 5px;
        @media screen and (max-width: 500px) {
        width: 90px;
        margin-top: 5px;
        }
    }
    .header-text{
        position: absolute;
        top:27px;

        font-family: 'Abel', sans-serif;
        color: #ccc;
        font-size: 32px;
        @media screen and (max-width: 450px) {
            font-size: 16px;
            top:37px;
        }


    }

    .tmdb{
        width: 122px;
        margin-top: 13px;
        float: right;

        @media screen and (max-width: 500px) {
        display: inline-block;
        width: 90px;
        margin-top: 0px;
        }
    }
`;