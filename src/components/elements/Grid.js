import React from 'react'
import { StyledGrid, StyledGridContent } from './styles/StyledGrid'

const GridTrailer = ({header, children}) => {
    return (
        <StyledGrid >
        <h1>{header}</h1>
            <StyledGridContent>{children}</StyledGridContent>
        </StyledGrid>
    )
}
export default GridTrailer