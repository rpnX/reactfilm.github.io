import React from 'react'
import { Link } from '@reach/router'

import { StyledMovieThumb } from './styles/StyledMovieThumb'

const MovieThumb = ({clickable, image, movieId, movieName, rating}) => {
    return (
        <StyledMovieThumb>
                {clickable ? (
                    <Link to={`/reactfilm/${movieId}`}>
                    <img className="clickable" src={image} alt="moviethumb" /></Link>
                    ) : (
                    <img src={image} alt="moviethumb" />
                    )}
                <div className="rating">
                    {rating}
                </div>
                <p>{movieName}</p>
        </StyledMovieThumb>
    )
}
export default MovieThumb
