import { Button } from "./Button";
import { GenreResponseProps as Genre } from "../App";

interface SideBarProps {
  genres: Genre[];
  selectedGenreId: number;
  onClickButton: (id: number) => void;
}

export function SideBar(props: SideBarProps) {
  const { genres, selectedGenreId, onClickButton } = props;

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
};
