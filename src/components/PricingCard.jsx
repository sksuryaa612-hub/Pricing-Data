import React from "react";

const PricingCard = ({ plan }) => {
  return (
    <div className={`card ${plan.highlight ? "highlight" : ""}`}>
      <h3>{plan.title}</h3>

      <h1>{plan.price}</h1>

      <hr />

      <ul>
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className={feature.available ? "active" : "inactive"}
          >
            {feature.available ? "✔" : "✖"} {feature.text}
          </li>
        ))}
      </ul>

      <button>BUTTON</button>
    </div>
  );
};

export default PricingCard;