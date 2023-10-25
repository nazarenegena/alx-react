import React from "react";
import Hob from "../assets/holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import Notifications from "../Notifications/Notifications";

function App() {
  return (
    <div className="App">
      <Notifications />
      <header className="App-header">
        <img src={Hob} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr className="App-hr" />

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <section className="form-inputs">
          <section className="input">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </section>
          <section className="input">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" />
          </section>
          <button>OK</button>
        </section>
      </div>
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
