export const fetchMovie = movieTitle => {
  console.log();

  return fetch(`https://www.omdbapi.com/?apikey=4a29f1dd&t=${movieTitle}`)
    .then(res => res.json())
    .then(data => data);
};
