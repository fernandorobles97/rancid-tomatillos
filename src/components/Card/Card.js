import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const handleClick = () => {
        props.setIsClicked(true);
        props.setClickedMovie(props.movieData)
    }

    return (
        <Link to={`${props.movieData.id}`}>
            <div className='individual-card' onClick={() => handleClick()}>
                <img src={props.movieData.poster_path} alt={`poster for ${props.movieData.title}`} />
                <div className='card-information' >
                    <h2>{props.movieData.title}</h2>
                    <div className='rating-release'>
                        <p>Rating: {props.movieData.average_rating}</p>
                        <p>Release Date: {props.movieData.release_date}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}



export default Card