import React from "react";
import PropTypes from "prop-types";
import MainMenu from "../menues/MainMenu";
import { Link, withRouter } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./header.scss";

const Header = ({ user, history }) => {
  return (
    <header className="header">
      <Link className="header-title" as="a" to="/">
        <Icon name="food" />
        Mat i Oslo
      </Link>
      <MainMenu user={user} history={history} />
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object
};

export default withRouter(Header);
