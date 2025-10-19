import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VitalsChart from "../components/VitalsChart";

export default function VitalsPage() {
  return (
    <div>
      <Navbar />
      <main id="main">
        <VitalsChart />
      </main>

      <Footer />
    </div>
  );
}
