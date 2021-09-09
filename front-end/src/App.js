import "./styles/styles.scss";
import Router from "./components/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App-wrapper">
      <nav className="navbar">
        <Navbar />
      </nav>
      <section>
        <Router />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
