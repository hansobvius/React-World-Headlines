import React, { Component } from 'react';
import '../styles/App.css';
import NewsContainer from './NewsContainer';
import CountryMenu from './CountryMenu';

class Main extends Component{
    render(){
        const { data, store, menuToggle } = this.props;
        return(
            <div className="main-body">
                <NewsContainer data={data}/>
                {menuToggle && (
                    <CountryMenu store={store}/>
                )}
            </div>
        )
    }
}

export default Main;