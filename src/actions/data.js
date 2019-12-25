export const ADD_DATA = 'ADD_DATA';

export default function addNews(data){       
    return {
            type: ADD_DATA,
            data
        }
}

