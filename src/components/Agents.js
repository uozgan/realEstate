import React from "react";
import "./Agents.css";

export default function Agents(props) {
  return (
    <div className="Agent-container">
      <h2>
        {props.firstName} {props.lastName}
      </h2>
      <img
        alt={props.firstName}
        src={props.imageUrl}
        height="180px"
        width="auto"
      />
      <p>{props.motto}</p>
      <p>{props.languages}</p>
      <p>{props.email}</p>
    </div>
  );
}
