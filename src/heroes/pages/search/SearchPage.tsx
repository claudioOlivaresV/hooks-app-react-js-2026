import { CustomJumbotron } from "../../../components/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import SearchConntrols from "./ui/SearchConntrols";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />
      <HeroStats />
      <SearchConntrols />
    </>
  );
};

export default SearchPage;
