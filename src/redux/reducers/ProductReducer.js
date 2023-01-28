import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialstate = {
  cart: [],
};

const ProductReducer = (state = initialstate, action) => {
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );

  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        selectedProduct.quantity += 1; //it line mean selectedProduct.quantity = selectedProduct.quantity + 1
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload),
      };
    default:
      return state;
  }
};

export default ProductReducer;
