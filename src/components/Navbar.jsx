import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <NavLink className="logo" to="/">
        PLASMA USA
      </NavLink>
      <ul>
        <li>
          <NavLink className="links" to="/Vitals">
            Vitals
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
