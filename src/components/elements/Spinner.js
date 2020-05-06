import React from 'react'
import styled from 'styled-components'

const StyledSpiner = styled.div`
    border: 5px solid rgb(0, 0, 0);
    border-top: 5px solid #aa9f9f;
    border-bottom: 5px solid #aa9f9f;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 20px auto;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }   

`

export default function Spinner() {
    return (
        <StyledSpiner />
    )
}
