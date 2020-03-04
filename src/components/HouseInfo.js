import React from "react";

export default function HouseInfo(props) {
  return (
    <div style={{ border: "solid 1px", margin: "10px" }}>
      <h2>{props.address}</h2> <br />
      {props.priceEuro} <br />
      {props.m2}
      <br />
      {props.bedRooms} <br />
    </div>
  );
}
