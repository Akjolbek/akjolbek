import React, { useReducer } from "react";
import axios from "axios";

import { CASE_GET_COMMENTS } from "../helpers/cases";
import { COMMENTS_API } from "../helpers/consts";

export const detailsContext = React.createContext();

const INIT_STATE = {
comment: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_COMMENTS:
      return { ...state, comment: action.payload.data };
    default:
      return state;
  }
};

const DetailsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createComment(newComment) {
    await axios.post(COMMENTS_API, newComment);
    getComment();
  }
  async function getComment() {
    let result = await axios.get(COMMENTS_API);
    dispatch({
      type: CASE_GET_COMMENTS,
      payload: result,
    });
  }

  async function deleteComment(id) {
    await axios.delete(`${COMMENTS_API}/${id}`);
    getComment();
  }

  return (
    <detailsContext.Provider
      value={{
        comment: state.comment,
        getComment,
        deleteComment,
        createComment,
      }}
    >
      {children}
    </detailsContext.Provider>
  );
};
export default DetailsContextProvider;