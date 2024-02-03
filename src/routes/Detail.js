import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, [id]);
  console.log("movie id:", id);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>{movie.title_long}</div>
          <hr />
          <div>{movie.runtime} minutes</div>
          <br />
          <div>{movie.genres && movie.genres.join(", ")}</div>
          <br />
          <div>{movie.description_intro}</div>
        </div>
      )}
    </div>
  );
};

export default Detail;
