import React from 'react';
import TabButton from './TabButton';
import { useSelector } from 'react-redux';

import '../styles/_topbar.css';
import Avatar from './avatar';

export default function TopBar(props) {
  const user = useSelector(state => state.user);

  let savingsGoal = user.savingsGoal;
  let percentToGoal = user.investments ? savingsGoal/user.investments.savings : "MISSING"; 

  function calculatedDebts () {
    if (user.debts.length === 0) return 0;

    let total = 0;

    for (let debt of user.debts) {
      total += debt.total;
    }

    return total;
  }

    return (
      <div id="top-bar">
        <Avatar />
        <div className="top-bar-element">
          Savings Goal: {percentToGoal}%
        </div>
        <div className="top-bar-element">
          Savings: {user.investments && user.investments.savings}
        </div>
        <div className="top-bar-element">
          Debts: {user.debts && calculatedDebts()}
        </div>
        <div className="top-bar-element">
          Spirit: {user.spirit }
        </div>
        <div className="top-bar-element">
          Salary: {user.salary}
        </div>
        <div className="top-bar-element">
          ShareSplit: {user.investments.shareSplit}
        </div>
        <div className="top-bar-element">
          settings: {user.investments.setting}
        </div>
        <TabButton tab="home" onClick={() => props.setScreen("home")}/>
      </div>
    );
}