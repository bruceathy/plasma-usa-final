import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Crying from "../assets/crying.gif";

export default function ErrorPage() {
  return (
    <div>
      <Navbar />
      <main className="error-msg">
        <img src={Crying} className="gif" />
        <h1>ERROR</h1>
        <p>Page not found.</p>
      </main>
      <Footer />
    </div>
  );
}
