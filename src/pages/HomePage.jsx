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
      </main>
      <Footer />
    </div>
  );
}
