import React from "react";
import ShareButton from "../ShareButton/ShareButton";
import "./header.css";
import logo from "../../assets/logo.png";

const Header = props => (
  <header className="header">
    <div>
      <img src={logo} style={{ height: "50px" }}></img>
    </div>
    <div>
      <ShareButton />
    </div>
  </header>
);

// const Header = props => {
//   console.log("props ======>", props);
//   return <div></div>;
// };

export default Header;
