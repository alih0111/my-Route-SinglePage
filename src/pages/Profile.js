import React from "react";
import Dashboard from "../components/Dashboard";
import Download from "../components/Download";
import SideBar from "../components/SideBar";
import { Route } from "react-router";

export default function Profile() {
  return (
    <>
      <p>welcome back</p>
      <SideBar />
      <Route path="/Profile/dashboard" component={Dashboard} />
      <Route path="/Profile/downloads" component={Download} />
    </>
  );
}
