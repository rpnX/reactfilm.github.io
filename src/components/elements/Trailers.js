import React from 'react'
import styled from 'styled-components';
import YouTube from 'react-youtube';


const Trailers = ({video}) => {
    return (
        <StyledTrailers>
            <YouTube
                videoId={video}                 
            />
        </StyledTrailers>
    )
}
export default Trailers


export const StyledTrailers = styled.div`
    margin: auto;
    iframe{
        width: 360px;
        height: 240px;
        @media screen and (max-width: 805px) {
            width: 480px;
            height: 360px;
        }
        @media screen and (max-width: 520px) {
            width: 360px;
            height: 240px;
        }
        @media screen and (max-width: 440px) {
            width: 250px;
            height: 180px;
        }
    }
`;


