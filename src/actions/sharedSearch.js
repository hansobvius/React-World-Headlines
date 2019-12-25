import { getSearch } from '../utils/api-data';
import addSearch from './search';

export default function handleSearch(query){
    return (dispatch) => {
        return getSearch(query)
            .then(res => res.json())
            .then(data => {
                console.log('handleSearch',data)
                dispatch(addSearch(data))
            })
    }
}