import React, { useReducer } from "react";
import axios from "axios";

import {  CASE_GET_NEWS, CASE_GET_ONE_NEWS } from "../helpers/cases";
import { NEWS_API } from "../helpers/consts";

export const newsContext = React.createContext();

const INIT_STATE = {
  news: [],
  oneNews: null,
  newsTotalCount: 0,
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_NEWS:
      return {
        ...state,
        news: action.payload.data,
      }
    case CASE_GET_ONE_NEWS:
      return { ...state, oneProduct: action.payload.data };
    default:
      return state;
  }
};

const NewsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createNews(newNews) {
    await axios.post(NEWS_API, newNews);
    getNews();
  }
  async function getNews() {
    let result = await axios.get(`${NEWS_API}${window.location.search}`);
    console.log(result)
    
    dispatch({
      type: CASE_GET_NEWS,
      payload: result,
    });
  }

  async function getOneNews(id) {
    let result = await axios.get(`${NEWS_API}/${id}`);
    dispatch({
      type: CASE_GET_ONE_NEWS,
      payload: result,
    });
  }

  async function deleteNews(id) {
    await axios.delete(`${NEWS_API}/${id}`);
    getNews();
  }

  async function updateNews(id, editedNews) {
    await axios.patch(`${NEWS_API}/${id}`, editedNews);
    getNews();
  }

  return (
    <newsContext.Provider
      value={{
        news: state.news,
        oneNews: state.oneNews,
        newsTotalCount: state.newsTotalCount,
        getNews,
        getOneNews,
        deleteNews,
        updateNews,
        createNews,
      }}
    >
      {children}
    </newsContext.Provider>
  );
};
export default NewsContextProvider;
