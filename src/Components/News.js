import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

// Specifies the default values for props:

export class News extends Component {

Capitalize=(text)=>{
    return text.charAt(0).toUpperCase()+text.slice(1);
  }
  static defaultProps = {
    country:'in',
    pagesize:12,
    category:'general'
  }
  
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize:PropTypes.number
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 1
    }
    document.title=`Cosmo News-${this.Capitalize(this.props.category)}`
  }
async updateNews(){
  this.setState({ loading: true })
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=817bc4c4ef3641319e677329256f17bf&page=${this.state.page}&pagesize=${this.props.pagesize}`;
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
}

  async componentDidMount() {
  this.updateNews();
  }
  handleonPrev = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  }
  handleonNext = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  }
  fetchMoreData = async() => {
    this.setState({
      page:this.state.page+1
    })
    this.setState({ loading: true })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=817bc4c4ef3641319e677329256f17bf&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles) });
  
  };

  render() {

    return (
      <div className="container ">
        <h2 className='my-4 text-center'>Cosmo News :Top  {this.props.category} Headlines</h2>
      {/* {this.state.loading && <Spinner />} */}
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
          { this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
          
        </div>
          </div>
        
        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
          <button type="button" onClick={this.handleonPrev} className="btn btn-warning" disabled={this.state.page <= 1}>&larr; Prev</button>
          <button className="btn btn-warning" type="button" onClick={this.handleonNext} disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pagesize)}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News