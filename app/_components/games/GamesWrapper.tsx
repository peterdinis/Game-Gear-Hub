"use client"

import { FC, useMemo, useState } from "react";
import { games } from "./gamesData";
import Header from '../shared/Header';
import GameCard from "./GameCard";
import FilterSection from "./filters/FilterSection";

const GamesWrapper: FC = () => {
  const [filters, setFilters] = useState({
    genre: [] as string[],
    price: {
      min: 0,
      max: 100,
    },
    rating: {
      min: 0,
      max: 5,
    },
  });

  const handleFilterChange = (type: string, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const handleGenreChange = (genre: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      genre: prevFilters.genre.includes(genre)
        ? prevFilters.genre.filter((g) => g !== genre)
        : [...prevFilters.genre, genre],
    }));
  };

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      if (filters.genre.length > 0 && !filters.genre.includes(game.genre)) {
        return false;
      }
      if (game.price < filters.price.min || game.price > filters.price.max) {
        return false;
      }
      if (game.rating < filters.rating.min || game.rating > filters.rating.max) {
        return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <>
      <Header text="Our Games" />
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 p-4 md:p-8">
        <FilterSection filters={filters} onFilterChange={handleFilterChange} onGenreChange={handleGenreChange} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GamesWrapper