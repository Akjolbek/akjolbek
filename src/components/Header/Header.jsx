import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "antd";
import { ShoppingCartOutlined, StarOutlined, HeartFilled } from "@ant-design/icons";

import { cartContext } from "../../contexts/cartContext";

import "./Header.css";
import { favContext } from "../../contexts/favContext";
import { likeContext } from "../../contexts/likeContext";
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

  //лайки
  const { getLike, likeLength } = useContext(likeContext)
  useEffect(() => {
    getLike()
  }, [])

  return (
    <div>
      <div className='head' style={{display: 'flex', justifyContent: 'space-around', marginTop: '3%', fontSize: '20px' }}>
      <div style={{marginLeft: '-4%', marginTop: '-2%'}}>
      <Link to="/"><img style={{width: "150px"}} className="img" src="https://freesvg.org/img/1574240875window-silhouette-freesvg.org.png" alt=""/></Link>
      </div>
      <Link to='/window_shop'><a><h4 className='text'>ОКНА</h4></a></Link>
      <Link to='/news'><a><h4 className='text'>НАШИ РАБОТЫ</h4></a></Link>
      {email === "akjol2001@gmail.com" ? (<Link className={location.pathname === "/admin" ? "navbar__item-active" : "navbar__item"} to="/admin"><a><h4 className='text' style={{marginTop: '-4px'}}>ADMIN</h4></a></Link>) : null}
      {email ? (<Link to="/auth"><a className="sign-btn" onClick={handleLogout} style={{marginTop: '-1px'}}><h3 className='text'>ВЫЙТИ</h3></a></Link>) : null}
      {email ? null : (<Link to="/auth"><a className="sign-btn" style={{marginTop: '-1px'}}><h3 className='text'>ВОЙТИ</h3></a></Link>)}
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginTop: '-2%'}}>
      <Link to="/cart"><Badge count={+cartLength}><ShoppingCartOutlined style={{ fontSize: "40px", cursor: "pointer" ,color: "red" }}/></Badge></Link>
      <Link to="/fav"><Badge count={+favLength}><StarOutlined style={{ fontSize: "40px", cursor: "pointer", color: "yellow" }}/></Badge></Link>
      <Link to="/like"><Badge count={+likeLength}><HeartFilled style={{ fontSize: "40px", cursor: "pointer" ,color: "red" }}/></Badge></Link>
      </div>
      </div>
    </div>
  );
};
export default Header;