import React from "react";
import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <div>
      <h1>AdminLayout</h1>
      <Outlet />{" "}
    </div>
  );
};
