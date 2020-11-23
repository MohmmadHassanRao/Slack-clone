import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { HelpOutline, Search } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar className="header_avatar" />
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <Search />
        <input placeholder="search" />
      </div>
      <div className="header_right">
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
