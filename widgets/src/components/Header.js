import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" clasName="item">
        Accordion
      </Link>
      <Link href="/list" clasName="item">
        List
      </Link>
      <Link href="/dropdown" clasName="item">
        Dropdown
      </Link>
      <Link href="/translate" clasName="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
