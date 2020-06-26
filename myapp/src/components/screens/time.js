import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSalary,updateSavings,updateAssets,updateCareer,updateInvestments,updateSkills,updateAssetsDebts,updateSavingsGoal } from '../../redux/actions/userActions';


export default function Time (props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
	
  // Calculation...
  let visible = true;

  return (
	<div className="center">
		Your time.
{/* 	  Home. Custom home screen.

	  <Button 
		variant="success" 
		disabled={salButtonC}
		onClick={()=>{
		  props.handleFunc(props.savings,props.setSavings,props.salary/4)
		}}>
		  Wait to collect salary
	  </Button>
	 */}
	</div>
  )
}




//         if (props.years < 2){
//             let jobOptions = [
//                 { value: 80000, label: 'Doctor'  },
//                 { value: 60000, label: 'Engineer' },
//                 { value: 50000, label: 'Cow Rancher'},
//                 { value: 70000, label: 'Sky Diver'},
//               ];

//               const groupedOptions = [
//                 {
//                   label: 'Jobs',
//                   options: jobOptions,
//                 },

//               ];
//               const groupBadgeStyles = {
//                 backgroundColor: '#EBECF0',
//                 borderRadius: '2em',
//                 color: '#172B4D',
//                 display: 'inline-block',
//                 fontSize: 12,
//                 fontWeight: 'normal',
//                 lineHeight: '1',
//                 minWidth: 1,
//                 padding: '0.16666666666667em 0.5em',
//                 textAlign: 'center',
//               };
			  

//         let setUps = ['What is your job?','Whats your savings goal?','How much savings do you have?'];
//         let dropdown;
//         if (props.years == 0){
//             dropdown = <Select
//             defaultValue={jobOptions[1]}
//             options={jobOptions}
//             className="basic-single"
			
//             name="jobs"
//             onChange={(e)=>{handlemyVal(e)}}
//           classNamePrefix="select"
//           />;
//         }
		
//         else{
//             dropdown = <input 
//             name = {props.name[props.years]}
//              min="1"max="100" type="number"
//               style = {{width:"300px"}}

//               onChange= {(e)=>{handlemyVal(e.target);}}
//               />
//         }
//         let addButt;
//         if (activeButton == true){
//             addButt =             <Button onClick = {()=>{setActiveButton(false);props.handleFunc(props.years,props.setYears,1); values[props.years][1](parseInt(myValue));setOpen(!open);}} variant="primary">Submit</Button>;

//         }
//         else{
// addButt= <Button disabled>Submit</Button>;
//         }
//         return (

//             <div className="center" >
	  
	  
	 
//             <h1>Setup</h1>
//             <label>{setUps[props.years]} </label>
//             <br/>
//             <p>{values[props.years][0]}</p>
//             <div className="center">
//         {dropdown}
//             </div>
			
//             <br/><br/>

			

// {addButt}            
//             </div>
//         );
//         }
//         else{

//             return (
//             <div className="center">

//             <h1>Year {Math.round((props.years-2)/4)}</h1>
//             <h2>{listOfChoices[currChoice].myStatement}</h2>
//             <label>{props.choices} </label>
//             <ToggleButtonGroup vertical type="radio" value={value} name="options" onChange = {handleChange} >
//             <ToggleButton value={0} onChange= {()=>{myChange(listOfChoices[currChoice].cost[value[0]]); myVar = updateSavings; myVarF = props.setSavings;}}>{listOfChoices[currChoice].options[0]}</ToggleButton>
//             <ToggleButton value={1} onChange= {()=>{myChange(listOfChoices[currChoice].cost[value[0]]); myVar = updateSavings; myVarF = props.setSavings;}}>{listOfChoices[currChoice].options[1]}</ToggleButton>
//             <ToggleButton value={2} onChange= {()=>{myChange(listOfChoices[currChoice].cost[value[0]]); myVar =updateSavings; myVarF = props.setSavings;}}>{listOfChoices[currChoice].options[2]}</ToggleButton>
//             </ToggleButtonGroup>
//             <br/><br/>
//             <Button         aria-controls="example-collapse-text"
//             aria-expanded={open} onClick = {()=>{  if (props.years %2 ==0){setSalButtonC(true);}console.log("P"+stockAddendum);props.handleFunc(myVar,myVarF,listOfChoices[currChoice].cost[value[0]]+parseInt(stockAddendum));props.handleFunc(props.years,props.setYears,1);setCurrChoice(Math.round(Math.random(4))) ;changeListOfStocks(Math.random()*50)}}>Submit</Button>
//             <p>{props.savings}</p>
			
			
// {salButton}            
			
   

//             </div>
//             );
//         }
//     }