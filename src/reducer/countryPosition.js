import ADD_COUNTRY_POSITION from '../actions/country';

const INITIAL_COUNTRY_POSITION = 6;

export default function countryPreferencePosition(state = INITIAL_COUNTRY_POSITION, action){
    switch(action.type){
        case ADD_COUNTRY_POSITION:
            return action.countryPosition   
        default:
            return state;
    }
}