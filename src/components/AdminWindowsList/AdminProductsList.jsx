import React, { useContext, useEffect, useState } from "react";
import { List, Avatar } from "antd";
import { Link, useSearchParams } from "react-router-dom";

import { productsContext } from "../../contexts/productsContext";

const AdminProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, deleteProduct, products } =
    useContext(productsContext);

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
    getProducts();
  }, [searchParams]);
  return (
    <>
      <List
        style={{marginLeft: '2%'}}
        className="demo-loadmore-list items-list"
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Link style={{color: 'white'}} to={`/edit/${item.id}`}>edit</Link>,
              <a
                style={{color: 'white'}}
                key="list-loadmore-edit"
                onClick={() => deleteProduct(item.id)}
              >
                delete
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.image1} />}
              title={
                <a style={{color: 'white'}}>
                  {item.brand}
                </a>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default AdminProductsList;
