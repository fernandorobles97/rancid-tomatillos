import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ id, poster_path, title, average_rating, release_date }) => {
    return (
        <Link to={`${id}`}>
            <div className='individual-card'>
                <img src={ poster_path } alt={`poster for ${title}`} />
                <div className='card-information' >
                    <h2>{ title }</h2>
                    <div className='rating-release'>
                        <p>Rating: {average_rating}</p>
                        <p>Release Date: {release_date}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;

Card.propTypes = {
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    average_rating: PropTypes.number,
    release_date: PropTypes.string
}