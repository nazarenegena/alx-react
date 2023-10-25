import Hob from "../src/holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Hob} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr className="App-hr" />

      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <hr className="App-hr" />

      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
