import React from 'react'
// import './Header.css'
import sitelogo from '../images/logo.png'
import tmdb from '../images/tmdb_logo.svg'
import { StyledHeader } from './styles/StyledHeader'
import { Link } from '@reach/router'


const  Header = () => {
    return (
        <StyledHeader>
            <div className="header-content">
                <Link to="/reactfilm/"><img className="sitelogo" src={sitelogo} alt="sitelogo"></img>
                <span className="header-text">CinemaScore</span></Link>
                <img className="tmdb" src={tmdb} alt="tmdb"></img>
            </div>
        </StyledHeader>
    )
}

export default Header







// const  Header = () => {
//     return (
//         <div className="header">
//             <div className="header-content">
//                 <img className="sitelogo" src={sitelogo} alt="sitelogo"></img>
//                 <img className="tmdb" src={tmdb} alt="tmdb"></img>
//             </div>
//         </div>
//     )
// }
// export default Header
