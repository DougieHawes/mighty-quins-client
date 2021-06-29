import Slide from "react-reveal";

import "./style.min.css";

import logo from "../../media/logo.png";

const Header = () => {
  return (
    <Slide down>
      <div className="header">
        <div className="header-container">
          <img className="header-logo" src={logo} alt="" />
          <div>
            <h1 className="header-title">The Mighty 'Quins</h1>
            <p className="header-subtitle">
              unoffical fansite for The Harlequin Rugby Union teams
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Header;
