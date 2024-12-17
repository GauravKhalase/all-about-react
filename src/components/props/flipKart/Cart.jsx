import React from "react";
import ProductCard, { cartItems } from "./ProductCard"; 

const Cart = () => {
  let items = cartItems
  console.log(cartItems);
  return <div className="grid grid-cols-4 p-10 gap-10">
  {items.map((card, index) => (
    <ProductCard data={card} key={index}></ProductCard>
  ))}
</div>;
};

export default Cart;
