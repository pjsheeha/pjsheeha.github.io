import {
    UPDATE_SALARY,
    UPDATE_SAVINGS,
    UPDATE_ASSETS,
    UPDATE_CAREER,
    UPDATE_INVESTMENTS,
    UPDATE_SKILLS,
    UPDATE_SAVINGS_GOAL,
    UPDATE_ASSETS_DEBTS,
    UPDATE_SPIRIT,
    PLAYER_MAKE_CHOICE,
    FINISH_OUTCOME,
    SELECT_CAREER,
    UPDATE_SHARE_SPLIT,
    UPDATE_INVEST_SETTING,
    UPDATE_MARK_SHARES_SELL
} from '../types.js';


export const updateInvestSetting = (amount) => (dispatch) => {

    dispatch({
        type: UPDATE_INVEST_SETTING,
        switch: amount,
    });

}
export const updateMarkSharesSell = (amount) => (dispatch) => {

    dispatch({
        type: UPDATE_MARK_SHARES_SELL,
        payload: amount,
    });

}
export const updateShareSplit = (amount) => (dispatch) => {

    dispatch({
        type: UPDATE_SHARE_SPLIT,
        payload: amount,
    });

}
export const updateSalary = (amount) => (dispatch) => {

    dispatch({
        type: UPDATE_SALARY,
        payload: amount,
    });

}
export const updateSkills = (newSkill) => (dispatch) => {

    dispatch({
        type: UPDATE_SKILLS,
        skill: newSkill,
    });

}
export const updateSavings = (amount) => (dispatch) => {

    dispatch({
        type: UPDATE_SAVINGS,
        payload: amount,
    });

}
export const updateSavingsGoal = (amount) => (dispatch) => {

    dispatch({
        type: UPDATE_SAVINGS_GOAL,
        payload: amount,
    });

}
export const updateAssetsDebts = () => (dispatch) => {

    dispatch({
        type: UPDATE_ASSETS_DEBTS,
    });

}
export const updateAssets = (newItem) => (dispatch) => {

    dispatch({
        type: UPDATE_ASSETS,
        item: newItem,
    });

}
export const updateCareer = (job) => (dispatch) => {

    dispatch({
        type: UPDATE_CAREER,
        info: job,
    });

}
export const updateInvestments= (invests) => (dispatch) => {

    dispatch({
        type: UPDATE_INVESTMENTS,
        stocks: invests,
    });

}

export const makeChoice=({event, choice}) => (dispatch) => {

    // TODO: Validate choice;

    let outcome = choice.outcome;

    outcome.spirit && dispatch({
        type: UPDATE_SPIRIT,
        payload: outcome.spirit,
    });
/*
    outcome.cash && dispatch({
        
        type: UPDATE_SAVINGS,
        payload: outcome.cash,
    });
    */
    outcome.asset && dispatch({
        type: UPDATE_SAVINGS,
        asset: outcome.asset,
    });
    dispatch({
        type: PLAYER_MAKE_CHOICE,
        event: event,
        choice: choice,
        payload: outcome.cash,
    });
}

export const finishOutcome = () => (dispatch) => {
    dispatch({
        type: FINISH_OUTCOME,
    })
}

export const selectCareer = (careerDetails) => (dispatch) => {
    dispatch({
        type: SELECT_CAREER,
        payload: careerDetails
    });
}