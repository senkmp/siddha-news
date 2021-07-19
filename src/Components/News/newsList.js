import News from "./news";
import React, { useEffect, useState } from "react";
import classes from "./newsList.module.css";
const NewsList = (props) => {
  
  
  const [newsList, setNewsList] = useState([]);
  const url = props.url
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNewsList(data.articles))
      .catch((error) => alert("Daily limit reached"));
  }, [url]);
  
  return (
    
    newsList.length>0 ?
    <div className={classes.newsList}>
      {newsList.map((news) => (
        <News key={news.title} news={news} onClick={props.onClick} />
      ))}
    </div> : <p>Loading...</p>
  );
};

export default NewsList;
