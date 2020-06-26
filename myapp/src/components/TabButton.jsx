import React, { useState } from 'react';

import '../styles/_tabbutton.css';
let classNames = require('classnames');

export default function TabButton(props) {

  return (
    <button 
      {...props}
      className={classNames("tab-button", props.className)}>
        {props.tab}
    </button>
  )
}


// const classes = classNames(
//   {"buttonRight":props.rightButton},
//   {"homeButton":props.homeButton},
//   props.myCSS)

// //const classesNav = classNamesNav({"buttonNav":true},{"time":props.myCSS==='time'}, {"skills":props.myCSS==="skills"}, {"savings":props.myCSS==="savings"},{"investments":props.myCSS==="investments"},{"inventory":props.myCSS==="inventory"});

// if (props.countTime) {
//   return (
//     <div className = 'rightalign'>

//       <p>You clicked {props.myCount} times</p>
//       <button onClick={props.handleFunc } className= {classes} >
//         Click me
//       </button>
//     </div>
//   );
// }
// else{
// return (
//   <div className = 'rightalign'>

//     <button onClick={props.handleFunc}className = {classes} >
        
//     </button>
//   </div>
// );
// }