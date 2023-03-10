import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage";
import Mint from "./Mint";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <h1>
              <a href=""> Mint</a>
            </h1>
          </div>
          <ul>
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./Mint">Mint</a>
            </li>
          </ul>
        </nav>
      </header>

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Mint" element={<Mint />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
