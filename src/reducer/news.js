import ADD_DATA from '../actions/data'

function news(state = [], action){
    switch(action.type){
        case ADD_DATA:
            return {
                ...state, 
                ...action.data
            }
        default:
            return state;
    }
}

export default news;