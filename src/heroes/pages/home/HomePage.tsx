import { Heart } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { CustomJumbotron } from "../../../components/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import { HeroGrid } from "../../components/HeroGrid";
import { useState } from "react";
import { CustomPaginator } from "../../../components/custom/CustomPaginator";
import CustomBradCrumbs from "../../../components/custom/CustomBradCrumbs";
import { getHeroByPage } from "../../actions/get-heroes-bypage.action";
import { useQuery } from "@tanstack/react-query";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");

  // useEffect(() => {
  //   getHeroByPage().then((heroes) => {});
  // }, []);

  const { data: heroResponse } = useQuery({
    queryKey: ["heroes"],
    queryFn: () => getHeroByPage(),
  });
  console.log({ heroResponse });

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Superhero Universe"
          description="Discover, explore, and manage your favorite superheroes and villains"
        />
        <CustomBradCrumbs currentPage="SuperHeroes" />
        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={() => setActiveTab("all")} value="all">
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab("favorites")}
              value="favorites"
              className="flex items-center gap-2"
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab("heroes")} value="heroes">
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab("villains")}
              value="villains"
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h1>Todos los personajes</h1>
            <HeroGrid heroes={heroResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favoritos</h1>
            {/* <HeroGrid /> */}
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Heroes</h1>
            {/* <HeroGrid /> */}
          </TabsContent>
          <TabsContent value="villains">
            <h1>Villains</h1>
            {/* <HeroGrid /> */}
          </TabsContent>
        </Tabs>

        {/* Character Grid */}

        {/* Pagination */}
        <CustomPaginator totalPages={5} />
      </>
    </>
  );
};
