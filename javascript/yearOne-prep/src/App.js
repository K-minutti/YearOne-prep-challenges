import logo from "./assets/logo.png";
import "./styles/App.css";


function App() {
  return ( 
    <div className="App">
      <header className="App-header row">
        <img src={logo} className="Logo" alt="Year One logo" width="200px"/>
        <div className="App-menu">
          <ul className="row">
            <li>
              <a href="./">Explore</a>
            
            </li>
            <li>
              <a href="./">Challenges</a>
            </li>
            <li>
              <a href="./">Resources</a>
            </li>
            <li>
             <a href="./">Community</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="App-hero">
          <h2>Code!</h2>
      </div>
    </div>
  );
}

export default App;
