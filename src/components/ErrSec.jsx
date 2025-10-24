import { Link } from "react-router-dom";
import Crying from "../assets/crying.gif";

export default function ErrSec() {
  return (
    <main>
      <div className="error-msg">
        <h1>ERROR</h1>
        <p>Page not found.</p>
        <Link to="/" className="return-home">
          Return Home
        </Link>
      </div>
      <img src={Crying} className="gif" />
    </main>
  );
}
