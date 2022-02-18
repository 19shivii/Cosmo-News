import React, { Component } from 'react'

//export class NewsItems extends Component {
const NewsItems=(props)=>{
   // render() {
      let { title, description, imageUrl, newsurl, author, date ,source} = props;
        return (
            <div className="card my-3 " style={{ width: '18rem', objectFit: "cover", boxShadow: '6px 10px 6px -3px rgba(148,142,142,0.75)' }}>
             <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
             <span className=" badge rounded-pill bg-danger" >
                    {source}
                </span>
                </div>  
                <img src={imageUrl} className="card-img-top " style={{ height: '160px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text" >{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-primary">Read more</a>
                </div>
            </div>

        )
    
}

export default NewsItems