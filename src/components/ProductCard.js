import "./ProductCard.css";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { addToCart, cartList, removeFromCart } = useCart();
  const { name, price, image } = product;
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productsInCart = cartList.find(
      (cartItem) => cartItem.id === product.id,
    );
    if (productsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};
