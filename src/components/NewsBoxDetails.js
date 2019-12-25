import React, { Component } from 'react';
import '../styles/App.css';

class NewBoxDetails extends Component{
    render(){
        const { data } = this.props;
        return(
            <div>   
                <div className="news-box">
                    <div className="news-box-info">
                        <img alt='article-img' className="article-img" style={{
                            backgroundImage: `url("${data.urlToImage}")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}/>
                        <div className="article-text">
                            <h2>{data.title}</h2>
                            <div>
                                <p>{data.publishedAt}</p>
                                <p>{data.content}</p>    
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default NewBoxDetails;