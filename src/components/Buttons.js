import React, { useState } from "react";
import "./Button.css";

export default function Buttons() {
  const translation = {
    English: ["See Listings", "Schedule a viewing"],
    Dutch: ["Woning kopen", "Boek een bezichtiging"]
  };

  const [language, set_language] = useState("English");

  const goToListings = () => {
    window.location = "/listings";
  };

  const goToScheduleView = () => {
    window.location = "/schedule";
  };

  const chooseLanguage = e => {
    console.log("new input .value:", e.target.value);
    set_language(e.currentTarget.value);
  };

  if (language === "English") {
    return (
      <div>
        <div className="Button">
          <button onClick={goToListings}>{translation.English[0]}</button>
          <button onClick={goToScheduleView}>{translation.English[1]}</button>
        </div>
        <div className="Select">
          <select onChange={chooseLanguage} defaultValue={language}>
            <option value="English">English</option>
            <option value="Dutch">Nederlands</option>
          </select>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="Button">
          <button onClick={goToListings}>{translation.Dutch[0]}</button>
          <button onClick={goToScheduleView}>{translation.Dutch[1]}</button>
        </div>
        <div className="Select">
          <select onChange={chooseLanguage} defaultValue={language}>
            <option value="English">English</option>
            <option value="Dutch">Nederlands</option>
          </select>
        </div>
      </div>
    );
  }
}
