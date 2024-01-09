import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  product: {},
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload }
    case ActionTypes.SELECTED_PRODUCT: 
      return { ...state, product: action.payload }
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, product: {} }
    default:
      return state
  }
}