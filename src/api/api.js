export const getMovieDetails = () => {
    const url = `https://api.tvmaze.com/search/shows?q=all`;
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log("ERROR ", error);
      });
  };