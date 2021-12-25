import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Rate } from "antd";
import {
  ShoppingCartOutlined,
  SendOutlined,
  StarOutlined,
  HeartOutlined
} from "@ant-design/icons";

import { cartContext } from "../../contexts/cartContext";
import { useState } from "react";
import { favContext } from "../../contexts/favContext";

import './ProductCard.css'

function getInitialState(){
  return new Date().getDate()
}

const ProductCard = ({ item }) => {
  const [counter, setCounter] = useState (() => getInitialState())
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id))
  })

  const {addProductToFav, checkItemInFav } = useContext(favContext);
  const [checkInFav, setCheckInFav] = useState(checkItemInFav(item.id));
  useEffect(() => {
    setCheckInFav(checkItemInFav(item.id))
  })

  function increment(){
    setCounter((prevState) => prevState + 1)
}
  return (
    <Card className="ant-card-body_shop "
      hoverable
      key={item.id}
      style={{ width: "280px", margin: "10px", background: 'transparent' }}
      cover={<img alt="example" src={item.image1} style={{width: '250px', marginLeft: '5.5%'}} />}
      actions={[
        <div>
        <HeartOutlined
        style={{fontSize: "25px", color: 'red'}}
        onClick={increment}
        />
        <h5>{counter}</h5>
        </div>,
        <div>
        <StarOutlined style={{ color: checkInFav ? "orange" : "black", fontSize: "25px" }}
        onClick={() => {
          addProductToFav(item);
          setCheckInFav(checkItemInFav(item.id));
        }} />
        <h5>Избранное</h5>
        </div>,
        <div>
        <ShoppingCartOutlined
          style={{ color: checkInCart ? "red" : "black", fontSize: "25px" }}
          onClick={() => {
            addProductToCart(item);
            setCheckInCart(checkItemInCart(item.id));
          }}
        />
        <h5>Корзина</h5>
        </div>,
        <Link to={`/window_shop/${item.id}`}>
          <SendOutlined
            style={{ color: "black", fontSize: "25px" }}
            key="ellipsis"
          />
          <h5>Подробнее</h5>
        </Link>,
      ]}
    >
      <Card.Meta
        title={<h3 style={{color: 'white'}}>{item.brand}</h3>}
        description={
          <>
            <h3 style={{color: 'white'}}>{item.model}</h3>
            <h2 style={{color: 'white'}}>{"$" + item.price}</h2>
            <Rate />
          </>
        }
      />
    </Card>
    
  );
};

export default ProductCard;
