import React, { useContext, useEffect, useState } from "react";
import { List, Avatar } from "antd";
import { Link, useSearchParams } from "react-router-dom";

import { newsContext } from "../../contexts/newsContext";

const AdminNewsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getNews, deleteNews, news} =
    useContext(newsContext);

  const [currentPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 10
  );
  useEffect(() => {
    setSearchParams({
      q: "",
      _page: currentPage,
      _limit: limit,
    });
  }, []);
  useEffect(() => {
    setSearchParams({
      q: "",
      _page: currentPage,
      _limit: limit,
    });
  }, [currentPage, limit]);
  useEffect(() => {
    getNews();
  }, [searchParams]);
  return (
    <>
      <List
        className="demo-loadmore-list items-list"
        itemLayout="horizontal"
        dataSource={news}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a
                style={{color: 'white'}}
                key="list-loadmore-edit"
                onClick={() => deleteNews(item.id)}>delete</a>,
              <Link style={{color: 'white'}} to={`/edits/${item.id}`}>edit</Link>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.image1} />}
              title={
                <a style={{color: 'white'}}>
                  {item.title}
                </a>
              }
            />
          </List.Item>
        )}
      />
      {/* <Pagination
        onChange={(page, limit) => {
          setCurrentPage(page);
          setLimit(limit);
        }}
        current={+currentPage}
        defaultCurrent={1}
        total={+newsTotalCount}
        pageSize={+limit}
      /> */}
    </>
  );
};

export default AdminNewsList;
