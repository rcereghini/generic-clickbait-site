import React from "react";
import ShareButton from "../ShareButton/ShareButton";
import "./header.css";

const Header = props => (
  <header className="header">
    <div>LOGO</div>
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
