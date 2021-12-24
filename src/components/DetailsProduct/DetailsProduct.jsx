import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { productsContext } from "../../contexts/productsContext";
import CommentList from "../Comments/CommentList";

const DetailsProduct = () => {
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
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;



