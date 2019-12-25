import React, { Component } from 'react';
import '../styles/App.css';

class HeaderContainer extends Component{
    render(){
        const { store, isMain, handleSearch, handleToggleMenu } = this.props;
        const { countryPreferencePosition } = store.getState();
        return(
            <div className="header">
                <h2 className="header-name">World Headlines</h2>
                <h3 onClick={handleSearch}>{isMain ? 'Search' : 'Home'}</h3>
                <h3 onClick={handleToggleMenu}>MENU</h3>
            </div>
        )
    }
}

export default HeaderContainer;