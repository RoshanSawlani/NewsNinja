import React from "react";
// import DarkModeToggle from "./DarkModeToggle";

const NewsItem = (props)=>{
    let { title, description, imageUrl, author, date, newsUrl, source} = props;

    return (
      <div className="my-3">
        <div className="card" style={{}}>
        <div style={{display:'flex',
        justifyContent:'flex-end',
        position:'absolute',
        right:0
        }}>
        <span className="badge rounded-pill bg-success">{source}</span>  
        </div>
          <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2023/10/Collage-Maker-07-Oct-2023-08-19-AM-5305-770x433.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Source":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
