import "./styles/styles.scss";
import Router from "./components/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmallScreen from "./components/SmallScreen";

function App() {
  
  const desktop = (
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
  )
  return window.innerWidth >= 1000 ? desktop : <SmallScreen />
}

export default App;
