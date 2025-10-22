import { Link } from "react-router-dom";
// use the Link component to navigate to the VitalsPage
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="">
        <h1>WELCOME</h1>
        <section>
          <div className="menu-option">
            <Link className="option-link" to="/Vitals">
              Vitals
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
