export const ADD_COUNTRY = 'ADD_COUNTRY';

export default function addCountry(country){
    return {
        type: ADD_COUNTRY,
        country
    }
}
