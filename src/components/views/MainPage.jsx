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
      <div className="forside">
        {/* <ForsideKnapper className="forside-knapper" /> */}
        <ToppLister />
      </div>
    </div>
  );
};

export default MainPage;
