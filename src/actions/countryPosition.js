export const ADD_COUNTRY_POSITION = 'ADD_COUNTRY_POSITION';

export default function addCountryPosition(countryPosition){
    return {
        type: ADD_COUNTRY_POSITION,
        countryPosition
    }
}