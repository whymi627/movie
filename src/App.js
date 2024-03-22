import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // #2
    //   const response = await fetch(
    //     "https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year"
    //   );
    //   const json = await response.json();
    //   setMovies(json.data.movies);
    //   setLoading(false);
    // };

    // #3 더 짧게...
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimun_rating=9.0&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  //#1
  // useEffect(() => {
  //   fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year`
  //   )
  //     .then((response) => response.json())
  //     // .then((json) => console.log(json))
  //     .then((json) => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //     });
  // }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div
              key={movie.id}
              style={{
                boxShadow: "2px 5px 10px lightcoral",
                display: "flex",
              }}
            >
              <img src={movie.medium_cover_image} alt="no-picture" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "15px"
                }}
              >
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
