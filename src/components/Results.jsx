import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const calculatedResults = calculateInvestmentResults(input);
  const initialInvestment = calculatedResults[0].valueEndOfYear - calculatedResults[0].interest - calculatedResults[0].annualInvestment;
  console.log(calculatedResults);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedResults.map((row) => {
          const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
          const investedCapital = row.valueEndOfYear - totalInterest;
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
