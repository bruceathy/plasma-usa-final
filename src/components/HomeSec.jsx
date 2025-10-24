import { Link } from "react-router-dom";

export default function HomeSec() {
  return (
    <main className="home-page">
      <h1>WELCOME</h1>
      <section className="menu-list">
        <div className="menu-option">
          <Link className="option-link" to="/Vitals">
            Vitals
          </Link>
        </div>
        <div className="menu-option">
          <Link className="option-link" to="*">
            Search Donor
          </Link>
        </div>
      </section>
    </main>
  );
}
