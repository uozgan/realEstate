import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Form() {
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [phone, set_phone] = useState("");
  const [date, set_date] = useState();
  const [listing, set_listing] = useState();
  const [selectedHouse, set_selectedHouse] = useState(0);

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
    alert("Viewing successfully schedueled. Please note the date.");
    set_name("");
    set_email("");
    set_phone("");
    set_selectedHouse(0);
  };

  return !listing ? (
    "Loading!"
  ) : (
    <div>
      <form style={{ marginTop: "20%" }}>
        <label>Listing Addresses</label>
        <select onChange={chooseListing}>
          <option value={0}>Choose a Listing</option>
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
        <label>Name:</label>
        <input value={name} onChange={addName} /> <br />
        <label>E-mail:</label>
        <input value={email} onChange={addEmail} /> <br />
        <label>Phone:</label>
        <input value={phone} onChange={addPhone} /> <br />
        <label>Date:</label>
        <input type="date" onChange={chooseDate}></input> <br />
        <button onClick={clicked}>Submit</button>
      </form>
    </div>
  );
}
