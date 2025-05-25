import React from "react";
import "./Client.css";

const Client = ({ clients = [] }) => {
  return (
    <section className="clients-partners">
      <div className="clients-container">
        {clients.map((client, index) => (
          <img
            key={index}
            src={client.logo}
            alt={client.name}
            className="client-logo"
          />
        ))}
      </div>
      <div className="clients-cta">
        <p>
          <strong>
            Check our top
            <br />
            clients & partners
          </strong>
        </p>
      </div>
    </section>
  );
};

export default Client;
