import React from "react";

export default function Agents(props) {
  return (
    <div style={{ border: "solid 1px", margin: "10px" }}>
      <h2>
        {props.firstName} {props.lastName}
      </h2>{" "}
      <br />
      <img
        alt={props.firstName}
        src={props.imageUrl}
        height="300px"
        width="400px"
      />{" "}
      <br />
      {props.motto} <br />
      {props.languages}
      <br />
      {props.email} <br />
    </div>
  );
}
