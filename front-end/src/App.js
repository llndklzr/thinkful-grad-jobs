import "./styles/styles.scss";
import Router from "./components/Router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App-wrapper">
      <header className="App-header">
        <h1>Thinkful Graduate Stories</h1>
      </header>
      <nav className="navbar">
        <Navbar />
      </nav>
      <section>
        <Router />
      </section>
    </div>
  );
}

export default App;
