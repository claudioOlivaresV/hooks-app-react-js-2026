import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Hero } from "../types/hero.interfase";

interface FavoriteHeroContext {
  //stete
  favorites: Hero[];
  favoriteCount: number;

  //methods
  toggleFavorite: (hero: Hero) => void;
  isFavorite: (hero: Hero) => boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext<FavoriteHeroContext>(
  {} as FavoriteHeroContext,
);

const getFavoritesFromLS = () => {
  const favorites = localStorage.getItem("favorite");
  return favorites ? JSON.parse(favorites) : [];
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLS());

  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((heroe) => hero.id === heroe.id);

    if (heroExist) {
      setFavorites(favorites.filter((heroe) => heroe.id !== hero.id));
      return;
    }
    setFavorites([...favorites, hero]);
  };

  const isFavorite = (hero: Hero) => {
    return favorites.some((heroe) => heroe.id === hero.id);
  };

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext.Provider
      value={{
        favorites: favorites,
        favoriteCount: favorites.length,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext.Provider>
  );
};
