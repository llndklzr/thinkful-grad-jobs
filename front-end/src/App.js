import "./styles/styles.scss";
import Router from "./components/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmallScreen from "./components/SmallScreen";
import useWindowSize from "./utils/useWindowSize";

function App() {
  const windowSize = useWindowSize();

  const desktop = (
    <div className="App-wrapper">
      <nav className="navbar">
        <Navbar />
      </nav>
      <section className="main-body">
        <Router />
      </section>
      <>
        <Footer />
      </>
    </div>
  )
  return windowSize.width >= 1000 ? desktop : <SmallScreen />;
}

export default App;
