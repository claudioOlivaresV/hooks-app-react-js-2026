import { useQuery } from "@tanstack/react-query";
import { CustomJumbotron } from "../../../components/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import SearchConntrols from "./ui/SearchConntrols";
import { useSearchParams } from "react-router";
import { searchHero } from "../../actions/searh-hero.action";
import { HeroGrid } from "../../components/HeroGrid";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") || "";

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name }],
    queryFn: () => searchHero({ name }),
    staleTime: 1000 * 60 * 5, // Cache results for 5 minutes
  });
  console.log(heroes);

  return (
    <>
      <CustomJumbotron
        title="Busqueda"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />
      <HeroStats />
      <SearchConntrols />
      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
