import React from "react";
import { Link, Outlet } from "react-router";

export const HeroesLayout = () => {
  return (
    <div className="">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hero/1">Hero</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
      <h1>HeroesLayout</h1>
      <Outlet />
    </div>
  );
};
