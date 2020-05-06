import React from 'react';
// import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../helpers';

import { StyledMovieInfoBar } from './styles/StyledMovieInfoBar';

const MovieInfoBar = ({ time, budget, revenue }) => {
    return (
    <StyledMovieInfoBar>
        <div className="movieinfobar-content">
        <div className="movieinfobar-content-col">
            <i className="material-icons time">timer</i>
            <span className="movieinfobar-info">
            Running time: {calcTime(time)}
            </span>
        </div>

        <div className="movieinfobar-content-col">
        <i className="material-icons budget">attach_money</i>
            <span className="movieinfobar-info">
            Budget: {convertMoney(budget)}
            </span>
        </div>

        <div className="movieinfobar-content-col">
            <i className="material-icons revenue">monetization_on</i>
            <span className="movieinfobar-info">
            Revenue: {convertMoney(revenue)}
            </span>
        </div>
        </div>
    </StyledMovieInfoBar>
    )
    };

export default MovieInfoBar;
