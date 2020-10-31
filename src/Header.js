import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIcon fontSize="large" color="primary" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" color="primary" />
        </IconButton>
      )}

      <IconButton>
        <Link to="/">
          <img
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
            alt="logo"
          />
        </Link>
      </IconButton>
      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize="large" color="primary" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;