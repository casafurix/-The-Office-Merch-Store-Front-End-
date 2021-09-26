import React from "react";
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../../icons";

const CartItem = (props) => {
  const {
    title,
    imageURL,
    price,
    quantity,
    id,
    description,
    increase,
    decrease,
    removeProduct,
  } = props;
  const product = {
    title,
    imageURL,
    price,
    quantity,
    id,
    description,
    removeProduct,
  };

  return (
    <div className='cart-item'>
      <div className='item-image'>
        <img src={imageURL} alt='product' />
      </div>
      <div className='name-price'>
        <h4>{title}</h4>
        <p>₹{price}</p>
      </div>
      <div className='quantity'>
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className='btns-container'>
        <button className='btn-increase' onClick={() => increase(product)}>
          <PlusCircleIcon width='20px' />
        </button>
        {quantity === 1 && (
          <button className='btn-trash' onClick={() => removeProduct(product)}>
            <TrashIcon width='20px' />
          </button>
        )}
        {quantity > 1 && (
          <button className='btn-decrease' onClick={() => decrease(product)}>
            <MinusCircleIcon width='20px' />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
