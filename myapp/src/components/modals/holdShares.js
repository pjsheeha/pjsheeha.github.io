import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/_slider.css';
import Slider from '@material-ui/core/Slider';
import { updateShareSplit } from '../../redux/actions/userActions';
 
export default function HoldShares (props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return(
  <div>
    <p>You will maintain the current amount of shares for next turn.</p>

  </div>
  )
}