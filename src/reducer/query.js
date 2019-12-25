import RECEIVE_SEARCH_RESULT from '../actions/search'

function queryResult(state = [], action){
    switch(action.type){
        case RECEIVE_SEARCH_RESULT:
            return {
                ...state,
                ...action.query
            }
        default:
            return state;
    }
}

export default queryResult;