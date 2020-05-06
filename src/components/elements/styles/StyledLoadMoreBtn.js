import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.div`
    text-align: center;
    transition: 0.1s;
    font-family: 'Abel', sans-serif;
    font-size: 24px;
    margin: 15px auto 15px;
    padding: 10px;
    height: 50px;
    width: 250px;
    border-radius: 25px;
    background-color: black;
    color: #fff;
    border: none;
    text-align: center;
    :hover {
        opacity: 0.9;
        cursor: pointer;
    }
    :active {
        opacity:0.9;
        transition: 0.1s;
        border-inline: 2px solid black;
        background-color: rgb(44, 44, 44);
    }
`