import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "antd";
import { ShoppingCartOutlined, StarOutlined, WindowsOutlined, BuildOutlined, UserOutlined } from "@ant-design/icons";

import { cartContext } from "../../contexts/cartContext";

import "./Header.css";
import { favContext } from "../../contexts/favContext";
import { useAuth } from "../../contexts/authContext";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  // корзина
  const { getCart, cartLength } = useContext(cartContext)
  useEffect(() => {
    getCart()
  }, [])
  
  //избранное
  const { getFav, favLength } = useContext(favContext)
  useEffect(() => {
    getFav()
  }, [])

  return (
    <div>
      <div className='head' style={{display: 'flex', justifyContent: 'space-around', marginTop: '3%', fontSize: '20px' }}>
      <div style={{marginLeft: '-4%', marginTop: '-2%'}}>
      <Link to="/"><img style={{width: "150px"}} className="img" src="https://freesvg.org/img/1574240875window-silhouette-freesvg.org.png" alt=""/></Link>
      </div>
      <Link to='/window_shop'><a><img className='text' style={{width: '50px', height: '50px', marginTop: '-5%'}} src="https://cdn-icons.flaticon.com/png/512/698/premium/698631.png?token=exp=1640422635~hmac=3d434373b964859997d990a34d31722f" alt="" /><h4 className='text'>ОКНА</h4></a></Link>
      <Link to='/doors'><a><img className='text' style={{width: '50px', height: '50px', marginTop: '-5%'}} src="https://cdn-icons-png.flaticon.com/512/1864/1864744.png" alt="" /><h4 className='text'>ДВЕРИ</h4></a></Link>
      <Link to='/news'><a><img className='text' style={{width: '50px', height: '50px', marginTop: '-5%'}} src="https://cdn-icons-png.flaticon.com/512/1670/1670440.png" alt="" /><br/><h4 className='text'>НАШИ РАБОТЫ</h4></a></Link>
      {email === "akjol2001@gmail.com" ? (<Link className={location.pathname === "/admin" ? "navbar__item-active" : "navbar__item"} to="/admin"><a><img className='text' style={{width: '50px', height: '50px', marginTop: '-5%'}} src="https://cdn-icons-png.flaticon.com/512/2206/2206368.png" alt="" /><h4 className='text' style={{marginTop: '-4px'}}>ADMIN</h4></a></Link>) : null}
      {email ? (<Link to="/auth"><img className='text' style={{width: '50px', height: '50px', marginTop: '-5%'}} src="https://cdn-icons-png.flaticon.com/512/1574/1574351.png" alt="" /><a className="sign-btn" onClick={handleLogout} style={{marginTop: '-1px'}}><h3 className='text'>ВЫЙТИ</h3></a></Link>) : null}
      {email ? null : (<Link to="/auth"><img className='text' style={{width: '50px', height: '50px', marginTop: '-5%'}} src="https://cdn-icons-png.flaticon.com/512/1828/1828381.png" alt="" /><a className="sign-btn" style={{marginTop: '-1px'}}><h3 className='text'>ВОЙТИ</h3></a></Link>)}
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginTop: '-2%'}}>
      <Link to="/cart"><Badge count={+cartLength}><img style={{width: '50px', height: '50px', marginTop: '-5%'}} src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="" /></Badge></Link>
      <Link to="/fav"><Badge count={+favLength}><img style={{width: '50px', height: '50px', marginTop: '-5%'}} src="https://cdn-icons.flaticon.com/png/512/4208/premium/4208408.png?token=exp=1640423176~hmac=2ed2061d7f174dedf82e5df7325648d6" alt="" /></Badge></Link>
      </div>
      </div>
    </div>
  );
};
export default Header;