import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY} from '../../config'

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);

        try {
            const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
            const result = await (await fetch(endpoint)).json();
            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            const creditsResult = await (await fetch(creditsEndpoint)).json();
            const directors = creditsResult.crew.filter(
                member => member.job === 'Director'
            );
            const videoEndpoint = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`
            const videoResult = await ( await fetch(videoEndpoint)).json()

            setState({
                ...result,
                actors: creditsResult.cast,
                directors,
                videoResult: videoResult.results
            })
            
            
        } catch (error) {
            setError(true);
            }
            setLoading(false);
        }, [movieId])

        useEffect(() => {
            if (localStorage[movieId]) {
                setState(JSON.parse(localStorage[movieId]));
                setLoading(false);
                } else {
                fetchData();
                }
            }, [fetchData, movieId]);
            
            useEffect(() => {
                localStorage.setItem(movieId, JSON.stringify(state));
            }, [movieId, state])
    
        return [state, loading, error];
    }
    