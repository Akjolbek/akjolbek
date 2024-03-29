import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useSearchParams } from "react-router-dom";
import { Button, Empty } from "antd";
import { productsContext } from "../../contexts/productsContext";
import CommentList from "../Comments/CommentList";
import ProductCard from "../WindowsList/ProductCard";

const DetailsProduct = () => {
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
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct])
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      {product ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "370px", height: '450px' }}>
                <div>
                  <img style={{width: "100%", height: '400px', borderRadius: '5%'}} src={product.image1} alt="" />
                </div>
            </div>
            <div style={{ width: "40vw" }}>
              <h2 style={{color: 'white', marginLeft: '-25%'}}>{product.brand}</h2>
              <h2 style={{color: 'white', marginLeft: '-25%'}}>{`$ ${product.price}`}</h2>
              <Link to="/creditForm">
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "200px", background:"#001489", color:"white", marginLeft: '-25%', borderRadius: '5px' }}
              >
                КУПИТЬ
              </Button>
              </Link>
            </div>
          </div>
          <CommentList id={product.id}/>
          <div style={{marginTop: '3%'}}>
          <h1 style={{display: 'flex', justifyContent: 'center', color: 'white'}}>Вам также может понравиться</h1>
        </div>
       <div className="products-list" style={{width: "100%"}}>
        {products.length > 0 ? (
          products.map((item) => <ProductCard item={item} />)
        ) : (
          <Empty style={{ marginBottom: "20px", marginLeft: '-25%' }} />
        )}
       </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;