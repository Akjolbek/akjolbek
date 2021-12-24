import React, { useReducer } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";
import { CASE_GET_LIKE } from "../helpers/cases";

export const likeContext = React.createContext();

const INIT_STATE = {
  like: {},
  likeLength: 0
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_LIKE:
      return {
        ...state,
        like: action.payload,
        likeLength: action.payload.products.length, };
    default:
      return state;
  }
};

const LikeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function addProductToLike(product) {
    let like = JSON.parse(localStorage.getItem("like"));
    if (!like) {
      like = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let filteredLike = like.products.filter(
      (item) => item.item.id === product.id
    );
    if (filteredLike.length > 0) {
      like.products = like.products.filter(
        (item) => item.item.id !== product.id
      );
    } else {
      like.products.push(newProduct);
    }
    like.totalPrice = calcTotalPrice(like.products)
    localStorage.setItem("like", JSON.stringify(like));
    getLike()
  }
  function getLike() {
    let like = JSON.parse(localStorage.getItem("like"));
    if (!like) {
      like = {
        products: [],
        totalPrice: 0,
      };
    }
    like.totalPrice = calcTotalPrice(like.products)
    dispatch({
      type: CASE_GET_LIKE,
      payload: like,
    });
  }
  function deleteFromLike(id) {
    let like = JSON.parse(localStorage.getItem("like"));
    if (!like) {
      like = {
        products: [],
        totalPrice: 0,
      };
    }
    like.products = like.products.filter((item) => item.item.id !== id);
    localStorage.setItem("like", JSON.stringify(like));
    getLike();
  }

  function checkItemInLike(id) {
    let like = JSON.parse(localStorage.getItem("like"));
    if (!like) {
      like = {
        products: [],
        totalPrice: 0,
      };
    }
    let filteredLike = like.products.filter((item) => item.item.id === id);
    return filteredLike.length > 0 ? true : false;
  }

  function changeProductCount (count, id){
    if(count < 0){
      count = 1
    }
    let like = JSON.parse(localStorage.getItem('cart'));
    like.products = like.products.map((item) => {
      if(item.item.id === id){
        item.count = count
        item.subPrice = calcSubPrice(item)
      }
      return item
    })
    like.totalPrice = calcTotalPrice(like.products)
    localStorage.setItem('like', JSON.stringify(like))
    getLike();
  }
  return (
    <likeContext.Provider
      value={{
        like: state.like,
        likeLength: state.likeLength,
        addProductToLike,
        getLike,
        deleteFromLike,
        checkItemInLike,
        changeProductCount
      }}
    >
      {children}
    </likeContext.Provider>
  );
};

export default LikeContextProvider