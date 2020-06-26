import React, { useState } from 'react';

import Home from './screens/home';
import Time from './screens/time';
import Assets from './screens/assets';
import Debts from './screens/debts';
import Skills from './screens/skills';
import Invests from './screens/invests';

let classNames = require('classnames');

function Screen(props) {

    let renderScreen = () =>{
        switch (props.screen){
            case "home":
                return <Home />;
            case "time":
                return <Time/>;
            case "skills":
                return <Skills/>;
            case "debt":
                return <Debts/>;
            case "inventory":
                return <Assets/>;
            case "investments":
                return <Invests/>;
            default:
                return <Home />;
        }
    }

    return (  
        <div className={"screen " + props.screen}>
            <h2 className="screen-text">{props.screen}</h2>
                {renderScreen()}
            </div>

         );
    
}

export default Screen;