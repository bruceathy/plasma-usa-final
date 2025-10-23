import { Link } from "react-router-dom";
// use the Link component to navigate to the VitalsPage
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
}
