import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/_slider.css';
import { updateShareSplit } from '../../redux/actions/userActions';
 
export default function BuyShares (props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  let changeSlider = (event) =>{

    dispatch(updateShareSplit(event.target.value))
  }
  return(
  <div>
    <p>Use the slider to indicate what percent of your income you'll use on the stock marker.</p>
    <input type="range"
     className="custom-range"
      id="slider"
      max={100}
      min={0}
      defaultValue={user.investments.shareSplit}
      onChange={(e)=>{changeSlider(e)}} />
    
  </div>
  )
}