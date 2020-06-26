import React, {useState} from 'react';
import { careers } from '../../gameInfo/careers'; 

import { useDispatch } from 'react-redux';
import { selectCareer } from '../../redux/actions/userActions';

import "../../styles/_choosecareer.css";

export default function ChooseCareer () {

    const [chosenCareer, setChosenCareer] = useState("doctor");
    const [careerDetails, setCareerDetails] = useState(careers[0]);

    const dispatch = useDispatch();

    function getCareer (name) {
        return careers.find(career => career.name === name);
    }

    function onSelectChange (e) {
        console.log(e.target.value);
        setChosenCareer(e.target.value);
        setCareerDetails(getCareer(e.target.value))
    }

    return (
        <div className="screen">
            <div className="choice-body">
                <h3>Choose a Starting Career</h3>
                <label htmlFor="career">What career would you like to start with?</label>
                <select 
                onChange={onSelectChange} 
                value={chosenCareer} 
                name="career" 
                id="career">
                    {careers.map(career => {
                        return <option value={career.name} label={career.name} />
                    })}
                </select>

                <span> <h4>Starting Debt</h4> {careerDetails.debt.total} at {careerDetails.debt.interestRate*100} </span>
                <span> <h4>Starting Salary</h4> {careerDetails.salaries[0]} </span>

                <button onClick={() => dispatch(selectCareer(careerDetails))}>Choose This Career</button>
            </div>
        </div>
    )
}