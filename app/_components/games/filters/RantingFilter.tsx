import { FC } from "react";
import { Slider } from "@/components/ui/slider";

interface RatingFilterProps {
  filters: any;
  onFilterChange: (type: string, value: any) => void;
}

const RatingFilter: FC<RatingFilterProps> = ({ filters, onFilterChange }) => {
  return (
    <div>
      <h3 className="text-base font-medium mb-2">Rating</h3>
      <div className="grid gap-2">
        <Slider
          min={0}
          max={5}
          step={0.1}
          value={[filters.rating.min, filters.rating.max]}
          onValueChange={(value: [number, number]) => onFilterChange("rating", { min: value[0], max: value[1] })}
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{filters.rating.min}</span>
          <span>{filters.rating.max}</span>
        </div>
      </div>
    </div>
  );
};

export default RatingFilter;