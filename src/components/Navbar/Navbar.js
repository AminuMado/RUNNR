import { useState } from "react";
import "./Navbar.css";

export const Navbar = (props) => {
  const [active, setActive] = useState(props.items[0]);
  const navItems = props.items.map((item) => {
    return (
      <li
        key={item}
        onClick={() => setActive(item)}
        className={active === item ? "active" : ""}
      >
        {item}
      </li>
    );
  });

  return (
    <nav className="marketplace_primary_nav">
      <ul>{navItems}</ul>
    </nav>
  );
};
