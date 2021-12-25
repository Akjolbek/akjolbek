import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { List, Empty } from "antd";
import { cartContext } from "../../contexts/cartContext";
import CartItem from "./CartItem";
import { productsContext } from "../../contexts/productsContext";
import ProductCard from "../WindowsList/ProductCard";

const Cart = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 8
  );
  const [brand] = useState([]);
  const [price] = useState([1, 100000]);
  const { getProducts, products } = useContext(productsContext);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      brand: brand,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, []);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      brand: brand,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, []);
  console.log(products);
  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return (
    <div className="container">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        footer={<h2 style={{color: "white"}}>Total: {cart?.totalPrice}$</h2>}
        renderItem={(item) => <CartItem item={item}/>}      />
        <div>
          <h1 style={{display: 'flex', justifyContent: 'center', color: 'white'}}>Вам также может понравиться</h1>
        </div>
       <div className="products-list" style={{width: "100%"}}>
        {products.length > 0 ? (
          products.map((item) => <ProductCard item={item} />)
        ) : (
          <Empty style={{ marginBottom: "20px", marginLeft: '-25%' }} />
        )}
       </div> 
    </div>
  );
};

export default Cart;