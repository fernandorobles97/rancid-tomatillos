import React from 'react'

const Card = (props) => {
    console.log(props.movieData)
    return (
        <div>
            <img src={props.movieData.poster_path} alt={`poster for ${props.movieData.title}`} />
            <div>
                <h2>{props.movieData.title}</h2>
                <div>
                    <p>Rating: {props.movieData.average_rating}</p>
                    <p>Release Date: {props.movieData.release_date}</p>
                </div>
            </div>
        </div>
    )
}



export default Card