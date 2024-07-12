import { FC } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface GenreFilterProps {
  filters: any;
  onGenreChange: (genre: string) => void;
}

const GenreFilter: FC<GenreFilterProps> = ({ filters, onGenreChange }) => {
  const genres = ["Action", "Sandbox", "Battle Royale", "Simulation", "Shooter"];

  return (
    <div>
      <h3 className="text-base font-medium mb-2">Genre</h3>
      <div className="grid gap-2">
        {genres.map((genre) => (
          <Label key={genre} className="flex items-center gap-2">
            <Checkbox
              checked={filters.genre.includes(genre)}
              onCheckedChange={() => onGenreChange(genre)}
            />
            {genre}
          </Label>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;