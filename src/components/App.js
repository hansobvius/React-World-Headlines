import React, { Component } from 'react';
import '../styles/App.css';
import HeaderContainer from './HeaderContainer';
import Main from './Main';
import Search from './Search';
import handleData from '../actions/sharedNews';

const IS_MAIN_ROUTE = true;

class App extends Component{

  state = {
      isMain: IS_MAIN_ROUTE,
      menuToggle: false,
  }

  componentDidMount = () => {
      const { store } = this.props;
      store.dispatch(handleData(store));
      store.subscribe(() => this.forceUpdate());
      console.log('App',store.getData);
  } 

  handleSearchPage = () => {
      this.setState((current) => ({
          isMain: !current.isMain
      }))
  }

  handleToggleMenu = () => {
      this.setState((current) => ({
          menuToggle: !current.menuToggle
      }))
  }
  
  render(){
      const { store } = this.props;
      const { isMain, menuToggle } = this.state;
      const { news } = store.getState();
      console.log(`The data is ${news}`)
      return(
          <div>
              <HeaderContainer 
                  store={store} 
                  isMain={isMain}
                  handleSearch={this.handleSearchPage} 
                  handleToggleMenu={this.handleToggleMenu}
              />
              {isMain 
                  ? (<Main data={news.articles} store={store} menuToggle={menuToggle}/>)
                  : (<Search store={store}/>)}
          </div>
      )
  }
}


export default App;
