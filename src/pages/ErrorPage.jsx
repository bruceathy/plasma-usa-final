import Navbar from "../components/Navbar";

export default function ErrorPage() {
  return (
    <div>
      <Navbar />
      <main className="error-msg">
        <img src="../imgs/crying.gif" className="gif" />
        <h1>ERROR</h1>
        <p>Page not found.</p>
      </main>
      <footer className="footer">
        <p>&copy; "PLASMA USA" 2023</p>
      </footer>
    </div>
  );
}
