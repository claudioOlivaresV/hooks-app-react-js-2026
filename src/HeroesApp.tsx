import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./router/app.routes";

export const HeroesApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
