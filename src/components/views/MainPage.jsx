import React from "react";
import MainMenu from "../menues/MainMenu";
import LoggedInMenu from "../menues/LoggedInMenu";
import ForsideKnapper from "../forside/Forsideknapper";
import ToppLister from "../forside/ToppLister";

const MainPage = ({ user, props }) => {
  const menu = user ? <LoggedInMenu {...props} /> : <MainMenu />;
  return (
    <div>
      {menu}
      <ForsideKnapper />
      <ToppLister />
    </div>
  );
};

export default MainPage;
