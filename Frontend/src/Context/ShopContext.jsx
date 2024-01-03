import React, { createContext, useState } from "react";
import all_product from "../Components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log(updatedCart); // Log the updated cart
      return updatedCart;
    });
  };

  const removeCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      console.log(updatedCart); // Log the updated cart
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
  
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        // Use find to get the item with the specified id
        let itemInfo = all_product.find((product) => product.id === Number(items));
  
        // Check if itemInfo is not null before accessing properties
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[items];
        }
      }
    }
  
    return totalAmount;
  };

  const getTotalCartItem = ()=>{
    let totalitem = 0 ;
    for(const item in cartItems){
        if (cartItems[item]>0){
            totalitem += cartItems[item]
        }
    }
    return totalitem
  }
  const contextValue = { all_product, cartItems, addToCart, removeCart , getTotalCartAmount , getTotalCartItem};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
