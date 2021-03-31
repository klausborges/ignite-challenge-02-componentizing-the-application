import { MovieCard } from './MovieCard';
import { MovieProps as Movie, GenreResponseProps as Genre } from "../App";

interface ContentProps {
  movies: Movie[];
  selectedGenre: Genre;
}

export function Content(props: ContentProps) {
  const { movies, selectedGenre } = props;

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
};
