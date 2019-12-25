import { getData } from '../utils/api-data';
import addNews from './data';

export default function handleData(store){
    const { countryPreference } = store.getState();
    return (dispatch, getState) => {
        return getData(countryPreference)
            .then(res => res.json())
            .then(data => {
                console.log('DATA',data)
                dispatch(addNews(data))
            })
    }
}


