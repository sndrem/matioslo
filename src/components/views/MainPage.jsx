import React, { Component } from "react";
import MainMenu from "../menues/MainMenu";
import LoggedInMenu from "../menues/LoggedInMenu";

const MainPage = ({ user }) => {
  const menu = user ? <LoggedInMenu /> : <MainMenu />;
  return <div>{menu}</div>;
};

export default MainPage;
