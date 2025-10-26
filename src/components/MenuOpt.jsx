import { Link } from "react-router-dom";

export default function MenuOpt({ text, location }) {
  return (
    <div className="menu-option">
      <Link className="option-link" to={location}>
        {text}
      </Link>
    </div>
  );
}
