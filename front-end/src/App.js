import "./styles/styles.scss";
import Router from "./components/Router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App-wrapper">
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
