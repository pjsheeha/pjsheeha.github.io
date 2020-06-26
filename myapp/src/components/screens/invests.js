import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSavings, updateInvestSetting, updateSellingShares } from '../../redux/actions/userActions';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Collapse from 'react-bootstrap/Collapse';
import BuyShares from '../modals/buyShares';
import SellShares from '../modals/sellShares';
import HoldShares from '../modals/holdShares';


import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


 
export default function Invests (props) {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

  const [buySell, setBuySell] = useState('buy');

	let sharesControl =()=>{
		

		switch (buySell){
			case 'buy':

					return <BuyShares />;
			case 'sell':
					return <SellShares />;
			case 'hold':
					return <HoldShares />;
			default:
					break;
	}
}
  const handleAlignment = (event) => {
		console.log(user.event);
		dispatch(updateInvestSetting(event));

    setBuySell(event);
  };
	const data = [
		{
			name: user.event-4, pv: user.event-4<0 ? 0  : user.investments.history[user.event-4],
		},
		{
			name: user.event-3, pv: user.event-3<0 ? 0  : user.investments.history[user.event-3],
		},
		{
			name: user.event-2, pv: user.event-2<0 ? 0  : user.investments.history[user.event-2],
		},
		{
			name: user.event-1, pv: user.event-1<0 ? 0  : user.investments.history[user.event-1],
		},
		{
			name: user.event, pv: user.investments.history[user.event],
		},
	];



	return (
		<div className="center">

		Your shares: {user.investments.shares}
		<br></br>
		<p>Current value of investment: {user.investments.shares * user.investments.value}</p>
		<br></br>
		<p>Profit: {(user.investments.shares * user.investments.value)-user.investments.amountSpent}</p>
		<LineChart
      width={500}
      height={300}
      data={data}
      margin={{
      top: 5, right: 30, left: 20, bottom: 5,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>

		<div id ="align">
			<>
		<ToggleButtonGroup type="radio" name="options" defaultValue={user.investments.setting} onChange={(e)=>{handleAlignment(e)}}>
    <ToggleButton variant="light"value='buy'>Buy shares</ToggleButton>
    <ToggleButton variant="light"value='sell'>Sell shares</ToggleButton>
    <ToggleButton variant="light"value='hold'>Hold</ToggleButton>
  	</ToggleButtonGroup>
		</>
		{
			sharesControl()
		}
		</div>
		</div>
	)

}