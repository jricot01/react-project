import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Entry Level React</h1>
        <p>React is so cool!</p>
        <p>I want to get a car</p>
        <ul>
          <li>Honda Civic Type R</li>
          <li>Nissan GT-R</li>
          <li>Nissan GT-R Skyline</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
