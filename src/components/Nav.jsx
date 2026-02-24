import { NavLink } from "react-router-dom";

export default function Nav() {
  const getLinkClass = ({ isActive }) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className={getLinkClass} to="/" end>
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={getLinkClass} to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={getLinkClass} to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={getLinkClass} to="/resume">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
