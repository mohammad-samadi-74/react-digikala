import React from "react";
import CartItem from "./CartItem";

function CartItemsSection(props) {
  return (
    <div className="cartSection rtl px-4 py-3 w-100">
      {props.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartItemsSection;
