import React, { useEffect, useState } from "react";
import axios from "axios";
import HouseInfo from "./HouseInfo";

function compare_Price(house_a, house_b) {
  return house_b.priceEuro - house_a.priceEuro;
}

export default function Listings() {
  const [listings, set_listings] = useState();
  const [maxPrice, set_maxPrice] = useState(886000);
  const [floorSpace, set_floorSpace] = useState(44);

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

  const sortedListing = listings ? listings.sort(compare_Price).reverse() : [];

  console.log("dışarısı:", sortedListing);

  const maxValue = sortedListing.map(house => {
    const { priceEuro } = house;
    console.log("Price Euro:", priceEuro);

    return priceEuro;
  });

  const meter2 = sortedListing.map(house => {
    const { m2 } = house;
    console.log("M2:", m2);

    return m2;
  });

  const maxM2 = Math.max(...meter2);
  const minM2 = Math.min(...meter2);

  const mostExpensive = Math.max(...maxValue);
  const cheapest = Math.min(...maxValue);

  const getMaxPrice = e => {
    set_maxPrice(e.target.value);
  };

  const getFloorSpace = e => {
    set_floorSpace(e.target.value);
  };

  const filteredListing = sortedListing
    ? sortedListing.filter(house => {
        if (
          house.priceEuro < parseInt(maxPrice) &&
          house.m2 > parseInt(floorSpace)
        ) {
          return true;
        }
        return false;
      })
    : [];

  return !maxPrice || !listings ? (
    "Loading!"
  ) : (
    <div>
      <h1>Listings</h1>
      <div>
        <label>
          {cheapest} Budget {mostExpensive} Current max: {maxPrice}
        </label>
        <br />
        <input
          type="range"
          id="budget"
          onChange={getMaxPrice}
          min={cheapest}
          max={mostExpensive}
          defaultValue={mostExpensive}
        />
        <br />
        <label>
          {minM2} Floor Space {maxM2} Current choice: {floorSpace}
        </label>
        <br />
        <input
          type="range"
          id="floorSpace"
          onChange={getFloorSpace}
          min={minM2}
          max={maxM2}
          defaultValue="0"
        />
      </div>
      <div>
        {filteredListing.map((house, index) => {
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
