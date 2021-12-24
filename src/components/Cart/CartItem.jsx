import React, { useContext } from "react";
import { List, InputNumber, Button } from "antd";
import { DeleteOutlined, CreditCardOutlined } from "@ant-design/icons";
import { cartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { deleteFromCart, changeProductCount } = useContext(cartContext);
  return (
    <List.Item
      key={item.id}
      extra={<img width={272} alt="img" src={item.item.image1} />}
    >
      <List.Item.Meta style={{color: "white"}}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{color: "white"}}>{item.item.brand}</h3>
              <h4 style={{color: "white"}}>{item.item.model}</h4>
            </div>
            <h3 style={{color: "white"}}>{"$" + item.item.price}</h3>
          </div>
        }
        description={
          <>
            <div style={{color: "white"}}>{item.item.description}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: "20px",
              }}
            >
              <div>
                <h4 style={{color: "white"}}>Quantity</h4>
                <Button onClick={() => changeProductCount(item.count - 1, item.item.id)}>-</Button>
                <InputNumber value={item.count} disabled />
                <Button onClick={() => changeProductCount(item.count + 1, item.item.id)}>+</Button>
              </div>
              <div>
                <h4 style={{color: "white"}}>SubPrice</h4>
                <h3 style={{color: "white"}}>{"$" + item.subPrice}</h3>
              </div>
            </div>
            <Button
            style={{backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '7px', height: '40px', marginTop: '2%'}} 
            onClick={() => deleteFromCart(item.item.id)}>
              <DeleteOutlined style={{fontSize: '30px'}}/>
            </Button>
            <div style={{marginTop:"30px"}}>
                <h4 style={{color: "white"}}>Buy</h4>
               <Link to="/creditForm"><Button style={{background:"#001489", color:"white", width: '70px', height: '45px'}}><CreditCardOutlined style={{fontSize: '30px'}}/><h4 style={{marginLeft: '120%'}}>Оплатить картой</h4></Button></Link> 
              </div> 
          </>
        }
      />
    </List.Item>
  );
};

export default CartItem;