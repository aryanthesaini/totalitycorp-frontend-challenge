'use client';

import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //add our state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tags, setTags] = useState('All');
  const [name, setName] = useState('');
  const [showItems, setShowItems] = useState(true);
  //increase the number of products

  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //decrease the numnber of products
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) {
        return 1;
      } else {
        return prevQty - 1;
      }
    });
  };

  //add product to cart
  const onAdd = (product, quantity, name) => {
    //increase total price

    setTotalPrice((prev) => prev + product.price * quantity);

    //increase total quantity
    setTotalQuantities((prev) => prev + quantity);

    //check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity, name: name }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: quantity, name: name },
      ]);
    }
  };

  //remove product from the cart

  const onRemove = (product) => {
    //decrease total price

    setTotalPrice((prev) => prev - product.price);

    //decrease total quantity
    setTotalQuantities((prev) => prev - 1);
    //check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        cartItems,
        onAdd,
        onRemove,
        totalQuantities,
        totalPrice,
        setQty,
        tags,
        setTags,
        name,
        setName,
        showItems,
        setShowItems,
      }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
