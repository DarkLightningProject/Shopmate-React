import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartItems);
  const [isInCart, setIsInCart] = useState(false);

  const { id, name, price, image } = product;
  useEffect(() => {
    const productInCart = cartList.some((item) => item.id === id);
    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>

        <button
          className={isInCart ? "removeButton" : ""}
          onClick={() => dispatch(isInCart ? remove(product) : add(product))}
        >
          {isInCart ? "Remove From Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};
