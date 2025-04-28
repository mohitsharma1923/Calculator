import { calculatorReducer,CALCULATOR_KEY} from "./calculatorRedux/CalculatorReducer";
import { combineReducers } from "redux";




let rootReducer=combineReducers({
    [CALCULATOR_KEY]:calculatorReducer
})

export {rootReducer}