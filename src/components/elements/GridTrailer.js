import React from 'react'
import { StyledGridTrailer, StyledGridContentTrailer } from './styles/StyledGridTrailers'

const Grid = ({header, children}) => {
    return (
        <StyledGridTrailer >
        <h1>{header}</h1>
            <StyledGridContentTrailer>{children}</StyledGridContentTrailer>
        </StyledGridTrailer>
    )
}
export default Grid