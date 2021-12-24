import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { likeContext } from "../../contexts/likeContext";
import LikeItem from "./LikeItem";

const Like = () => {
  const { getLike, like } = useContext(likeContext);
  useEffect(() => {
    getLike();
  }, []);
  return (
    <div className="container">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={like?.products}
        renderItem={(item) => <LikeItem item={item}/>}
      />
    </div>
  );
};

export default Like;