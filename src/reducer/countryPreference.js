import ADD_COUNTRY from '../actions/country'

const INITIAL_COUNTRY_PREFERENCE = 'br';

export default function countryPreference(state = INITIAL_COUNTRY_PREFERENCE, action){
    switch(action.type){
        case ADD_COUNTRY:
            return action.country;
        default:
            return state;
    }
}