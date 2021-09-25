import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,publishedDate,author}=this.props;
    
        
        return (
            <div>
                <div className="card " >
                        <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} className="btn btn-dark">Show More</a>
                        </div>
                        <div className="newsDetails container" style={{fontSize:"15px"}}>
                            <p style={{marginBottom:"5px"}}><b>By</b> {author===null?"Unknown":author}<br/> <b>At</b> {new Date(publishedDate).toDateString()}</p>
                            
                        </div>
                </div>
            </div>
        )
    }
}

