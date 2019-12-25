import React, { Component } from 'react';
import '../styles/App.css';
import NewsContainer from './NewsContainer';
import handleSearch from '../actions/sharedSearch';

class Search extends Component{
    state = {
        value: '',
        query: false,
    }

    addValue = (event, booleanValue) => {
        event.preventDefault();
        this.setState({
            query: booleanValue
        })
    }

    handleValue = (event) => {
        event.preventDefault();
        this.setState({
            value: event.target.value
        })
    }

    isDisabled = () => {
        if(this.state.value === ''){
            return true;
        }
    }

    render(){
        const { value, query } = this.state;
        const { store } = this.props;
        const { queryResult } = store.getState();
        const IS_TRUE = true;
        return(
            <div>
                <div>
                    <div className='form-box'>
                        <form>
                            <input
                                type="text"
                                onChange={(e) => this.handleValue(e)}
                                value={this.state.value}
                            />
                            <button
                                onClick={(e) => {
                                        this.addValue(e, IS_TRUE)
                                        store.dispatch(handleSearch(value))
                                    }}
                                disabled={this.isDisabled()}
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <h1>{this.state.query}</h1>
                    {query && (
                        <NewsContainer data={queryResult.articles}/>
                    )}
                </div>
            </div>
        )
    }
}

export default Search;