import React, { useReducer } from "react";
import axios from "axios";

import { CASE_GET_ONE_DOOR, CASE_GET_DOORS } from "../helpers/cases";
import { DOORS_API } from "../helpers/consts";

export const doorsContext = React.createContext();

const INIT_STATE = {
  doors: [],
  oneDoor: null,
  doorsTotalCount: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_DOORS:
      return {
        ...state,
        doors: action.payload.data,
        doorsTotalCount: action.payload.headers["x-total-count"],
      };
    case CASE_GET_ONE_DOOR:
      return { ...state, oneDoor: action.payload.data };
    default:
      return state;
  }
};

const DoorsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createDoor(newDoor) {
    await axios.post(DOORS_API, newDoor);
    getDoors();
  }
  async function getDoors() {
    let result = await axios.get(`${DOORS_API}${window.location.search}`);
    
    dispatch({
      type: CASE_GET_DOORS,
      payload: result,
    });
  }

  async function getOneDoor(id) {
    let result = await axios.get(`${DOORS_API}/${id}`);
    dispatch({
      type: CASE_GET_ONE_DOOR,
      payload: result,
    });
  }

  async function deleteDoor(id) {
    await axios.delete(`${DOORS_API}/${id}`);
    getDoors();
  }

  async function updateDoor(id, editedDoor) {
    await axios.patch(`${DOORS_API}/${id}`, editedDoor);
    getDoors();
  }

  return (
    <doorsContext.Provider
      value={{
        doors: state.doors,
        oneDoor: state.oneDoor,
        doorsTotalCount: state.doorsTotalCount,
        getDoors,
        getOneDoor,
        deleteDoor,
        updateDoor,
        createDoor,
      }}
    >
      {children}
    </doorsContext.Provider>
  );
};
export default DoorsContextProvider;