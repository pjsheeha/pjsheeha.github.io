import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import TabButton from './components/TabButton';
import TopBar from './components/topbar';
import Screen from './components/screen';
import ChooseCareer from './components/screens/chooseCareer';

import { useSelector } from 'react-redux';


import './styles/_main_colors.css';

function App() {
  
  let [screenOn, setScreenOn] = useState("home");
  let [oldScreen, setOldScreenOn] = useState("home");
  let [years, setYears] =  useState(0);

  const user = useSelector(state => state.user);
  
  let switchScreen = (screenName) => {
    console.log(screenName);
    setOldScreenOn(screenName);
    setScreenOn(screenName);
  }

  let myT = () => {
    console.log("L");
  }

  function renderBody () {
    if (user.unit === 0) {
      return <ChooseCareer />
    } else {
      return         <Screen 
      screen={screenOn}
      years = {years}
      setYears={setYears}/>
    }
  }

 return(
    <div className="app">
      <TopBar setScreen={setScreenOn}/>
      <div id="game-body">
        {renderBody()}
        <div id="side-bar">
          <TabButton disabled={user.unit === 0} className="side-tab" tab="time" onClick={()=>{switchScreen('time')}} />
          <TabButton disabled={user.unit === 0} className="side-tab" tab="skills" onClick={()=>{switchScreen('skills')}} />
          <TabButton disabled={user.unit === 0} className="side-tab" tab="investments" onClick={()=>{switchScreen('investments')}} />
          <TabButton disabled={user.unit === 0} className="side-tab" tab="debt" onClick={()=>{switchScreen('debt')}} />
          <TabButton disabled={user.unit === 0} className="side-tab" tab="inventory" onClick={()=>{switchScreen('inventory')}} />
        </div>
      </div>
    </div>

);
}

export default App;
