export default function Home() {
  return (
    <div>
      <nav>
        <p>PLASMA USA</p>
        <ul>
          <li>
            <a className="links" href="/index.html">
              Vitals
            </a>
          </li>
        </ul>
      </nav>
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
