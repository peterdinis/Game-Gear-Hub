import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface GameCardProps {
  game: any;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  return (
    <motion.div
      className="bg-background rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src="/placeholder.svg"
        alt={game.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{game.title}</h3>
        <p className="text-muted-foreground mb-4">{game.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium">{game.rating}</span>
          </div>
          <div className="text-lg font-bold">
            {game.price === 0 ? "Free" : `$${game.price}`}
          </div>
        </div>
        <Button className="w-full mt-4">Buy Now</Button>
      </div>
    </motion.div>
  );
};

export default GameCard;