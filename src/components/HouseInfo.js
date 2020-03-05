import React from "react";
import "./HouseInfo.css";

export default function HouseInfo(props) {
  return (
    <div className="Container">
      <p>Adress: {props.address}</p>
      <p>Price: {props.priceEuro}</p>
      <p>Floor Space: {props.m2}</p>
      <p>Bedrooms: {props.bedRooms}</p>
    </div>
  );
}
