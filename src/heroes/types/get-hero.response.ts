import type { Hero } from "./hero.interfase";

export interface HeroesResponse {
  total: number;
  pages: number;
  heroes: Hero[];
}
