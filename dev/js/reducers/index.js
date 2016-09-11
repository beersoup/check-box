import {combineReducers} from 'redux';
import ReducerCookingSkill from './reducer_cooking_skill';
import ReducerDietsOptions from './reducer_diets_options';
import ReducerDietsOptionsBelow from './reducer_diets_below';
import ActiveSkillReducer from './reducer_active_skill';
import ActiveDietsReducer from './reducer_active_diets';



const allReducers = combineReducers({
    cookingSkillOptions: ReducerCookingSkill,
    dietsOptions: ReducerDietsOptions,
    dietsBelowOptions: ReducerDietsOptionsBelow,
    activeSkill: ActiveSkillReducer,
    activeDiets: ActiveDietsReducer
    
})
export default allReducers;