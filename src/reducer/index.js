import { combineReducers } from 'redux'
import news from './news';
import countryPreference from './countryPreference';
import coutryPosition from './countryPosition';
import queryResult from './query';

export default combineReducers({
    countryPreference,
    coutryPosition,
    news,
    queryResult
})