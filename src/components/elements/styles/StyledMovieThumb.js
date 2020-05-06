import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
    position: relative;

    img {
        width: 100%;
        height: auto;
        max-height: 350px;
        transition: all 0.3s;
        object-fit: cover;
        border-radius: 5px;

        :hover {
            opacity: 0.8;
        }
    }
    p {
        margin: 10px 10px;
        font-family: 'Abel', sans-serif;
        font-size: 22px;
        line-height: 22px;
        color: black;
        text-align: center;

        @media screen and (max-width: 720px) {
        font-size: 16px;
        line-height: 16px;
        color: black;
        }
    }
    .rating {
        background-color: rgba(44, 44, 44, 0.363);
        border-radius:50%;
        height: 30px;
        width: 30px;
        font-size: 14px;
        text-align: center;
        position: absolute;
        line-height: 30px;
        top:8px;
        right:8px;
        font-family: 'OpenSans', sans-serif;
        color: #fff;
    }
    .clickable {
        cursor: pointer;
    }
`