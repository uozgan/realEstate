import React, { useEffect, useState } from "react";
import axios from "axios";
import HouseInfo from "./HouseInfo";

function compare_Price(house_a, house_b) {
  return house_b.priceEuro - house_a.priceEuro;
}

export default function Listings() {
  const [listings, set_listings] = useState();
  const [maxPrice, set_maxPrice] = useState();

  useEffect(() => {
    const getListings = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
      );
      const houseList = response.data;
      set_listings(houseList);
      console.log("Houses available:", houseList);
    };
    getListings();
  }, []);

  const sortedListing = listings ? listings.sort(compare_Price) : [];

  console.log("dışarısı:", sortedListing);

  return (
    <div>
      <h1>Listings</h1>
      <div>
        <label>Budget</label>
        <br />
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="110000"
          defaultValue="60000"
        />
        <br />
        <label>Floor Space</label>
        <br />
        <input
          type="range"
          id="m2"
          name="m2"
          min="0"
          max="300"
          defaultValue="50"
        />
      </div>
      <div>
        {sortedListing.map((house, index) => {
          return (
            <HouseInfo
              key={house.id}
              referenceNumber={house.referenceNumber}
              address={`${house.address.city} ${house.address.number}, ${house.address.city}`}
              m2={house.m2}
              priceEuro={house.priceEuro}
              bedRooms={house.bedRooms}
              agentId={house.agentId}
            />
          );
        })}
      </div>
    </div>
  );
}
