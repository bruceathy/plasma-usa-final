import { Link } from "react-router-dom";
// use the Link component to navigate to the VitalsPage
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeSec from "../components/HomeSec";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeSec />
      <Footer />
    </>
  );
}
