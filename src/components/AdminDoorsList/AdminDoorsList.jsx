import React, { useContext, useEffect, useState } from "react";
import { List, Avatar } from "antd";
import { Link, useSearchParams } from "react-router-dom";

import { doorsContext } from "../../contexts/doorsContext";

const AdminDoorsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getDoors, deleteDoor, doors } =
    useContext(doorsContext);

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
    getDoors();
  }, [searchParams]);
  return (
    <>
      <List
        style={{marginLeft: '2%'}}
        className="demo-loadmore-list items-list"
        itemLayout="horizontal"
        dataSource={doors}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Link style={{color: 'white'}} to={`/edites/${item.id}`}>edit</Link>,
              <a
                style={{color: 'white'}}
                key="list-loadmore-edit"
                onClick={() => deleteDoor(item.id)}
              >
                delete
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={
                <a style={{color: 'white'}}>
                  {item.door}
                </a>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default AdminDoorsList;
