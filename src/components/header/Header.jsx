import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className="header-title" as="a" to="/">
        <Icon name="food" />
        Mat i Oslo
      </Link>
    </header>
  );
};

export default Header;
