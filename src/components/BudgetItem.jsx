import React from "react";

import {
  formatCurrency,
  calculateSpentByBudget,
  formatPercentage,
} from "../helpers";

const BudgetItem = ({ budget }) => {
  const { id, name, amount } = budget;
  const spent = calculateSpentByBudget(id);
  return (
    <div className="budget">
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
        <progress max={amount} value={spent}>
          {formatPercentage(spent / amount)}  
        </progress>
        <div className="progress-text">
          <small>{formatCurrency(spent)} spent</small>
          <small>{formatCurrency(amount - spent)} remaining</small>
        </div>
      </div>
    </div>
  );
};

export default BudgetItem;
