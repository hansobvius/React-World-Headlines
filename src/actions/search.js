export const RECEIVE_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

export default function addSearch(query){
    return {
        type: RECEIVE_SEARCH_RESULT,
        query
    }
}