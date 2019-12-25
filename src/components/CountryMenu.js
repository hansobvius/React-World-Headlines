import React, { Component } from 'react';
import '../styles/App.css';
import countryName from '../utils/country-name';
import countryCode from '../utils/country-code';
import addCountry from '../actions/country';
import addCountryPosition from '../actions/countryPosition';
import handleData from '../actions/sharedNews';

class CountryMenu extends Component{
    render(){
        const { store } = this.props;
        return(
            <div className="country-menu-body">
                <ul className="country-menu-list">
                    {countryName.map((country, index) => (
                        <li key={index} >
                            <span onClick={() => {
                                store.dispatch(addCountry(countryCode[index]));
                                store.dispatch(addCountryPosition(index));
                                store.dispatch(handleData(store));
                            }}>
                                {country}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CountryMenu;