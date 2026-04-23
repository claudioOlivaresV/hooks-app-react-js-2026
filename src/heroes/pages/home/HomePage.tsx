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
import { useMemo } from "react";
import { CustomPaginator } from "../../../components/custom/CustomPaginator";
import CustomBradCrumbs from "../../../components/custom/CustomBradCrumbs";
import { getHeroByPage } from "../../actions/get-heroes-bypage.action";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("tab"));

  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  // const [activeTab, setActiveTab] = useState<
  //   "all" | "favorites" | "heroes" | "villains"
  // >("all");

  // useEffect(() => {
  //   getHeroByPage().then((heroes) => {});
  // }, []);

  const { data: heroResponse } = useQuery({
    queryKey: ["heroes", { page, limit }],
    queryFn: () => getHeroByPage(+page, +limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
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
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "all");
                  return prev;
                })
              }
              value="all"
            >
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  return prev;
                })
              }
              value="favorites"
              className="flex items-center gap-2"
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  return prev;
                })
              }
              value="heroes"
            >
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  return prev;
                })
              }
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
        <CustomPaginator totalPages={heroResponse?.pages ?? 1} />
      </>
    </>
  );
};
