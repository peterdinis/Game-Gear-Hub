import { FC } from "react";
import GenreFilter from "./GenreFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RantingFilter";

interface FilterSectionProps {
  filters: any;
  onFilterChange: (type: string, value: any) => void;
  onGenreChange: (genre: string) => void;
}

const FilterSection: FC<FilterSectionProps> = ({ filters, onFilterChange, onGenreChange }) => {
  return (
    <div className="bg-muted/40 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      <div className="grid gap-4">
        <GenreFilter filters={filters} onGenreChange={onGenreChange} />
        <PriceFilter filters={filters} onFilterChange={onFilterChange} />
        <RatingFilter filters={filters} onFilterChange={onFilterChange} />
      </div>
    </div>
  );
};

export default FilterSection;