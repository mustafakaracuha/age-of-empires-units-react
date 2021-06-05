import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "react-avatar";
import React, { useEffect, useState } from "react";
import {
  faBell,
  faCheckCircle,
  faChessRook,
  faClipboard,
  faCopy,
  faEnvelope,
  faEnvelopeOpen,
  faFileAlt,
  faHome,
  faMagic,
  faMailBulk,
  faTimesCircle,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNot, setAnchorElNot] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {};

  return (
    <div className="topBar">
      <h3>
        {" "}
        <FontAwesomeIcon
          style={{
            color: "#6aa8e8",
            fontSize: "25px",
            marginRight: "10px",
          }}
          icon={faChessRook}
        />
        Age Of Empires
      </h3>
      <div className="topBarLink">
        <Link to={`/`}>Home</Link>
        <Link to={`/unitsPage`}>Units Page</Link>
      </div>
    </div>
  );
};

export default TopBar;
