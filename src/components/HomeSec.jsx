import { Link } from "react-router-dom";
import MenuOpt from "./MenuOpt";

export default function HomeSec() {
  return (
    <main className="home-page">
      <h1>WELCOME</h1>
      <section className="menu-list">
        <MenuOpt text="Vitals" location={"/Vitals"} />
        <MenuOpt text="Search Donors" location={"/Donors"} />
        <MenuOpt text="Equipment" location={"/Equipment"} />
      </section>
    </main>
  );
}
