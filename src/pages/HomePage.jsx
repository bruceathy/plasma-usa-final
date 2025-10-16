import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="error-msg">
        <h1>HOME</h1>
      </main>
      <footer className="footer">
        <p>&copy; "PLASMA USA" 2023</p>
      </footer>
    </div>
  );
}
