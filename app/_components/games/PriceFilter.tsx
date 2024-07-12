import { FC } from "react";
import { Slider } from "@/components/ui/slider";

interface PriceFilterProps {
  filters: any;
  onFilterChange: (type: string, value: any) => void;
}

const PriceFilter: FC<PriceFilterProps> = ({ filters, onFilterChange }) => {
  return (
    <div>
      <h3 className="text-base font-medium mb-2">Price</h3>
      <div className="grid gap-2">
        <Slider
          min={0}
          max={100}
          step={1}
          value={[filters.price.min, filters.price.max]}
          onValueChange={(value: [number, number]) => onFilterChange("price", { min: value[0], max: value[1] })}
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${filters.price.min}</span>
          <span>${filters.price.max}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;