import {
    UPDATE_SALARY,
} from '../types';

const initialState = {
    elementsLoading: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        case UPDATE_SALARY:
            return {
                ...state,
                elementsLoading: {...state.elementsLoading, salary: true}
            }
        default:
            return state;
        }
    }

