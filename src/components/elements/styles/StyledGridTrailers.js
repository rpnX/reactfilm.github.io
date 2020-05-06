import styled from 'styled-components';

export const StyledGridTrailer = styled.div`
    padding: 0 20px;
    h1 {
    margin: 15px;
    font-family: 'Abel', sans-serif;
    font-size: 42px;

    @media screen and (max-width: 768px) {
        font-size: 22px;  
    }
    }
`;

export const StyledGridContentTrailer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-gap: 40px;
    position: relative;

    .grid-element {
    animation: animateGrid 0.5s;
    }

    @keyframes animateGrid {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    }

    @media screen and (max-width: 1136px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    }

    @media screen and (max-width: 805px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    }

`