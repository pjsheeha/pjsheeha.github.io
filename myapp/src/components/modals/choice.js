import React from 'react';
import { useDispatch } from 'react-redux';
import { events } from '../../gameInfo/events';
import { makeChoice } from '../../redux/actions/userActions';

export default function Choice (props) {

  const dispatch = useDispatch();

  // TODO: Make sure event exists.
  let event = events[props.eventIndex%events.length];

  // TODO: Pick branch based on possibilites.
  let branch = event.branches[0];


  function performChoice(index) {
    let choice = branch.choices[index];

    dispatch(makeChoice({
      event: branch,
      choice: choice
    }));  choice:   console.log(choice.outcome);
    console.log("LET OTHER ELEMENTS KNOW CHOICE WAS MADE");
  }

  return (
    <div className="choice">
      <h4>{branch.title}</h4>
      <p>{branch.description}</p>

      {
        branch.type === 'action' &&
        <div>
          {
            branch.choices.map((choice, index) => {
              return <button 
              onClick={() => performChoice(index)}
              key={"choice-button-" + index}>
                      {choice.title}
                    </button>
            })
          }
        </div>
      }
    </div>
  )
}
