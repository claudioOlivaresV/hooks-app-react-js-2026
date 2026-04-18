import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "../../lib/utils";

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`rounded-md p-2 ${cn(isActive("/") ? "bg-slate-200 text-blue-500" : "")}`}
          >
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`rounded-md p-2 ${cn(isActive("/search") ? "bg-slate-200 text-blue-500" : "")}`}
          >
            <Link to="/search">Buscar Superhero</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
