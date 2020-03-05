import React from "react";
import "./HouseInfo.css";

export default function HouseInfo(props) {
  return (
    <div className="Container">
      <h2>{props.address}</h2>
      <p>{props.priceEuro}</p>
      <p>{props.m2}</p>
      <p>{props.bedRooms}</p>
    </div>
  );
}
