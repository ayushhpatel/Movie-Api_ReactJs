import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import { getMovieDetails } from "./api/api";
import { Container, Grid } from "@material-ui/core";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieDetails()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {movies.map((score) => (
              <MovieCard movie={score}></MovieCard>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
