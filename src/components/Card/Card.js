import React from 'react'

const Card = (props) => {
    const handleClick = () => {
        props.setIsClicked(true);
        props.setClickedMovie(props.movieData)
    }

    return (
        <div onClick={() => handleClick()}>
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