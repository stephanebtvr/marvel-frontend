import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg.png";

const Header = (props) => {
  const { token, setUser } = props;
  return (
    <div className="header">
      <div className="topbar">
        <Link to="/">
          <img src={logo} alt="marvel logo" />
        </Link>
        <div className="nav-menu">
          <Link to="/characters">
            <button className="menu-btn">PERSONNAGES</button>
          </Link>
          <Link to="/comics">
            <button className="menu-btn">COMICS</button>
          </Link>

        {/*<Link to="/favorites">
            <button className="menu-btn">FAVORIS</button>
  {//  </Link>*/}
          {token ? (
            <div className="dis-user">
              <Link to="/">
                
                <button
                  onClick={() => {
                    setUser(null);
                  }}
                  className="deconnexion"
                >
                  DECONNEXION
                </button>
              </Link>
            </div>
          ) : (
            <div className="user">
              <Link to="/login">
                <button className="connexion">CONNEXION</button>
              </Link>
              <Link to="/signup">
                <button className="resgister">INSCRIPTION</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
