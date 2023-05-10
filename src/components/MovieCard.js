import React from "react";
import "../App.css";
import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom';

export default function MovieCard({ movie }) {

    const handleClick = () => {
        localStorage.setItem('movie', JSON.stringify(movie));
      };

    const getMovieCard = () => (
        <figure class="movie">
            <div class="movie__content">
                <div class="movie__title">
                    <h1 class="heading__primary">{movie.show.name}</h1>
                    {movie.show.genres.map((genre)=>(
                        <div class="movie__tag movie__tag--1">#{genre}</div>
                    ))}
                </div>
                <p class="movie__description" dangerouslySetInnerHTML={{ __html: movie.show.summary }}>
                </p>
                <br></br>
                <div class="movie__details">
                    <p class="movie__detail"><span class="icons icons-grey"><i class="fas fa-clock"></i> </span>{movie.show.runtime} minutes</p>
                    <p class="movie__detail"><span class="icons icons-yellow"><i class="fas fa-regular fa-language"></i>
                    </span>{movie.show.language}</p>
                    <p class="movie__detail"><span class="icons icons-grey"><i class="fa-regular fa-calendar-days"></i></span>
                    {movie.show.schedule.days.map((day)=>(
                        <span>{day}, </span>
                    ))} {movie.show.schedule.time}</p>
                    <Link to='/bookticket'><Button size="small" variant="text" onClick={handleClick}>Show details</Button>
                    </Link>
                </div>
            </div>
            <div class="movie__status">{movie.show.status}</div>
            
        </figure>
    );


    return (
        <>
            {getMovieCard()}
        </>
    )
}
