import React from 'react'
import { StyledLoadMoreBtn } from './styles/StyledLoadMoreBtn'

const LoadMoreBtn = ({callback}) => {
    return (
        <StyledLoadMoreBtn type="button" onClick={callback} >
            Load More
        </StyledLoadMoreBtn>
    )
}
export default LoadMoreBtn