import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  const Capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  // document.title=`Cosmo News-${Capitalize(props.category)}`

  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles)
    setLoading(false)
    settotalResults(parsedData.totalResults)
    props.setProgress(100);

  }
  useEffect(() => {
    updateNews();
    document.title=`Cosmo News-${Capitalize(props.category)}`
    }, [])

  const fetchMoreData = async () => {
    
    //setLoading(true)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)

  };
  return (
    <div className="container">
      <h2 className='text-center' style={{marginTop:'100px'}}>Cosmo News :Top  {props.category} Headlines</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}

          </div>
        </div>

      </InfiniteScroll>
    </div>
  )
}


News.defaultProps = {
  country: 'in',
  pagesize: 12,
  category: 'general'
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pagesize: PropTypes.number

};
export default News