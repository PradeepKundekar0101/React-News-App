import React, { Component } from 'react'
import Loading from './Loading';
import { Newsitem } from './Newsitem';
// import PropTypes from 'prop-types'

export class News extends Component {
    
    
    static defaultProps={
        category:'general'
    }
    capitalize(s)
    {
        return s[0].toUpperCase() + s.slice(1);
    }

    constructor(props)
    {
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1
        }
        document.title= `${this.capitalize(this.props.category)} News`;
    }
    async componentDidMount()
    {
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.articles.page}&pagesize=${this.props.pagesize}`;   
        this.setState({
            loading:true
        })
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
            articles:parsedData.articles,
            loading:false
        });
    }
    handleNext =async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;   
        this.setState({
            loading:true
        })
        let data=await fetch(url);
        let parsedData=await data.json();
        
        this.setState({

            articles : parsedData.articles,
            page:this.state.page+1,
            loading:false
        });
       
    }
    handlePrev=async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pagesize=${this.props.pagesize}`; 
        this.setState({
            loading:true
        })
        let data=await fetch(url);
        let parsedData=await data.json();        
        this.setState({
            page:this.state.page-1,
            articles : parsedData.articles,
            loading:false
        })
    }
    render() {
        
        return (
            <div className="container">
                <h1 className="text-center" style={{marginTop:"50px"}}>{`Top ${this.capitalize(this.props.category)} Headlines`}</h1>
                {this.state.loading && <Loading/>}
                <div className="row my-5">
                    {!this.state.loading && this.state.articles.map((element)=>{
                      
                        return <div className="col-md-4" key={element.url} d={this.dateDiff}>
                             <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage==null?"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg":element.urlToImage} newsUrl={element.url} author={element.author} publishedDate={element.publishedAt}/>
                    </div>
 
                    })}
                                    
                </div>
                <div className="d-flex justify-content-b">
                <button disabled={this.state.page<=1} type="button" className="btn btn-primary  mb-5" onClick={this.handlePrev}>Previous</button>
                <button disabled={this.state.page>=3} type="button" className="btn btn-primary ml-5 mb-5" onClick={this.handleNext}>Next</button>
                </div>
            </div>
        )
    }
}


export default News
