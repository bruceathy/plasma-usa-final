import MenuOpt from "./MenuOpt";

export default function HomeSec() {
  return (
    <main className="home-page">
      <h1>WELCOME TO PLASMA USA</h1>
      <section className="menu-list">
        <MenuOpt text="Vitals" location={"/Vitals"} />
        <MenuOpt text="Calibrations" location={"/Calibrations"} />
        <MenuOpt text="Equipment" location={"/Equipment"} />
      </section>
    </main>
  );
}
