import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function Debts (props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
	<div className="center">
		<h1>Debts</h1>

		{
			user.debts.map(debt => {
				return (
					<div>
						<h3>{debt.name}</h3>
						<h4>{debt.total}</h4>
						<h5>at {debt.interestRate*100}% APR</h5>
					</div>
				)
			})
		}
	</div>
  )
}