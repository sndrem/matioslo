import React from "react";
import MainMenu from "../menues/MainMenu";
import ForsideKnapper from "../forside/Forsideknapper";
import ToppLister from "../forside/ToppLister";

const MainPage = ({ user, history }) => {
  return (
    <div>
      <MainMenu user={user} history={history} />
      <div className="forside">
        {/* <ForsideKnapper className="forside-knapper" /> */}
        <ToppLister />
      </div>
    </div>
  );
};

export default MainPage;
