import React, { Component } from 'react';
import '../styles/App.css';
import NewsBoxDetails from './NewsBoxDetails'

class NewsContainer extends Component{
    render(){
        const { data } = this.props;
        console.log(data);
        return(
            <div>
                <div className="body-news">
                    <ul>                           
                       {data && (
                            data.map(d => (
                                <li key={d.title}>
                                    <NewsBoxDetails data={d}/>
                                </li>
                            ))
                       )}                              
                    </ul>
                </div>
            </div>
        )
    }
}

export default NewsContainer;