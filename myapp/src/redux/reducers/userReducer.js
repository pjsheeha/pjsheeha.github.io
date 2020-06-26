import {
    UPDATE_SALARY,
    UPDATE_SAVINGS,
    UPDATE_ASSETS,
    UPDATE_CAREER,
    UPDATE_INVESTMENTS,
    UPDATE_SKILLS,
    UPDATE_ASSETS_DEBTS,
    UPDATE_SAVINGS_GOAL,
    UPDATE_SPIRIT,
    PLAYER_MAKE_CHOICE,
    FINISH_OUTCOME,
    SELECT_CAREER,
    UPDATE_SHARE_SPLIT,
    UPDATE_INVEST_SETTING,
    UPDATE_MARK_SHARES_SELL

} from '../types';

const initialState = {
    salary: 0,
    career: "no career",
    skills: {types: []},
    savingsGoal: 0,
    investments: {shares:0, amountSpent: 0,savings:1000,value:10,history:[10,8,8.50,9,10.5,9,12,13,8,20,15,16,17,18,10,8,7,5,8,8.50,9,10,11,15,12,18,20,21,22,28,21,20,20.50,18,30],shareSplit:30,setting:'buy',sharesToSell:0},
    debts: [],
    assets: [
        {
            name: "Apartment",
            monthlyExpense: 1600,
            percentageExpense: 0,

        },
        {
            name: "Transportation",
            monthlyExpense: 200,
            percentageExpense: 0,


        },
        {
            name: "Food",
            monthlyExpense: 400,
            percentageExpense: 0,

        },
        {
            name: "Taxes",
            percentageExpense: .40,
            monthlyExpense: 0,

        }
    ],
    spirit: 50,
    lastChoice: {},

    // 
    roundType: "choice", // choice or outcome
    unit: 0, // Overall unit.
    choice: 0, // Number of choice in a unit. 
    event: 0, // Index of event.
}

export default function(state = initialState, action) {
    switch(action.type) {

        case UPDATE_SHARE_SPLIT:
            return {
                ...state,
                investments: {
                ...state.investments,
                shareSplit: action.payload,
                },
            }
        case UPDATE_INVEST_SETTING:
            return {
                ...state,
                investments: {
                ...state.investments,
                setting: action.switch,
                },
            }
        case UPDATE_MARK_SHARES_SELL:
            return {
                ...state,
                investments: {
                ...state.investments,
                sharesToSell: action.payload,
                },
            }
        case UPDATE_SALARY:
            return {
                ...state,
                salary: state.salary + action.payload,
            }
        case UPDATE_SAVINGS:
            console.log("Update savings", action.payload);
            return {
                ...state,
                investments: {
                    ...state.investments,
                    savings: state.investments.savings + action.payload,
                },
            }
            case UPDATE_SAVINGS_GOAL:
                return {
                    ...state,
                    savingsGoal:state.investments.savingsGoal+action.payload,
    
                }
        case UPDATE_ASSETS:
            return {
                ...state,
                assets: state.assets.push(action.item),
            }
        case UPDATE_CAREER:
            return {
                ...state,
                career: action.info,
            }
        case UPDATE_INVESTMENTS:
            return {
                ...state,
                
                investments: {
                ...state.investments,
                shares: state.investments.shares+action.invests, 
                savings:state.investments.savings,
                },
            }
        case UPDATE_SKILLS:
            return {
                ...state,   
                skills: state.skills.types.push(action.skill),
            }

        case UPDATE_SPIRIT:
            return {
                ...state,
                spirit: Math.min(Math.max(state.spirit + action.payload, 0), 100),
            }
            
        case UPDATE_ASSETS_DEBTS:

            let newChange = [];
            for (let i =0; i< state.assets.types.length;i++){
                if (state.assets.types[i].debt > 0){
                newChange.push(state.assets.types[i].debt -1);
                }

            }
            return {
                ...state,   
                assets: newChange,
            }
        case PLAYER_MAKE_CHOICE:

            function payExpenses(myValue){
                let i = 0;
                let currValue = myValue;
                while (i < state.assets.length-1){
                    console.log(state.assets[i]);
                    if (currValue - state.assets[i].monthlyExpense > 0){
                        currValue -= state.assets[i].monthlyExpense;
                    }
                
                    if (currValue - myValue*state.assets[i].percentageExpense > 0){
                        currValue -= state.assets[i].percentageExpense;
                    }
                    i++;
                }
                return currValue
            }
            let newIncome = action.choice.outcome.cash;

            let addFromSale=0;
            let sharesAdd= 0;
            let prev =0;
            let asset = action.choice.outcome.asset;
            if (newIncome >0){
                console.log("P"+state.investments.setting);

                if (state.investments.setting ==='sell'){

                    addFromSale = (state.investments.shares*(state.investments.sharesToSell/100)) * state.investments.value;
                }
                else if (state.investments.setting ==='buy'){

                    sharesAdd = ((newIncome * (state.investments.shareSplit/100))/state.investments.value);
                }
                prev = newIncome * (1-(state.investments.shareSplit/100))
            }
            let newAssets = state.assets;
            if (action.asset !== undefined){
                newAssets.push(action.asset);
            }
            addFromSale = payExpenses(prev);
            return {
                ...state,
                lastChoice: action.choice,
                roundType: "outcome",
                event: state.event + 1,
                investments: {
                    ...state.investments,
                    amountSpent:state.investments.amountSpent + (newIncome * (state.investments.shareSplit/100)),
                    shares: state.investments.shares + sharesAdd,
                    savings: state.investments.savings + addFromSale,
                    value:state.investments.history[state.event+1],
                },
                assets: newAssets,
            }
        case FINISH_OUTCOME:

            // TODO: Apply Expenses from assets.
            // TODO: Increase Salary
            // TODO: Increment Debts


            return {

                ...state,
                
                roundType: "choice",

                
            }
        case SELECT_CAREER:
            return {
                ...state,
                career: action.payload,
                debts: state.debts.concat(action.payload.debt),
                salary: action.payload.salaries[0],
                unit: 1,
            }
        default:
            return state;
        }

    }

    

