import React, {useContext, useEffect} from "react";
import { Card } from "antd";
import { newsContext } from "../../contexts/newsContext";
import "./NewsList.css"

const { Meta } = Card
const NewsCard = () => {
  const { getNews, news } = useContext(newsContext)
  useEffect(() => {
      getNews();
  }, [])
  return (
    <div 
        style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}>
          {news.map((item) => (
              <Card
              className='news-card'
              hoverable
              key={item.id}
              style={{ width: '300px', margin: '10px', flexBasis: '30%', background: 'transparent', border: 'none' }}
              cover={<img alt="example" src={item.image1} style={{width: '420px', height: '280px', marginLeft: '4%'}}/>}
              actions={[]}>
              <Meta
              title={<h4 style={{display: 'flex', justifyContent: 'center', color: 'white', fontSize: '18px'}}>{item.title}</h4>}
              />
              </Card>
              ))}
        </div>
  );
};

export default NewsCard;

