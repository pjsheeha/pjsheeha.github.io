import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { finishOutcome } from '../../redux/actions/userActions';

export default function Outcome () {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    let choice = user.lastChoice;
    return (
        <div>
            <h2>Outcome</h2>
            <h4>{choice.title}</h4>
            <h4>{choice.description}</h4>

            <div>You're savings changed by {choice.outcome.cash}</div>
            <div>You're spirit changed by {choice.outcome.spirit}</div>
            <p>{choice.outcome.description}</p>
            <button onClick={() => dispatch(finishOutcome())}>Continue</button>
        </div>
    )
}