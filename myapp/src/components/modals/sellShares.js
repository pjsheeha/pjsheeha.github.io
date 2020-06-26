import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/_slider.css';
import { updateMarkSharesSell } from '../../redux/actions/userActions';
 
export default function SellShares (props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  let changeSlider = (event) =>{

    dispatch(updateMarkSharesSell(event.target.value))
  }
  return(
  <div>
    <p>Use the slider to indicate how much of your currently owned shares you'd like to sell.</p>
    <input type="range"
     className="custom-range"
      id="slider"
      max={100}
      min={0}
      defaultValue={user.investments.sharesToSell}
      onChange={(e)=>{changeSlider(e)}} />
    
  </div>
  )
}