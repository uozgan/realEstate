import React from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import Listings from "./components/Listings";
import ScheduleView from "./components/ScheduleView";
import About from "./components/About";

function App() {
  return (
    <div>
      <nav
        style={{
          textAlign: "center"
        }}
      >
        <NavLink
          to="/home"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          Home
        </NavLink>
        {" | "}
        <NavLink
          to="/listings"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          Listings
        </NavLink>
        {" | "}
        <NavLink
          to="/schedule"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          Schedule Viewing
        </NavLink>
        {" | "}
        <NavLink
          to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          About
        </NavLink>
      </nav>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/schedule" component={ScheduleView} />
        <Route path="/listings" component={Listings} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
