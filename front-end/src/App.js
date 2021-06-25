import "./styles/styles.scss";
import {Switch, Route} from "react-router-dom";
import Router from "./components/Router";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Thinkful Graduate Jobs</h1>
        </header>
      </div>
      <body>
        <h2>Celebrating success, inspiring those who are up next</h2>
      </body>
      <Router />
    </>
  );
}

export default App;
