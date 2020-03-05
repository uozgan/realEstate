import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";

export default function Form() {
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [phone, set_phone] = useState("");
  const [date, set_date] = useState();
  const [listing, set_listing] = useState();
  const [selectedHouse, set_selectedHouse] = useState();

  useEffect(() => {
    const getListing = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
      );
      const list = response.data;
      set_listing(list);
    };
    getListing();
  }, []);

  const addName = e => {
    console.log("new input .value:", e.target.value);
    set_name(e.target.value);
  };

  const addEmail = e => {
    console.log("new input .value:", e.target.value);
    set_email(e.target.value);
  };
  const addPhone = e => {
    console.log("new input .value:", e.target.value);
    set_phone(e.target.value);
  };

  const chooseDate = e => {
    console.log("new input .value:", e.target.value);
    set_date(e.target.value);
  };

  const chooseListing = e => {
    set_selectedHouse(e.target.value);
  };

  const clicked = e => {
    e.preventDefault();
    console.log(
      "Scheduled Viewing for:",
      name,
      email,
      phone,
      date,
      selectedHouse
    );
    alert(`Viewing successfully schedueled ${name}. Please note the date.`);
    // set_name("");
    // set_email("");    This code refreshes the form after submitting
    // set_phone("");
    // set_selectedHouse("Unknown");
  };

  return !listing ? (
    "Loading!"
  ) : (
    <div>
      <form className="Form">
        <div className="Form-container">
          <div className="Labels">
            <label>Listings:</label>
            <label>Name:</label>
            <label>E-mail:</label>
            <label>Phone:</label>
            <label>Date:</label>
          </div>
          <div className="Form-fill">
            <select onChange={chooseListing} value={selectedHouse}>
              <option value="Unknown">Choose a Listing</option>
              {listing.map((list, index) => {
                const { address } = list;
                const { street, number, city } = address;
                return (
                  <option key={index} value={list.adrress}>
                    {street} {number}, {city}
                  </option>
                );
              })}
            </select>
            <br />
            <input value={name} onChange={addName} /> <br />
            <input value={email} onChange={addEmail} /> <br />
            <input value={phone} onChange={addPhone} /> <br />
            <input type="date" onChange={chooseDate}></input>
          </div>
        </div>
        <button onClick={clicked}>Submit</button>
      </form>
    </div>
  );
}
