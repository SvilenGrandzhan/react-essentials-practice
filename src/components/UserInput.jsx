import React from "react";

function UserInput({ onInput, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(event) => onInput("initialInvestment", event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={(event) => onInput("annualInvestment", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Returns</label>
          <input
            type="number"
            required
            value={input.expectedReturn}
            onChange={(event) => onInput("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={input.duration}
            onChange={(event) => onInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
