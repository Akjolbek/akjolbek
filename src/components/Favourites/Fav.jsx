import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { favContext } from "../../contexts/favContext";
import FavItem from "./FavItem";

const Fav = () => {
  const { getFav, fav } = useContext(favContext);
  useEffect(() => {
    getFav();
  }, []);
  return (
    <div className="container">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={fav?.products}
        renderItem={(item) => <FavItem item={item}/>}
      />
    </div>
  );
};

export default Fav;