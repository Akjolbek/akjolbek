
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Empty } from "antd";

import { newsContext } from "../../contexts/newsContext";
import NewsCard from "./NewsCard";
import "./NewsList.css"

const NewsList = () => {
  const [searchParams] = useSearchParams();
  const [] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
  );

  const { news, getNews } =
    useContext(newsContext);

  useEffect(() => {
    getNews()
  }, [])

  return (
    
      <div className='body'>
      <div className="news-list">
       {news.length > 0 ? (
         <NewsCard/>
       ) : (
         <Empty style={{ marginBottom: "20px" }} />
       )}
     </div>
     <div style={{ display: "flex", justifyContent: "center" }}>
   </div>
     
   </div>  
  );
};

export default NewsList;