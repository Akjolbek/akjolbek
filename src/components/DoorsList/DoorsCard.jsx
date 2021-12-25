import React from "react";
import { Link } from "react-router-dom";
import { Card, Rate } from "antd";
import {
  SendOutlined,
  HeartOutlined
} from "@ant-design/icons";

import { useState } from "react";

function getInitialState(){
  return new Date().getDate()
}
const DoorsCard = ({ item }) => {
  const [counter, setCounter] = useState (() => getInitialState())
  function increment(){
    setCounter((prevState) => prevState + 1)
}
  return (
    <Card className="ant-card-body_shop "
      hoverable
      key={item.id}
      style={{ width: "280px", margin: "10px", background: 'transparent' }}
      cover={<img alt="example" src={item.image} style={{width: '250px', marginLeft: '5.5%'}} />}
      actions={[
        <div>
        <HeartOutlined
        style={{fontSize: "25px", color: 'red'}}
        onClick={increment}
        />
        <h5>{counter}</h5>
        </div>,
        <Link to={`/door_shop/${item.id}`}>
          <SendOutlined
            style={{ color: "black", fontSize: "25px" }}
            key="ellipsis"
          />
          <h5>Подробнее</h5>
        </Link>,
      ]}
    >
      <Card.Meta
        title={<h3 style={{color: 'white'}}>{item.door}</h3>}
        description={
          <>
            <h2 style={{color: 'white'}}>{item.price + " сом"}</h2>
            <Rate />
          </>
        }
      />
    </Card>
    
  );
};

export default DoorsCard;
