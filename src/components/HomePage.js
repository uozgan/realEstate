import React from "react";
import Buttons from "./Buttons";
import "./Home.css";

export default function HomePage() {
  return (
    <div>
      <div className="Home">
        <h1 className="Home-content">Welcome to Real Estate</h1>
        <img
          className="Home-content"
          alt="Reel Estate"
          src="https://www.picpedia.org/clipboard/images/real-estate.jpg"
          height="300px"
          width="450px"
        />
      </div>
      <div>
        <Buttons />
      </div>
    </div>
  );
}
