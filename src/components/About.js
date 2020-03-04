import React, { useEffect, useState } from "react";
import axios from "axios";
import Agents from "./Agents";
import Buttons from "./Buttons";

export default function About() {
  const [agentList, set_agentList] = useState([]);

  useEffect(() => {
    const lookAgents = async () => {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/listings-agents-data/agents`
      );
      console.log("Success!", response);

      const agents = response.data;
      console.log("Agents:", agents);
      set_agentList(agents);
    };
    lookAgents();
  }, []);

  return !agentList ? (
    "Loading!"
  ) : (
    <div>
      <h1>About</h1>
      <div>
        {agentList.map((agent, index) => {
          return (
            <Agents
              key={agent.id}
              firstName={agent.firstName}
              lastName={agent.lastName}
              email={agent.email}
              phoneNumber={agent.phoneNumber}
              languages={agent.languages.map(lang => {
                return ` ${lang}`;
              })}
              motto={agent.motto}
              imageUrl={agent.imageUrl}
            />
          );
        })}
      </div>
      <div>
        <Buttons />
      </div>
    </div>
  );
}
