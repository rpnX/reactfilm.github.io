import React from 'react'

import Navigation from './Navigation';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actors from './Actors';
import Spinner from './Spinner';
import Grid from './Grid';
import Trailers from './Trailers';
import GridTrailer from './GridTrailer'

import { useMovieFetch } from '../hooks/useMovieFetch';



const Movie = ({ movieId }) => {
    const [movie, loading, error] = useMovieFetch(movieId);
        console.log(movieId);
    
        if (error) return <div>Something went wrong ...</div>;
        if (loading) return <Spinner />;
    
        return (
        <>
        <Navigation movie={movie.title} />
        <MovieInfo movie={movie} />
        <MovieInfoBar 
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
        />
        <GridTrailer header="trailers">
            {movie.videoResult.map(res => (<Trailers
            key={res.id}
            video = {res.key}
            />))}
        </GridTrailer>
        
        <Grid header="actors">
            {movie.actors.map(actor => (
                <Actors
                    key={actor.credit_id}
                    actor={actor} />
                ))}     
        </Grid>
        </>
        )
    };
    
export default Movie;